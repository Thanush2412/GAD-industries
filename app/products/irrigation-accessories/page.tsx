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
  Settings,
  Filter
} from "lucide-react";
import { useRFQ } from "@/components/layout/SiteLayoutClient";

export default function AccessoriesProductPage() {
  const { openRFQ } = useRFQ();

  const miniSprinklerData = [
    { pressureBar: "1.5 Bar", flowLph: "475 Lit/hr", wettedDia: "18.0 mtr", rate9x9: "5.7 mm/hr", rate10x10: "4.6 mm/hr", rate9x12: "4.2 mm/hr" },
    { pressureBar: "2.0 Bar", flowLph: "535 Lit/hr", wettedDia: "19.0 mtr", rate9x9: "6.5 mm/hr", rate10x10: "5.3 mm/hr", rate9x12: "4.9 mm/hr" },
    { pressureBar: "2.5 Bar", flowLph: "600 Lit/hr", wettedDia: "19.5 mtr", rate9x9: "7.3 mm/hr", rate10x10: "5.9 mm/hr", rate9x12: "5.5 mm/hr" },
    { pressureBar: "3.0 Bar", flowLph: "655 Lit/hr", wettedDia: "20.0 mtr", rate9x9: "7.9 mm/hr", rate10x10: "6.4 mm/hr", rate9x12: "5.9 mm/hr" }
  ];

  const compressionFittings = [
    { name: "90° T-Coupling (Equal Tee)", sizes: "20mm to 110mm", type: "Compression" },
    { name: "90° Male-Threaded Tee", sizes: "20mm x 1/2\" to 90mm x 3\"", type: "Threaded" },
    { name: "90° Male-Threaded Elbow", sizes: "20mm x 1/2\" to 90mm x 3\"", type: "Threaded" },
    { name: "90° Elbow Coupling (Equal)", sizes: "20mm to 110mm", type: "Compression" },
    { name: "Straight Coupling (Joiner)", sizes: "20mm to 110mm", type: "Compression" },
    { name: "Male-Threaded Adapter (MTA)", sizes: "20mm x 1/2\" to 110mm x 4\"", type: "Threaded" },
    { name: "Female-Threaded Adapter (FTA)", sizes: "20mm x 1/2\" to 110mm x 4\"", type: "Threaded" },
    { name: "End Cap (MSA End Plug)", sizes: "20mm to 110mm", type: "Terminal Seal" },
    { name: "Reducing Coupling", sizes: "25x20mm to 110x90mm", type: "Reducer" },
    { name: "Service Saddle Clamp (Single/Double)", sizes: "50mm x 1/2\" to 200mm x 2\"", type: "Tapping Saddle" }
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
            <span className="text-white font-medium">Irrigation System Accessories</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#DD612A]" /> ISO / BIS Compliant Irrigation Hardware
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Irrigation System Accessories & Compression Fittings
              </h1>
              <p className="text-base text-blue-100 max-w-2xl leading-relaxed">
                Comprehensive range of micro-irrigation accessories, quick-fit PP compression couplings, disc & screen filters, venturi chemigation injectors, and mini-sprinkler assemblies engineered to complete high-efficiency farm installations.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openRFQ("irrigation-system-accessories")}
                  className="px-6 py-3 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-sm transition-all shadow-lg shadow-orange-950/20"
                >
                  Contact for Accessories Wholesale Price
                </button>
                <Link
                  href="/calculator"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
                >
                  Calculate Head Loss & Flow Rate →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center p-6">
              <div className="relative w-full h-full">
                <Image
                  src="/images/idol/cat_fittings_sand.webp"
                  alt="Irrigation System Accessories"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 2026 Current Affairs & Smart Fertigation Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-emerald-800/60 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#DD612A] text-white text-[11px] font-bold uppercase tracking-wider">
              2026 Current Affairs & Precision Fertigation Trends
            </div>
            <h3 className="text-xl font-bold">Automation in Micro-Irrigation & Chemical Dosing Subsidies</h3>
            <p className="text-xs text-emerald-200 max-w-3xl leading-relaxed">
              Under modern 2026 PMKSY automation benchmarks, farmers adopting integrated venturi fertigation and disc filtration qualify for targeted input cost deductions. IDOL compression fittings feature UV-stabilized virgin polypropylenes with NBR sealing gaskets rated to PN 16 pressure.
            </p>
          </div>
          <button
            onClick={() => openRFQ("irrigation-system-accessories")}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white text-emerald-950 hover:bg-emerald-50 font-bold text-xs transition-colors shadow-md"
          >
            Download Accessories Catalog
          </button>
        </div>
      </section>

      {/* 3. Converted Table from idolpipe image: MiniSpinkTable-1024x228.webp */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
              Authentic Engineering Data (Converted from Technical Chart)
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
              Mini Sprinkler Performance Matrix (Nozzle Size: 2.4 x 1.8 mm)
            </h2>
          </div>
          <div className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg font-mono">
            Tested under zero-wind laboratory conditions
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#053C82] text-white uppercase text-[11px] font-semibold tracking-wider">
                <tr>
                  <th className="p-4" rowSpan={2}>Working Pressure</th>
                  <th className="p-4 text-center" rowSpan={2}>Flow Rate (Lit/hr)</th>
                  <th className="p-4 text-center" rowSpan={2}>Wetted Diameter (Mtr)</th>
                  <th className="p-4 text-center bg-blue-900" colSpan={3}>Precipitation Rate (mm/hr) by Spacing (m x m)</th>
                </tr>
                <tr className="bg-blue-800 text-blue-100 text-[10px]">
                  <th className="p-3 text-center">9 x 9 m</th>
                  <th className="p-3 text-center">10 x 10 m</th>
                  <th className="p-3 text-center">9 x 12 m</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {miniSprinklerData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900 font-sans">{row.pressureBar}</td>
                    <td className="p-4 text-center font-bold text-blue-700">{row.flowLph}</td>
                    <td className="p-4 text-center font-semibold text-slate-800">{row.wettedDia}</td>
                    <td className="p-4 text-center font-bold text-emerald-700">{row.rate9x9}</td>
                    <td className="p-4 text-center font-bold text-[#053C82]">{row.rate10x10}</td>
                    <td className="p-4 text-center font-bold text-[#DD612A]">{row.rate9x12}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Compression Fittings Range (from idolpipe.com) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
              Fittings Catalogue
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
              Polypropylene Compression Fittings (PN 16)
            </h2>
          </div>
          <button
            onClick={() => openRFQ("irrigation-system-accessories")}
            className="text-xs font-semibold text-[#053C82] hover:text-[#DD612A] flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-4 h-4" /> Download Compression Fittings Price List
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {compressionFittings.map((fit, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-[#053C82] transition-colors space-y-2">
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-blue-50 text-[#053C82]">
                {fit.type}
              </span>
              <h4 className="text-sm font-bold text-slate-900">{fit.name}</h4>
              <p className="text-xs font-mono text-slate-500">{fit.sizes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Applications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <h3 className="text-xl font-bold text-slate-900">Recommended Project Applications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {[
            "Polypropylene compression manifolds for farm HDPE pipelines",
            "Mini-sprinkler overhead frost protection and microclimate cooling in nurseries",
            "Venturi fertigation injection for high-value export horticulture",
            "Secondary filtration battery manifolds in open irrigation canals"
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
