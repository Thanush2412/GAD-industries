"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Download,
  Layers,
  Sparkles,
  Radio,
  Zap,
  Globe
} from "lucide-react";
import { useRFQ } from "@/components/layout/SiteLayoutClient";

export default function HDPEProductPage() {
  const { openRFQ } = useRFQ();

  const ductMatrix = [
    { outerDia: "32 mm", innerDia: "26 mm", wallThickness: "3.0 ± 0.2 mm", frictionCoeff: "< 0.060", coilLength: "1000 mtr drum", app: "Access network & FTTH drop cabling" },
    { outerDia: "40 mm", innerDia: "33 mm", wallThickness: "3.5 ± 0.2 mm", frictionCoeff: "< 0.055", coilLength: "1000 mtr drum", app: "National backbone & BharatNet Phase 3 OFC" },
    { outerDia: "50 mm", innerDia: "42 mm", wallThickness: "4.0 ± 0.3 mm", frictionCoeff: "< 0.055", coilLength: "500 / 1000 mtr", app: "High-count ribbon fiber & metro express rings" },
    { outerDia: "63 mm", innerDia: "53 mm", wallThickness: "5.0 ± 0.3 mm", frictionCoeff: "< 0.050", coilLength: "500 mtr drum", app: "Multi-microduct bundle protective outer casing" }
  ];

  const peGradeSpecs = [
    { grade: "PE-63", mpa: "6.3 MPa", density: "0.930 – 0.940 g/cm³", rating: "PN 2.5 to PN 8", application: "Low pressure rural irrigation & gravity water conveyance" },
    { grade: "PE-80", mpa: "8.0 MPa", density: "0.940 – 0.950 g/cm³", rating: "PN 4 to PN 12.5", application: "Medium pressure municipal headers & PLB telecom duct conduits" },
    { grade: "PE-100", mpa: "10.0 MPa", density: "≥ 0.950 g/cm³", rating: "PN 6 to PN 16", application: "High pressure city gas distribution & high-speed OFC pneumatic blowing" }
  ];

  const authenticAdvantages = [
    { title: "Light in Weight & Easy Handling", desc: "Significantly lighter than GI, steel, or concrete conduits; enables rapid manual laying and minimal transport cost." },
    { title: "Long Continuous Drum Lengths", desc: "Supplied in continuous drums and coils up to 1,000 meters, dramatically reducing the number of intermediate joint couplers." },
    { title: "Chemically Inert & Non-Corrosive", desc: "Immune to microbial attack, acidic soil degradation, galvanic corrosion, and saline ground moisture." },
    { title: "High UV Resistance", desc: "Blended with 2.5% uniformly dispersed carbon black masterbatch, ensuring outdoor durability and UV protection." },
    { title: "Superior Elasticity & Flexibility", desc: "Easily curves around civil obstructions and road contours without requiring expensive angled elbows." },
    { title: "Co-Extruded Permanent Lubrication", desc: "Permanently lubricated inner silicore layer reduces kinetic friction to <0.06, enabling continuous cable blowing up to 2km." }
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Hero */}
      <section className="bg-[#053C82] text-white pt-10 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="text-xs text-blue-200 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-white font-medium">HDPE & PLB Telecom Ducts</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#DD612A]" /> TEC / G/CDS-08 / IS:4984 / IS:14930 Certified
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                HDPE Pipes & PLB Telecom Duct Pipes
              </h1>
              <p className="text-base text-blue-100 max-w-2xl leading-relaxed">
                HDPE Pipes are manufactured from high-grade PE 63, PE 80, and PE 100 virgin polymers and are an ideal replacement for GI and MS pipes. Our PLB (Permanently Lubricated) Telecom Ducts feature a co-extruded inner silicone lining for ultra-fast, low-friction optical fiber cable blowing.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openRFQ("hdpe-telecom-duct")}
                  className="px-6 py-3 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-sm transition-all shadow-lg shadow-orange-950/20"
                >
                  Contact for HDPE & Telecom Duct Price
                </button>
                <Link
                  href="/infrastructure"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
                >
                  Inspect Dual-Die Extrusion Line →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center p-6">
              <div className="relative w-full h-full">
                <Image
                  src="/images/idol/cat_telecom_duct.webp"
                  alt="HDPE & PLB Telecom Ducts"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 2026 Current Affairs & BharatNet Phase 3 Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-blue-800/60 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#DD612A] text-white text-[11px] font-bold uppercase tracking-wider">
              2026 Current Affairs & Digital India 5G Infrastructure
            </div>
            <h3 className="text-xl font-bold">BharatNet Phase 3 & National 5G Small-Cell Optical Fiber Expansion</h3>
            <p className="text-xs text-blue-200 max-w-3xl leading-relaxed">
              With the 2026 BharatNet Phase 3 rollouts connecting 640,000 gram panchayats and telcos densifying 5G small-cell backhaul, DoT and BBNL strictly specify 40/33mm PLB HDPE ducts conforming to TEC GR/TXC-01/02. IDOL PLB ducts are field-certified for continuous 2,000-meter air-blown cable jetting at speeds exceeding 80 meters per minute.
            </p>
          </div>
          <button
            onClick={() => openRFQ("hdpe-telecom-duct")}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white text-[#053C82] hover:bg-blue-50 font-bold text-xs transition-colors shadow-md"
          >
            Download TEC Test Certificate
          </button>
        </div>
      </section>

      {/* 3. Converted Table: PLB Telecom Duct Dimensional Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
              Authentic Engineering Data (Converted from Technical Chart)
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
              PLB Optical Fiber Duct Specifications (TEC Conforming)
            </h2>
          </div>
          <div className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg font-mono">
            Drum Lengths: 500m & 1000m
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#053C82] text-white uppercase text-[11px] font-semibold tracking-wider">
                <tr>
                  <th className="p-4">Outer Diameter</th>
                  <th className="p-4">Inner Diameter</th>
                  <th className="p-4">Wall Thickness</th>
                  <th className="p-4">Kinetic Friction Coeff. (μ)</th>
                  <th className="p-4">Standard Packaging Drum</th>
                  <th className="p-4">Network Deployment Scope</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {ductMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900 font-sans">{row.outerDia}</td>
                    <td className="p-4 font-semibold text-blue-700">{row.innerDia}</td>
                    <td className="p-4">{row.wallThickness}</td>
                    <td className="p-4 font-bold text-emerald-700">{row.frictionCoeff}</td>
                    <td className="p-4 text-slate-600 font-sans">{row.coilLength}</td>
                    <td className="p-4 text-slate-800 font-sans">{row.app}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Polymer Grade Material Matrix (PE-63, PE-80, PE-100) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <h3 className="text-xl font-bold text-slate-900">HDPE Material Grades Specification Matrix</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          {peGradeSpecs.map((grade, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-blue-50 text-[#053C82] font-mono">
                  {grade.grade}
                </span>
                <span className="text-xs font-bold text-[#DD612A]">{grade.rating}</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-slate-500">
                  <span>Minimum Required Strength:</span>
                  <span className="font-bold text-slate-800">{grade.mpa}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Polymer Density:</span>
                  <span className="font-bold text-slate-800">{grade.density}</span>
                </div>
              </div>
              <p className="text-slate-600 pt-2 border-t border-slate-100 leading-relaxed">
                <strong>Application:</strong> {grade.application}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Authentic Advantages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
            Engineering Merits
          </span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Key Advantages of IDOL HDPE & PLB Ducts
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
          {authenticAdvantages.map((adv, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-[#053C82] font-bold">
                {idx + 1}
              </div>
              <h4 className="font-bold text-slate-900 text-sm">{adv.title}</h4>
              <p className="text-slate-600 leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Applications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <h3 className="text-xl font-bold text-slate-900">Recommended Applications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {[
            "Telecommunication cable ducting for optical fiber highways and metro networks",
            "High-pressure municipal potable water distribution networks (PE-100)",
            "Agricultural micro-irrigation sub-main and feeder headers",
            "Effluent drainage, industrial chemical lines, and marine salt-water outfalls"
          ].map((app, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <p className="font-semibold text-slate-800 leading-relaxed">{app}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
