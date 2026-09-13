"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  FileCheck,
  Activity,
  Gauge,
  Thermometer,
  Flame,
  ArrowRight,
  Download
} from "lucide-react";
import { useRFQ } from "@/components/layout/SiteLayoutClient";

export default function QualityPage() {
  const { openRFQ } = useRFQ();

  const standardsList = [
    { code: "IS:15778 / ASTM D2846", desc: "Chlorinated Polyvinyl Chloride (cPVC) pipes & fittings for potable hot & cold water distribution up to 93°C." },
    { code: "ASTM D1785 / ASTM D2467", desc: "Unplasticized Polyvinyl Chloride (uPVC) Schedule 40 and Schedule 80 lead-free cold water systems." },
    { code: "IS:13592 / IS:14735", desc: "Unplasticized PVC pipes and fittings for Soil, Waste, and Rainwater (SWR) drainage ventilation systems." },
    { code: "IS:4985:2000", desc: "Unplasticized PVC pipes for potable water supplies and agricultural pressurized irrigation mains." },
    { code: "IS:12818:2010", desc: "Unplasticized PVC screen and casing pipes for deep tube wells and rainwater recharge shafts (CS & CM)." },
    { code: "DIN 4925", desc: "German standard for heavy-duty square and trapezoidal threaded well casing and submersible riser joints." },
    { code: "IS:14151 (Part 1 & 2)", desc: "High-density polyethylene (HDPE) quick-coupled portable sprinkler irrigation piping systems." },
    { code: "IS:13488 / IS:12786", desc: "Continuous micro-irrigation laterals, cylindrical emitter lines, and flat drip tapes." }
  ];

  const testProtocols = [
    {
      title: "Hydrostatic Proof & Sustained Burst Testing",
      standard: "ASTM D1598 / IS:4985",
      param: "Up to 40 kgf/cm² sustained for 1,000 continuous hours",
      desc: "Specimens are filled with de-ionized water, conditioned at controlled ambient temperature (27°C and 82°C for CPVC), and subjected to sustained hydrostatic hoop stress to ensure zero creep or pinhole rupture."
    },
    {
      title: "Vicat Softening Temperature Determination",
      standard: "ASTM D1525 / IS:15778",
      param: "Vicat Softening Point ≥ 103°C (cPVC) / ≥ 80°C (uPVC)",
      desc: "Measures the thermal deformation resistance of polymer chains under a 50N needle load. Confirms that hot water lines will not sag or blister under continuous boiling water exposure."
    },
    {
      title: "Sub-Zero Falling Dart Impact Resistance",
      standard: "IS:12818 / IS:13592",
      param: "Zero shatter at 0°C with 1.0 kg to 3.0 kg striker",
      desc: "Simulates harsh field transit and sub-zero winter temperatures. Pipes are conditioned at 0°C for 2 hours and struck from a height of 2 meters; requires 100% pass rate without structural crack propagation."
    },
    {
      title: "Universal Tensile & Elongation at Break",
      standard: "ASTM D638 / ISO 527",
      param: "Tensile Strength at Yield ≥ 55 MPa (cPVC) / ≥ 45 MPa (uPVC)",
      desc: "Critical for submersible column riser pipes that support multi-stage motor pumps up to 350 meters depth without elongating, unthreading, or snapping."
    },
    {
      title: "Carbon Black Content & Dispersion Testing",
      standard: "IS:12786 / ASTM D1603",
      param: "2.5% ± 0.5% Uniform Grade Masterbatch Dispersion",
      desc: "Evaluates the UV solar stabilization of drip laterals and HDPE telecom conduits to ensure complete resistance against tropical solar radiation and weathering for 50+ years."
    },
    {
      title: "Micro-Emitter Discharge Uniformity (Cv)",
      standard: "ISO 9261 / IS:13488",
      param: "Discharge Variation Cv < 3.0% across 25 drippers",
      desc: "Automated volumetric test rack that verifies dripper discharge rates (2.0 and 4.0 LPH) under variable inlet pressures from 0.7 to 3.0 bar to guarantee uniform crop fertigation."
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Hero Header */}
      <section className="relative bg-[#0B2545] text-white py-20 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold border border-white/10">
            <Award className="w-4 h-4 text-[#DD612A]" />
            ISO 9001:2015 Certified • Bureau of Indian Standards (ISI/BIS)
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Certified Quality Systems & Zero-Defect Testing Protocols
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            At Idol Pipe, quality isn't an inspection checkpoint—it is an automated, continuous process embedded into raw material gravimetric dosing, precision extrusion calibration, and computerized lab proof testing.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => openRFQ()}
              className="px-6 py-3 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-xs transition-all shadow-md"
            >
              Request Lab Test Submittal
            </button>
            <Link
              href="/infrastructure"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
            >
              View Plant Testing Facilities →
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Standard Conformance Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B2545]">
            Compliance Benchmark
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Indian & Global Technical Standards Conformance
          </h2>
          <p className="text-xs text-slate-600">
            Manufactured and third-party certified to satisfy strict municipal, agricultural, and international construction standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standardsList.map((std, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-blue-300 transition-colors"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span className="font-mono text-xs font-bold text-[#0B2545]">{std.code}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{std.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Detailed Testing Protocols */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
            In-House Laboratory Operations
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            6-Stage Rigorous Quality Assurance Battery
          </h2>
          <p className="text-xs text-slate-600">
            Each extrusion batch is stamped with continuous inkjet lot numbers and tested in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testProtocols.map((proto, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-[#0B2545]">
                    Test Stage 0{idx + 1}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">{proto.standard}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">{proto.title}</h3>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs font-semibold text-[#DD612A]">
                  Benchmark: {proto.param}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{proto.desc}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Lot Verified
                </span>
                <button
                  onClick={() => openRFQ()}
                  className="font-bold text-[#0B2545] hover:text-[#DD612A]"
                >
                  Request Certificate →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Batch Traceability & Raw Material Certificate */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#0B2545] rounded-3xl p-8 sm:p-12 text-white shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FDBA74]">
              Traceability & Compliance
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Continuous Laser Marking & Mill Test Certificates (MTC)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every pipe dispatched from our Rajkot units carries continuous indelible laser/inkjet printing stating the brand name, standard code (e.g. IS:4985 / ASTM D1785), size, class, batch number, and manufacturing timestamp.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DD612A]" />
                <span>Standard Manufacturer's Test Certificate (MTC)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DD612A]" />
                <span>Third-Party Inspection by SGS, Bureau Veritas, TUV</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center space-y-3">
            <FileCheck className="w-10 h-10 text-[#FDBA74] mx-auto" />
            <h4 className="font-bold text-white text-sm">Need Project Compliance Dossier?</h4>
            <p className="text-xs text-slate-300">
              Download certified factory audit reports, resin certificates, and ISO documentation.
            </p>
            <button
              onClick={() => openRFQ()}
              className="w-full py-2.5 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5" /> Download Submittal Package
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
