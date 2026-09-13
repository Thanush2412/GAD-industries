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
  Sun
} from "lucide-react";
import { useRFQ } from "@/components/layout/SiteLayoutClient";

export default function AgriPVCProductPage() {
  const { openRFQ } = useRFQ();

  const is4985Data = [
    { size: 20, meanMin: 20.0, meanMax: 20.3, cl1: "-", cl2: "-", cl3: "-", cl4: "-", cl5: "1.1 – 1.5", cl6: "1.4 – 1.8" },
    { size: 25, meanMin: 25.0, meanMax: 25.3, cl1: "-", cl2: "-", cl3: "-", cl4: "1.2 – 1.6", cl5: "1.4 – 1.8", cl6: "1.7 – 2.1" },
    { size: 32, meanMin: 32.0, meanMax: 32.3, cl1: "-", cl2: "-", cl3: "-", cl4: "1.5 – 1.9", cl5: "1.8 – 2.2", cl6: "2.2 – 2.7" },
    { size: 40, meanMin: 40.0, meanMax: 40.3, cl1: "-", cl2: "-", cl3: "1.4 – 1.8", cl4: "1.8 – 2.2", cl5: "2.2 – 2.7", cl6: "2.8 – 3.3" },
    { size: 50, meanMin: 50.0, meanMax: 50.3, cl1: "-", cl2: "-", cl3: "1.7 – 2.1", cl4: "2.3 – 2.8", cl5: "2.8 – 3.3", cl6: "3.4 – 4.0" },
    { size: 63, meanMin: 63.0, meanMax: 63.3, cl1: "-", cl2: "1.5 – 1.9", cl3: "2.2 – 2.7", cl4: "2.8 – 3.3", cl5: "3.5 – 4.1", cl6: "4.3 – 5.0" },
    { size: 75, meanMin: 75.0, meanMax: 75.3, cl1: "-", cl2: "1.8 – 2.2", cl3: "2.6 – 3.1", cl4: "3.4 – 4.0", cl5: "4.2 – 4.9", cl6: "5.1 – 5.9" },
    { size: 90, meanMin: 90.0, meanMax: 90.3, cl1: "1.3 – 1.7", cl2: "2.1 – 2.6", cl3: "3.1 – 3.7", cl4: "4.0 – 4.6", cl5: "5.0 – 5.7", cl6: "6.1 – 7.1" },
    { size: 110, meanMin: 110.0, meanMax: 110.4, cl1: "1.6 – 2.0", cl2: "2.5 – 3.0", cl3: "3.7 – 4.3", cl4: "4.9 – 5.6", cl5: "6.1 – 7.1", cl6: "7.5 – 8.7" },
    { size: 125, meanMin: 125.0, meanMax: 125.4, cl1: "1.8 – 2.2", cl2: "2.9 – 3.4", cl3: "4.3 – 5.0", cl4: "5.6 – 6.4", cl5: "6.9 – 8.0", cl6: "8.5 – 9.8" },
    { size: 140, meanMin: 140.0, meanMax: 140.5, cl1: "2.0 – 2.4", cl2: "3.2 – 3.8", cl3: "4.8 – 5.5", cl4: "6.3 – 7.3", cl5: "7.7 – 8.9", cl6: "9.5 – 11.0" },
    { size: 160, meanMin: 160.0, meanMax: 160.5, cl1: "2.3 – 2.8", cl2: "3.7 – 4.3", cl3: "5.4 – 6.2", cl4: "7.2 – 8.3", cl5: "8.8 – 10.2", cl6: "10.9 – 12.6" },
    { size: 200, meanMin: 200.0, meanMax: 200.6, cl1: "2.9 – 3.4", cl2: "4.6 – 5.3", cl3: "6.8 – 7.9", cl4: "8.9 – 10.3", cl5: "11.0 – 12.7", cl6: "13.6 – 15.7" }
  ];

  const authenticAdvantages = [
    { title: "Selfit Sockets & Elastomeric Seal", desc: "Formed with modern belling machines. Selfit pipes feature self-socketed ends for solvent jointing, while Elastomeric Seal Ring pipes fit snugly without couplers." },
    { title: "50% Saving in Installation Time", desc: "As compared with plain ended pipes and loose couplers, eliminating redundant solvent weld curing periods on farm fields." },
    { title: "50% Reduction in Joints", desc: "Integral socketing minimizes connections across agricultural field lines, directly cutting labor costs and pressure drop points." },
    { title: "Eliminates Loose Couplers", desc: "Cuts distributor and farmer inventory costs by eradicating loose pipe couplings and reducing handling damages." },
    { title: "Standard 6-Meter Length", desc: "Supplied in standard 6.0-meter lengths exclusive of socket portion for maximum field efficiency." }
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
            <span className="text-white font-medium">Agriculture PVC Pipes & Fittings</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#DD612A]" /> IS:4985:2021 Certified • Class 1 to Class 6
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Agriculture PVC Pipes & Fittings (IS:4985)
              </h1>
              <p className="text-base text-blue-100 max-w-2xl leading-relaxed">
                We offer Agriculture PVC Pipes & Fittings. The Selfit (Solvent Cement Joint) pipes have one end self-socketed and the other end plain, while Elastomeric Seal Ring fit pipes have sealing ring joints which fit snugly without the use of loose couplers.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openRFQ("agriculture-pvc-pipes")}
                  className="px-6 py-3 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-sm transition-all shadow-lg shadow-orange-950/20"
                >
                  Request Agriculture Pipe RFQ
                </button>
                <Link
                  href="/calculator"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
                >
                  Simulate Irrigation Flow →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center p-6">
              <div className="relative w-full h-full">
                <Image
                  src="/images/idol/cat_agriculture.webp"
                  alt="Agriculture PVC Pipes & Fittings"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 2026 Current Affairs & PM-KUSUM Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-emerald-800/60 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#DD612A] text-white text-[11px] font-bold uppercase tracking-wider">
              2026 Current Affairs & Agricultural Policy
            </div>
            <h3 className="text-xl font-bold">PM-KUSUM Solar Pumps & National River Interlinking Feeder Pipeline Norms</h3>
            <p className="text-xs text-emerald-200 max-w-3xl leading-relaxed">
              With record solarization under PM-KUSUM Component B & C in 2026, high-efficiency Class 3 (6 kg/cm²) and Class 4 (8 kg/cm²) IS:4985 PVC pipes are designated as mandatory conduits for high-discharge solar submersible pumping. IDOL pipes deliver lower friction head loss, maximizing water delivery per kilowatt of solar energy.
            </p>
          </div>
          <button
            onClick={() => openRFQ("agriculture-pvc-pipes")}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white text-emerald-950 hover:bg-emerald-50 font-bold text-xs transition-colors shadow-md"
          >
            Download BIS Technical Data
          </button>
        </div>
      </section>

      {/* 3. Converted Table from idolpipe image: agrtechnical-chart-1-1024x739.webp */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
              Authentic Engineering Data (Converted from Technical Chart)
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
              IS:4985 Working Pressure & Wall Thickness Technical Chart
            </h2>
          </div>
          <div className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg font-mono">
            Wall Thickness (mm) Min – Max across Classes
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#053C82] text-white uppercase text-[11px] font-semibold tracking-wider">
                <tr>
                  <th className="p-4" rowSpan={2}>Nominal Size (mm)</th>
                  <th className="p-4 text-center" colSpan={2}>Mean OD (mm)</th>
                  <th className="p-4 text-center bg-blue-900" colSpan={6}>Wall Thickness (mm) by Working Pressure Class (MPa)</th>
                </tr>
                <tr className="bg-blue-800 text-blue-100 text-[10px]">
                  <th className="p-3 text-center">Min</th>
                  <th className="p-3 text-center">Max</th>
                  <th className="p-3 text-center">Cl 1 (0.25 MPa)</th>
                  <th className="p-3 text-center">Cl 2 (0.40 MPa)</th>
                  <th className="p-3 text-center">Cl 3 (0.60 MPa)</th>
                  <th className="p-3 text-center">Cl 4 (0.80 MPa)</th>
                  <th className="p-3 text-center">Cl 5 (1.00 MPa)</th>
                  <th className="p-3 text-center">Cl 6 (1.25 MPa)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {is4985Data.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900 font-sans">{row.size} mm</td>
                    <td className="p-4 text-center">{row.meanMin.toFixed(1)}</td>
                    <td className="p-4 text-center">{row.meanMax.toFixed(1)}</td>
                    <td className="p-4 text-center text-slate-400">{row.cl1}</td>
                    <td className="p-4 text-center text-slate-600">{row.cl2}</td>
                    <td className="p-4 text-center font-semibold text-blue-700">{row.cl3}</td>
                    <td className="p-4 text-center font-bold text-[#053C82]">{row.cl4}</td>
                    <td className="p-4 text-center font-bold text-emerald-700">{row.cl5}</td>
                    <td className="p-4 text-center font-bold text-[#DD612A]">{row.cl6}</td>
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
            Field Advantages
          </span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Key Advantages for Agricultural Irrigation
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

      {/* 5. Applications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <h3 className="text-xl font-bold text-slate-900">Agriculture & Potable Water Applications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {[
            "Agricultural gravity flow channels, canal lift schemes, and canal branches",
            "Underground farm pipeline networks feeding drip and sprinkler laterals",
            "Solar water pumping lift mains under PM-KUSUM installations",
            "Potable rural community drinking water distribution networks"
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
