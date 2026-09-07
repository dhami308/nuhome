"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError("Could not reach the server. Please check your connection and try again.");
    }
  }

  if (status === "sent") {
    return (
      <div className="enquiry-form enquiry-form-success" role="status">
        <h3>Thank you — your enquiry is on its way.</h3>
        <p>We usually reply within two working days.</p>
        <button
          type="button"
          className="button button-outline"
          onClick={() => setStatus("idle")}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label>Name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
        <label>Company<input name="company" type="text" autoComplete="organization" placeholder="Company name" /></label>
      </div>
      <div className="form-row">
        <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
        <label>Telephone number<input name="telephone" type="tel" autoComplete="tel" placeholder="Optional" /></label>
      </div>
      <div className="form-row">
        <label>Enquiry type<select name="enquiry-type" defaultValue="General Enquiry"><option>General Enquiry</option><option>Trade Account</option><option>Wholesale Supply</option><option>Brand Partnership</option><option>Product Enquiry</option></select></label>
        <label>Project postcode<input name="postcode" type="text" autoComplete="postal-code" placeholder="For delivery guidance" /></label>
      </div>
      <label>When are you looking to start?<select name="timeframe" defaultValue="Just exploring"><option>Just exploring</option><option>Within the next month</option><option>Within the next three months</option><option>Further ahead</option></select></label>
      <label>Message<textarea name="message" rows={5} placeholder="Tell us about your project or question" required /></label>
      <div className="form-honeypot" aria-hidden="true">
        <label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className="form-submit">
        {status === "error" ? (
          <p role="alert" className="form-error">{error}</p>
        ) : (
          <p>We usually reply within two working days.</p>
        )}
        <button className="button button-solid" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : <>Send enquiry <span aria-hidden="true">→</span></>}
        </button>
      </div>
    </form>
  );
}
