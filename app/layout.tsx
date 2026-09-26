import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GADIN UPVC - Premium Lead-Free uPVC, CPVC & Drainage Pipes",
  description: "GADIN UPVC is a leading manufacturer of high-quality uPVC, CPVC, and RPVC pipes and fittings for residential, commercial, and industrial applications. 100% lead-free manufacturing.",
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
      <body className="min-h-screen bg-white text-gray-900 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
