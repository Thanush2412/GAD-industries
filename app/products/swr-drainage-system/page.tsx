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
  Wrench
} from "lucide-react";
import { useRFQ } from "@/components/layout/SiteLayoutClient";

export default function SWRProductPage() {
  const { openRFQ } = useRFQ();

  const swrSpecData = [
    { sizeMm: "75 mm (2 1/2\")", typeAWall: "1.8 – 2.2 mm", typeBWall: "3.2 – 3.8 mm", socketType: "Selfit & Ring-Fit", app: "Vent stack & Rainwater down-take (Type A) / Waste stack (Type B)" },
    { sizeMm: "90 mm (3\")", typeAWall: "1.9 – 2.3 mm", typeBWall: "3.2 – 3.8 mm", socketType: "Selfit & Ring-Fit", app: "Balcony drainage & Rainwater pipe" },
    { sizeMm: "110 mm (4\")", typeAWall: "2.2 – 2.7 mm", typeBWall: "3.2 – 3.8 mm", socketType: "Selfit & Ring-Fit", app: "Main vertical soil stack & WC discharge (Type B)" },
    { sizeMm: "160 mm (6\")", typeAWall: "3.2 – 3.8 mm", typeBWall: "4.0 – 4.6 mm", socketType: "Selfit & Ring-Fit", app: "Underground main gravity sewer header & storm drain" }
  ];

  const swrFittings = [
    { name: "Single Tee (Plain & with Door)", sizes: "75mm, 110mm, 160mm", type: "Sanitary Branch" },
    { name: "Double Tee (Cross Branch)", sizes: "75mm, 110mm", type: "Dual Junction" },
    { name: "Bend 87.5° (Plain & with Door)", sizes: "75mm, 110mm, 160mm", type: "Directional" },
    { name: "Bend 45°", sizes: "75mm, 110mm, 160mm", type: "Offset" },
    { name: "Cleansing Access Pipe (Door)", sizes: "75mm, 110mm, 160mm", type: "Inspection" },
    { name: "Vent Cowl", sizes: "75mm, 110mm", type: "Terminal Vent" },
    { name: "Nahani Trap (with/without Jali)", sizes: "110 x 75mm", type: "Floor Trap" },
    { name: "P-Trap (Deep Seal)", sizes: "110mm, 125mm", type: "Odor Barrier" },
    { name: "Multi-Floor Trap", sizes: "110 x 75mm", type: "Multi-Inlet" },
    { name: "Elastomeric Rubber Ring (EPDM)", sizes: "75mm, 110mm, 160mm", type: "Push-Fit Seal" }
  ];

  const authenticAdvantages = [
    { title: "High-Precision Socketing", desc: "Selfit sockets and elastomeric sealing ring grooves are formed with high precision on modernized CNC-controlled belling machinery." },
    { title: "50% Saving in Installation Time", desc: "Push-fit rubber ring jointing cuts site installation time by half compared to plain ended pipes requiring external loose couplers and cement joints." },
    { title: "50% Reduction in Joints", desc: "Integral socketing eliminates loose couplings across every 6-meter span, cutting potential leak points by 50% and lowering installation labor expenses." },
    { title: "Reduced Inventory Costs", desc: "Eliminates the logistical burden and procurement costs of separate external couplers and solvent cements on high-rise plumbing sites." },
    { title: "Standard 6-Meter Lengths", desc: "Supplied in standard 6.0-meter lengths exclusive of socket depth, providing maximum uninterrupted vertical stack spans." }
  ];

  const authenticFeatures = [
    { title: "Fast & Easy Push-Fit Installation", desc: "Requires no solvent cement for rubber ring joints—simply apply lubricant and insert spigot into socket." },
    { title: "100% Leak-Proof Jointing", desc: "Engineered EPDM rubber sealing ring absorbs building expansion, thermal movement, and ground settlement without leaking." },
    { title: "High Flow Rate & No Choking", desc: "Glass-smooth interior surface (Hazen-Williams C=150) ensures swift hydraulic discharge with zero sludge settlement." },
    { title: "Easy Cleaning & Maintenance", desc: "Integrated inspection doors on bends, tees, and cleanout pipes allow instant rodding and rodding clearance." },
    { title: "Chemical & Biological Resistance", desc: "100% impervious to harsh detergents, bleach, boiling sink discharges, and subterranean sewer gases (H2S)." }
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
            <span className="text-white font-medium">SWR Drainage System</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#DD612A]" /> IS:13592:2013 (Type A & B) / IS:14735 Certified
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                SWR Drainage System (Type A & Type B)
              </h1>
              <p className="text-base text-blue-100 max-w-2xl leading-relaxed">
                We offer SWR Drainage Systems with Selfit (Solvent Cement Joint) and Elastomeric Seal Ring fit joints. Formed on modernized high-precision machines, delivering 50% faster installation, zero leakage, and complete elimination of loose couplers.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openRFQ("swr-drainage-system")}
                  className="px-6 py-3 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-sm transition-all shadow-lg shadow-orange-950/20"
                >
                  Contact for SWR Drainage System & Price
                </button>
                <Link
                  href="/updates#swr-thermal-gap"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
                >
                  Read 10mm Thermal Pull-Back Rule →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center p-6">
              <div className="relative w-full h-full">
                <Image
                  src="/images/idol/cat_swr_drainage.webp"
                  alt="SWR Drainage System"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 2026 Current Affairs & Smart Sanitation Directives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-blue-800/60 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#DD612A] text-white text-[11px] font-bold uppercase tracking-wider">
              2026 Current Affairs & Urban Sanitation Policy
            </div>
            <h3 className="text-xl font-bold">Swachh Bharat 2.0 & Smart Cities 100% Sewerage Separation Mandate</h3>
            <p className="text-xs text-blue-200 max-w-3xl leading-relaxed">
              Under modern 2026 municipal bylaws, all residential high-rises and commercial developments are legally required to execute dual-stack segregation separating grey wastewater (Type A) from black soil waste and underground municipal headers (Type B). IDOL SWR pipes with certified EPDM ring joints guarantee 100% odor-free compliance with zero subsoil seepage.
            </p>
          </div>
          <button
            onClick={() => openRFQ("swr-drainage-system")}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white text-[#053C82] hover:bg-blue-50 font-bold text-xs transition-colors shadow-md"
          >
            Download SWR Tender Spec Sheet
          </button>
        </div>
      </section>

      {/* 3. Converted Specification Table: IS:13592 SWR Technical Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
              Authentic Engineering Data (Converted from Technical Chart)
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
              SWR Pipe Specifications (IS:13592:2013)
            </h2>
          </div>
          <div className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg font-mono">
            Standard Length: 6.0m (excl. socket)
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#053C82] text-white uppercase text-[11px] font-semibold tracking-wider">
                <tr>
                  <th className="p-4">Nominal Size (mm)</th>
                  <th className="p-4">Type A Wall (Rainwater/Vent)</th>
                  <th className="p-4">Type B Wall (Soil/Waste/Drain)</th>
                  <th className="p-4">Socket Types Available</th>
                  <th className="p-4">Primary Application Engineering</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {swrSpecData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900 font-sans">{row.sizeMm}</td>
                    <td className="p-4 font-semibold text-blue-700">{row.typeAWall}</td>
                    <td className="p-4 font-semibold text-[#DD612A]">{row.typeBWall}</td>
                    <td className="p-4 text-slate-800">{row.socketType}</td>
                    <td className="p-4 text-slate-600 font-sans">{row.app}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Authentic Advantages (from idolpipe.com) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
            Operational Advantages
          </span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Key Advantages of IDOL SWR Drainage System
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
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

      {/* 5. SWR Molded Fittings Catalogue */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
              Fittings Range
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
              SWR Push-Fit & Selfit Fittings (IS:14735)
            </h2>
          </div>
          <button
            onClick={() => openRFQ("swr-drainage-system")}
            className="text-xs font-semibold text-[#053C82] hover:text-[#DD612A] flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-4 h-4" /> Download SWR Fittings Technical Drawing
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {swrFittings.map((fit, idx) => (
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

      {/* 6. Authentic Salient Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
            Quality Features
          </span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Salient Features of SWR Pipes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs">
          {authenticFeatures.map((feat, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <h4 className="font-bold text-slate-900 text-sm">{feat.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Applications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <h3 className="text-xl font-bold text-slate-900">Recommended Applications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {[
            "Inside & outside drainage fittings of commercial, industrial, public, utilities & residential buildings",
            "Rainwater discharges and rooftop storm harvesting down-take networks",
            "Soil & sanitary waste disposal in multi-story residential towers and hotels",
            "Underground gravity drainage lines and municipal sewer connections"
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
