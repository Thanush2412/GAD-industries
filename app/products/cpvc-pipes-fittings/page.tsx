"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Sun,
  Flame,
  Award,
  Sparkles,
  ArrowRight,
  Droplets,
  Layers,
  Wrench,
  Download
} from "lucide-react";
import { useRFQ } from "@/components/layout/SiteLayoutClient";

export default function CPVCProductPage() {
  const { openRFQ } = useRFQ();

  const dimensionalData = [
    { sizeInch: '1/2"', sizeMm: 15, sdr135Wall: "1.4 – 1.9", sdr135P27: "25.29 / 359.7", sdr135P82: "6.10 / 86.7", sdr11Wall: "1.7 – 2.2", sdr11P27: "30.4 / 432.5", sdr11P82: "7.15 / 101.6", pack3m: 75, pack5m: 50 },
    { sizeInch: '3/4"', sizeMm: 20, sdr135Wall: "1.7 – 2.2", sdr135P27: "25.29 / 359.7", sdr135P82: "6.10 / 86.7", sdr11Wall: "2.0 – 2.5", sdr11P27: "30.4 / 432.5", sdr11P82: "7.15 / 101.6", pack3m: 50, pack5m: 35 },
    { sizeInch: '1"', sizeMm: 25, sdr135Wall: "2.1 – 2.6", sdr135P27: "25.29 / 359.7", sdr135P82: "6.10 / 86.7", sdr11Wall: "2.6 – 3.1", sdr11P27: "30.4 / 432.5", sdr11P82: "7.15 / 101.6", pack3m: 30, pack5m: 20 },
    { sizeInch: '1 1/4"', sizeMm: 32, sdr135Wall: "2.6 – 3.1", sdr135P27: "25.29 / 359.7", sdr135P82: "6.10 / 86.7", sdr11Wall: "3.2 – 3.7", sdr11P27: "30.4 / 432.5", sdr11P82: "7.15 / 101.6", pack3m: 25, pack5m: 15 },
    { sizeInch: '1 1/2"', sizeMm: 40, sdr135Wall: "3.1 – 3.6", sdr135P27: "25.29 / 359.7", sdr135P82: "6.10 / 86.7", sdr11Wall: "3.8 – 4.3", sdr11P27: "30.4 / 432.5", sdr11P82: "7.15 / 101.6", pack3m: 15, pack5m: 10 },
    { sizeInch: '2"', sizeMm: 50, sdr135Wall: "4.0 – 4.5", sdr135P27: "25.29 / 359.7", sdr135P82: "6.10 / 86.7", sdr11Wall: "4.95 – 5.45", sdr11P27: "30.4 / 432.5", sdr11P82: "7.15 / 101.6", pack3m: 10, pack5m: 5 }
  ];

  const fittingsCatalog = [
    { name: "Coupler / Socket", sizes: '1/2" to 2"', desc: "Seamless solvent weld union", type: "Standard" },
    { name: "Elbow 90°", sizes: '1/2" to 2"', desc: "Full-bore direction change", type: "Standard" },
    { name: "Equal Tee", sizes: '1/2" to 2"', desc: "High-flow 3-way distribution", type: "Standard" },
    { name: "Brass Elbow 90°", sizes: '1/2" x 1/2" to 1" x 1/2"', desc: "DZR brass insert for fixture taps", type: "Brass Inserted" },
    { name: "Brass Tee", sizes: '1/2" x 1/2" to 1" x 1/2"', desc: "Heavy threaded sanitary branch", type: "Brass Inserted" },
    { name: "Brass MTA", sizes: '1/2" to 2"', desc: "Male brass thread to metal adapter", type: "Brass Inserted" },
    { name: "Brass FTA", sizes: '1/2" to 2"', desc: "Female brass threaded transition", type: "Brass Inserted" },
    { name: "Union (Standard & Brass)", sizes: '1/2" to 2"', desc: "Detachable service joint with EPDM O-ring", type: "Mechanical" },
    { name: "Ball Valve (Handle)", sizes: '1/2" to 2"', desc: "Quarter-turn smooth flow regulator", type: "Valves" },
    { name: "End Cap", sizes: '1/2" to 2"', desc: "Hydrostatic end seal termination", type: "Standard" },
    { name: "Step Over Bend", sizes: '1/2" to 1"', desc: "Pipe crossover clearance fitting", type: "Specialty" },
    { name: "Reducing Bush / Coupler", sizes: '3/4"x1/2" to 2"x1-1/2"', desc: "Gradual pressure step down", type: "Standard" }
  ];

  const authenticFeatures = [
    { title: "Better Tensile Strength", desc: "Formulated to endure extreme internal pressure surges and water hammer shocks without bursting." },
    { title: "Better Flexural Strength", desc: "High modulus elasticity eliminates pipe sagging on horizontal hot water distribution runs." },
    { title: "Chemical & Corrosion Proof", desc: "Resistant to aggressive acids, alkalis, hard ground waters, and all environmental oxidation." },
    { title: "Durable & Long Life", desc: "Engineered for 50+ years of continuous service under certified working temperatures and pressures." },
    { title: "100% Recyclable", desc: "Eco-friendly thermoplastic compound with minimal carbon footprint during production and recycling." },
    { title: "Weather & UV Resistant", desc: "High titanium dioxide (TiO2) stabilization shields piping from solar UV degradation in exterior runs." },
    { title: "Safe For Drinking Water", desc: "Zero lead, non-toxic formulation complying with strict IS:15778 potable drinking water hygiene mandates." },
    { title: "100% Chlorine Resisted", desc: "Impervious to chlorinated municipal water supplies and sanitizing chemicals with zero degradation." },
    { title: "Highly Profitable", desc: "Substantial cost savings in material, freight, and labor compared to copper, GI, or PPR systems." },
    { title: "Zero Maintenance", desc: "Smooth interior bore (Hazen-Williams C=150) prevents scaling, limescale, pitting, and bio-film build-up." }
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Breadcrumb & Hero */}
      <section className="bg-[#053C82] text-white pt-10 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="text-xs text-blue-200 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-white font-medium">cPVC Hot & Cold System</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#DD612A]" /> ASTM D2846 / ASTM F441 / IS:15778 Certified
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                cPVC Hot & Cold Pipe and Fittings System
              </h1>
              <p className="text-base text-blue-100 max-w-2xl leading-relaxed">
                Manufactured from premium virgin-grade Chlorinated Polyvinyl Chloride resins with 67–69% chlorine content. Sustains continuous operating temperatures up to 93°C (200°F) with 100% lead-free potable drinking water certification under active 2026 Jal Jeevan Mission guidelines.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openRFQ("cpvc-hot-cold")}
                  className="px-6 py-3 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-sm transition-all shadow-lg shadow-orange-950/20"
                >
                  Request Factory Submittal & RFQ
                </button>
                <Link
                  href="/calculator"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
                >
                  Calculate Hazen-Williams Flow →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center p-6">
              <div className="relative w-full h-full">
                <Image
                  src="/images/idol/cat_cpvc.webp"
                  alt="cPVC Hot & Cold Pipes & Fittings"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 2026 Current Affairs & National Potable Standard Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-blue-800/60 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#DD612A] text-white text-[11px] font-bold uppercase tracking-wider">
              2026 Current Affairs & Compliance Directive
            </div>
            <h3 className="text-xl font-bold">Jal Jeevan Mission (JJM) Lead-Free Potable Water Mandate</h3>
            <p className="text-xs text-blue-200 max-w-3xl leading-relaxed">
              Under the latest 2026 Ministry of Jal Shakti directives, all national rural and urban drinking water infrastructure projects strictly mandate heavy-metal-free, organotin/calcium-zinc stabilized cPVC piping certified to IS:15778. IDOL cPVC completely exceeds these toxicity and pressure benchmarks with verified 0.00% lead leaching.
            </p>
          </div>
          <button
            onClick={() => openRFQ("cpvc-hot-cold")}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white text-[#053C82] hover:bg-blue-50 font-bold text-xs transition-colors shadow-md"
          >
            Download JJM Approval Kit
          </button>
        </div>
      </section>

      {/* 3. Key Technical Benchmarks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <span className="text-3xl font-black text-[#DD612A] font-mono">93°C</span>
            <p className="text-xs font-bold uppercase text-slate-500 mt-1">Continuous Max Temp</p>
            <p className="text-xs text-slate-400 mt-1">Intermittent peak to 105°C</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <span className="text-3xl font-black text-[#053C82] font-mono">30.4 Bar</span>
            <p className="text-xs font-bold uppercase text-slate-500 mt-1">SDR-11 Pressure</p>
            <p className="text-xs text-slate-400 mt-1">432.5 PSI at 27°C ambient</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <span className="text-3xl font-black text-emerald-600 font-mono">102°C</span>
            <p className="text-xs font-bold uppercase text-slate-500 mt-1">Vicat Softening</p>
            <p className="text-xs text-slate-400 mt-1">Exceeds ASTM 100°C standard</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <span className="text-3xl font-black text-[#053C82] font-mono">32 kg/cm²</span>
            <p className="text-xs font-bold uppercase text-slate-500 mt-1">Hydrostatic Burst</p>
            <p className="text-xs text-slate-400 mt-1">+28% above ASTM 25 kg/cm²</p>
          </div>
        </div>
      </section>

      {/* 4. Converted Tables from idolpipe images: SDR 11 & SDR 13.5 Specification Matrix (cpvcpiptab.webp) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
              Authentic Engineering Data (Converted from Technical Chart)
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
              Dimensional & Technical Details (IS:15778 / ASTM D2846)
            </h2>
          </div>
          <div className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg font-mono">
            Standard Length: 3.0m & 5.0m
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#053C82] text-white uppercase text-[11px] font-semibold tracking-wider">
                <tr>
                  <th className="p-4" colSpan={2}>Outer Diameter</th>
                  <th className="p-4 text-center bg-blue-900" colSpan={3}>SDR-13.5 Class</th>
                  <th className="p-4 text-center bg-blue-950" colSpan={3}>SDR-11 Class</th>
                  <th className="p-4 text-center" colSpan={2}>Packing Details</th>
                </tr>
                <tr className="bg-blue-800 text-blue-100 text-[10px]">
                  <th className="p-3">N.B. Size (Inch)</th>
                  <th className="p-3">N.B. Size (mm)</th>
                  <th className="p-3">Wall Thickness (mm)</th>
                  <th className="p-3">Rating @ 27°C (Kg/cm² / PSI)</th>
                  <th className="p-3">Rating @ 82°C (Kg/cm² / PSI)</th>
                  <th className="p-3">Wall Thickness (mm)</th>
                  <th className="p-3">Rating @ 27°C (Kg/cm² / PSI)</th>
                  <th className="p-3">Rating @ 82°C (Kg/cm² / PSI)</th>
                  <th className="p-3 text-center">3 Mtr Bundle</th>
                  <th className="p-3 text-center">5 Mtr Bundle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {dimensionalData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900 font-sans">{row.sizeInch}</td>
                    <td className="p-4">{row.sizeMm}</td>
                    <td className="p-4 font-semibold text-slate-800">{row.sdr135Wall}</td>
                    <td className="p-4 text-blue-700">{row.sdr135P27}</td>
                    <td className="p-4 text-slate-600">{row.sdr135P82}</td>
                    <td className="p-4 font-semibold text-[#053C82]">{row.sdr11Wall}</td>
                    <td className="p-4 text-emerald-700 font-bold">{row.sdr11P27}</td>
                    <td className="p-4 text-orange-700">{row.sdr11P82}</td>
                    <td className="p-4 text-center font-bold text-slate-700">{row.pack3m} pcs</td>
                    <td className="p-4 text-center font-bold text-slate-700">{row.pack5m} pcs</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Converted Lab Comparison Tables: Vicat Softening Point & Hydrostatic Water Test (cpvc-1-1.webp & cpvc-2.webp) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vicat Softening Point */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                <Flame className="w-5 h-5" /> Vicat Softening Point Test
              </div>
              <span className="text-xs bg-rose-50 text-rose-700 font-mono px-2 py-0.5 rounded">ASTM D1525 / IS:15778</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Thermal resistance under continuous 50N load. Higher Vicat temperature ensures zero pipe softening or dimensional distortion during extreme geyser hot water cycles.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">ASTM Standard Benchmark:</span>
                <span className="font-mono font-bold text-slate-500">100°C</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div className="bg-slate-400 h-full rounded-full" style={{ width: "95%" }}></div>
              </div>
              <div className="flex items-center justify-between text-xs pt-1">
                <span className="font-bold text-[#053C82]">IDOL cPVC Pipe (Actual Certified):</span>
                <span className="font-mono font-black text-rose-600 text-sm">102°C</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-rose-500 to-[#DD612A] h-full rounded-full" style={{ width: "100%" }}></div>
              </div>
              <div className="text-[11px] text-emerald-700 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 font-medium">
                ✓ Exceeds ASTM Standard requirements by +2°C higher thermal stability threshold.
              </div>
            </div>
          </div>

          {/* Hydrostatic Water Test */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                <Droplets className="w-5 h-5" /> Hydrostatic Water Proof Test
              </div>
              <span className="text-xs bg-blue-50 text-blue-700 font-mono px-2 py-0.5 rounded">ASTM D1598 / D2846</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sustained internal hydraulic pressure endurance without rupture, weeping, or structural failure.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">ASTM Standard Benchmark:</span>
                <span className="font-mono font-bold text-slate-500">25 kg/cm²</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div className="bg-slate-400 h-full rounded-full" style={{ width: "78%" }}></div>
              </div>
              <div className="flex items-center justify-between text-xs pt-1">
                <span className="font-bold text-[#053C82]">IDOL cPVC Pipe (Actual Certified):</span>
                <span className="font-mono font-black text-emerald-600 text-sm">32 kg/cm²</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-emerald-500 h-full rounded-full" style={{ width: "100%" }}></div>
              </div>
              <div className="text-[11px] text-emerald-700 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 font-medium">
                ✓ Delivers +28% higher burst safety margin against municipal hydraulic water hammer surges.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Complete Fittings Catalogue (1.webp to 27.webp converted to interactive table & cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
              Complete Range
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
              cPVC Molded Fittings & DZR Brass Inserts
            </h2>
          </div>
          <button
            onClick={() => openRFQ("cpvc-hot-cold")}
            className="text-xs font-semibold text-[#053C82] hover:text-[#DD612A] flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-4 h-4" /> Request Comprehensive Fittings List
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {fittingsCatalog.map((fit, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-[#053C82] transition-colors space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-blue-50 text-[#053C82]">
                  {fit.type}
                </span>
                <span className="text-[11px] font-mono text-slate-500">{fit.sizes}</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">{fit.name}</h4>
              <p className="text-xs text-slate-500">{fit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Authentic Salient Features (All 10 from idolpipe.com) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
            Engineering Advantages
          </span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Salient Features of IDOL cPVC Pipes & Fittings
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

      {/* 8. Field Directives: Solar Heater Isolation Loop (cpvc-3.webp & cpvc-5.webp) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-amber-50/80 border border-amber-200 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 text-[#B45309]">
            <Sun className="w-6 h-6 shrink-0 text-[#DD612A]" />
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Crucial Field Directive: Rooftop Solar Heater & Geyser Loop
              </h3>
              <p className="text-xs text-amber-800 mt-0.5">
                Technical instruction from IDOL installation safety manual
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700 leading-relaxed">
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-amber-200 shadow-sm">
              <strong className="text-slate-900 font-bold block text-sm">1. 1000mm Metallic Transition Buffer:</strong>
              Never connect cPVC pipe directly to the outlet nipple of a rooftop solar heater tank or high-capacity electric geyser. Always install a minimum <strong>1000mm (1 meter) metallic transition nipple or loop</strong> (copper, brass, or GI) preceding the cPVC line to dissipate extreme radiant stagnation heat and prevent localized thermal stress.
            </div>

            <div className="space-y-2 bg-white p-5 rounded-2xl border border-amber-200 shadow-sm">
              <strong className="text-slate-900 font-bold block text-sm">2. Thermal Expansion & Pipe Support Pitch:</strong>
              For continuous hot water loops at 82°C, pipe brackets and hangers must be positioned every <strong>0.9m (for 1/2") to 1.2m (for 1")</strong>. Never clamp pipes rigidly; allow axial expansion movement, and install expansion loops every 15 meters on extended vertical riser stacks.
            </div>
          </div>
        </div>
      </section>

      {/* 9. Applications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <h3 className="text-xl font-bold text-slate-900">Recommended Project Applications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {[
            "High-rise residential and multi-story luxury condominiums",
            "Commercial hotels, resorts, hospitals, and cleanrooms",
            "Solar water heater loops and industrial boiler circulation",
            "Chemical processing, acid effluent conveying, and food beverage lines"
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
