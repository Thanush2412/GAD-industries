"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Menu, X, ArrowUpRight, ChevronRight, ShieldCheck, Layers } from "lucide-react";
import { GADIN_CORPORATE_DATA } from "@/data/gadSpecifications";

interface NavbarProps {
  onOpenDealerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDealerModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm">
      {/* Top Corporate Telemetry Bar in Gadin Blue */}
      <div className="hidden lg:flex justify-between items-center px-8 py-1.5 text-xs text-[#E2E8F0] bg-[#053C82]">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#FFFFFF]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#DD612A] animate-pulse"></span>
            DUBAI FZCO REGISTERED (LIC. NO: 72748) • IFZA SILICON OASIS
          </span>
          <span className="text-[#3B82F6]">|</span>
          <span className="font-mono text-[11px] text-[#DBEAFE]">
            {GADIN_CORPORATE_DATA.tagline}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="tel:+971505969577"
            className="flex items-center gap-1 hover:text-[#FFFFFF] text-[#DBEAFE] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#DD612A]" />
            <span>Direct Desk: +971 50 596 9577</span>
          </a>
          <span className="text-[#3B82F6]">|</span>
          <a
            href="mailto:adityavmgadin@gmail.com"
            className="flex items-center gap-1 hover:text-[#FFFFFF] text-[#DBEAFE] transition-colors"
          >
            <Mail className="w-3 h-3 text-[#DD612A]" />
            <span>{GADIN_CORPORATE_DATA.email}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo with Official GI Monogram */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative w-12 h-12 bg-white rounded flex items-center justify-center p-1 border border-[#CBD5E1] shadow-sm group-hover:border-[#053C82] transition-colors">
            <Image
              src="/images/gi_icon.png"
              alt="GADIN Industries GI Logo"
              width={46}
              height={46}
              className="object-contain"
              priority
            />
          </div>
          <div>
            <div className="font-sans font-extrabold text-lg sm:text-xl tracking-tight text-[#053C82] flex items-center gap-2">
              GADIN INDUSTRIES
              <span className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-[#FFF7ED] border border-[#FFEDD5] text-[#DD612A]">
                FZCO
              </span>
            </div>
            <p className="text-[11px] font-mono tracking-normal text-[#64748B] uppercase">
              uPVC Windows, Doors & Architectural Systems
            </p>
          </div>
        </Link>

        {/* Desktop Menu Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#334155]">
          <a href="#windows" className="hover:text-[#053C82] transition-colors">
            uPVC Windows & Doors
          </a>
          <a href="#calculator" className="hover:text-[#053C82] flex items-center gap-1 transition-colors">
            <span>Wind & Load Tool</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#DD612A]"></span>
          </a>
          <a href="#specifications" className="hover:text-[#053C82] transition-colors">
            Profile Specs
          </a>
          <a href="#infrastructure" className="hover:text-[#053C82] transition-colors">
            Engineering Labs
          </a>
          <a href="#contact" className="hover:text-[#053C82] transition-colors">
            Dubai HQ
          </a>
        </nav>

        {/* CTA Actions with Switcher to V2 */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/v2"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-bold rounded border border-[#CBD5E1] bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#053C82] transition-colors shadow-sm"
            title="Switch to Corporate Visual Showcase"
          >
            <span>V2: Corporate Visual</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#DD612A]" />
          </Link>
          <button
            onClick={onOpenDealerModal}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold tracking-wide uppercase bg-[#053C82] hover:bg-[#073F86] text-[#FFFFFF] rounded border border-[#053C82] transition-all shadow-md shadow-blue-900/10"
          >
            <span>Dealer Onboarding / RFQ</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#DD612A]" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#053C82] border border-[#E2E8F0] rounded bg-[#F8FAFC]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E2E8F0] bg-[#FFFFFF] px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-semibold text-[#1E293B]">
            <a
              href="#windows"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#F1F5F9] flex justify-between items-center"
            >
              <span>uPVC Windows & Doors</span>
              <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#F1F5F9] flex justify-between items-center text-[#DD612A]"
            >
              <span>Wind Load & Thermal Calculator</span>
              <ChevronRight className="w-4 h-4 text-[#DD612A]" />
            </a>
            <a
              href="#specifications"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#F1F5F9] flex justify-between items-center"
            >
              <span>Profile Specifications</span>
              <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
            </a>
            <a
              href="#infrastructure"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#F1F5F9] flex justify-between items-center"
            >
              <span>Manufacturing & Quality Control</span>
              <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 flex justify-between items-center"
            >
              <span>Dubai HQ & Plant Contacts</span>
              <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
            </a>
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <Link
              href="/v2"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-mono font-bold tracking-wide uppercase border border-[#053C82] text-[#053C82] rounded bg-[#EFF6FF]"
            >
              <span>Switch to V2 Corporate Visual</span>
              <ArrowUpRight className="w-4 h-4 text-[#DD612A]" />
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDealerModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-mono font-bold tracking-wide uppercase bg-[#053C82] text-[#FFFFFF] rounded"
            >
              <span>Dealer Onboarding / RFQ</span>
              <ArrowUpRight className="w-4 h-4 text-[#DD612A]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
