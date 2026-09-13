"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Download,
  Sparkles,
  Droplets,
  Package,
  Layers
} from "lucide-react";
import { useRFQ } from "@/components/layout/SiteLayoutClient";

export default function GardenHoseProductPage() {
  const { openRFQ } = useRFQ();

  const gardenTableData = [
    { sizeInch: "0.50", sizeMm: 12, approxWeightKg: "4.000 to 4.200", wallThickness: "1.75 mm", standardRoll: "30m & 50m", burstBar: "18 bar" },
    { sizeInch: "0.75", sizeMm: 19, approxWeightKg: "5.000 to 5.200", wallThickness: "2.00 mm", standardRoll: "30m & 50m", burstBar: "15 bar" },
    { sizeInch: "1.00", sizeMm: 25, approxWeightKg: "7.500 to 7.700", wallThickness: "2.75 mm", standardRoll: "30m & 50m", burstBar: "12 bar" },
    { sizeInch: "1.25", sizeMm: 32, approxWeightKg: "11.000 to 11.300", wallThickness: "3.15 mm", standardRoll: "30m & 50m", burstBar: "10 bar" }
  ];

  const authenticFeatures = [
    { title: "Oil-Free Formulation", desc: "Manufactured from 100% virgin plasticized PVC without recycled oily fillers, preventing discoloration and stickiness." },
    { title: "High Flexibility & Kink Rebound", desc: "Instantly rebounds to full round diameter even after severe pinching, twisting, or being run over by light vehicles." },
    { title: "Smooth Inner Bore", desc: "Ultra-low surface friction maximizes water flow discharge and prevents internal algae and biofilm sedimentation." },
    { title: "Weather & Solar UV Resistant", desc: "Special UV light stabilizers shield tubing from outdoor surface cracking, brittle hardening, and color degradation." },
    { title: "Reinforced Pressure Integrity", desc: "Engineered wall thickness guarantees sustained operational water pressure up to 18 bar burst proof." },
    { title: "Zero Toxic Leaching", desc: "Safe for residential lawns, home vegetable garden irrigation, domestic pet wash, and aquarium maintenance." }
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
            <span className="text-white font-medium">PVC Garden Flexible Hose Pipe</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#DD612A]" /> 100% Virgin Plasticized Resin • UV Stabilized
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                PVC Garden Flexible Hose Pipe
              </h1>
              <p className="text-base text-blue-100 max-w-2xl leading-relaxed">
                Engineered from flexible, oil-free plasticized PVC compounds with superior kink recovery. Glides effortlessly across rough terrain, concrete patios, and gravel without scraping, kinking, or pinhole punctures.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openRFQ("garden-flexible-hose")}
                  className="px-6 py-3 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-sm transition-all shadow-lg shadow-orange-950/20"
                >
                  Contact for Hose Roll Wholesale Price
                </button>
                <Link
                  href="/dealership"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
                >
                  Apply for Dealership & Distributorship →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center p-6">
              <div className="relative w-full h-full">
                <Image
                  src="/images/idol/cat_garden_hose.webp"
                  alt="PVC Garden Flexible Hose Pipe"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 2026 Current Affairs & Retail Trade Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-emerald-800/60 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#DD612A] text-white text-[11px] font-bold uppercase tracking-wider">
              2026 Hardware Market Intelligence & Current Affairs
            </div>
            <h3 className="text-xl font-bold">Pan-India Urban Gardening & Construction Washdown Demand Surge</h3>
            <p className="text-xs text-emerald-200 max-w-3xl leading-relaxed">
              With over 40% growth in urban landscape horticulture, solar panel rooftop maintenance washing, and ready-mix concrete curing across tier-1 & tier-2 cities, IDOL flexible PVC hose pipes offer factory-direct roll packaging with high burst safety margins and zero oily plasticizer migration.
            </p>
          </div>
          <button
            onClick={() => openRFQ("garden-flexible-hose")}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-xs transition-colors shadow-md"
          >
            Request Roll Stockists Price List
          </button>
        </div>
      </section>

      {/* 3. Converted Table from idolpipe image: Gardentable.webp */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
              Authentic Engineering Data (Converted from Technical Chart)
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
              Garden Hose Technical Specifications & Weight Matrix
            </h2>
          </div>
          <div className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg font-mono">
            Standard Coils: 30m / 50m / 100m
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#053C82] text-white uppercase text-[11px] font-semibold tracking-wider">
                <tr>
                  <th className="p-4">Size in Inch</th>
                  <th className="p-4">Size in mm</th>
                  <th className="p-4">Approx Weight in kg (per 30m)</th>
                  <th className="p-4">Wall Thickness</th>
                  <th className="p-4">Standard Packaging</th>
                  <th className="p-4">Short-Term Burst</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {gardenTableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900 font-sans">{row.sizeInch}&quot;</td>
                    <td className="p-4">{row.sizeMm} mm</td>
                    <td className="p-4 font-semibold text-[#053C82]">{row.approxWeightKg} kg</td>
                    <td className="p-4 font-bold text-slate-800">{row.wallThickness}</td>
                    <td className="p-4 text-slate-600">{row.standardRoll}</td>
                    <td className="p-4 text-emerald-700 font-bold">{row.burstBar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Authentic Salient Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
            Product Strengths
          </span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Salient Features of IDOL PVC Garden Hose
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

      {/* 5. Applications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <h3 className="text-xl font-bold text-slate-900">PVC Pipe Applications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {[
            "Domestic lawn watering, patio washing, and rooftop garden irrigation",
            "Automotive service stations, commercial car washes, and fleet detailing",
            "Construction site water spraying, column curing, and concrete mixing",
            "Agricultural nursery seedbeds, greenhouse spray misting, and poultry farm washdown"
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
