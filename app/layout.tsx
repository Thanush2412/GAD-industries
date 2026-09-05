import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GADIN INDUSTRIES TRADING FZCO | High-Performance uPVC Windows & Doors",
  description:
    "Official architectural portal of GADIN INDUSTRIES TRADING FZCO (Dubai Silicon Oasis, Lic. 72748). Manufacturer and international exporter of EN 12608 Class A tropicalized uPVC casement windows, multi-track sliding patio doors, tilt & turn systems, and acoustic architectural facades.",
  keywords: [
    "GADIN INDUSTRIES TRADING FZCO",
    "uPVC windows manufacturer Dubai",
    "uPVC casement windows",
    "uPVC sliding patio doors",
    "multi-chamber uPVC profiles",
    "acoustic soundproof windows 42 dB",
    "hurricane wind load windows 3000 Pa",
    "EN 12608 Class A uPVC",
    "Dubai Silicon Oasis building materials exporter",
    "galvanized steel core uPVC profiles"
  ],
  authors: [{ name: "GADIN Industries Architectural Fenestration Directorate" }],
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
      <body className="min-h-screen bg-[#FFFFFF] text-[#1E293B] selection:bg-[#DD612A] selection:text-white">
        {children}
      </body>
    </html>
  );
}
