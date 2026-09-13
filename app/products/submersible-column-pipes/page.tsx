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
  AlertTriangle,
  Wrench
} from "lucide-react";
import { useRFQ } from "@/components/layout/SiteLayoutClient";

export default function ColumnProductPage() {
  const { openRFQ } = useRFQ();

  const comparisonData = [
    {
      property: "Long life",
      idol: "Idol uPVC Column Pipes do not react with acidic or alkaline water and have an exceptionally long operational life in bore wells (50+ years).",
      steel: "Steel pipes are prone to rust, galvanic corrosion & oxidation, causing rapid perforation and expensive premature replacements."
    },
    {
      property: "Light weight",
      idol: "Pipes are light in weight (1/5th of steel) and are remarkably easy to handle, transport, install, and pull out during pump maintenance.",
      steel: "Pipes are excessively heavy; immense mechanical winch effort and crane equipment are required for installation or servicing."
    },
    {
      property: "Smooth internal surface",
      idol: "Internal surface is mirror-smooth; low head loss due to friction results in 10% to 30% higher water discharge and power savings.",
      steel: "Rough internal surface with continuous rust encrustation causes severe friction head loss, resulting in significantly lower water discharge."
    },
    {
      property: "Leak proof joints",
      idol: "Dual elastomeric rubber rings are embedded with precision CNC square threads at every joint, ensuring 100% leak-proof connection.",
      steel: "Taper threads rust out over time, leading to joint blowouts, pressure drop, and loss of pump drop strings in the bore."
    },
    {
      property: "Strong threaded joints",
      idol: "Specially engineered square threads that do not cross-thread, corrode, rust, or deteriorate under heavy pump motor kickback torque.",
      steel: "Threads are vulnerable to chemical rust and thread stripping easily under rotational startup torque."
    }
  ];

  const columnClassSpecs = [
    { classType: "Tiny & Shallow (V4)", sizes: '1" to 1 1/4"', depthMtr: "Up to 80m", maxLoad: "1,500 kgf", app: "Domestic & small farm borewells" },
    { classType: "Medium Well", sizes: '1" to 2"', depthMtr: "Up to 150m", maxLoad: "3,500 kgf", app: "Medium depth agricultural irrigation" },
    { classType: "Standard Well", sizes: '1 1/4" to 3"', depthMtr: "Up to 250m", maxLoad: "7,500 kgf", app: "Commercial farm deep borewells" },
    { classType: "Heavy Duty", sizes: '2" to 4"', depthMtr: "Up to 300m", maxLoad: "11,000 kgf", app: "Multi-stage deep submersible pumps" },
    { classType: "Super Heavy Duty", sizes: '2 1/2" to 5"', depthMtr: "Up to 350m+", maxLoad: "15,000 kgf", app: "Extreme depth aquifers & mining dewatering" }
  ];

  const authenticFeatures = [
    { title: "Long Life", desc: "Completely inert to chemical attack from acidic, alkaline, or saline subterranean groundwater aquifers." },
    { title: "Power Saver (10–30% Extra Water)", desc: "Mirror-smooth bore minimizes frictional head loss, delivering 10% to 30% greater water yield per kilowatt of pump power." },
    { title: "Light Weight & Easy Transport", desc: "Weighs only a fraction of GI pipe; reduces freight charges and enables manual two-man field handling." },
    { title: "Zero Electrolyte Deposition", desc: "Non-conductive polymer prevents galvanic electrolysis and electrical pump motor stray current damage." },
    { title: "No Rusting or Corrosion", desc: "Eliminates brownish water, iron oxide discoloration, and sediment clogging in irrigation sprinklers." },
    { title: "High Impact Resistance", desc: "Formulated with impact modifiers to withstand rough handling during lowered deepwell installation." },
    { title: "Easy & Cost-Effective Fitment", desc: "Pre-threaded with square CNC threads and locking rings—requires no threading tools or messy solvent cement on site." }
  ];

  const storageGuidelines = [
    "Pipes should preferably be stored indoors away from open flame or direct long-term sun exposure.",
    "The pipes must be stored on level ground completely free of sharp stones, rocks, or jagged objects.",
    "Do not throw, drop, or heave the pipes on the ground during unloading.",
    "Do not drag or push the pipes violently from the truck bed.",
    "Contact of pipe spigots and threaded couplers with sharp metal objects must be strictly avoided.",
    "The storage surface should be clean, level, and dry."
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
            <span className="text-white font-medium">Submersible Column Pipes</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#DD612A]" /> High Tensile Biaxial Polymer • Up to 350m Depth
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Submersible Column & Drop/Riser Pipes
              </h1>
              <p className="text-base text-blue-100 max-w-2xl leading-relaxed">
                The perfect replacement for MS, GI, and SS riser pipes. Engineered with specially designed square CNC threads and elastomeric O-rings capable of supporting up to 15,000 kgf of suspended submersible pump motor load in salty, sandy, and chemically aggressive water.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openRFQ("submersible-column-pipe")}
                  className="px-6 py-3 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-sm transition-all shadow-lg shadow-orange-950/20"
                >
                  Contact for Column Pipe & Price
                </button>
                <Link
                  href="/calculator"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
                >
                  Calculate Deepwell Load & Tensile Safety →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center p-6">
              <div className="relative w-full h-full">
                <Image
                  src="/images/idol/cat_column_pipe.webp"
                  alt="Submersible Column Pipes"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 2026 Current Affairs & Groundwater Pumping Intelligence */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-blue-800/60 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#DD612A] text-white text-[11px] font-bold uppercase tracking-wider">
              2026 Current Affairs & Agricultural Deepwell Advisory
            </div>
            <h3 className="text-xl font-bold">Deep Aquifer Water Table Shift & Energy-Efficient Riser Mandate</h3>
            <p className="text-xs text-blue-200 max-w-3xl leading-relaxed">
              As groundwater tables drop below 200 meters in arid zones across Gujarat, Rajasthan, and Maharashtra, pump power consumption spikes exponentially with heavy, corroded GI pipes. Transitioning to IDOL uPVC column pipes reduces total motor head loss, saving up to 30% in monthly electricity tariffs while preventing catastrophic rusted pipe drops into deep tube wells.
            </p>
          </div>
          <button
            onClick={() => openRFQ("submersible-column-pipe")}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white text-[#053C82] hover:bg-blue-50 font-bold text-xs transition-colors shadow-md"
          >
            Download Column Tensile Chart
          </button>
        </div>
      </section>

      {/* 3. Converted Table from idolpipe image: subComparison-1024x465.webp */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
              Authentic Engineering Data (Converted from Technical Chart)
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
              Comparison Chart: IDOL uPVC Column Pipes vs Mild Steel (GI) Pipes
            </h2>
          </div>
          <div className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg font-mono">
            Direct Material Comparison
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#053C82] text-white uppercase text-[11px] font-semibold tracking-wider">
                <tr>
                  <th className="p-4 w-1/4">Material Property Requirement</th>
                  <th className="p-4 w-3/8 bg-blue-900">IDOL uPVC Column Pipes</th>
                  <th className="p-4 w-3/8 bg-slate-800">Mild Steel or Galvanized Steel Pipes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900 font-sans text-sm">{row.property}</td>
                    <td className="p-4 text-emerald-800 font-medium bg-emerald-50/30 leading-relaxed">{row.idol}</td>
                    <td className="p-4 text-rose-800 font-medium bg-rose-50/30 leading-relaxed">{row.steel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Column Pipe Depth & Load Specification Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <h3 className="text-xl font-bold text-slate-900">Technical Depth & Load Classification Matrix</h3>
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#053C82] text-white uppercase text-[11px] font-semibold tracking-wider">
                <tr>
                  <th className="p-4">Classification Grade</th>
                  <th className="p-4">Size Range</th>
                  <th className="p-4">Recommended Installation Depth</th>
                  <th className="p-4">Tensile Load Safety</th>
                  <th className="p-4">Typical Borewell Applications</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {columnClassSpecs.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900 font-sans">{row.classType}</td>
                    <td className="p-4">{row.sizes}</td>
                    <td className="p-4 font-bold text-blue-700">{row.depthMtr}</td>
                    <td className="p-4 font-bold text-[#DD612A]">{row.maxLoad}</td>
                    <td className="p-4 text-slate-600 font-sans">{row.app}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Authentic Salient Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
            Engineering Advantages
          </span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Salient Features of IDOL Column Pipes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
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

      {/* 6. Authentic Handling & Storage Guidelines from idolpipe */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 text-[#053C82]">
            <Wrench className="w-6 h-6 shrink-0 text-[#DD612A]" />
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Handling & Storage Guidelines for Column Pipes
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Authentic field recommendations from IDOL manufacturing division
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {storageGuidelines.map((guide, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 space-y-1 shadow-sm">
                <span className="font-bold text-[#DD612A] text-xs">Directive #{idx + 1}</span>
                <p className="text-slate-700 leading-relaxed">{guide}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Applications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <h3 className="text-xl font-bold text-slate-900">Submersible Column Pipes Applications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
          {[
            { title: "Agricultural Irrigation", desc: "Water rising from submersible and jet pumps for irrigation across all field crops." },
            { title: "Domestic & Municipal Water", desc: "Lifting potable water from community tube wells and industrial water supply bores." },
            { title: "Aggressive Water & Mining", desc: "Perfect replacement for metallic pipes in salty, sandy, and chemically aggressive water conditions." }
          ].map((app, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <h4 className="font-bold text-slate-900 text-sm">{app.title}</h4>
              <p className="text-slate-600 leading-relaxed">{app.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
