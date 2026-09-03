import type { Metadata } from "next";
import { PageShell } from "@/components/site-shell";

export const metadata: Metadata = { title: "Terms and Conditions", description: "NuHome Living Ltd website terms and conditions." };

export default function TermsPage() {
  return <PageShell><section className="page-intro"><div className="eyebrow">Legal</div><h1>Terms and Conditions</h1><p>The terms that apply when you use the NuHome Living website.</p></section><section className="legal-copy"><h2>Using this website</h2><p>The content on this website is provided for general information. We aim to keep it accurate and current, but do not guarantee that every detail is complete or error-free.</p><h2>External websites</h2><p>Links to third-party websites, including Nustone, are provided for convenience. Those websites have their own terms, policies and responsibilities.</p><h2>Contact</h2><p>For questions about these terms, email <a href="mailto:support@nuhome.co.uk">support@nuhome.co.uk</a>.</p></section></PageShell>;
}