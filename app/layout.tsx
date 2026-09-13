import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteLayoutClient } from "@/components/layout/SiteLayoutClient";

export const metadata: Metadata = {
  title: "IDOL PIPE & FITTINGS — High-Integrity Piping Systems & Precision Irrigation",
  description:
    "Official website of Idol Pipe Fittings & Irrigation (Idol Plasto & Idol Polytech Pvt. Ltd., Rajkot, Gujarat). 24,000 MT/year manufacturing capacity, ISO 9001:2015 certified manufacturer of cPVC, uPVC, SWR, Borewell Casing, Submersible Column, HDPE and Micro-Irrigation systems.",
  keywords: [
    "Idol Pipe",
    "cPVC pipes manufacturer India",
    "uPVC casing pipe IS 12818",
    "submersible column pipe",
    "drip irrigation system",
    "HDPE telecom duct",
    "SWR drainage system",
    "Rajkot Gujarat pipes exporter"
  ],
  authors: [{ name: "Idol Pipe Fittings & Irrigation Technical Directorate" }],
  icons: {
    icon: "/images/gi_icon.png",
    apple: "/images/gi_icon.png"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-[#1E293B] selection:bg-[#DD612A] selection:text-white antialiased">
        <SiteLayoutClient>{children}</SiteLayoutClient>
      </body>
    </html>
  );
}
