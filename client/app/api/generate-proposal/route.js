import { NextResponse } from "next/server";
import { buildHTML } from "@/lib/proposal/buildHTML";
import { generateProposalText } from "@/lib/proposal/generateProposalText";
import { htmlToPdfBuffer } from "@/lib/proposal/htmlToPdf";
import { sendProposalEmail } from "@/lib/proposal/sendProposalEmail";

export const runtime = "nodejs";
export const maxDuration = 120;

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const proposalType = body.proposalType === "branding" ? "branding" : "website";
    const data = body.data;

    if (!data || typeof data !== "object") {
      return NextResponse.json({ error: "Missing or invalid data" }, { status: 400 });
    }

    const email = String(data.contactEmail ?? "").trim();
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "A valid contact email is required in the questionnaire." },
        { status: 400 }
      );
    }

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: "Proposal generation is not configured (GROQ_API_KEY)." },
        { status: 503 }
      );
    }

    const proposalText = await generateProposalText(data, proposalType);
    console.log("[generate-proposal] AI output (first 800 chars):\n", proposalText.slice(0, 800));

    const html = await buildHTML(proposalText, proposalType);
    const pdfBuffer = await htmlToPdfBuffer(html);

    let emailed = false;
    if (process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL) {
      try {
        await sendProposalEmail({ to: email, pdfBuffer, proposalType });
        emailed = true;
      } catch (err) {
        console.error("[generate-proposal] Email failed:", err);
      }
    } else {
      console.warn("[generate-proposal] Skipping email: set RESEND_API_KEY and RESEND_FROM_EMAIL");
    }

    const headers = new Headers();
    headers.set("Content-Type", "application/pdf");
    headers.set("Content-Disposition", 'attachment; filename="proposal.pdf"');
    headers.set("X-Proposal-Email-Sent", emailed ? "true" : "false");

    return new NextResponse(pdfBuffer, { status: 200, headers });
  } catch (err) {
    console.error("[generate-proposal]", err);
    return NextResponse.json(
      { error: err?.message || "Failed to generate proposal" },
      { status: 500 }
    );
  }
}
