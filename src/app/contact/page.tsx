import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with NuHome Living Ltd about our brands, partnerships and opportunities.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="page-intro">
        <div className="eyebrow">Get in touch</div>
        <h1>Let&apos;s make space for a good conversation.</h1>
        <p>Whether you are looking to work with one of our brands, share an idea or find out more about NuHome, we would like to hear from you.</p>
      </section>
      <section className="section">
        <div className="contact-grid">
          <div className="contact-details"><div className="eyebrow">Send an enquiry</div><h2>Start here.</h2><p>Tell us a little about what you are working on and the right person will get back to you.</p><form className="enquiry-form" action="mailto:support@nuhome.co.uk" method="post" encType="text/plain"><div className="form-row"><label>Name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label><label>Company<input name="company" type="text" autoComplete="organization" placeholder="Company name" /></label></div><div className="form-row"><label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label><label>Telephone number<input name="telephone" type="tel" autoComplete="tel" placeholder="Optional" /></label></div><div className="form-row"><label>Enquiry type<select name="enquiry-type" defaultValue="General Enquiry"><option>General Enquiry</option><option>Trade Account</option><option>Wholesale Supply</option><option>Brand Partnership</option><option>Product Enquiry</option></select></label><label>Project postcode<input name="postcode" type="text" autoComplete="postal-code" placeholder="For delivery guidance" /></label></div><label>When are you looking to start?<select name="timeframe" defaultValue="Just exploring"><option>Just exploring</option><option>Within the next month</option><option>Within the next three months</option><option>Further ahead</option></select></label><label>Message<textarea name="message" rows={5} placeholder="Tell us about your project or question" required /></label><div className="form-submit"><p>We usually reply within two working days.</p><button className="button button-solid" type="submit">Send enquiry <span aria-hidden="true">→</span></button></div></form></div>
          <div className="contact-details contact-support"><div className="contact-support-image"><Image src="https://old.nustone.co.uk/wp-content/uploads/2017/03/10-Grass-free-Gardens-and-Patios-We-Love-6.jpg" alt="Nustone paving and planting in a finished garden" fill sizes="(max-width: 700px) 100vw, 50vw" /></div><div className="eyebrow">The Nustone team</div><h2>Need a little help outside?</h2><p>For product advice, samples, delivery questions or project inspiration, the Nustone team can help.</p><a className="contact-link" href="https://nustone.co.uk/pages/contact" target="_blank" rel="noreferrer">Visit Nustone contact ↗</a><p className="contact-note">Prefer email? Reach NuHome at <a href="mailto:support@nuhome.co.uk">support@nuhome.co.uk</a>.</p><div className="contact-support-note"><strong>Useful to have ready</strong><span>Project location, approximate area and the kind of finish you are considering.</span></div></div>
        </div>
      </section>
    </PageShell>
  );
}