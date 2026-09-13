"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  Gauge,
  Droplets,
  Activity,
  Waves,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  Info,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { useRFQ } from "@/components/layout/SiteLayoutClient";

export default function CalculatorPage() {
  const { openRFQ } = useRFQ();

  // Tab state
  const [activeTab, setActiveTab] = useState<"friction" | "column" | "drip">("friction");

  // 1. Friction Simulator State
  const [pipeMaterial, setPipeMaterial] = useState<"cpvc" | "upvc" | "hdpe" | "gi">("cpvc");
  const [diameterMm, setDiameterMm] = useState<number>(32);
  const [pipeLengthM, setPipeLengthM] = useState<number>(100);
  const [flowRateLpm, setFlowRateLpm] = useState<number>(90);

  // Friction Calculations (Hazen-Williams):
  const cFactor = pipeMaterial === "gi" ? 100 : pipeMaterial === "hdpe" ? 140 : 150;
  const flowM3s = flowRateLpm / 60000;
  const diamM = diameterMm / 1000;
  const areaM2 = Math.PI * Math.pow(diamM / 2, 2);
  const velocityMs = areaM2 > 0 ? flowM3s / areaM2 : 0;
  const headLossM =
    areaM2 > 0
      ? (10.67 * pipeLengthM * Math.pow(flowM3s, 1.852)) /
        (Math.pow(cFactor, 1.852) * Math.pow(diamM, 4.87))
      : 0;
  const pressureDropKg = (headLossM * 0.1).toFixed(2);
  const pressureDropPsi = (headLossM * 1.422).toFixed(1);

  // 2. Submersible Column Pipe Load State
  const [wellDepthM, setWellDepthM] = useState<number>(150);
  const [pumpHp, setPumpHp] = useState<number>(15);
  const [columnSize, setColumnSize] = useState<"1.25" | "1.5" | "2" | "2.5" | "3">("2");

  const pipeUnitWeight = columnSize === "1.25" ? 0.95 : columnSize === "1.5" ? 1.25 : columnSize === "2" ? 1.65 : columnSize === "2.5" ? 2.2 : 3.1;
  const waterUnitWeight = columnSize === "1.25" ? 0.8 : columnSize === "1.5" ? 1.15 : columnSize === "2" ? 2.0 : columnSize === "2.5" ? 3.1 : 4.5;
  const pumpWeight = 40 + pumpHp * 3.5;
  const totalPipeWeight = wellDepthM * pipeUnitWeight;
  const totalWaterWeight = wellDepthM * waterUnitWeight;
  const totalSuspendedLoadKg = Math.round(totalPipeWeight + totalWaterWeight + pumpWeight);
  const ratedLoadCapacityKg = columnSize === "1.25" ? 2500 : columnSize === "1.5" ? 3800 : columnSize === "2" ? 6200 : columnSize === "2.5" ? 9000 : 11500;
  const safetyFactor = (ratedLoadCapacityKg / Math.max(1, totalSuspendedLoadKg)).toFixed(1);

  // 3. Drip Irrigation Emitter State
  const [lateralLengthM, setLateralLengthM] = useState<number>(60);
  const [dripperSpacingCm, setDripperSpacingCm] = useState<number>(30);
  const [emitterLph, setEmitterLph] = useState<number>(2.0);

  const dripperCount = Math.floor((lateralLengthM * 100) / dripperSpacingCm);
  const totalLateralDischargeLph = Math.round(dripperCount * emitterLph);
  const totalLateralDischargeLpm = (totalLateralDischargeLph / 60).toFixed(2);

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Hero */}
      <section className="relative bg-[#0B2545] text-white py-20 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold border border-white/10">
            <Calculator className="w-4 h-4 text-[#DD612A]" />
            Hydraulic & Mechanical Engineering Workbench
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Pipeline Friction Loss & Submersible Pump Load Simulator
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Eliminate guesswork from water networks. Calculate Hazen-Williams head loss, flow velocity thresholds, deep borewell tensile safety factors, and drip lateral discharges in real-time.
          </p>

          {/* Tab Selector */}
          <div className="flex flex-wrap gap-3 pt-4">
            <button
              onClick={() => setActiveTab("friction")}
              className={`px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wide transition-all ${
                activeTab === "friction"
                  ? "bg-[#DD612A] text-white shadow-md"
                  : "bg-white/10 text-slate-200 hover:bg-white/20"
              }`}
            >
              1. Hazen-Williams Friction Simulator
            </button>
            <button
              onClick={() => setActiveTab("column")}
              className={`px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wide transition-all ${
                activeTab === "column"
                  ? "bg-[#DD612A] text-white shadow-md"
                  : "bg-white/10 text-slate-200 hover:bg-white/20"
              }`}
            >
              2. Deepwell Column Load & Tensile Safety
            </button>
            <button
              onClick={() => setActiveTab("drip")}
              className={`px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wide transition-all ${
                activeTab === "drip"
                  ? "bg-[#DD612A] text-white shadow-md"
                  : "bg-white/10 text-slate-200 hover:bg-white/20"
              }`}
            >
              3. Micro-Drip Discharge Calculator
            </button>
          </div>
        </div>
      </section>

      {/* 2. Interactive Calculator Body */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Tab 1: Hazen-Williams Friction Loss */}
        {activeTab === "friction" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
                  Pipeline Parameters
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  Configure Fluid Flow & Pipe Dimensions
                </h3>
              </div>

              {/* Material */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 block">
                  Select Pipe Material (Roughness Factor C)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setPipeMaterial("cpvc")}
                    className={`py-2 px-3 rounded-xl font-medium border text-center transition-all ${
                      pipeMaterial === "cpvc"
                        ? "bg-[#0B2545] text-white border-[#0B2545]"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    cPVC (C=150)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPipeMaterial("upvc")}
                    className={`py-2 px-3 rounded-xl font-medium border text-center transition-all ${
                      pipeMaterial === "upvc"
                        ? "bg-[#0B2545] text-white border-[#0B2545]"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    uPVC (C=150)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPipeMaterial("hdpe")}
                    className={`py-2 px-3 rounded-xl font-medium border text-center transition-all ${
                      pipeMaterial === "hdpe"
                        ? "bg-[#0B2545] text-white border-[#0B2545]"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    HDPE (C=140)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPipeMaterial("gi")}
                    className={`py-2 px-3 rounded-xl font-medium border text-center transition-all ${
                      pipeMaterial === "gi"
                        ? "bg-[#0B2545] text-white border-[#0B2545]"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    Old GI (C=100)
                  </button>
                </div>
              </div>

              {/* Diameter Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-700">Internal Pipe Diameter:</span>
                  <span className="text-[#0B2545] font-mono font-bold">{diameterMm} mm</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="160"
                  value={diameterMm}
                  onChange={(e) => setDiameterMm(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B2545]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>15mm (1/2")</span>
                  <span>50mm (2")</span>
                  <span>110mm (4")</span>
                  <span>160mm (6")</span>
                </div>
              </div>

              {/* Pipeline Length */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-700">Pipeline Total Length:</span>
                  <span className="text-[#0B2545] font-mono font-bold">{pipeLengthM} meters</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={pipeLengthM}
                  onChange={(e) => setPipeLengthM(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B2545]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>10m</span>
                  <span>250m</span>
                  <span>500m</span>
                  <span>1000m</span>
                </div>
              </div>

              {/* Flow Rate */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-700">Flow Volume Rate:</span>
                  <span className="text-[#DD612A] font-mono font-bold">
                    {flowRateLpm} LPM ({(flowRateLpm * 0.06).toFixed(1)} m³/hr)
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="800"
                  step="5"
                  value={flowRateLpm}
                  onChange={(e) => setFlowRateLpm(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#DD612A]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>10 LPM</span>
                  <span>200 LPM</span>
                  <span>500 LPM</span>
                  <span>800 LPM</span>
                </div>
              </div>
            </div>

            {/* Output Cockpit */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-[#0B2545] p-8 rounded-3xl text-white shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FDBA74]">
                      Simulation Results
                    </span>
                    <h3 className="text-xl font-bold">Hydraulic Friction & Head Loss</h3>
                  </div>
                  <Gauge className="w-6 h-6 text-[#DD612A]" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                    <span className="text-[11px] text-slate-300 block">Total Head Loss</span>
                    <span className="text-3xl font-black text-white font-mono">{headLossM.toFixed(2)}</span>
                    <span className="text-xs text-slate-400 ml-1">Meters</span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                    <span className="text-[11px] text-slate-300 block">Pressure Drop</span>
                    <span className="text-3xl font-black text-[#FDBA74] font-mono">{pressureDropKg}</span>
                    <span className="text-xs text-slate-400 ml-1">kgf/cm² ({pressureDropPsi} PSI)</span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                    <span className="text-[11px] text-slate-300 block">Flow Velocity</span>
                    <span className="text-3xl font-black text-white font-mono">{velocityMs.toFixed(2)}</span>
                    <span className="text-xs text-slate-400 ml-1">m/s</span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                    <span className="text-[11px] text-slate-300 block">Roughness Factor C</span>
                    <span className="text-3xl font-black text-emerald-400 font-mono">{cFactor}</span>
                    <span className="text-xs text-slate-400 ml-1">Hazen-Williams</span>
                  </div>
                </div>

                {velocityMs > 2.5 ? (
                  <div className="bg-amber-500/20 border border-amber-400/40 p-4 rounded-2xl flex items-start gap-3 text-xs text-amber-200">
                    <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <strong className="text-amber-100 block">High Velocity Warning (&gt; 2.5 m/s):</strong>
                      Flow velocity exceeds standard plumbing guidelines (0.9 to 2.0 m/s). Consider sizing up the pipe diameter to {diameterMm + 10}mm or adding kinetic air relief valves.
                    </div>
                  </div>
                ) : (
                  <div className="bg-emerald-500/20 border border-emerald-400/40 p-4 rounded-2xl flex items-start gap-3 text-xs text-emerald-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <strong className="text-emerald-100 block">Optimal Velocity Regime:</strong>
                      Flow velocity ({velocityMs.toFixed(2)} m/s) is well within optimal laminar/low-turbulent range (0.8 – 2.0 m/s). Minimal friction loss and safe operational lifespan.
                    </div>
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-mono">Idol Polymer C=150 vs GI C=100 saves 30% power</span>
                  <button
                    onClick={() => openRFQ(pipeMaterial === "cpvc" ? "cpvc-hot-cold" : "upvc-plumbing")}
                    className="px-4 py-2 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-xs transition-colors"
                  >
                    Request Sizing Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Submersible Column Pipe Load */}
        {activeTab === "column" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
                  Borewell Installation Specs
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  Deepwell Submersible Riser Parameters
                </h3>
              </div>

              {/* Depth Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-700">Submersible Pump Installation Depth:</span>
                  <span className="text-[#0B2545] font-mono font-bold">{wellDepthM} meters ({Math.round(wellDepthM * 3.28)} ft)</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="350"
                  step="10"
                  value={wellDepthM}
                  onChange={(e) => setWellDepthM(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B2545]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>30m (100ft)</span>
                  <span>150m (500ft)</span>
                  <span>250m (820ft)</span>
                  <span>350m (1150ft)</span>
                </div>
              </div>

              {/* Pump Motor HP */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-700">Submersible Motor Power:</span>
                  <span className="text-[#DD612A] font-mono font-bold">{pumpHp} Horsepower (HP)</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="50"
                  step="1"
                  value={pumpHp}
                  onChange={(e) => setPumpHp(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#DD612A]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>3 HP</span>
                  <span>15 HP</span>
                  <span>30 HP</span>
                  <span>50 HP</span>
                </div>
              </div>

              {/* Column Size */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 block">
                  Select Idol Column Pipe Diameter
                </label>
                <div className="grid grid-cols-5 gap-2 text-xs">
                  {(["1.25", "1.5", "2", "2.5", "3"] as const).map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setColumnSize(sz)}
                      className={`py-2.5 rounded-xl font-semibold border text-center transition-all ${
                        columnSize === sz
                          ? "bg-[#0B2545] text-white border-[#0B2545]"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {sz}"
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Column Load Output */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-[#0B2545] p-8 rounded-3xl text-white shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FDBA74]">
                      Mechanical Hanging Load
                    </span>
                    <h3 className="text-xl font-bold">Tensile Safety Assessment</h3>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                    <span className="text-[11px] text-slate-300 block">Total Hanging Load</span>
                    <span className="text-3xl font-black text-white font-mono">{totalSuspendedLoadKg}</span>
                    <span className="text-xs text-slate-400 ml-1">kgf</span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                    <span className="text-[11px] text-slate-300 block">Rated Tensile Limit</span>
                    <span className="text-3xl font-black text-[#FDBA74] font-mono">{ratedLoadCapacityKg}</span>
                    <span className="text-xs text-slate-400 ml-1">kgf</span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                    <span className="text-[11px] text-slate-300 block">Water Column Weight</span>
                    <span className="text-3xl font-black text-white font-mono">{Math.round(totalWaterWeight)}</span>
                    <span className="text-xs text-slate-400 ml-1">kg</span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                    <span className="text-[11px] text-slate-300 block">Safety Factor</span>
                    <span className="text-3xl font-black text-emerald-400 font-mono">{safetyFactor}x</span>
                    <span className="text-xs text-slate-400 ml-1">Margin</span>
                  </div>
                </div>

                <div className="bg-white/10 p-4 rounded-2xl text-xs space-y-1 text-slate-300">
                  <div className="flex justify-between text-white font-semibold">
                    <span>Pipe Column Tare: {Math.round(totalPipeWeight)} kg</span>
                    <span>Submersible Pump Unit: {Math.round(pumpWeight)} kg</span>
                  </div>
                  <p className="text-[11px] text-slate-400 pt-1">
                    Idol DeepForce column pipes feature square CNC-machined threads and bi-axially oriented unplasticized PVC that eliminate joint stripping even under pump motor kick-back torque.
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-emerald-300 font-bold">✓ Rated for depths up to 350m</span>
                  <button
                    onClick={() => openRFQ("submersible-column")}
                    className="px-4 py-2 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-xs transition-colors"
                  >
                    Get Column Pipe Submittal
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Micro-Drip Irrigation Emitter */}
        {activeTab === "drip" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
                  Drip Row Layout
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  Micro-Irrigation Lateral Sizing
                </h3>
              </div>

              {/* Lateral Length */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-700">Lateral Dripperline Run:</span>
                  <span className="text-[#0B2545] font-mono font-bold">{lateralLengthM} meters</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="150"
                  step="5"
                  value={lateralLengthM}
                  onChange={(e) => setLateralLengthM(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B2545]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>20m</span>
                  <span>60m</span>
                  <span>100m</span>
                  <span>150m</span>
                </div>
              </div>

              {/* Dripper Spacing */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 block">
                  In-Line Emitter Spacing (cm)
                </label>
                <div className="grid grid-cols-5 gap-2 text-xs">
                  {[20, 30, 40, 50, 60].map((sp) => (
                    <button
                      key={sp}
                      type="button"
                      onClick={() => setDripperSpacingCm(sp)}
                      className={`py-2 rounded-xl font-semibold border text-center transition-all ${
                        dripperSpacingCm === sp
                          ? "bg-[#0B2545] text-white border-[#0B2545]"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {sp} cm
                    </button>
                  ))}
                </div>
              </div>

              {/* Emitter Rating */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 block">
                  Dripper Flow Rating (LPH @ 1.0 bar)
                </label>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <button
                    type="button"
                    onClick={() => setEmitterLph(2.0)}
                    className={`py-3 rounded-xl font-semibold border text-center transition-all ${
                      emitterLph === 2.0
                        ? "bg-[#0B2545] text-white border-[#0B2545]"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    2.0 Litres / Hour (Standard)
                  </button>
                  <button
                    type="button"
                    onClick={() => setEmitterLph(4.0)}
                    className={`py-3 rounded-xl font-semibold border text-center transition-all ${
                      emitterLph === 4.0
                        ? "bg-[#0B2545] text-white border-[#0B2545]"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    4.0 Litres / Hour (Orchards)
                  </button>
                </div>
              </div>
            </div>

            {/* Drip Output */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-[#0B2545] p-8 rounded-3xl text-white shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FDBA74]">
                      Micro-Irrigation Delivery
                    </span>
                    <h3 className="text-xl font-bold">Discharge & Header Sizing</h3>
                  </div>
                  <Droplets className="w-6 h-6 text-blue-400" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                    <span className="text-[11px] text-slate-300 block">Emitters per Lateral</span>
                    <span className="text-3xl font-black text-white font-mono">{dripperCount}</span>
                    <span className="text-xs text-slate-400 ml-1">Emitters</span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                    <span className="text-[11px] text-slate-300 block">Total Lateral Flow</span>
                    <span className="text-3xl font-black text-[#FDBA74] font-mono">{totalLateralDischargeLph}</span>
                    <span className="text-xs text-slate-400 ml-1">LPH ({totalLateralDischargeLpm} LPM)</span>
                  </div>
                </div>

                <div className="bg-white/10 p-4 rounded-2xl text-xs space-y-2 text-slate-300">
                  <span className="font-semibold text-white block">Submain Sizing Recommendation:</span>
                  <p>
                    For up to 20 laterals operating simultaneously, use a <strong>50mm (2") or 63mm (2.5") Class 2 PVC submain pipe</strong> with a 120-mesh disc filter to prevent clogging.
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-mono">Certified IS:13488 / ISO 9261</span>
                  <button
                    onClick={() => openRFQ("drip-irrigation")}
                    className="px-4 py-2 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-xs transition-colors"
                  >
                    Inquire Drip Irrigation
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
