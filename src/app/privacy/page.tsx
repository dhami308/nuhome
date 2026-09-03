import type { Metadata } from "next";
import { PageShell } from "@/components/site-shell";

export const metadata: Metadata = { title: "Privacy Policy", description: "NuHome Living Ltd privacy policy." };

export default function PrivacyPage() {
  return <PageShell><section className="page-intro"><div className="eyebrow">Legal</div><h1>Privacy Policy</h1><p>How NuHome Living Ltd handles information shared through this website.</p></section><section className="legal-copy"><h2>Information we collect</h2><p>When you contact us, we may collect the information you provide, such as your name, company, email address, telephone number and message. We use it to respond to your enquiry and manage our relationship with you.</p><h2>How we use information</h2><p>We use personal information only where we have a lawful basis to do so, including responding to enquiries, providing requested services and meeting our legal obligations. We do not sell personal information.</p><h2>Contact</h2><p>For questions about this policy, email <a href="mailto:support@nuhome.co.uk">support@nuhome.co.uk</a>.</p></section></PageShell>;
}