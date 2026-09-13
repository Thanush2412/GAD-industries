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
  Compass
} from "lucide-react";
import { useRFQ } from "@/components/layout/SiteLayoutClient";

export default function CasingProductPage() {
  const { openRFQ } = useRFQ();

  const is12818Data = [
    { sizeInch: '4" (100mm)', odMm: "113.0 – 113.3", csWall: "4.0 – 4.6 mm", csDepth: "Up to 80m", cmWall: "5.0 – 5.7 mm", cmDepth: "Up to 250m", thread: "Trapezoid / Metric" },
    { sizeInch: '4 1/2" (115mm)', odMm: "125.0 – 125.3", csWall: "4.5 – 5.2 mm", csDepth: "Up to 80m", cmWall: "5.5 – 6.3 mm", cmDepth: "Up to 250m", thread: "Trapezoid / Metric" },
    { sizeInch: '5" (125mm)', odMm: "140.0 – 140.4", csWall: "5.0 – 5.7 mm", csDepth: "Up to 80m", cmWall: "6.5 – 7.3 mm", cmDepth: "Up to 250m", thread: "Trapezoid / Metric" },
    { sizeInch: '6" (150mm)', odMm: "165.0 – 165.4", csWall: "5.7 – 6.5 mm", csDepth: "Up to 80m", cmWall: "7.5 – 8.5 mm", cmDepth: "Up to 250m", thread: "Trapezoid / Metric" },
    { sizeInch: '7" (175mm)', odMm: "200.0 – 200.5", csWall: "7.0 – 8.0 mm", csDepth: "Up to 80m", cmWall: "8.8 – 10.0 mm", cmDepth: "Up to 250m", thread: "Trapezoid / Metric" },
    { sizeInch: '8" (200mm)', odMm: "225.0 – 225.5", csWall: "7.8 – 9.0 mm", csDepth: "Up to 80m", cmWall: "10.0 – 11.4 mm", cmDepth: "Up to 250m", thread: "Trapezoid / Metric" },
    { sizeInch: '10" (250mm)', odMm: "280.0 – 280.6", csWall: "9.6 – 11.0 mm", csDepth: "Up to 80m", cmWall: "12.5 – 14.2 mm", cmDepth: "Up to 250m", thread: "Trapezoid / Metric" }
  ];

  const screenSpecs = [
    { slotWidth: "0.20 mm (Fine)", aquifer: "Fine sandy silt & clay layers", flowEfficiency: "Low velocity anti-sand suction" },
    { slotWidth: "0.50 mm (Medium)", aquifer: "Medium sand & gravel formation", flowEfficiency: "High volumetric ingress" },
    { slotWidth: "0.75 mm (Standard)", aquifer: "Coarse sand & crushed rock", flowEfficiency: "Maximum recharge permeability" },
    { slotWidth: "1.00 mm (Coarse)", aquifer: "Pebble beds & aquifer gravel packs", flowEfficiency: "Full capacity deep extraction" }
  ];

  const authenticFeatures = [
    { title: "Non-Corrosive Deep Casing", desc: "uPVC is completely inert towards subterranean chemical corrosion, acid soils, and high sulfur concentrations." },
    { title: "Salty & Sandy Water Resistant", desc: "Ideally suited for brackish coastal aquifers and sandy boreholes without abrasive wall wear or pitting." },
    { title: "High Collapse Resistance", desc: "Engineered with optimum wall thickness to withstand external hydrostatic and tectonic soil pressure up to 250 meters." },
    { title: "Precision Trapezoid Threads", desc: "Heavy square trapezoidal male-female threaded ends ensure rapid alignment and leak-free joint seal integrity." },
    { title: "Horizontal Ribbed Screens", desc: "Ribbed screen casing prevents sand grains from choking the slot orifices, multiplying inflow surface area by 2.5x." },
    { title: "Easy Installation & Light Weight", desc: "Can be lowered rapidly into deep bores using simple farm tripods without requiring heavy industrial cranes." }
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
            <span className="text-white font-medium">uPVC Borehole Casing Pipes</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#DD612A]" /> IS:12818:2010 (CS & CM) Certified
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                uPVC Borehole Casing & Ribbed Screen Pipes
              </h1>
              <p className="text-base text-blue-100 max-w-2xl leading-relaxed">
                Manufactured from high-strength unplasticized PVC conforming to IS:12818 in Shallow Well (CS up to 80m) and Medium Well (CM up to 250m). Chemically inert, rust-proof, and engineered with precision trapezoidal threads and anti-clogging screen slots.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openRFQ("upvc-casing-borewell")}
                  className="px-6 py-3 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-sm transition-all shadow-lg shadow-orange-950/20"
                >
                  Contact for Casing Pipe & Price
                </button>
                <Link
                  href="/updates#borewell-gravel-envelope"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
                >
                  Read Gravel Packing Guide →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center p-6">
              <div className="relative w-full h-full">
                <Image
                  src="/images/idol/cat_casing_pipe.webp"
                  alt="uPVC Borehole Casing Pipes"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 2026 Current Affairs & Groundwater Recharging Directives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-blue-800/60 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#DD612A] text-white text-[11px] font-bold uppercase tracking-wider">
              2026 Current Affairs & Water Conservation Norms
            </div>
            <h3 className="text-xl font-bold">Atal Bhujal Yojana & Mandatory Rainwater Percolation Pit Mandate</h3>
            <p className="text-xs text-blue-200 max-w-3xl leading-relaxed">
              Under 2026 Central Ground Water Authority (CGWA) rules, all industrial commercial properties and group housing schemes must install artificial groundwater recharge shafts with certified ribbed slotted screen casing pipes. IDOL ribbed screens offer 250% higher inflow percolation efficiency while arresting fine sand ingress.
            </p>
          </div>
          <button
            onClick={() => openRFQ("upvc-casing-borewell")}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white text-[#053C82] hover:bg-blue-50 font-bold text-xs transition-colors shadow-md"
          >
            Download CGWA Recharging Kit
          </button>
        </div>
      </section>

      {/* 3. Converted Table: IS:12818 CS & CM Dimensional Specification Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
              Authentic Engineering Data (Converted from Technical Chart)
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
              IS:12818 Casing Pipe Specifications (CS & CM Classes)
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
                  <th className="p-4" rowSpan={2}>Nominal Size</th>
                  <th className="p-4 text-center" rowSpan={2}>Outside Dia (mm)</th>
                  <th className="p-4 text-center bg-blue-900" colSpan={2}>Class CS (Shallow Well)</th>
                  <th className="p-4 text-center bg-blue-950" colSpan={2}>Class CM (Medium Well)</th>
                  <th className="p-4 text-center" rowSpan={2}>Thread Joint</th>
                </tr>
                <tr className="bg-blue-800 text-blue-100 text-[10px]">
                  <th className="p-3 text-center">Wall Thickness</th>
                  <th className="p-3 text-center">Depth Limit</th>
                  <th className="p-3 text-center">Wall Thickness</th>
                  <th className="p-3 text-center">Depth Limit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {is12818Data.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900 font-sans">{row.sizeInch}</td>
                    <td className="p-4 text-center">{row.odMm}</td>
                    <td className="p-4 text-center text-blue-700 font-semibold">{row.csWall}</td>
                    <td className="p-4 text-center text-slate-600">{row.csDepth}</td>
                    <td className="p-4 text-center font-bold text-[#DD612A]">{row.cmWall}</td>
                    <td className="p-4 text-center font-bold text-emerald-700">{row.cmDepth}</td>
                    <td className="p-4 text-center text-slate-700 font-sans">{row.thread}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Ribbed Screen Slotting Dimensions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <h3 className="text-xl font-bold text-slate-900">Screen & Slotted Pipe Specifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {screenSpecs.map((scr, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-blue-50 text-[#053C82]">
                Slot Width {scr.slotWidth}
              </span>
              <h4 className="font-bold text-slate-900 text-sm">{scr.aquifer}</h4>
              <p className="text-slate-600 leading-relaxed">{scr.flowEfficiency}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Authentic Salient Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
            Engineering Advantages
          </span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Salient Features of IDOL Casing Pipes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
          {authenticFeatures.map((feat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-[#053C82] font-bold">
                {idx + 1}
              </div>
              <h4 className="font-bold text-slate-900 text-sm">{feat.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Applications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <h3 className="text-xl font-bold text-slate-900">Application of Casing Pipes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {[
            "Tube well borehole lining in agricultural, domestic, and industrial sectors",
            "Screen slotted pipes for rainwater recharging percolation pits & gravel aquifers",
            "Mine shaft dewatering and saline subterranean groundwater drainage",
            "Chemical processing effluent disposal and coastal salt-water handling"
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
