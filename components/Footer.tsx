"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Shield, ArrowUp, ExternalLink } from "lucide-react";
import { GADIN_CORPORATE_DATA } from "@/data/gadSpecifications";

interface FooterProps {
  onOpenDealerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDealerModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#051E42] text-[#F8FAFC] pt-16 pb-12 border-t border-[#0B2D62]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Corporate Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-[#0B2D62]">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 bg-white rounded flex items-center justify-center p-1 border border-white/20 shadow-md">
              <Image
                src="/images/gi_icon.png"
                alt="GADIN Industries Logo"
                width={44}
                height={44}
                className="object-contain"
              />
            </div>
            <div>
              <span className="font-sans font-black text-xl tracking-tight text-[#FFFFFF] block">
                {GADIN_CORPORATE_DATA.companyName}
              </span>
              <span className="text-xs font-mono text-[#93C5FD]">
                {GADIN_CORPORATE_DATA.tagline}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDealerModal}
              className="px-5 py-2.5 rounded bg-[#DD612A] hover:bg-[#C24F1E] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              Request Commercial RFQ
            </button>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded bg-[#0A2652] text-[#93C5FD] hover:text-white border border-[#1E3A8A] transition-colors"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Multi-Column Dubai HQ & Corporate Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-[#0B2D62] text-xs">
          {/* Col 1: Dubai Registered Office */}
          <div className="space-y-3">
            <div className="font-mono text-[#DD612A] font-bold uppercase tracking-wider">
              DUBAI REGISTERED HQ
            </div>
            <p className="text-[#CBD5E1] leading-relaxed">
              <span className="text-white font-semibold block mb-1">
                FZCO Corporate Directorate:
              </span>
              {GADIN_CORPORATE_DATA.registeredAddress}
            </p>
            <div className="pt-2 text-[#93C5FD] font-mono">
              <div>Commercial License No: <span className="font-bold text-white">72748</span></div>
              <div>Entity: Free Zone Company (FZCO)</div>
            </div>
          </div>

          {/* Col 2: Architectural Lines */}
          <div className="space-y-3">
            <div className="font-mono text-[#DD612A] font-bold uppercase tracking-wider">
              ARCHITECTURAL & MEP LINES
            </div>
            <p className="text-[#CBD5E1] leading-relaxed">
              <span className="text-white font-semibold block mb-1">
                uPVC Windows & Building Profiles:
              </span>
              PrimaTherm Casement Systems, GlideMax Multi-Track Sliding Patio Doors, EuroVent Tilt & Turn Systems, and PanoramaFold Bi-Fold Doors.
            </p>
            <div className="pt-2 text-[#93C5FD] font-mono">
              <div className="text-[#DD612A] font-bold">Hurricane Wind: Up to 3,000 Pa</div>
              <div className="text-emerald-400 font-bold">Sound Insulation: 42 dB</div>
            </div>
          </div>

          {/* Col 3: Direct Desks */}
          <div className="space-y-3 font-mono">
            <div className="text-[#DD612A] font-bold uppercase tracking-wider">
              DIRECT EXECUTIVE DESKS
            </div>
            <div className="space-y-2 text-[#CBD5E1]">
              <div>
                <span className="text-[#93C5FD] text-[10px] block uppercase">Direct Commercial Phone:</span>
                <a href="tel:+971505969577" className="hover:text-white font-bold text-sm text-[#F8FAFC]">
                  {GADIN_CORPORATE_DATA.phone}
                </a>
              </div>

              <div>
                <span className="text-[#93C5FD] text-[10px] block uppercase">Direct Email:</span>
                <a href="mailto:adityavmgadin@gmail.com" className="block text-white hover:underline">
                  {GADIN_CORPORATE_DATA.email}
                </a>
                <a href="mailto:sales@gadinindustries.com" className="block text-[#93C5FD] hover:underline">
                  sales@gadinindustries.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Engineering Standards */}
          <div className="space-y-3">
            <div className="font-mono text-[#DD612A] font-bold uppercase tracking-wider">
              CERTIFIED COMPLIANCE
            </div>
            <p className="text-[#CBD5E1] leading-relaxed">
              Manufactured with tropicalized Class S ultraviolet stabilizers and calibrated steel reinforcements:
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-[#E2E8F0]">
              <span className="px-2 py-0.5 rounded bg-[#0A2652] border border-[#1E3A8A]">EN 12608 Class A</span>
              <span className="px-2 py-0.5 rounded bg-[#0A2652] border border-[#1E3A8A]">IS 875 Part 3</span>
              <span className="px-2 py-0.5 rounded bg-[#0A2652] border border-[#1E3A8A]">BS 6375</span>
              <span className="px-2 py-0.5 rounded bg-[#0A2652] border border-[#1E3A8A]">ASTM E330</span>
              <span className="px-2 py-0.5 rounded bg-[#0A2652] border border-[#1E3A8A]">DIN 18055</span>
              <span className="px-2 py-0.5 rounded bg-[#0A2652] border border-[#1E3A8A]">ISO 9001:2015</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#93C5FD]">
          <div>
            © {new Date().getFullYear()} {GADIN_CORPORATE_DATA.companyName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>IFZA DUBAI SILICON OASIS, UAE</span>
            <span>•</span>
            <Link href="/v2" className="text-[#DD612A] hover:underline">
              V2 Corporate Visual Mode
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
