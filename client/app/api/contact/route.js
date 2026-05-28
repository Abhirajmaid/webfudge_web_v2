import { NextResponse } from "next/server";
import { validateContactForm } from "@/lib/helpers";
import { sendContactEmail } from "@/lib/contact/sendContactEmail";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
      return NextResponse.json(
        {
          success: false,
          error: "Contact form is not configured. Please try again later or email us directly.",
        },
        { status: 503 }
      );
    }

    const body = await request.json();
    const fields = {
      name: body.name ?? "",
      company_name: body.company_name ?? body.company ?? "",
      user_email: body.user_email ?? body.email ?? "",
      mobile_number: body.mobile_number ?? body.phone ?? "",
      message: body.message ?? "",
    };

    const { valid, errors } = validateContactForm(fields);

    if (!valid) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const payload = {
      name: String(fields.name).trim(),
      email: String(fields.user_email).trim(),
      company: String(fields.company_name).trim(),
      mobile: String(fields.mobile_number).trim(),
      message: String(fields.message).trim() || "(No message provided)",
    };

    await sendContactEmail(payload);

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("[Contact API error]", e);
    const message = e?.message || "";
    const isResendDomain =
      /domain is not verified|verify your domain|invalid from/i.test(message);
    return NextResponse.json(
      {
        success: false,
        error: isResendDomain
          ? message
          : "Something went wrong. Please try again.",
      },
      { status: isResendDomain ? 503 : 500 }
    );
  }
}
