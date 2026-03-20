import { Resend } from "resend";

/**
 * @param {object} opts
 * @param {string} opts.to
 * @param {Buffer} opts.pdfBuffer
 * @param {"website" | "branding"} opts.proposalType
 */
export async function sendProposalEmail({ to, pdfBuffer, proposalType }) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!key || !from) {
    throw new Error("RESEND_API_KEY and RESEND_FROM_EMAIL must be set to send email");
  }

  const resend = new Resend(key);
  const subject =
    proposalType === "branding"
      ? "Your Brand Identity Proposal"
      : "Your Website Proposal";

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    subject,
    html: `<p>Hi,</p><p>Thank you for completing our questionnaire. Your proposal is attached as a PDF.</p><p>Best,<br/>Webfudge</p>`,
    attachments: [
      {
        filename: "proposal.pdf",
        content: pdfBuffer,
      },
    ],
  });

  if (error) {
    throw new Error(error.message || "Resend send failed");
  }

  return data;
}
