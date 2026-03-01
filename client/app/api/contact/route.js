import { NextResponse } from "next/server";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validate(body) {
  const errors = {};
  if (!body.name || String(body.name).trim().length < 2) {
    errors.name = "Please enter your full name.";
  }
  if (!body.email || !isValidEmail(body.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!body.message || String(body.message).trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return { valid: Object.keys(errors).length === 0, errors };
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { valid, errors } = validate(body);

    if (!valid) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const payload = {
      name: String(body.name).trim(),
      email: String(body.email).trim(),
      company: body.company ? String(body.company).trim() : "",
      message: String(body.message).trim(),
    };

    // Optional: send email via Resend, SendGrid, etc. when env is set.
    // Example with Resend: await sendEmail({ to: process.env.CONTACT_EMAIL, ...payload });
    if (process.env.CONTACT_EMAIL) {
      // Placeholder: in production you would call your email API here.
      // e.g. await resend.emails.send({ from: '...', to: process.env.CONTACT_EMAIL, subject: `Contact from ${payload.name}`, html: `...` });
      console.log("[Contact form submission]", payload);
    } else {
      console.log("[Contact form submission]", payload);
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("[Contact API error]", e);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
