"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Gauge, Layers, ShieldCheck, Factory, Wind, VolumeX } from "lucide-react";

interface HeroProps {
  onOpenDealerModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDealerModal }) => {
  return (
    <section id="windows" className="relative pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[#E2E8F0] overflow-hidden bg-[#FFFFFF]">
      {/* Architectural Line Substrate */}
      <div className="absolute inset-0 paper-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Monospace System Header Identifier */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#EFF6FF] border border-[#BFDBFE] font-mono text-xs text-[#053C82] font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#DD612A]" />
            ARCHITECTURAL SPECIFICATION GRADE: EN 12608 CLASS A • IS 875 • BS 6375
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-[#64748B]">
            DUBAI FZCO LIC: 72748 • GADIN-IND-2026.REV5
          </span>
        </div>

        {/* Primary Monolithic Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 animate-fadeIn">
          <div className="lg:col-span-8">
            <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#053C82] leading-[1.08]">
              High-Performance uPVC Windows, Doors & Architectural Systems.
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pl-6 border-l-2 border-[#DD612A]">
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-6 font-medium">
              GADIN Industries Trading FZCO engineers premium multi-chamber uPVC window and door systems. Built with German extrusion technology, tropicalized UV stabilizers, and galvanized steel reinforcing cores for extreme wind loads up to 3,000 Pa.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#calculator"
                className="btn-interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#053C82] text-[#FFFFFF] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#073F86] shadow-md shadow-blue-900/10"
              >
                <span>Run Wind Load Tool</span>
                <Wind className="w-3.5 h-3.5 text-[#DD612A]" />
              </a>
              <button
                onClick={onOpenDealerModal}
                className="btn-interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFF7ED] border border-[#FFEDD5] text-[#DD612A] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#FFEDD5]"
              >
                <span>Project RFQ / Dealership</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#053C82]" />
              </button>
            </div>
          </div>
        </div>

        {/* Utilitarian Telemetry Strip in Gadin Colors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#CBD5E1] rounded-lg bg-[#FFFFFF] divide-x divide-y md:divide-y-0 divide-[#E2E8F0] shadow-sm">
          <div className="p-5 sm:p-6 bg-[#F8FAFC]">
            <div className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold">
              <Wind className="w-3.5 h-3.5 text-[#DD612A]" />
              Hurricane Wind Load
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-black text-[#053C82] table-num">
              3,000 <span className="text-sm font-sans font-bold text-[#64748B]">Pa (Class C5)</span>
            </div>
            <p className="text-xs text-[#64748B] mt-1 font-medium">Resists 240+ km/h gale gusts</p>
          </div>

          <div className="p-5 sm:p-6 bg-[#FFFFFF]">
            <div className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold">
              <VolumeX className="w-3.5 h-3.5 text-[#DD612A]" />
              Acoustic Reduction
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-black text-[#DD612A] table-num">
              42 <span className="text-sm font-sans font-bold text-[#64748B]">dB Rw</span>
            </div>
            <p className="text-xs text-[#64748B] mt-1 font-medium">Triple gasket sound dampening</p>
          </div>

          <div className="p-5 sm:p-6 bg-[#F8FAFC]">
            <div className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold">
              <Layers className="w-3.5 h-3.5 text-[#DD612A]" />
              Thermal U-Value
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-black text-[#053C82] table-num">
              1.3 <span className="text-sm font-sans font-bold text-[#64748B]">W/m²K</span>
            </div>
            <p className="text-xs text-[#64748B] mt-1 font-medium">Multi-chamber energy savings</p>
          </div>

          <div className="p-5 sm:p-6 bg-[#FFFFFF]">
            <div className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DD612A]" />
              Steel Reinforcement
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-black text-[#053C82] table-num">
              2.0 <span className="text-sm font-sans font-bold text-[#64748B]">mm Galvanized</span>
            </div>
            <p className="text-xs text-[#64748B] mt-1 font-medium">Zero sash sagging or warping</p>
          </div>
        </div>
      </div>
    </section>
  );
};
