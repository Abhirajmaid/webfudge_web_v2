import { Resend } from "resend";

/**
 * @param {{ name: string, email: string, company: string, mobile: string, message: string }} payload
 */
export async function sendContactEmail({ name, email, company, mobile, message }) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_EMAIL || "contact@webfudge.in";

  if (!key || !from) {
    throw new Error("RESEND_API_KEY and RESEND_FROM_EMAIL must be set to send email");
  }

  const resend = new Resend(key);
  const subject = `New contact inquiry from ${name}`;

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company || "—")}</p>
    <p><strong>Phone:</strong> ${escapeHtml(mobile || "—")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject,
    html,
  });

  if (error) {
    throw new Error(error.message || "Resend send failed");
  }

  return data;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
