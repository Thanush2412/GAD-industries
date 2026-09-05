"use client";

import React from "react";
import { GAD_PLANT_DATA, GADIN_CORPORATE_DATA } from "@/data/gadSpecifications";
import { Factory, ShieldCheck, Cpu, Globe, CheckCircle, Activity, Sparkles, Wind, VolumeX } from "lucide-react";

export const InfrastructureBento: React.FC = () => {
  return (
    <section id="infrastructure" className="py-16 md:py-24 border-b border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E2E8F0]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase px-2.5 py-1 rounded bg-[#EFF6FF] text-[#053C82] border border-[#BFDBFE] font-bold">
                Manufacturing & Extrusion Telemetry
              </span>
              <span className="text-xs font-mono text-[#64748B]">
                CAPACITY: {GAD_PLANT_DATA.annualCapacity}
              </span>
            </div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#053C82] tracking-tight">
              uPVC Profile Extrusion Lines & Quality Testing Labs
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#475569] leading-relaxed">
            Operating automated German twin-screw profile extruders with robotic CNC 4-head welding, automatic gasket insertion, and certified structural test chambers.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Facility 01 - Multi-Chamber Profile Extrusion (Col 7) */}
          <div className="card-hover-fx md:col-span-7 bg-[#FFFFFF] border border-[#CBD5E1] rounded-xl p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-[#053C82]">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-xs uppercase text-[#DD612A] bg-[#FFF7ED] px-3 py-1 rounded border border-[#FFEDD5] font-bold">
                  FACILITY DIVISION 01
                </span>
                <span className="text-xs font-mono text-[#64748B] font-semibold">GERMAN TWIN-SCREW EXTRUSION</span>
              </div>
              <h3 className="font-sans font-extrabold text-2xl text-[#053C82] mb-2">
                Multi-Chamber uPVC Profile Extrusion
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] mb-6 leading-relaxed">
                Automated continuous extrusion producing 60mm & 70mm casement profiles, multi-track sliding frames, and heavy architectural facade mullions with co-extruded weather seals.
              </p>

              <div className="grid grid-cols-2 gap-4 py-4 border-t border-[#E2E8F0] text-xs font-mono">
                <div>
                  <span className="text-[#64748B] uppercase text-[10px] block font-bold">Extrusion Tooling</span>
                  <span className="font-bold text-[#1E293B]">12 KraussMaffei Lines</span>
                </div>
                <div>
                  <span className="text-[#64748B] uppercase text-[10px] block font-bold">Quality Standard</span>
                  <span className="font-bold text-[#053C82]">EN 12608 Class A (3.0mm Wall)</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#475569]">
              <span>Automated Dosing & Gravimetric Mixers</span>
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                100% Operational
              </span>
            </div>
          </div>

          {/* Card 2: Facility 02 - CNC Robotic Window Fabrication (Col 5) */}
          <div className="card-hover-fx md:col-span-5 bg-[#FFFFFF] border border-[#CBD5E1] rounded-xl p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-[#053C82]">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-xs uppercase text-[#DD612A] bg-[#FFF7ED] px-3 py-1 rounded border border-[#FFEDD5] font-bold">
                  FACILITY DIVISION 02
                </span>
                <span className="text-xs font-mono text-[#64748B] font-semibold">CNC AUTOMATION</span>
              </div>
              <h3 className="font-sans font-extrabold text-xl text-[#053C82] mb-2">
                Robotic Fabrication & Hardware Fitment
              </h3>
              <p className="text-xs text-[#475569] mb-6 leading-relaxed">
                Equipped with Urban 4-head seamless corner welders, computerized double-mitre saws, and multi-point perimeter espagnolette hardware assembly stations.
              </p>

              <div className="space-y-2 py-3 border-t border-[#E2E8F0] text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Corner Weld Tensile Strength:</span>
                  <span className="font-bold text-[#1E293B]">≥ 3,200 N (Break Proof)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Steel Reinforcing Insertion:</span>
                  <span className="font-bold text-[#053C82]">1.5mm - 2.5mm Galvanized</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#475569]">
              <span>Zero-Gap Robotic Corner Cleaners</span>
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Active Throughput
              </span>
            </div>
          </div>

          {/* Card 3: 100% Virgin Compounding & Tropical UV Stabilizers (Col 4) */}
          <div className="card-hover-fx md:col-span-4 bg-[#FFFFFF] border border-[#CBD5E1] rounded-xl p-6 shadow-sm hover:border-[#053C82]">
            <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#053C82] mb-4">
              <ShieldCheck className="w-5 h-5 text-[#DD612A]" />
            </div>
            <h4 className="font-sans font-extrabold text-base text-[#053C82] mb-1">
              Tropicalized Virgin Compounding
            </h4>
            <p className="text-xs text-[#475569] leading-relaxed mb-4">
              Formulated specifically for extreme Middle Eastern and tropical sunlight. Engineered with 8.5% DuPont R-105 Titanium Dioxide ($TiO_2$) to prevent chalking, yellowing, or embrittlement.
            </p>
            <ul className="space-y-1.5 text-xs font-mono text-[#475569] border-t border-[#E2E8F0] pt-3">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>100% Lead-Free (RoHS Compliant)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Class S Tropical Weather Rating</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>High Impact Modifiers (CPE & Acrylic)</span>
              </li>
            </ul>
          </div>

          {/* Card 4: Quality Assurance Lab Testing (Col 4) */}
          <div className="card-hover-fx md:col-span-4 bg-[#FFFFFF] border border-[#CBD5E1] rounded-xl p-6 shadow-sm hover:border-[#053C82]">
            <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#053C82] mb-4">
              <Activity className="w-5 h-5 text-[#DD612A]" />
            </div>
            <h4 className="font-sans font-extrabold text-base text-[#053C82] mb-1">
              Window Pressure & Weather Labs
            </h4>
            <p className="text-xs text-[#475569] leading-relaxed mb-4">
              Every production profile system undergoes 6-stage mechanical, wind load, acoustic, and water ingress testing conforming to European and British standards.
            </p>
            <div className="space-y-2 border-t border-[#E2E8F0] pt-3 text-xs font-mono text-[#475569]">
              <div className="flex justify-between">
                <span>Wind Deflection Test:</span>
                <span className="font-bold text-[#053C82]">Up to 3,000 Pa (Class C5)</span>
              </div>
              <div className="flex justify-between">
                <span>Driving Rain Tightness:</span>
                <span className="font-bold text-[#053C82]">600 - 900 Pa (Class 9A)</span>
              </div>
              <div className="flex justify-between">
                <span>Acoustic Sound Loss:</span>
                <span className="font-bold text-[#DD612A]">42 dB Rw (DGU Laminated)</span>
              </div>
            </div>
          </div>

          {/* Card 5: Global Export Footprint & Dubai HQ (Col 4) */}
          <div className="card-hover-fx md:col-span-4 bg-[#051E42] text-white border border-[#1E3A8A] rounded-xl p-6 shadow-sm flex flex-col justify-between hover:border-[#DD612A]">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#053C82] border border-[#1E3A8A] flex items-center justify-center text-[#DD612A] mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-extrabold text-base mb-1">
                Dubai HQ & Global Export Corridors
              </h4>
              <p className="text-xs text-[#CBD5E1] leading-relaxed mb-4">
                Serving leading architectural developers, fenestration fabricators, and building contractors across the GCC, Africa, and South Asia.
              </p>
              <div className="flex flex-wrap gap-1.5 text-[10px] font-mono">
                {GAD_PLANT_DATA.exportMarkets.map((market, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-[#0A2A5E] border border-[#1E3A8A] text-[#BFDBFE]"
                  >
                    {market}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1E3A8A] text-[11px] font-mono text-[#94A3B8] flex justify-between items-center">
              <span>Trade Freezone HQ:</span>
              <span className="text-[#DD612A] font-bold">IFZA Silicon Oasis, Dubai</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
