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
  Filter,
  Activity
} from "lucide-react";
import { useRFQ } from "@/components/layout/SiteLayoutClient";

export default function DripProductPage() {
  const { openRFQ } = useRFQ();

  const flatDrip16mmData = [
    { mm: "0.15 mm", mil: "6 MIL", coilLength: "300 to 4,000 mtr", app: "Single-season row crops, watermelon & vegetables" },
    { mm: "0.20 mm", mil: "8 MIL", coilLength: "300 to 4,000 mtr", app: "Chili, tomato, onion, potato & cotton" },
    { mm: "0.25 mm", mil: "10 MIL", coilLength: "300 to 4,000 mtr", app: "Commercial cotton & open field horticulture" },
    { mm: "0.30 mm", mil: "12 MIL", coilLength: "300 to 4,000 mtr", app: "Multi-harvest sugarcane & banana" },
    { mm: "0.40 mm", mil: "16 MIL", coilLength: "300 to 2,500 mtr", app: "Heavy rocky soil & mechanized inter-cultivation" },
    { mm: "(ISI) CL-1 (0.55 mm)", mil: "22 MIL", coilLength: "300 to 2,500 mtr", app: "Certified government subsidy installations (IS:13488)" },
    { mm: "(ISI) CL-2 (0.75 mm)", mil: "30 MIL", coilLength: "300 to 2,000 mtr", app: "Permanent multi-year orchards & tea plantations" }
  ];

  const supportingComponents = [
    { name: "Media Sand Filter", desc: "Removes organic algae and suspended solids", role: "Primary Filtration" },
    { name: "Hydrocyclone Separator", desc: "Centrifugal sand and silt eliminator", role: "Primary Filtration" },
    { name: "Disc / Screen Filter", desc: "120 mesh / 130 micron barrier protection", role: "Secondary Filtration" },
    { name: "Venturi Fertilizer Injector", desc: "Precise proportional chemigation dosing", role: "Fertigation" },
    { name: "Continuous Air Release Valve", desc: "Kinetic vacuum relief & air evacuation", role: "Hydraulic Safety" },
    { name: "Pressure Regulating Valves", desc: "Stabilizes downstream lateral pressures", role: "Flow Control" },
    { name: "Drip Lateral Joiners & Starters", desc: "Quick-push polypropylene fittings", role: "Plumbing" },
    { name: "Service Saddles & Take-Offs", desc: "High-seal tapping off PVC sub-mains", role: "Header Tapping" }
  ];

  const authenticSalientFeatures = [
    { title: "Flat In-Line Emitter Design", desc: "Seamlessly welded internally during tube extrusion, preserving tube symmetry and smooth roll-out on farm fields." },
    { title: "Uniform Water Output", desc: "Wide turbulent vortex labyrinth path maintains consistent LPH discharge across extended 100-meter lateral rows." },
    { title: "High-Grade Virgin LLDPE", desc: "Manufactured from pure linear low-density polyethylene with UV carbon black masterbatch for multi-year field life." },
    { title: "Superior Anti-Clogging Performance", desc: "Self-cleaning turbulent water flow path prevents mineral salt crystallization and silt deposition inside emitters." },
    { title: "Controls Soil Moisture & Humidity", desc: "Delivers micro-droplets directly to the root zone without wetting foliage, cutting fungal weed infestations." },
    { title: "Saves Water, Fertilizer & Labor", desc: "Conserves 50% to 70% water compared to furrow flooding while cutting soluble fertilizer loss by 40%." }
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
            <span className="text-white font-medium">Precision Drip Irrigation Systems</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#DD612A]" /> IS:13488 / IS:12786 / ISO 9261 Certified
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Flat & Round Drip Irrigation Systems
              </h1>
              <p className="text-base text-blue-100 max-w-2xl leading-relaxed">
                Drip Irrigation System is the most productive way of providing supplement for growing crops. With this system water distribution is done in such a way that each plant gets the precise amount of water based on its physiological needs. Dripperlines help farmers save lots of energy and money with higher return in crop production.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openRFQ("drip-micro-irrigation")}
                  className="px-6 py-3 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-sm transition-all shadow-lg shadow-orange-950/20"
                >
                  Contact for Drip System & Subsidy Price
                </button>
                <Link
                  href="/calculator"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
                >
                  Calculate Emitter Sizing & Flow →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center p-6">
              <div className="relative w-full h-full">
                <Image
                  src="/images/idol/cat_drip_irrigation.webp"
                  alt="Flat & Round Drip Irrigation System"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 2026 Current Affairs & PMKSY Per Drop More Crop Subsidy Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-emerald-800/60 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#DD612A] text-white text-[11px] font-bold uppercase tracking-wider">
              2026 Current Affairs & PMKSY Subsidy Scheme
            </div>
            <h3 className="text-xl font-bold">Pradhan Mantri Krishi Sinchayee Yojana (PMKSY-PDMC) Direct Subsidy</h3>
            <p className="text-xs text-emerald-200 max-w-3xl leading-relaxed">
              Under the active 2026 Union Agricultural guidelines, small and marginal farmers are entitled to a <strong>55% capital subsidy</strong> (45% for general farmers) on certified drip irrigation packages through state DBT portals (GGRC in Gujarat, MahaDBT, APMIP). IDOL drip systems are 100% BIS-certified and empanelled for direct DBT subsidy settlement.
            </p>
          </div>
          <button
            onClick={() => openRFQ("drip-micro-irrigation")}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white text-emerald-950 hover:bg-emerald-50 font-bold text-xs transition-colors shadow-md"
          >
            Download Farmer Subsidy Checklist
          </button>
        </div>
      </section>

      {/* 3. Converted Table from idolpipe image: Flat-Drip-16mm-OD-Table.webp */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
              Authentic Engineering Data (Converted from Technical Chart)
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
              16mm OD Flat Drip Tape Specification Matrix
            </h2>
          </div>
          <div className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg font-mono">
            Spacing Options: 20cm, 30cm, 40cm, 50cm, 60cm
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#053C82] text-white uppercase text-[11px] font-semibold tracking-wider">
                <tr>
                  <th className="p-4">Wall Thickness (MM)</th>
                  <th className="p-4">Wall Thickness (MIL)</th>
                  <th className="p-4">Coil Length in Meter</th>
                  <th className="p-4">Target Crop & Field Application Scope</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {flatDrip16mmData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900 font-sans">{row.mm}</td>
                    <td className="p-4 font-semibold text-blue-700">{row.mil}</td>
                    <td className="p-4 font-bold text-[#DD612A]">{row.coilLength}</td>
                    <td className="p-4 text-slate-600 font-sans">{row.app}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Supporting Components (from idolpipe.com) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
              Complete System Setup
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
              Supporting Components & Filtration Unit
            </h2>
          </div>
          <button
            onClick={() => openRFQ("drip-micro-irrigation")}
            className="text-xs font-semibold text-[#053C82] hover:text-[#DD612A] flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-4 h-4" /> Download Complete Drip BOM Layout
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {supportingComponents.map((comp, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:border-[#053C82] transition-colors">
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-blue-50 text-[#053C82]">
                {comp.role}
              </span>
              <h4 className="text-sm font-bold text-slate-900">{comp.name}</h4>
              <p className="text-xs text-slate-500">{comp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Authentic Salient Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
            Field Proven Advantages
          </span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Salient Features & Agronomic Advantages
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
          {authenticSalientFeatures.map((feat, idx) => (
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
        <h3 className="text-xl font-bold text-slate-900">Recommended Project Applications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {[
            "Row crops: Cotton, sugarcane, chili, tomato, potato, onion, and groundnut",
            "Orchard fruits: Mango, pomegranate, citrus, guava, banana, and papaya",
            "Polyhouse & Greenhouse precision vegetable farming and floriculture",
            "High-density commercial vineyards and tea / coffee plantation estates"
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
