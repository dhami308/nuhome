import type { Metadata } from "next";
import { PageShell } from "@/components/site-shell";

export const metadata: Metadata = { title: "Cookie Policy", description: "NuHome Living Ltd cookie policy." };

export default function CookiesPage() {
  return <PageShell><section className="page-intro"><div className="eyebrow">Legal</div><h1>Cookie Policy</h1><p>A clear explanation of how cookies may be used on nuhome.co.uk.</p></section><section className="legal-copy"><h2>What are cookies?</h2><p>Cookies are small text files placed on your device by websites. They can help a website work properly and provide insight into how it is used.</p><h2>Our approach</h2><p>NuHome Living aims to use only the cookies needed to operate this website and understand its performance. Any optional cookies will be explained and requested with your consent where required.</p><h2>Questions</h2><p>For questions about cookies on this website, email <a href="mailto:support@nuhome.co.uk">support@nuhome.co.uk</a>.</p></section></PageShell>;
}