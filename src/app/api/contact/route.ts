import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const TO_ADDRESS = process.env.CONTACT_TO ?? "support@nuhomeliving.co.uk";

type Payload = {
  name?: string;
  company?: string;
  email?: string;
  telephone?: string;
  "enquiry-type"?: string;
  postcode?: string;
  timeframe?: string;
  message?: string;
  // Honeypot — real users never fill this.
  website?: string;
};

function required(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (required(data.website)) {
    // Honeypot tripped — pretend it worked.
    return NextResponse.json({ ok: true });
  }

  if (!required(data.name) || !required(data.email) || !required(data.message)) {
    return NextResponse.json(
      { error: "Please provide your name, email and a message." },
      { status: 400 },
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP environment variables are not configured.");
    return NextResponse.json(
      { error: "The contact form is not available right now. Please email us directly." },
      { status: 500 },
    );
  }

  const port = Number(SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const lines = [
    `Name: ${data.name}`,
    `Company: ${data.company || "—"}`,
    `Email: ${data.email}`,
    `Telephone: ${data.telephone || "—"}`,
    `Enquiry type: ${data["enquiry-type"] || "—"}`,
    `Project postcode: ${data.postcode || "—"}`,
    `Timeframe: ${data.timeframe || "—"}`,
    "",
    "Message:",
    data.message,
  ];

  try {
    await transporter.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to: TO_ADDRESS,
      replyTo: `${data.name} <${data.email}>`,
      subject: `Website enquiry — ${data["enquiry-type"] || "General"} (${data.name})`,
      text: lines.join("\n"),
    });
  } catch (error) {
    console.error("Contact form: failed to send email.", error);
    return NextResponse.json(
      { error: "Something went wrong sending your enquiry. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
