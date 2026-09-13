"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Globe2,
  CheckCircle2,
  Building,
  Target,
  Users,
  Factory,
  ArrowRight,
  TrendingUp,
  FileCheck
} from "lucide-react";
import { useRFQ } from "@/components/layout/SiteLayoutClient";

export default function AboutPage() {
  const { openRFQ } = useRFQ();

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Hero Banner */}
      <section className="relative bg-[#0B2545] text-white py-20 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold border border-white/10">
            <ShieldCheck className="w-4 h-4 text-[#DD612A]" />
            Established 1989 • 30+ Years of Manufacturing Excellence
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Engineering High-Integrity Piping & Precision Irrigation for a Growing World
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            From humble beginnings in Rajkot, Gujarat, Idol Pipe has grown into a formidable 24,000 MT/year manufacturing enterprise exporting certified piping across Latin America, the Middle East, Africa, and Asia.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => openRFQ()}
              className="px-6 py-3 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-xs transition-all shadow-md"
            >
              Request Plant Submittal
            </button>
            <Link
              href="/infrastructure"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
            >
              Explore Manufacturing Plants →
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Key Numbers Bento */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <span className="text-3xl sm:text-4xl font-black text-[#0B2545] tracking-tight">1989</span>
            <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-1">Foundation Year</p>
            <p className="text-xs text-slate-400 mt-1">3+ decades of continuous innovation</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <span className="text-3xl sm:text-4xl font-black text-[#DD612A] tracking-tight">24,000</span>
            <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-1">MT Annual Output</p>
            <p className="text-xs text-slate-400 mt-1">Certified extrusion capacity</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <span className="text-3xl sm:text-4xl font-black text-[#0B2545] tracking-tight">18+</span>
            <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-1">Extrusion Lines</p>
            <p className="text-xs text-slate-400 mt-1">Automated twin-screw tooling</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <span className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight">100%</span>
            <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-1">Virgin Polymer</p>
            <p className="text-xs text-slate-400 mt-1">Reliance Industries procurement</p>
          </div>
        </div>
      </section>

      {/* 3. Founder Story & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-slate-100">
            <Image
              src="/images/factory_extrusion.jpg"
              alt="Idol Pipe Factory Extrusion Floor"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
              <div className="text-white space-y-1">
                <p className="text-xs uppercase tracking-wider font-bold text-[#FDBA74]">Founder's Guidance</p>
                <h4 className="text-xl font-bold">Mr. Bhagwanji Vadodariya</h4>
                <p className="text-xs text-slate-300">Founder & Chairman, Idol Plasto & Idol Polytech Pvt. Ltd.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
                The Journey Since 1989
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                "Built on Uncompromising Quality and Real Agricultural Needs"
              </h2>
            </div>

            <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
              <p>
                When Idol Pipe was established in Rajkot in 1989, Indian agriculture and urban construction were plagued by substandard piping materials that cracked under pressure, corroded inside deep borewells, or clogged during irrigation cycles.
              </p>
              <p>
                Under the visionary leadership of <strong>Mr. Bhagwanji Vadodariya</strong>, the company was grounded on three non-negotiable principles:
              </p>
              <ul className="space-y-2.5 pt-1">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero Recycled Scrap in Pressure Pipes:</strong> Exclusive use of 100% virgin-grade polymer compounds to prevent micro-fissures and brittle fractures.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Dimensional Precision Conformance:</strong> Adherence to strict wall thickness and hydrostatic standards (BIS, ASTM, DIN) regardless of market raw material fluctuations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Farmer & Contractor Empathy:</strong> Designing practical solutions like square-threaded column pipes that withstand 15 MT tensile suspended pump loads and bi-directional air release valves to safeguard pipelines against catastrophic water hammer bursts.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="text-xs text-slate-500 font-mono">
                Corporate Entities: Idol Plasto Pvt. Ltd. & Idol Polytech Pvt. Ltd.
              </div>
              <Link
                href="/contact"
                className="text-xs font-bold text-[#0B2545] hover:text-[#DD612A] flex items-center gap-1"
              >
                Reach Our Executive Office →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Dual Manufacturing Unit Structure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B2545]">
            Industrial Specialization
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Two Specialized Manufacturing Plants in Rajkot
          </h2>
          <p className="text-xs text-slate-600">
            Engineered division of labor guarantees dedicated tooling and clean contamination-free processing for plumbing and agricultural polymers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Unit 1 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6 hover:border-blue-300 transition-colors">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#0B2545]">
                Plant Unit 01
              </span>
              <span className="text-xs font-mono text-slate-500">14,000 MT / Year</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">
                Idol Plasto Private Limited
              </h3>
              <p className="text-xs text-slate-500">
                Rajkot - Ahmedabad NH-8B, Wankaner Chokadi, Opp. Kuvadava High School, Kuvadva, Dist: Rajkot - 360023, Gujarat.
              </p>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
              <div className="font-semibold text-slate-800">Specialized Production Lines:</div>
              <ul className="space-y-1 list-disc list-inside">
                <li>cPVC FlowMax Hot & Cold Water Pipes (SDR 11 & SDR 13.5 up to 93°C)</li>
                <li>uPVC UltraPlumb Schedule 40 & 80 Lead-Free Cold Water Lines</li>
                <li>SWR SilentFlow Soil, Waste & Rainwater Drainage (Push-Fit rubber ring)</li>
                <li>Flexible PVC Garden, Car Washing & Landscaping Hoses</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-medium text-slate-500 font-mono">+91 92654 96492</span>
              <Link href="/products/cpvc-pipes-fittings" className="font-bold text-[#0B2545] hover:underline">
                View Plumbing Specs →
              </Link>
            </div>
          </div>

          {/* Unit 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6 hover:border-orange-300 transition-colors">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-[#DD612A]">
                Plant Unit 02
              </span>
              <span className="text-xs font-mono text-slate-500">10,000 MT / Year</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">
                Idol Polytech Private Limited
              </h3>
              <p className="text-xs text-slate-500">
                RK Industrial Zone-8, Wankaner - Kuwadva Chowkdi, Rajkot - Ahmedabad Highway, At-Ranpur (Navagam), Dist: Rajkot - 360023, Gujarat.
              </p>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
              <div className="font-semibold text-slate-800">Specialized Production Lines:</div>
              <ul className="space-y-1 list-disc list-inside">
                <li>DeepForce Submersible Column & Riser Drop Pipes (15 MT load)</li>
                <li>AquaShield uPVC Borehole Casing & Slotted Screen Pipes (IS:12818)</li>
                <li>AgriFlow Agriculture PVC Pipes (IS:4985 Class 1 to 5)</li>
                <li>Precision Micro-Irrigation (Flat Drip Tape, Round Tubing, Sprinklers)</li>
                <li>TeraDuct HDPE & PLB Permanently Lubricated Telecom OFC Ducts</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-medium text-slate-500 font-mono">+91 99254 55255</span>
              <Link href="/products/submersible-column-pipes" className="font-bold text-[#DD612A] hover:underline">
                View Borewell Specs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. International Export Synergy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#0B2545] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-semibold">
                <Globe2 className="w-4 h-4" /> Global Trade Division • Dubai Desk
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Global Export Backing via GADIN Industries Trading FZCO (Dubai)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                To serve international infrastructure contractors, irrigation ministries, and wholesale distributors worldwide with streamlined CIF/FOB logistics, letters of credit (LC), and multicurrency billing, Idol Pipe operates its global trade hub from Dubai Silicon Oasis (License No. 72748).
              </p>
              <div className="flex flex-wrap gap-4 pt-1 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DD612A]" /> Direct Mundra Port & Jebel Ali Hub Dispatches
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DD612A]" /> Multilingual Technical Submittals
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 text-center space-y-3">
              <p className="text-xs uppercase font-bold text-slate-300">International Export Desk</p>
              <div className="text-xl font-bold font-mono text-white">+971 50 596 9577</div>
              <p className="text-xs text-blue-200">adityavmgadin@gmail.com</p>
              <button
                onClick={() => openRFQ()}
                className="w-full py-2.5 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-xs transition-colors"
              >
                Inquire for Global CIF Export
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
