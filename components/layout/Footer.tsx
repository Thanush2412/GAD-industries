"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Globe2,
  Award,
  ChevronRight,
  ArrowUpRight
} from "lucide-react";

interface FooterProps {
  onOpenRFQ: (productId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRFQ }) => {
  return (
    <footer className="bg-[#0B2545] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Callout Bar */}
        <div className="bg-[#053C82] rounded-2xl p-8 mb-16 border border-blue-800/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#DD612A] text-white">
              <Award className="w-3.5 h-3.5" /> Direct Factory Dispatches
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Looking for Volume Distributor Pricing or Tender Submittals?
            </h3>
            <p className="text-xs text-blue-100 max-w-2xl">
              Connect directly with our Rajkot manufacturing units or Dubai export desk for certified IS/ASTM lab test submittals and containerized CIF/FOB dispatches.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onOpenRFQ()}
              className="px-6 py-3 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-xs transition-all shadow-md"
            >
              Request Factory RFQ
            </button>
            <Link
              href="/dealership"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
            >
              Apply for Dealership
            </Link>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Corporate Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white text-[#0B2545] font-black text-lg flex items-center justify-center">
                ID
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  IDOL PIPE & FITTINGS
                </span>
                <p className="text-xs text-blue-300 font-medium">
                  Idol Plasto & Idol Polytech Pvt. Ltd. (Est. 1989)
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              India's premier manufacturer and global exporter of high-integrity plastic piping, borehole casing, and precision irrigation systems. 24,000 MT/year installed capacity powered by 100% virgin compounding and formal procurement with Reliance Industries.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#DD612A]" />
                <span>ISO 9001:2015 Accredited Quality Management System</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Bureau of Indian Standards (ISI/BIS) & ASTM Standards</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Globe2 className="w-4 h-4 text-blue-400" />
                <span>Global Export Footprint across 3 Continents</span>
              </div>
            </div>
          </div>

          {/* Col 2: Plumbing & Drainage */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Plumbing & Drainage
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/products/cpvc-pipes-fittings" className="hover:text-white transition-colors">
                  cPVC Hot & Cold Water (SDR 11/13.5)
                </Link>
              </li>
              <li>
                <Link href="/products/upvc-plumbing-system" className="hover:text-white transition-colors">
                  uPVC Schedule 40 & 80 Lead-Free
                </Link>
              </li>
              <li>
                <Link href="/products/swr-drainage-system" className="hover:text-white transition-colors">
                  SWR Push-Fit & Selfit Drainage
                </Link>
              </li>
              <li>
                <Link href="/products/garden-flexible-hose" className="hover:text-white transition-colors">
                  Flexible PVC Garden Hose
                </Link>
              </li>
              <li>
                <Link href="/products/hdpe-telecom-ducts" className="hover:text-white transition-colors">
                  HDPE Water & PLB Telecom Ducts
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Agri & Borewell */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Agri & Borewell
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/products/submersible-column-pipes" className="hover:text-white transition-colors">
                  Submersible Column Riser Pipes
                </Link>
              </li>
              <li>
                <Link href="/products/borehole-casing-pipes" className="hover:text-white transition-colors">
                  uPVC Casing & Screen Ribbed (IS:12818)
                </Link>
              </li>
              <li>
                <Link href="/products/agriculture-pvc-pipes" className="hover:text-white transition-colors">
                  Agriculture PVC Rigid Pipes (IS:4985)
                </Link>
              </li>
              <li>
                <Link href="/products/drip-irrigation" className="hover:text-white transition-colors">
                  Flat & Round Drip Irrigation
                </Link>
              </li>
              <li>
                <Link href="/products/sprinkler-irrigation" className="hover:text-white transition-colors">
                  HDPE Sprinklers & Brass Rotary Heads
                </Link>
              </li>
              <li>
                <Link href="/products/irrigation-accessories" className="hover:text-white transition-colors">
                  Industrial Disc/Screen Filters & Valves
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Portal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Corporate & Engineering
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Our Founder & 1989 Journey
                </Link>
              </li>
              <li>
                <Link href="/infrastructure" className="hover:text-white transition-colors">
                  Rajkot Plants (24,000 MT Footprint)
                </Link>
              </li>
              <li>
                <Link href="/quality" className="hover:text-white transition-colors">
                  NABL Testing Lab & QC Matrix
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-white transition-colors">
                  Pipeline Friction & Flow Simulator
                </Link>
              </li>
              <li>
                <Link href="/dealership" className="hover:text-white transition-colors">
                  Distributor & Dealership Portal
                </Link>
              </li>
              <li>
                <Link href="/updates" className="hover:text-white transition-colors">
                  Field Engineering Advisories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Manufacturing Plant Directory
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Physical Plants & Offices Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-b border-slate-800 text-xs">
          {/* Unit 1 */}
          <div className="space-y-2 bg-slate-900/40 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1.5 text-white font-bold">
              <MapPin className="w-4 h-4 text-[#DD612A]" />
              <span>Plant Unit 1 (Idol Plasto Pvt. Ltd.)</span>
            </div>
            <p className="text-slate-400">
              Survey No. 552, Opp. Kuvadava High School, Wankaner Chokadi, Rajkot - Ahmedabad NH-8B, Kuvadva, Dist: Rajkot - 360023, Gujarat, India.
            </p>
            <div className="text-slate-300 font-mono text-[11px] pt-1 space-y-0.5">
              <div>Phone: +91 92654 96492 / +91 89807 00100</div>
              <div>Email: sales@idolpipe.com / export@idolpipe.com</div>
            </div>
          </div>

          {/* Unit 2 */}
          <div className="space-y-2 bg-slate-900/40 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1.5 text-white font-bold">
              <MapPin className="w-4 h-4 text-[#DD612A]" />
              <span>Plant Unit 2 (Idol Polytech Pvt. Ltd.)</span>
            </div>
            <p className="text-slate-400">
              RK Industrial Zone-8, Wankaner - Kuwadva Chowkdi, Rajkot - Ahmedabad Highway, At-Ranpur (Navagam), Dist: Rajkot - 360023, Gujarat, India.
            </p>
            <div className="text-slate-300 font-mono text-[11px] pt-1 space-y-0.5">
              <div>Phone: +91 99254 55255 / +91 97730 44163</div>
              <div>Email: hdpe@idolpipe.com / agri@idolpipe.com</div>
            </div>
          </div>

          {/* Dubai Desk */}
          <div className="space-y-2 bg-slate-900/40 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1.5 text-white font-bold">
              <Globe2 className="w-4 h-4 text-[#DD612A]" />
              <span>Dubai Global Desk (GADIN Industries FZCO)</span>
            </div>
            <p className="text-slate-400">
              Building A1, IFZA Business Park, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates. (License: 72748)
            </p>
            <div className="text-slate-300 font-mono text-[11px] pt-1 space-y-0.5">
              <div>Direct Phone: +971 50 596 9577</div>
              <div>Email: adityavmgadin@gmail.com</div>
            </div>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 1989 – 2026 IDOL PIPE FITTINGS & IRRIGATION. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              About Enterprise
            </Link>
            <Link href="/quality" className="hover:text-white transition-colors">
              Quality Charter
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Direct Factory Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
