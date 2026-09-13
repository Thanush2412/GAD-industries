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
  Droplets,
  Tractor,
  Wind
} from "lucide-react";
import { useRFQ } from "@/components/layout/SiteLayoutClient";

export default function SprinklerProductPage() {
  const { openRFQ } = useRFQ();

  const is14151Data = [
    { size: 63, odMin: 63.0, odMax: 63.6, cl1Min: "-", cl1Max: "-", cl2Min: "2.0 mm", cl2Max: "2.4 mm" },
    { size: 75, odMin: 75.0, odMax: 75.7, cl1Min: "2.0 mm", cl1Max: "2.4 mm", cl2Min: "2.5 mm", cl2Max: "2.9 mm" },
    { size: 90, odMin: 90.0, odMax: 90.8, cl1Min: "2.2 mm", cl1Max: "2.6 mm", cl2Min: "2.9 mm", cl2Max: "3.4 mm" },
    { size: 110, odMin: 110.0, odMax: 111.0, cl1Min: "2.7 mm", cl1Max: "3.2 mm", cl2Min: "3.4 mm", cl2Max: "3.9 mm" },
    { size: 125, odMin: 125.0, odMax: 126.2, cl1Min: "3.1 mm", cl1Max: "3.6 mm", cl2Min: "3.8 mm", cl2Max: "4.5 mm" },
    { size: 140, odMin: 140.0, odMax: 141.3, cl1Min: "3.5 mm", cl1Max: "4.1 mm", cl2Min: "4.3 mm", cl2Max: "5.0 mm" }
  ];

  const perfData = [
    { nozzle: "3.9 x 3.17 mm", press: "1 kg/cm²", diam: "19 mtr", withoutMilling: "-", withMilling: "1,100 LPH" },
    { nozzle: "3.9 x 3.17 mm", press: "2 kg/cm²", diam: "21 mtr", withoutMilling: "-", withMilling: "1,535 LPH" },
    { nozzle: "3.9 x 3.17 mm", press: "3 kg/cm²", diam: "22 mtr", withoutMilling: "-", withMilling: "1,900 LPH" },
    { nozzle: "4.1 x 3.17 mm", press: "1 kg/cm²", diam: "19 mtr", withoutMilling: "-", withMilling: "1,180 LPH" },
    { nozzle: "4.1 x 3.17 mm", press: "2 kg/cm²", diam: "21 mtr", withoutMilling: "-", withMilling: "1,630 LPH" },
    { nozzle: "4.1 x 3.17 mm", press: "3 kg/cm²", diam: "22 mtr", withoutMilling: "-", withMilling: "1,990 LPH" },
    { nozzle: "4.36 x 3.17 mm", press: "1 kg/cm²", diam: "19 mtr", withoutMilling: "-", withMilling: "1,280 LPH" },
    { nozzle: "4.36 x 3.17 mm", press: "2 kg/cm²", diam: "22 mtr", withoutMilling: "-", withMilling: "1,780 LPH" },
    { nozzle: "4.36 x 3.17 mm", press: "3 kg/cm²", diam: "24 mtr", withoutMilling: "-", withMilling: "2,150 LPH" },
    { nozzle: "*5.15 x 3.17 mm", press: "1 kg/cm²", diam: "24 mtr", withoutMilling: "1,330 LPH", withMilling: "1,520 LPH" },
    { nozzle: "*5.15 x 3.17 mm", press: "2 kg/cm²", diam: "25 mtr", withoutMilling: "1,850 LPH", withMilling: "2,170 LPH" },
    { nozzle: "*5.15 x 3.17 mm", press: "*3 kg/cm²", diam: "26 mtr", withoutMilling: "2,280 LPH", withMilling: "2,670 LPH" }
  ];

  const authenticHeadSpecs = [
    { label: "Connection", val: "3/4\" BSP / NPT Male Threaded" },
    { label: "Construction", val: "Durable Cast Brass Body and Arm" },
    { label: "Spindle & Hardware", val: "Stainless Steel Pivot Pin and Springs" },
    { label: "Washers", val: "Bearing & Sealing Washers for extended wear" },
    { label: "Operating Pressure", val: "1.0 – 3.0 kg/cm²" },
    { label: "Recommended Spacing", val: "Up to 15m for high distribution uniformity" },
    { label: "Trajectory Angle", val: "27° Wind-Resistant Angle" },
    { label: "Coverage Arc", val: "360° Full Circle Rotary Spray" }
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
            <span className="text-white font-medium">Sprinkler Irrigation System</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#DD612A]" /> IS:14151 (Part I & Part II) Certified
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Sprinkler Irrigation System & Quick-Latch Pipes
              </h1>
              <p className="text-base text-blue-100 max-w-2xl leading-relaxed">
                We offer HDPE pipes and fittings for sprinkler systems. They are used for spraying water through nozzles to achieve maximum water use efficiency. Conveying water from main resources to cultivation fields through rotary spray technology, ideal where crop cultivation is irregular or requires cooling breeze.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openRFQ("sprinkler-irrigation-system")}
                  className="px-6 py-3 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-sm transition-all shadow-lg shadow-orange-950/20"
                >
                  Contact for Sprinkler System & Price
                </button>
                <Link
                  href="/calculator"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
                >
                  Simulate Spray Uniformity →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center p-6">
              <div className="relative w-full h-full">
                <Image
                  src="/images/idol/cat_sprinkler.webp"
                  alt="Sprinkler Irrigation System"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 2026 Current Affairs & Subsidy Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-emerald-800/60 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#DD612A] text-white text-[11px] font-bold uppercase tracking-wider">
              2026 Current Affairs & PMKSY Subsidy Directives
            </div>
            <h3 className="text-xl font-bold">Portable Sprinkler Packages Empanelled for 55% PMKSY Subsidies</h3>
            <p className="text-xs text-emerald-200 max-w-3xl leading-relaxed">
              Under the active 2026 PMKSY micro-irrigation schemes across agricultural belts in Gujarat, Rajasthan, Haryana, and MP, portable sprinkler sets (63mm to 90mm with quick C-clamp latches and rotary brass nozzles) qualify for up to 55% direct DBT financial assistance. IDOL sprinkler pipes are factory batch-tested to IS:14151 Part 1 & 2.
            </p>
          </div>
          <button
            onClick={() => openRFQ("sprinkler-irrigation-system")}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white text-emerald-950 hover:bg-emerald-50 font-bold text-xs transition-colors shadow-md"
          >
            Download PMKSY Sprinkler Quotation
          </button>
        </div>
      </section>

      {/* 3. Converted Table 1: Sprinkler-Irrigation-Pipes-Tech-Specs.webp */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
              Authentic Engineering Data (Converted from Technical Chart)
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
              IDOL Sprinkler Pipes Comply to IS:14151 (Part I & Part II)
            </h2>
          </div>
          <div className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg font-mono">
            Coupling: C-Clamp / Quick Latch Socket
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#053C82] text-white uppercase text-[11px] font-semibold tracking-wider">
                <tr>
                  <th className="p-4" rowSpan={2}>Size (mm)</th>
                  <th className="p-4 text-center" colSpan={2}>Outside Diameter (mm)</th>
                  <th className="p-4 text-center bg-blue-900" colSpan={2}>Class 1 (2.5 kg/cm²) Wall Thickness</th>
                  <th className="p-4 text-center bg-blue-950" colSpan={2}>Class 2 (3.2 kg/cm²) Wall Thickness</th>
                </tr>
                <tr className="bg-blue-800 text-blue-100 text-[10px]">
                  <th className="p-3 text-center">Min</th>
                  <th className="p-3 text-center">Max</th>
                  <th className="p-3 text-center">Min</th>
                  <th className="p-3 text-center">Max</th>
                  <th className="p-3 text-center">Min</th>
                  <th className="p-3 text-center">Max</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {is14151Data.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900 font-sans">{row.size} mm</td>
                    <td className="p-4 text-center">{row.odMin.toFixed(1)}</td>
                    <td className="p-4 text-center">{row.odMax.toFixed(1)}</td>
                    <td className="p-4 text-center text-slate-500">{row.cl1Min}</td>
                    <td className="p-4 text-center text-slate-500">{row.cl1Max}</td>
                    <td className="p-4 text-center font-bold text-[#053C82]">{row.cl2Min}</td>
                    <td className="p-4 text-center font-bold text-[#DD612A]">{row.cl2Max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Converted Table 2: Sprinkler-Pipe-Performance-Table.webp */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
              Authentic Performance Matrix
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
              Sprinkler Head Hydraulic Performance Table
            </h2>
          </div>
          <div className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg font-mono">
            Tested under standard wind & humidity conditions
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#053C82] text-white uppercase text-[11px] font-semibold tracking-wider">
                <tr>
                  <th className="p-4">Nozzle Size (mm)</th>
                  <th className="p-4">Pressure (kg/cm²)</th>
                  <th className="p-4">Coverage Diameter</th>
                  <th className="p-4 text-center bg-blue-900">Discharge (without milling)</th>
                  <th className="p-4 text-center bg-blue-950">Discharge (with milling)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {perfData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900 font-sans">{row.nozzle}</td>
                    <td className="p-4">{row.press}</td>
                    <td className="p-4 font-semibold text-blue-700">{row.diam}</td>
                    <td className="p-4 text-center text-slate-500">{row.withoutMilling}</td>
                    <td className="p-4 text-center font-bold text-emerald-700">{row.withMilling}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Authentic Sprinkler Nozzle Hardware Specifications (from idolpipe.com) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <h3 className="text-xl font-bold text-slate-900">Cast Brass Sprinkler Head Specifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {authenticHeadSpecs.map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
              <span className="text-[10px] font-bold uppercase text-[#DD612A] block">{item.label}</span>
              <p className="font-bold text-slate-900 text-sm">{item.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Applications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <h3 className="text-xl font-bold text-slate-900">Recommended Project Applications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {[
            "Field crops: Groundnut, wheat, mustard, pulses, soybean, and bajra",
            "Plantations: Tea gardens, coffee estates, and cardamon hills",
            "Dust suppression in mining roads, stone crushers, and bulk handling yards",
            "Fodder grasslands, golf courses, turf farms, and sports stadiums"
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
