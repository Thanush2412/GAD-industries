"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  ShieldCheck,
  Globe2,
  ArrowUpRight
} from "lucide-react";

interface HeaderProps {
  onOpenRFQ: (productId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRFQ }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const productCategories = [
    {
      group: "Plumbing & Drainage",
      items: [
        { name: "cPVC Hot & Cold Water Pipes", href: "/products/cpvc-pipes-fittings", desc: "SDR 11 & 13.5 up to 93°C for solar & residential" },
        { name: "uPVC Schedule 40 & 80", href: "/products/upvc-plumbing-system", desc: "Lead-free ASTM D1785 potable cold water" },
        { name: "SWR Drainage System", href: "/products/swr-drainage-system", desc: "Push-fit rubber ring & solvent sanitary lines" },
        { name: "Flexible PVC Garden Hose", href: "/products/garden-flexible-hose", desc: "Kink-resistant domestic & washdown tubing" }
      ]
    },
    {
      group: "Borewell & Infrastructure",
      items: [
        { name: "Submersible Column Pipes", href: "/products/submersible-column-pipes", desc: "Square-thread drop pipes up to 15 MT hanging load" },
        { name: "uPVC Borehole Casing & Screen", href: "/products/borehole-casing-pipes", desc: "IS:12818 deep-blue CS & CM casing up to 250m" },
        { name: "Agriculture PVC Rigid Pipes", href: "/products/agriculture-pvc-pipes", desc: "IS:4985 Class 1 to 5 farm delivery lines" },
        { name: "HDPE & PLB Telecom Ducts", href: "/products/hdpe-telecom-ducts", desc: "PE-100 water pipes & silicone-lined fiber conduits" }
      ]
    },
    {
      group: "Precision Micro-Irrigation",
      items: [
        { name: "Drip Irrigation Systems", href: "/products/drip-irrigation", desc: "Flat drip tape, round dripperlines & laterals" },
        { name: "Sprinklers & Rain Pipes", href: "/products/sprinkler-irrigation", desc: "HDPE quick-latch pipes & 27° brass rotary heads" },
        { name: "Filtration & Control Valves", href: "/products/irrigation-accessories", desc: "Disc/screen filters, sand separators & Kaveri valves" }
      ]
    }
  ];

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm transition-all">
      {/* 1. Global Top Notification Bar */}
      <div className="bg-[#0B2545] text-slate-200 text-[11px] py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <span className="w-2 h-2 rounded-full bg-[#DD612A]"></span>
              IDOL PIPE FITTINGS & IRRIGATION • Est. 1989
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DD612A]" />
              24,000 MT/Year • ISO 9001:2015 & BIS Certified
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="tel:+919265496492"
              className="hidden sm:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#DD612A]" />
              <span>Plant Hotlines: +91 92654 96492 / +91 99254 55255</span>
            </a>
            <span className="hidden sm:inline text-slate-500">|</span>
            <a
              href="tel:+971505969577"
              className="flex items-center gap-1 text-[#FDBA74] hover:text-white font-semibold transition-colors"
            >
              <Globe2 className="w-3 h-3 text-[#DD612A]" />
              <span>Dubai Global Desk: +971 50 596 9577</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-[#0B2545] text-white font-black text-lg flex items-center justify-center shadow-sm group-hover:bg-[#053C82] transition-colors">
            ID
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight text-[#0B2545]">
              IDOL PIPE
            </span>
            <p className="text-[10px] tracking-wider uppercase font-semibold text-slate-500">
              Pipes • Fittings • Irrigation
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-slate-700">
          <Link
            href="/"
            className={`transition-colors hover:text-[#0B2545] ${
              pathname === "/" ? "text-[#0B2545] font-bold" : ""
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`transition-colors hover:text-[#0B2545] ${
              isActive("/about") ? "text-[#0B2545] font-bold" : ""
            }`}
          >
            About
          </Link>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 py-2 transition-colors hover:text-[#0B2545] ${
                isActive("/products") ? "text-[#0B2545] font-bold" : ""
              }`}
            >
              <span>Products</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {productsDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-2xl shadow-xl border border-slate-200 p-6 z-50 grid grid-cols-3 gap-6 animate-fadeIn">
                {productCategories.map((cat, idx) => (
                  <div key={idx} className="space-y-3">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-100 pb-1.5">
                      {cat.group}
                    </h4>
                    <div className="space-y-2">
                      {cat.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          href={item.href}
                          onClick={() => setProductsDropdownOpen(false)}
                          className="block p-2 rounded-lg hover:bg-slate-50 transition-colors group/item"
                        >
                          <div className="font-semibold text-xs text-slate-800 group-hover/item:text-[#0B2545] flex items-center justify-between">
                            <span>{item.name}</span>
                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity text-[#DD612A]" />
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {item.desc}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="col-span-3 bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700">
                    Full dimensional tolerances & hydrostatic matrix
                  </span>
                  <Link
                    href="/products"
                    onClick={() => setProductsDropdownOpen(false)}
                    className="font-bold text-[#0B2545] hover:text-[#DD612A] flex items-center gap-1"
                  >
                    View Master Catalog →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/infrastructure"
            className={`transition-colors hover:text-[#0B2545] ${
              isActive("/infrastructure") ? "text-[#0B2545] font-bold" : ""
            }`}
          >
            Infrastructure
          </Link>

          <Link
            href="/quality"
            className={`transition-colors hover:text-[#0B2545] ${
              isActive("/quality") ? "text-[#0B2545] font-bold" : ""
            }`}
          >
            Quality
          </Link>

          <Link
            href="/calculator"
            className={`transition-colors hover:text-[#0B2545] ${
              isActive("/calculator") ? "text-[#0B2545] font-bold" : ""
            }`}
          >
            Simulator
          </Link>

          <Link
            href="/dealership"
            className={`transition-colors hover:text-[#0B2545] ${
              isActive("/dealership") ? "text-[#0B2545] font-bold" : ""
            }`}
          >
            Dealership
          </Link>

          <Link
            href="/updates"
            className={`transition-colors hover:text-[#0B2545] ${
              isActive("/updates") ? "text-[#0B2545] font-bold" : ""
            }`}
          >
            Advisories
          </Link>

          <Link
            href="/contact"
            className={`transition-colors hover:text-[#0B2545] ${
              isActive("/contact") ? "text-[#0B2545] font-bold" : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenRFQ()}
            className="px-4 py-2 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-xs tracking-wide shadow-sm transition-all active:scale-95"
          >
            Request Factory Quote
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#0B2545] hover:bg-slate-100 rounded-lg"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-800">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">
              Home
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">
              About Us (Est. 1989)
            </Link>
            <Link href="/infrastructure" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">
              Manufacturing Infrastructure (24,000 MT)
            </Link>
            <Link href="/quality" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">
              Quality & Testing Protocols
            </Link>
            
            <div className="py-2 border-b border-slate-100">
              <div className="font-bold text-[#0B2545] mb-2 flex items-center justify-between">
                <span>Products Directory</span>
                <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="text-xs text-[#DD612A]">
                  View All →
                </Link>
              </div>
              <div className="pl-3 space-y-2 text-xs text-slate-600">
                <Link href="/products/cpvc-pipes-fittings" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#0B2545]">
                  • cPVC Hot & Cold Pipes
                </Link>
                <Link href="/products/upvc-plumbing-system" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#0B2545]">
                  • uPVC Schedule 40 & 80
                </Link>
                <Link href="/products/swr-drainage-system" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#0B2545]">
                  • SWR Drainage System
                </Link>
                <Link href="/products/submersible-column-pipes" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#0B2545]">
                  • Submersible Column Pipes
                </Link>
                <Link href="/products/borehole-casing-pipes" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#0B2545]">
                  • uPVC Borehole Casing & Screen
                </Link>
                <Link href="/products/agriculture-pvc-pipes" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#0B2545]">
                  • Agriculture PVC Pipes (IS:4985)
                </Link>
                <Link href="/products/hdpe-telecom-ducts" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#0B2545]">
                  • HDPE & PLB Telecom Ducts
                </Link>
                <Link href="/products/drip-irrigation" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#0B2545]">
                  • Drip Irrigation Systems
                </Link>
                <Link href="/products/sprinkler-irrigation" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#0B2545]">
                  • Sprinklers & Rain Pipes
                </Link>
                <Link href="/products/irrigation-accessories" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#0B2545]">
                  • Filtration & Control Valves
                </Link>
                <Link href="/products/garden-flexible-hose" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#0B2545]">
                  • Flexible PVC Garden Hose
                </Link>
              </div>
            </div>

            <Link href="/calculator" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">
              Pipeline Simulator
            </Link>
            <Link href="/dealership" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">
              Authorized Dealership
            </Link>
            <Link href="/updates" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">
              Technical Advisories
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="py-2">
              Contact & Plant Locations
            </Link>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRFQ();
              }}
              className="w-full py-3 rounded-xl bg-[#DD612A] text-white font-semibold text-xs text-center"
            >
              Request Factory Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
