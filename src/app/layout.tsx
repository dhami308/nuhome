import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nuhomeliving.co.uk"),
  title: {
    default: "NuHome Living | Better Living. Inside and Out.",
    template: "%s | NuHome Living",
  },
  description:
    "NuHome Living creates considered products and specialist brands for homes, gardens and outdoor spaces across the UK.",
  icons: {
    icon: "/nuhome-mark.svg",
  },
  keywords: ["NuHome Living Ltd", "UK home and outdoor living company", "home and garden products UK", "outdoor living brands", "natural stone and porcelain paving", "trade and wholesale home improvement products"],
  openGraph: {
    title: "NuHome Living | Better Living. Inside and Out.",
    description:
      "A UK home and outdoor living company building brands for the spaces people live in.",
    url: "https://nuhomeliving.co.uk",
    siteName: "NuHome Living",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NuHome Living",
    description: "Thoughtful products for life at home and outside it.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
