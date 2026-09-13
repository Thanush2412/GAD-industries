"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  ShieldCheck,
  Gauge,
  Layers,
  Cpu,
  Award,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Activity
} from "lucide-react";
import { useRFQ } from "@/components/layout/SiteLayoutClient";
import { GAD_PLANT_DATA } from "@/data/gadSpecifications";

export default function InfrastructurePage() {
  const { openRFQ } = useRFQ();

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Hero Section */}
      <section className="relative bg-[#0B2545] text-white py-20 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold border border-white/10">
            <Factory className="w-4 h-4 text-[#DD612A]" />
            52,000+ m² Manufacturing Footprint • Rajkot Industrial Corridors
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            High-Speed Automated Extrusion & NABL-Calibrated Testing Infrastructure
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Our twin manufacturing plants in Rajkot, Gujarat house 18 automated twin-screw extrusion lines, precision gravimetric compounding systems, and dedicated hydrostatic burst laboratories delivering 24,000 MT of certified piping each year.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => openRFQ()}
              className="px-6 py-3 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-xs transition-all shadow-md"
            >
              Request Plant Audit & Inspection
            </button>
            <Link
              href="/quality"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
            >
              Inspect Quality Lab Standards →
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase text-slate-500">Total Output</span>
              <Factory className="w-5 h-5 text-[#0B2545]" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#0B2545]">24,000 MT</div>
            <p className="text-xs text-slate-500 mt-1 font-medium">Per Annum Extrusion Output</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase text-slate-500">Extrusion Fleet</span>
              <Cpu className="w-5 h-5 text-[#DD612A]" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#DD612A]">18 Lines</div>
            <p className="text-xs text-slate-500 mt-1 font-medium">Automated Twin-Screw Extruders</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase text-slate-500">Combined Land</span>
              <Layers className="w-5 h-5 text-[#0B2545]" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#0B2545]">52,000 m²</div>
            <p className="text-xs text-slate-500 mt-1 font-medium">2 Rajkot Manufacturing Units</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase text-slate-500">Raw Materials</span>
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-emerald-600">100% Virgin</div>
            <p className="text-xs text-slate-500 mt-1 font-medium">Reliance Industries Procurement</p>
          </div>
        </div>
      </section>

      {/* 3. The 2 Plants Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B2545]">
            Production Topology
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Twin Manufacturing Plants with Distinct Polymer Workflows
          </h2>
          <p className="text-xs text-slate-600">
            Segregated processing eliminates cross-contamination between hot cPVC compounds, lead-free uPVC potable grades, and HDPE carbon-black masterbatches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {GAD_PLANT_DATA.manufacturingUnits.map((unit, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
                      Rajkot Manufacturing Facility
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-0.5">{unit.unit}</h3>
                  </div>
                  <span className="px-3 py-1 bg-blue-50 text-[#0B2545] font-mono text-xs font-bold rounded-full">
                    {unit.capacity}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="bg-slate-50 p-3 rounded-xl">
                    <span className="text-slate-500 block">Facility Area:</span>
                    <span className="font-bold text-slate-800 text-sm">{unit.area}</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl">
                    <span className="text-slate-500 block">Location:</span>
                    <span className="font-bold text-slate-800 text-sm">Rajkot NH-8B Corridor</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <span className="font-semibold text-slate-800 block">Primary Processing Focus:</span>
                  <p className="text-slate-600 leading-relaxed bg-blue-50/40 p-3 rounded-xl border border-blue-100/60">
                    {unit.focus}
                  </p>
                </div>

                <div className="space-y-2 text-xs">
                  <span className="font-semibold text-slate-800 block">Equipment Setup:</span>
                  <p className="text-slate-500">
                    Equipped with high-torque counter-rotating conical twin screws, vacuum calibrating cooling water tanks, ultrasonic continuous wall-thickness gauges, and automatic planetary cutting saws.
                  </p>
                </div>
              </div>

              <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono">{unit.location}</span>
                <button
                  onClick={() => openRFQ()}
                  className="font-bold text-[#0B2545] hover:text-[#DD612A] flex items-center gap-1"
                >
                  Schedule Plant Visit →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. In-House Quality Testing Laboratories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B2545]">
            Quality Testing Protocol
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Six Dedicated In-House QA Testing Stations
          </h2>
          <p className="text-xs text-slate-600">
            Every production batch undergoes mandatory 24-hour conditioning and hydrostatic proof testing before release for shipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GAD_PLANT_DATA.testingFacilities.map((lab, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-blue-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B2545] flex items-center justify-center font-bold text-xs">
                0{idx + 1}
              </div>
              <h4 className="font-bold text-xs text-slate-900 leading-snug">{lab}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Calibrated against Bureau of Indian Standards (BIS) and ASTM testing norms with digital data logging for full traceability.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Raw Material Tie-ups & Virgin Polymer Assurance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
                Supply Chain Integrity
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                100% Virgin Polymer Guarantee • Formal Reliance Industries Sourcing
              </h3>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              Zero Scrap / Zero Recycled Regrind
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl">
            Piping failures in high-rise buildings and deep agricultural borewells almost always stem from microscopic impurities found in recycled plastic regrinds. Idol Pipe enforces a strict <strong>100% Virgin Polymer Policy</strong> across all pressure-bearing lines. Our domestic supply is backed by formal tie-ups with <strong>Reliance Industries Limited</strong>, while specialized compounds are imported directly from <strong>Sekisui (Japan), Kaneka (Japan), and Hanwha (South Korea)</strong>.
          </p>

          <div className="pt-2 flex flex-wrap gap-6 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Certified Non-Toxic Lead-Free Formulations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>2.5% Carbon Black for 50-Year UV Stability</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>NSF/ANSI Standard 61 Toxicological Conformance</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
