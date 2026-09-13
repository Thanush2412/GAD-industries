"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Download,
  Flame,
  Droplets,
  Layers,
  Sparkles
} from "lucide-react";
import { useRFQ } from "@/components/layout/SiteLayoutClient";

export default function UPVCProductPage() {
  const { openRFQ } = useRFQ();

  const dimensionalData = [
    { sizeInch: '1/2"', sizeMm: 21.34, sch40Min: 2.77, sch40Max: 3.28, sch40Press: 4.14, sch80Min: 3.73, sch80Max: 4.24, sch80Press: 5.86, pack3m: 50, pack6m: 25 },
    { sizeInch: '3/4"', sizeMm: 26.67, sch40Min: 2.87, sch40Max: 3.38, sch40Press: 3.31, sch80Min: 3.91, sch80Max: 4.42, sch80Press: 4.76, pack3m: 40, pack6m: 20 },
    { sizeInch: '1"', sizeMm: 33.40, sch40Min: 3.38, sch40Max: 3.89, sch40Press: 3.10, sch80Min: 4.55, sch80Max: 5.08, sch80Press: 4.34, pack3m: 30, pack6m: 15 },
    { sizeInch: '1 1/4"', sizeMm: 42.16, sch40Min: 3.56, sch40Max: 4.00, sch40Press: 2.55, sch80Min: 4.85, sch80Max: 5.43, sch80Press: 3.59, pack3m: 15, pack6m: 10 },
    { sizeInch: '1 1/2"', sizeMm: 48.26, sch40Min: 3.68, sch40Max: 4.19, sch40Press: 2.28, sch80Min: 5.08, sch80Max: 5.69, sch80Press: 3.24, pack3m: 15, pack6m: 10 },
    { sizeInch: '2"', sizeMm: 60.32, sch40Min: 3.91, sch40Max: 4.42, sch40Press: 1.93, sch80Min: 5.54, sch80Max: 6.20, sch80Press: 2.76, pack3m: 10, pack6m: 5 },
    { sizeInch: '2 1/2"', sizeMm: 73.02, sch40Min: 5.16, sch40Max: 5.77, sch40Press: 2.07, sch80Min: 7.01, sch80Max: 7.85, sch80Press: 2.90, pack3m: 5, pack6m: 5 },
    { sizeInch: '3"', sizeMm: 88.90, sch40Min: 5.49, sch40Max: 6.15, sch40Press: 1.82, sch80Min: 7.62, sch80Max: 8.53, sch80Press: 2.60, pack3m: 5, pack6m: 3 }
  ];

  const authenticFeatures = [
    { title: "Better Tensile Strength", desc: "Formulated to endure extreme internal pressure surges and water hammer shocks without bursting." },
    { title: "Better Flexural Strength", desc: "Rigid molecular structure eliminates pipe sagging on lengthy horizontal plumbing runs." },
    { title: "Chemical & Corrosion Proof", desc: "Unaffected by aggressive industrial effluents, acidic and alkaline soil chemistry." },
    { title: "Durable & Strong", desc: "Manufactured from pure unplasticized PVC with zero chalk or cheap calcium carbonate adulteration." },
    { title: "100% Recyclable", desc: "Sustainable polymer synthesis providing clean environmental footprint and zero toxic off-gassing." },
    { title: "Weather Resistance", desc: "Special UV absorbers prevent surface crazing, color fading, and embrittlement under extreme sunlight." },
    { title: "Safe For Drinking Water", desc: "100% heavy-metal-free, organotin stabilized conforming to IS:4985 potable water safety directives." },
    { title: "100% Chlorine Resisted", desc: "Impervious to chlorinated municipal water supplies and water treatment chemicals." },
    { title: "Profitable Investment", desc: "Low initial cost combined with zero maintenance delivers unbeatable lifetime economic value." },
    { title: "Zero Maintenance", desc: "Smooth hydraulic bore (Hazen-Williams C=150) ensures zero scale deposition and consistent flow rates." }
  ];

  const upvcFittings = [
    { name: "uPVC Coupler / Socket", sizes: '1/2" to 3"', type: "Solvent Weld" },
    { name: "uPVC Elbow 90°", sizes: '1/2" to 3"', type: "Directional" },
    { name: "uPVC Equal Tee", sizes: '1/2" to 3"', type: "Distribution" },
    { name: "uPVC MTA (Male Thread)", sizes: '1/2" to 3"', type: "Threaded Transition" },
    { name: "uPVC FTA (Female Thread)", sizes: '1/2" to 3"', type: "Threaded Transition" },
    { name: "uPVC Brass Elbow 90°", sizes: '1/2" x 1/2" to 1" x 1/2"', type: "Brass Insert" },
    { name: "uPVC Brass Tee", sizes: '1/2" x 1/2" to 1" x 1/2"', type: "Brass Insert" },
    { name: "uPVC Union", sizes: '1/2" to 3"', type: "Detachable EPDM" },
    { name: "uPVC Ball Valve", sizes: '1/2" to 3"', type: "Quarter-Turn" },
    { name: "uPVC End Cap", sizes: '1/2" to 3"', type: "Terminal Seal" },
    { name: "uPVC Reducing Bush", sizes: '3/4"x1/2" to 3"x2"', type: "Reducer" },
    { name: "uPVC Cross Tee", sizes: '1/2" to 2"', type: "4-Way Header" }
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
            <span className="text-white font-medium">uPVC Pipe & Plumbing System</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#DD612A]" /> ASTM D1785 / ASTM D2466 / ASTM D2467 Standard
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                uPVC Pipe & Plumbing System (SCH 40 & 80)
              </h1>
              <p className="text-base text-blue-100 max-w-2xl leading-relaxed">
                uPVC Pipes & Fittings are synthetic plastic polymer made from the most versatile polymer called Unplasticized Polyvinyl Chloride. Idol uPVC pipes & fittings have a special blend of formulation in order to give remarkable flexibility.
              </p>
              <p className="text-sm text-blue-200 max-w-2xl leading-relaxed">
                Exceptionally, tendency of lesser cost, minimal maintenance and higher water transfer efficiency have made Idol pipes & fittings a perfect replacement to cast iron plumbing pipes & fittings. Idol uPVC Pipes are available from size 1/2&quot; to 3&quot; in both SCH-40 & SCH-80 and fittings from size 1/2&quot; to 2&quot; in SCH-80.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openRFQ("upvc-plumbing-sch")}
                  className="px-6 py-3 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-sm transition-all shadow-lg shadow-orange-950/20"
                >
                  Contact for uPVC Pipe Fittings & Price
                </button>
                <Link
                  href="/calculator"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
                >
                  Simulate Pipeline Friction →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center p-6">
              <div className="relative w-full h-full">
                <Image
                  src="/images/idol/cat_upvc_plumbing.webp"
                  alt="uPVC Pipe & Plumbing System"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 2026 Current Affairs & JJM Compliance Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-blue-800/60 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#DD612A] text-white text-[11px] font-bold uppercase tracking-wider">
              2026 Current Affairs & Compliance Directive
            </div>
            <h3 className="text-xl font-bold">Har Ghar Jal / Jal Jeevan Mission Lead-Free Certification</h3>
            <p className="text-xs text-blue-200 max-w-3xl leading-relaxed">
              In accordance with 2026 BIS & National Green Tribunal mandates, all lead stabilizers (lead stearate) are strictly prohibited in potable plumbing pipes. IDOL uPVC pipes are 100% lead-free, stabilized with food-grade calcium-zinc formulations ensuring zero toxic heavy metal leaching into drinking water supplies.
            </p>
          </div>
          <button
            onClick={() => openRFQ("upvc-plumbing-sch")}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white text-[#053C82] hover:bg-blue-50 font-bold text-xs transition-colors shadow-md"
          >
            Request IS:4985 Test Report
          </button>
        </div>
      </section>

      {/* 3. Converted Table from idolpipe image: upvcdimension-1024x300.webp */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
              Authentic Engineering Data (Converted from Technical Chart)
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
              Dimensional & Technical Details (Schedule-40 & Schedule-80)
            </h2>
          </div>
          <div className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg font-mono">
            Standard Length: 3.0m & 6.0m
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#053C82] text-white uppercase text-[11px] font-semibold tracking-wider">
                <tr>
                  <th className="p-4" colSpan={2}>Outer Diameter</th>
                  <th className="p-4 text-center bg-blue-900" colSpan={3}>Schedule-40</th>
                  <th className="p-4 text-center bg-blue-950" colSpan={3}>Schedule-80</th>
                  <th className="p-4 text-center" colSpan={2}>Packing Details</th>
                </tr>
                <tr className="bg-blue-800 text-blue-100 text-[10px]">
                  <th className="p-3">Inch</th>
                  <th className="p-3">mm</th>
                  <th className="p-3">Min Wall (mm)</th>
                  <th className="p-3">Max Wall (mm)</th>
                  <th className="p-3">Pressure (MPA)</th>
                  <th className="p-3">Min Wall (mm)</th>
                  <th className="p-3">Max Wall (mm)</th>
                  <th className="p-3">Pressure (MPA)</th>
                  <th className="p-3 text-center">3 mtr</th>
                  <th className="p-3 text-center">6 mtr</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {dimensionalData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900 font-sans">{row.sizeInch}</td>
                    <td className="p-4">{row.sizeMm.toFixed(2)}</td>
                    <td className="p-4">{row.sch40Min.toFixed(2)}</td>
                    <td className="p-4">{row.sch40Max.toFixed(2)}</td>
                    <td className="p-4 font-bold text-blue-700">{row.sch40Press.toFixed(2)}</td>
                    <td className="p-4 font-semibold text-[#053C82]">{row.sch80Min.toFixed(2)}</td>
                    <td className="p-4 font-semibold text-[#053C82]">{row.sch80Max.toFixed(2)}</td>
                    <td className="p-4 font-bold text-emerald-700">{row.sch80Press.toFixed(2)}</td>
                    <td className="p-4 text-center font-bold text-slate-700">{row.pack3m}</td>
                    <td className="p-4 text-center font-bold text-slate-700">{row.pack6m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Converted Lab Comparison Tables: Vicat Softening Point & Hydrostatic Water Test (upvc-1.webp & upvc-2.webp) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vicat Softening Point */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                <Flame className="w-5 h-5" /> Vicat Softening Point
              </div>
              <span className="text-xs bg-rose-50 text-rose-700 font-mono px-2 py-0.5 rounded">IS:4985 / ASTM D1525</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Thermal resistance under continuous mechanical load. Higher Vicat softening temperature ensures the pipe retains high stiffness and zero deflection under summer heat.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">ASTM Standard Benchmark:</span>
                <span className="font-mono font-bold text-slate-500">80°C</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div className="bg-slate-400 h-full rounded-full" style={{ width: "85%" }}></div>
              </div>
              <div className="flex items-center justify-between text-xs pt-1">
                <span className="font-bold text-[#053C82]">IDOL uPVC Pipe:</span>
                <span className="font-mono font-black text-rose-600 text-sm">82°C</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-rose-500 to-[#DD612A] h-full rounded-full" style={{ width: "95%" }}></div>
              </div>
              <div className="text-[11px] text-emerald-700 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 font-medium">
                ✓ Exceeds ASTM Standard test benchmark for dimensional stability under load.
              </div>
            </div>
          </div>

          {/* Hydrostatic Water Test */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                <Droplets className="w-5 h-5" /> Hydrostatic Water Test
              </div>
              <span className="text-xs bg-blue-50 text-blue-700 font-mono px-2 py-0.5 rounded">ASTM D1598 / IS:4985</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sustained internal hydraulic pressure endurance without bursting, micro-cracking or pinhole leakage.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">ASTM Standard Benchmark:</span>
                <span className="font-mono font-bold text-slate-500">25 kg/cm²</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div className="bg-slate-400 h-full rounded-full" style={{ width: "75%" }}></div>
              </div>
              <div className="flex items-center justify-between text-xs pt-1">
                <span className="font-bold text-[#053C82]">IDOL uPVC Pipe:</span>
                <span className="font-mono font-black text-emerald-600 text-sm">30 kg/cm²</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-emerald-500 h-full rounded-full" style={{ width: "100%" }}></div>
              </div>
              <div className="text-[11px] text-emerald-700 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 font-medium">
                ✓ Tested to 30 kg/cm² burst pressure (+20% safety factor against water hammer surges).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Complete Fittings Catalogue */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
              Fittings Range
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
              uPVC Heavy Molded Plumbing Fittings
            </h2>
          </div>
          <button
            onClick={() => openRFQ("upvc-plumbing-sch")}
            className="text-xs font-semibold text-[#053C82] hover:text-[#DD612A] flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-4 h-4" /> Download Complete uPVC Fittings List
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {upvcFittings.map((fit, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-[#053C82] transition-colors space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-blue-50 text-[#053C82]">
                  {fit.type}
                </span>
                <span className="text-[11px] font-mono text-slate-500">{fit.sizes}</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">{fit.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Authentic Salient Features (All 10 from idolpipe.com) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
            Engineering Advantages
          </span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Salient Features of uPVC Pipes & Fittings
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs">
          {authenticFeatures.map((feat, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-[#053C82] font-bold">
                {idx + 1}
              </div>
              <h4 className="font-bold text-slate-900 text-sm">{feat.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. uPVC Applications (All 9 from idolpipe.com) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
            Field Deployment
          </span>
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            uPVC Applications
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {[
            { title: "Cold Water Plumbing Application", desc: "Residential domestic cold potable water lines, apartment risers, and concealed bathroom plumbing." },
            { title: "Water Distribution Mains", desc: "Municipal and community ring mains, overhead tank supply loops, and residential distribution networks." },
            { title: "Swimming Pools", desc: "High-flow recirculation headers, skimmer returns, and chemical chlorination circulation loops." },
            { title: "Plants & Tanning Plants", desc: "Acid and alkaline chemical lines in industrial processing factories and leather tanning facilities." },
            { title: "Salt Water Line", desc: "Coastal brine conveying, seawater reverse osmosis (SWRO) intake headers, and marine aquaculture pipelines." },
            { title: "Industrial Process Lines", desc: "Corrosive chemical slurry, plating baths, and manufacturing fluid transport headers." },
            { title: "Hand Pumps", desc: "Village community deep-well hand pump suction risers with high tensile thread joints." },
            { title: "Down Take Lines", desc: "Multi-story rooftop overhead storage tank down-take supply manifolds to individual floor units." },
            { title: "Sugar, Paper & Distillery Industries", desc: "Heavy organic chemical and aggressive byproduct transport piping with zero internal scale accumulation." }
          ].map((app, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:border-[#053C82] transition-colors">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-bold text-slate-900 text-sm">{app.title}</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">{app.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
