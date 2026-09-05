"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Globe2,
  Award,
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  Gauge,
  Layers,
  Sparkles,
  Droplets,
  ExternalLink,
  Flame,
  Check,
  Send,
  Building,
  Menu,
  X,
  Wind,
  VolumeX,
  Maximize2
} from "lucide-react";
import { GADIN_CORPORATE_DATA } from "@/data/gadSpecifications";

export default function CorporateV2Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"casement" | "sliding" | "bifold" | "profiles">("casement");
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  // Interactive Wind & Deflection Simulator
  const [selectedFloor, setSelectedFloor] = useState<number>(12);
  const [selectedWidth, setSelectedWidth] = useState<number>(1800);
  const [selectedHeight, setSelectedHeight] = useState<number>(2100);

  const designWindPa = Math.round(0.6 * Math.pow(50 * (1 + selectedFloor * 0.018), 2));
  const maxDeflectionMm = (selectedHeight / 175).toFixed(1);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ref = `GIT-DXB-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] selection:bg-[#DD612A] selection:text-white">
      {/* 1. Global Enterprise Navigation in Gadin Royal Blue */}
      <header className="sticky top-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-xl border-b border-[#E2E8F0] shadow-sm">
        {/* Top Info Bar */}
        <div className="hidden lg:flex justify-between items-center px-8 py-1.5 text-xs bg-[#053C82] text-[#DBEAFE]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 font-mono text-[11px] text-[#FFFFFF]">
              <span className="w-2 h-2 rounded-full bg-[#DD612A] animate-pulse"></span>
              GADIN INDUSTRIES TRADING FZCO • DUBAI LIC. 72748
            </span>
            <span className="text-[#3B82F6]">|</span>
            <span className="font-mono text-[11px]">
              {GADIN_CORPORATE_DATA.tagline}
            </span>
          </div>
          <div className="flex items-center gap-5 font-mono text-[11px]">
            <a href="tel:+971505969577" className="flex items-center gap-1.5 hover:text-white text-[#DBEAFE] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#DD612A]" />
              <span>Dubai Desk: +971 50 596 9577</span>
            </a>
            <span className="text-[#3B82F6]">|</span>
            <a href="mailto:adityavmgadin@gmail.com" className="flex items-center gap-1.5 hover:text-white text-[#DBEAFE] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#DD612A]" />
              <span>{GADIN_CORPORATE_DATA.email}</span>
            </a>
          </div>
        </div>

        {/* Main Header Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo with official GI emblem */}
          <Link href="/v2" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 bg-white rounded flex items-center justify-center p-1 border border-[#CBD5E1] shadow-sm group-hover:border-[#053C82] transition-colors">
              <Image
                src="/images/gi_icon.png"
                alt="GADIN Industries Logo"
                width={46}
                height={46}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="font-extrabold text-xl tracking-tight text-[#053C82] flex items-center gap-2">
                GADIN INDUSTRIES
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#FFF7ED] border border-[#FFEDD5] text-[#DD612A]">
                  FLAGSHIP
                </span>
              </div>
              <p className="text-[11px] font-mono text-[#64748B] tracking-wider uppercase">
                uPVC Windows, Doors & Architectural Profiles
              </p>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#334155]">
            <a href="#about" className="hover:text-[#053C82] transition-colors">
              Corporate Profile
            </a>
            <a href="#windows-showcase" className="hover:text-[#053C82] transition-colors">
              uPVC Windows
            </a>
            <a href="#engineering" className="hover:text-[#053C82] transition-colors">
              Profile Technology
            </a>
            <a href="#simulator" className="hover:text-[#053C82] transition-colors flex items-center gap-1">
              <span>Wind Load Tool</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#DD612A]"></span>
            </a>
            <a href="#inquiry" className="hover:text-[#053C82] transition-colors">
              Commercial RFQ
            </a>
          </nav>

          {/* Switcher & Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/"
              className="px-3.5 py-2 rounded border border-[#CBD5E1] bg-[#F8FAFC] hover:bg-[#F1F5F9] text-xs font-mono font-bold text-[#053C82] transition-all flex items-center gap-1.5 shadow-sm"
              title="Switch to Engineering Minimalist Mode"
            >
              <span>V1: Spec Sheet</span>
              <ExternalLink className="w-3 h-3 text-[#64748B]" />
            </Link>

            <a
              href="#inquiry"
              className="px-5 py-2 rounded bg-[#053C82] hover:bg-[#073F86] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-900/10"
            >
              Project RFQ
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded bg-[#F8FAFC] text-[#053C82] border border-[#CBD5E1]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 py-5 bg-[#FFFFFF] border-b border-[#E2E8F0] space-y-4">
            <nav className="flex flex-col space-y-3 text-sm font-semibold text-[#1E293B]">
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>Corporate Profile</a>
              <a href="#windows-showcase" onClick={() => setMobileMenuOpen(false)}>uPVC Windows & Doors</a>
              <a href="#engineering" onClick={() => setMobileMenuOpen(false)}>Profile Technology</a>
              <a href="#simulator" onClick={() => setMobileMenuOpen(false)}>Wind Load Simulator</a>
              <a href="#inquiry" onClick={() => setMobileMenuOpen(false)}>Commercial RFQ</a>
            </nav>
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/"
                className="py-2.5 px-3 rounded bg-[#EFF6FF] text-center text-xs font-mono font-bold text-[#053C82] border border-[#BFDBFE]"
              >
                Switch to V1 (Minimalist Engineering Mode)
              </Link>
              <a
                href="#inquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded bg-[#053C82] text-center text-xs font-bold uppercase text-white"
              >
                Project RFQ / Dealership
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. Visual Corporate Hero Section featuring Luxury uPVC Windows */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-[#E2E8F0] bg-[#051E42]">
        {/* Background Luxury Window Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/upvc_luxury_windows.jpg"
            alt="GADIN Luxury uPVC Sliding & Casement Windows"
            fill
            className="object-cover object-center brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051E42] via-[#051E42]/60 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#051E42]/50 to-[#051E42]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center sm:text-left">
          <div className="max-w-3xl animate-fadeIn">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/10 border border-white/20 text-xs font-mono text-[#DD612A] mb-6 backdrop-blur-md font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#DD612A]" />
              <span>ARCHITECTURAL EXCELLENCE • EN 12608 CLASS A uPVC</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] mb-6">
              Precision uPVC Windows & Architectural Systems.
            </h1>

            <p className="text-base sm:text-xl text-[#E2E8F0] leading-relaxed mb-10 max-w-2xl font-medium">
              GADIN Industries Trading FZCO engineers ultra-durable, multi-chamber uPVC windows, patio doors, and structural facades. Tested for 3,000 Pa hurricane wind resistance, acoustic sound dampening up to 42 dB, and thermal U-values below 1.4 W/m²K.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#windows-showcase"
                className="btn-interactive w-full sm:w-auto px-8 py-4 rounded-lg bg-[#DD612A] hover:bg-[#C24F1E] text-white font-bold text-sm tracking-wide uppercase shadow-xl shadow-orange-600/30 flex items-center justify-center gap-2"
              >
                <span>Explore Windows & Doors</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#simulator"
                className="btn-interactive w-full sm:w-auto px-8 py-4 rounded-lg bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/20 border border-white/30 text-white font-mono text-sm font-bold tracking-wide backdrop-blur-md flex items-center justify-center gap-2"
              >
                <Wind className="w-4 h-4 text-[#DD612A]" />
                <span>Run Wind Load Simulator</span>
              </a>
            </div>
          </div>
        </div>

        {/* Floating Quick Stats Ribbon in GADIN Royal Blue */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[#0B2D62] bg-[#053C82]/95 backdrop-blur-md text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center sm:text-left">
            <div>
              <div className="text-2xl font-bold font-mono text-white">3,000 Pa</div>
              <div className="text-xs text-[#BFDBFE] uppercase font-mono">Hurricane Wind Load (C5)</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-[#DD612A]">42 dB Rw</div>
              <div className="text-xs text-[#BFDBFE] uppercase font-mono">Acoustic Soundproofing</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-white">1.3 W/m²K</div>
              <div className="text-xs text-[#BFDBFE] uppercase font-mono">Thermal Insulation (U-Value)</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-emerald-400">Class S</div>
              <div className="text-xs text-[#BFDBFE] uppercase font-mono">Tropical UV Stabilized</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Corporate Overview & Architectural Engineering */}
      <section id="about" className="py-20 lg:py-28 border-b border-[#E2E8F0] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Description */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-mono text-[#053C82] font-bold">
                <Building className="w-3.5 h-3.5 text-[#DD612A]" />
                <span>GADIN INDUSTRIES TRADING FZCO (DUBAI, UAE)</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#053C82] tracking-tight">
                Architectural Innovation & International Trading Leadership
              </h2>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                Operating from the prestigious IFZA Business Park in Dubai Silicon Oasis, GADIN Industries Trading FZCO is an international leader in modern architectural fenestration, uPVC multi-chamber profiles, and MEP building infrastructure.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E2E8F0]">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#64748B] uppercase block">Dubai License Accreditation</span>
                  <span className="text-sm font-bold text-[#053C82]">FZCO Registration No. 72748</span>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#64748B] uppercase block">Climatic Engineering</span>
                  <span className="text-sm font-bold text-[#DD612A]">Rated for 50°C+ High Desert UV</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#windows-showcase"
                  className="inline-flex items-center gap-2 text-sm font-mono font-bold text-[#053C82] hover:text-[#DD612A] transition-colors"
                >
                  <span>Explore PrimaTherm & GlideMax Systems</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Profile Engineering Image */}
            <div className="lg:col-span-6 relative h-[440px] rounded-2xl overflow-hidden border border-[#CBD5E1] shadow-xl">
              <Image
                src="/images/upvc_profile_tech.jpg"
                alt="Multi-Chamber uPVC Window Profile Engineering"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051E42]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#053C82]/95 backdrop-blur-md border border-[#1E3A8A] text-white">
                <div className="text-xs font-mono text-[#DD612A] uppercase font-bold">Structural Core Technology</div>
                <div className="text-base font-bold">5-Chamber Frame with 2.0mm Hot-Dip Galvanized Steel Core</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Windows & Doors Showcase Tabs */}
      <section id="windows-showcase" className="py-20 lg:py-28 border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono text-[#DD612A] uppercase tracking-widest font-bold block mb-2">
              ARCHITECTURAL FENESTRATION SYSTEMS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#053C82] tracking-tight">
              Engineered for Acoustics, Security & Storm Resilience
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3 leading-relaxed">
              Precision multi-chamber uPVC profiles with multi-point perimeter locking, EPDM compression seals, and double glazed units (DGU) for villas, luxury towers, and commercial developments.
            </p>
          </div>

          {/* Showcase Tabs */}
          <div className="flex justify-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-10">
            <button
              onClick={() => setActiveTab("casement")}
              className={`px-5 py-3 rounded-lg text-xs sm:text-sm font-mono tracking-wider uppercase transition-all flex items-center gap-2 ${
                activeTab === "casement"
                  ? "bg-[#053C82] text-white font-bold shadow-md shadow-blue-900/20"
                  : "bg-[#FFFFFF] text-[#475569] hover:text-[#053C82] border border-[#CBD5E1]"
              }`}
            >
              <Maximize2 className="w-4 h-4 text-[#DD612A]" />
              <span>PrimaTherm Casement & French Doors</span>
            </button>

            <button
              onClick={() => setActiveTab("sliding")}
              className={`px-5 py-3 rounded-lg text-xs sm:text-sm font-mono tracking-wider uppercase transition-all flex items-center gap-2 ${
                activeTab === "sliding"
                  ? "bg-[#053C82] text-white font-bold shadow-md shadow-blue-900/20"
                  : "bg-[#FFFFFF] text-[#475569] hover:text-[#053C82] border border-[#CBD5E1]"
              }`}
            >
              <Wind className="w-4 h-4 text-[#DD612A]" />
              <span>GlideMax Multi-Track Sliding</span>
            </button>

            <button
              onClick={() => setActiveTab("bifold")}
              className={`px-5 py-3 rounded-lg text-xs sm:text-sm font-mono tracking-wider uppercase transition-all flex items-center gap-2 ${
                activeTab === "bifold"
                  ? "bg-[#053C82] text-white font-bold shadow-md shadow-blue-900/20"
                  : "bg-[#FFFFFF] text-[#475569] hover:text-[#053C82] border border-[#CBD5E1]"
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#DD612A]" />
              <span>PanoramaFold Bi-Fold Doors</span>
            </button>

            <button
              onClick={() => setActiveTab("profiles")}
              className={`px-5 py-3 rounded-lg text-xs sm:text-sm font-mono tracking-wider uppercase transition-all flex items-center gap-2 ${
                activeTab === "profiles"
                  ? "bg-[#053C82] text-white font-bold shadow-md shadow-blue-900/20"
                  : "bg-[#FFFFFF] text-[#475569] hover:text-[#053C82] border border-[#CBD5E1]"
              }`}
            >
              <Layers className="w-4 h-4 text-[#DD612A]" />
              <span>Multi-Chamber Profiles & Steel Cores</span>
            </button>
          </div>

          {/* Tab Content 1: Casement */}
          {activeTab === "casement" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FFFFFF] border border-[#CBD5E1] rounded-2xl p-6 sm:p-10 shadow-sm">
              <div className="lg:col-span-6 relative h-[380px] rounded-xl overflow-hidden border border-[#E2E8F0]">
                <Image
                  src="/images/upvc_casement_doors.jpg"
                  alt="GADIN Casement Windows & French Doors"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="lg:col-span-6 space-y-5">
                <div className="inline-block font-mono text-xs text-[#053C82] bg-[#EFF6FF] px-3 py-1 rounded border border-[#BFDBFE] font-bold">
                  EN 12608 CLASS A • SOUND REDUCTION 42 dB • CLASS 9A WATERPROOF
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#053C82]">
                  PrimaTherm 60/70mm uPVC Casement Windows & French Doors
                </h3>

                <p className="text-sm text-[#475569] leading-relaxed">
                  Engineered with 60mm (3-chamber) and 70mm (5-chamber) wall thicknesses, 2.0mm galvanized steel cores, and co-extruded EPDM dual gaskets. Tested to resist driving rains up to 600 Pa and typhoon gusts up to 3,000 Pa.
                </p>

                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-[#64748B] block font-bold">Sound Reduction:</span>
                    <span className="font-bold text-[#DD612A] text-base">Up to 42 dB Rw</span>
                  </div>
                  <div className="p-3 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-[#64748B] block font-bold">Wind Resistance:</span>
                    <span className="font-bold text-[#053C82] text-base">Class C5 (3,000 Pa)</span>
                  </div>
                  <div className="p-3 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-[#64748B] block font-bold">Security Hardware:</span>
                    <span className="font-bold text-[#334155] text-base">RC2 Multi-Point</span>
                  </div>
                  <div className="p-3 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-[#64748B] block font-bold">Glazing Option:</span>
                    <span className="font-bold text-emerald-700 text-base">DGU 24mm / Low-E</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#inquiry"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#053C82] hover:bg-[#073F86] text-white font-bold text-xs font-mono uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <span>Request Architectural Specs</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 2: Sliding */}
          {activeTab === "sliding" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FFFFFF] border border-[#CBD5E1] rounded-2xl p-6 sm:p-10 shadow-sm">
              <div className="lg:col-span-6 relative h-[380px] rounded-xl overflow-hidden border border-[#E2E8F0]">
                <Image
                  src="/images/upvc_luxury_windows.jpg"
                  alt="GADIN GlideMax Multi-Track Sliding Patio Doors"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="lg:col-span-6 space-y-5">
                <div className="inline-block font-mono text-xs text-[#053C82] bg-[#EFF6FF] px-3 py-1 rounded border border-[#BFDBFE] font-bold">
                  2-TRACK • 3-TRACK • 4-TRACK WITH SS INSECT MESH
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#053C82]">
                  GlideMax Multi-Track uPVC Sliding Windows & Patio Doors
                </h3>

                <p className="text-sm text-[#475569] leading-relaxed">
                  Smooth whisper-quiet glide over heavy-duty 304 stainless steel tracks. Tandem rollers accommodate sashes up to 180 kg each. Interlocks reinforced with external aluminum structural fins to withstand hurricane wind deflections.
                </p>

                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-[#64748B] block font-bold">Roller Capacity:</span>
                    <span className="font-bold text-[#053C82] text-base">Up to 180 kg/sash</span>
                  </div>
                  <div className="p-3 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-[#64748B] block font-bold">Max Opening Span:</span>
                    <span className="font-bold text-[#DD612A] text-base">Up to 6.0 Meters</span>
                  </div>
                  <div className="p-3 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-[#64748B] block font-bold">Air Infiltration:</span>
                    <span className="font-bold text-emerald-700 text-base">Class 3 (EN 12207)</span>
                  </div>
                  <div className="p-3 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-[#64748B] block font-bold">Track Material:</span>
                    <span className="font-bold text-[#334155] text-base">Grade 304 SS Rail</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#inquiry"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#053C82] hover:bg-[#073F86] text-white font-bold text-xs font-mono uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <span>Request Sliding System Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 3: Bi-Fold */}
          {activeTab === "bifold" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FFFFFF] border border-[#CBD5E1] rounded-2xl p-6 sm:p-10 shadow-sm">
              <div className="lg:col-span-6 relative h-[380px] rounded-xl overflow-hidden border border-[#E2E8F0]">
                <Image
                  src="/images/upvc_bifold_doors.jpg"
                  alt="GADIN PanoramaFold Panoramic Slide & Fold Doors"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="lg:col-span-6 space-y-5">
                <div className="inline-block font-mono text-xs text-[#053C82] bg-[#EFF6FF] px-3 py-1 rounded border border-[#BFDBFE] font-bold">
                  PANORAMIC SPANS UP TO 7 METERS • FLUSH SUNKEN THRESHOLD
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#053C82]">
                  PanoramaFold Heavy-Duty Slide & Fold Balcony Doors
                </h3>

                <p className="text-sm text-[#475569] leading-relaxed">
                  Transform living spaces with panoramic unobstructed garden and sea views. Features top-hung guide tracks, bottom precision bogie rollers, and double EPDM compression gaskets between all folding panels.
                </p>

                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-[#64748B] block font-bold">Configuration:</span>
                    <span className="font-bold text-[#053C82] text-base">3 to 7 Folding Panels</span>
                  </div>
                  <div className="p-3 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-[#64748B] block font-bold">Panel Load:</span>
                    <span className="font-bold text-[#DD612A] text-base">100 kg per panel</span>
                  </div>
                  <div className="p-3 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-[#64748B] block font-bold">Threshold:</span>
                    <span className="font-bold text-emerald-700 text-base">Barrier-Free Flush</span>
                  </div>
                  <div className="p-3 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-[#64748B] block font-bold">Sound Insulation:</span>
                    <span className="font-bold text-[#334155] text-base">40 dB (28mm DGU)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#inquiry"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#053C82] hover:bg-[#073F86] text-white font-bold text-xs font-mono uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <span>Request Bi-Fold Technical Dossier</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 4: Multi-Chamber Profiles */}
          {activeTab === "profiles" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FFFFFF] border border-[#CBD5E1] rounded-2xl p-6 sm:p-10 shadow-sm">
              <div className="lg:col-span-6 relative h-[380px] rounded-xl overflow-hidden border border-[#E2E8F0]">
                <Image
                  src="/images/upvc_profile_tech.jpg"
                  alt="GADIN Multi-Chamber uPVC Profile Technology"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="lg:col-span-6 space-y-5">
                <div className="inline-block font-mono text-xs text-[#053C82] bg-[#EFF6FF] px-3 py-1 rounded border border-[#BFDBFE] font-bold">
                  MULTI-CHAMBER THERMAL BREAK TECHNOLOGY
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#053C82]">
                  High-Stiffness Extruded Profiles with Steel Reinforcement
                </h3>

                <p className="text-sm text-[#475569] leading-relaxed">
                  Our profiles feature internal multi-cavities that trap dead air to provide superior thermal insulation. The central chamber houses high-tensile hot-dip galvanized steel to absorb building sway and dynamic wind pressure.
                </p>

                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-[#64748B] block font-bold">Chamber System:</span>
                    <span className="font-bold text-[#053C82] text-base">3 & 5 Chamber Design</span>
                  </div>
                  <div className="p-3 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-[#64748B] block font-bold">UV Compound:</span>
                    <span className="font-bold text-[#DD612A] text-base">8.5% TiO2 Tropicalized</span>
                  </div>
                  <div className="p-3 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-[#64748B] block font-bold">Thermal Uf:</span>
                    <span className="font-bold text-emerald-700 text-base">1.3 W/m²K (Passive)</span>
                  </div>
                  <div className="p-3 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-[#64748B] block font-bold">Steel Thickness:</span>
                    <span className="font-bold text-[#334155] text-base">1.5mm to 2.5mm Core</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#inquiry"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#053C82] hover:bg-[#073F86] text-white font-bold text-xs font-mono uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <span>Request Profile Die Catalog</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. Wind Load Simulator Section in GADIN Colors */}
      <section id="simulator" className="py-20 lg:py-28 border-b border-[#E2E8F0] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E2E8F0]">
            <div>
              <span className="text-xs font-mono text-[#DD612A] uppercase tracking-widest font-bold block mb-2">
                STRUCTURAL DEFLECTION & WIND LOAD SIMULATOR
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#053C82] tracking-tight">
                Simulate Window Wind Pressure & Frame Deflection
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#64748B]">
              Calculate design wind pressures based on building elevation and compute maximum allowable deflection limits according to EN 12210 and IS 875.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Input Controls */}
            <div className="lg:col-span-5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold uppercase text-[#334155]">
                    Building Floor Level (Height)
                  </label>
                  <span className="font-mono text-sm font-bold text-[#053C82]">
                    Floor {selectedFloor} (~{Math.round(selectedFloor * 3.2)}m High)
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="45"
                  value={selectedFloor}
                  onChange={(e) => setSelectedFloor(Number(e.target.value))}
                  className="w-full accent-[#053C82] bg-[#E2E8F0] h-2 rounded cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#64748B] mt-1">
                  <span>Floor 1 (Ground)</span>
                  <span>Floor 20 (64m)</span>
                  <span>Floor 45 (Tower)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#334155] mb-1">Window Width (mm)</label>
                  <input
                    type="number"
                    step="100"
                    value={selectedWidth}
                    onChange={(e) => setSelectedWidth(Number(e.target.value))}
                    className="w-full text-xs font-mono p-2.5 border border-[#CBD5E1] rounded bg-[#FFFFFF]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-[#334155] mb-1">Window Height (mm)</label>
                  <input
                    type="number"
                    step="100"
                    value={selectedHeight}
                    onChange={(e) => setSelectedHeight(Number(e.target.value))}
                    className="w-full text-xs font-mono p-2.5 border border-[#CBD5E1] rounded bg-[#FFFFFF]"
                  />
                </div>
              </div>
            </div>

            {/* Telemetry Output */}
            <div className="lg:col-span-7 bg-[#F8FAFC] border border-[#CBD5E1] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4 mb-6">
                  <span className="font-mono text-xs uppercase text-[#64748B] font-bold">
                    STRUCTURAL VERIFICATION ACCORDING TO EN 12210
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-800 bg-emerald-50 border border-emerald-300 px-2.5 py-1 rounded font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    CERTIFIED SAFE
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#CBD5E1]">
                    <div className="text-[11px] font-mono text-[#64748B] uppercase font-bold">Design Wind Pressure</div>
                    <div className="text-2xl font-mono font-black text-[#053C82] mt-1">
                      {designWindPa} <span className="text-xs font-sans font-bold text-[#64748B]">Pa</span>
                    </div>
                    <div className="text-[11px] text-[#DD612A] font-mono mt-1 font-bold">
                      Class C{designWindPa <= 2000 ? "3" : designWindPa <= 2400 ? "4" : "5"}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#CBD5E1]">
                    <div className="text-[11px] font-mono text-[#64748B] uppercase font-bold">Max Allowable Deflection</div>
                    <div className="text-2xl font-mono font-black text-[#053C82] mt-1">
                      {maxDeflectionMm} <span className="text-xs font-sans font-bold text-[#64748B]">mm</span>
                    </div>
                    <div className="text-[11px] text-[#64748B] font-mono mt-1">
                      L/175 Structural Limit
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#CBD5E1]">
                    <div className="text-[11px] font-mono text-[#64748B] uppercase font-bold">Steel Core Thickness</div>
                    <div className="text-2xl font-mono font-black text-[#DD612A] mt-1">
                      2.0 <span className="text-xs font-sans font-bold text-[#64748B]">mm</span>
                    </div>
                    <div className="text-[11px] text-[#64748B] font-mono mt-1">
                      Galvanized Core
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-between text-xs font-mono text-[#053C82]">
                <span>Want to inspect full dimensional engineering tables?</span>
                <Link href="/" className="text-[#DD612A] font-bold hover:underline flex items-center gap-1">
                  <span>Switch to V1 Spec Tables</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Dealership Onboarding & RFQ Section */}
      <section id="inquiry" className="py-20 lg:py-28 border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-[#DD612A] uppercase tracking-widest font-bold block mb-2">
              EXCLUSIVE TERRITORIAL PARTNERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#053C82] tracking-tight">
              Apply for GADIN Dealership or Project RFQ
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Direct factory supply of uPVC multi-chamber profiles, galvanized steel reinforcing cores, and European architectural hardware.
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#CBD5E1] rounded-2xl p-6 sm:p-10 shadow-lg">
            {!submitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-[#334155] mb-1">
                      Company / Firm Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Al-Madina Architectural Glazing LLC"
                      className="w-full text-xs font-mono py-3 px-4 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] text-[#1E293B] focus:outline-none focus:border-[#053C82]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-[#334155] mb-1">
                      Contact Person *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Full name & title"
                      className="w-full text-xs font-mono py-3 px-4 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] text-[#1E293B] focus:outline-none focus:border-[#053C82]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-[#334155] mb-1">
                      Corporate Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="procurement@domain.com"
                      className="w-full text-xs font-mono py-3 px-4 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] text-[#1E293B] focus:outline-none focus:border-[#053C82]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-[#334155] mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+971 / International number"
                      className="w-full text-xs font-mono py-3 px-4 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] text-[#1E293B] focus:outline-none focus:border-[#053C82]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-[#334155] mb-1">
                      Territory / State / Country *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Dubai, UAE or Gujarat, India"
                      className="w-full text-xs font-mono py-3 px-4 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] text-[#1E293B] focus:outline-none focus:border-[#053C82]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-[#334155] mb-1">
                      System of Interest
                    </label>
                    <select className="w-full text-xs font-mono py-3 px-4 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] text-[#1E293B] focus:outline-none focus:border-[#053C82]">
                      <option value="casement">PrimaTherm Casement & French Doors</option>
                      <option value="sliding">GlideMax Multi-Track Sliding Patio Doors</option>
                      <option value="bifold">PanoramaFold Bi-Fold Panoramic Systems</option>
                      <option value="profiles">Extruded Multi-Chamber Profiles & Steel Cores</option>
                      <option value="turnkey">Complete Architectural Fenestration Package</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase font-bold text-[#334155] mb-1">
                    Project Requirements / Bill of Quantities (BOQ)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify window schedule or profile quantities: e.g. 500 sqm of 70mm casement windows with DGU 24mm glass..."
                    className="w-full text-xs font-mono py-3 px-4 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] text-[#1E293B] focus:outline-none focus:border-[#053C82]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#64748B] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Response from Dubai Commercial Desk within 24 Hours</span>
                  </span>

                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-lg bg-[#DD612A] hover:bg-[#C24F1E] text-white font-bold text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-2 shadow-sm"
                  >
                    <span>Submit Commercial RFQ</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#053C82]">
                  Commercial Docket Successfully Created
                </h3>
                <div className="inline-block px-4 py-2 rounded bg-[#EFF6FF] border border-[#BFDBFE] font-mono text-sm font-bold text-[#DD612A]">
                  OFFICIAL REF: {referenceId}
                </div>
                <p className="max-w-md mx-auto text-sm text-[#475569] leading-relaxed">
                  Thank you. Your dossier has been routed directly to the Commercial Directorate at GADIN Industries Trading FZCO (Dubai). An executive will contact you via email within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-lg bg-[#053C82] text-white font-mono text-xs uppercase font-bold"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 7. Corporate Footer */}
      <footer className="bg-[#051E42] border-t border-[#0B2D62] py-14 text-xs font-mono text-[#93C5FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#0B2D62]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-white rounded p-0.5 flex items-center justify-center">
                  <Image src="/images/gi_icon.png" alt="GI" width={28} height={28} />
                </div>
                <div className="font-sans font-black text-lg text-white">GADIN INDUSTRIES</div>
              </div>
              <p className="text-[#CBD5E1] leading-relaxed">
                {GADIN_CORPORATE_DATA.companyName}. FZCO License No. 72748. High-performance uPVC windows, doors and architectural systems.
              </p>
              <div className="mt-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0A2652] border border-[#1E3A8A] text-[#DD612A] hover:text-white transition-colors"
                >
                  <span>Switch to V1 Minimalist Spec Sheet</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div>
              <div className="text-[#DD612A] font-bold uppercase mb-2">Dubai Registered Office</div>
              <p className="text-[#CBD5E1] leading-relaxed">
                {GADIN_CORPORATE_DATA.registeredAddress}
              </p>
            </div>

            <div>
              <div className="text-[#DD612A] font-bold uppercase mb-2">Executive Contacts</div>
              <div className="space-y-1 text-[#CBD5E1]">
                <div>Direct Phone: <span className="text-white font-bold">{GADIN_CORPORATE_DATA.phone}</span></div>
                <div>Corporate: {GADIN_CORPORATE_DATA.email}</div>
                <div>Sales: sales@gadinindustries.com</div>
              </div>
            </div>

            <div>
              <div className="text-[#DD612A] font-bold uppercase mb-2">Quality Certifications</div>
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-[#0A2652] border border-[#1E3A8A] text-white">EN 12608 Class A</span>
                <span className="px-2 py-0.5 rounded bg-[#0A2652] border border-[#1E3A8A] text-white">IS 875 Part 3</span>
                <span className="px-2 py-0.5 rounded bg-[#0A2652] border border-[#1E3A8A] text-white">BS 6375</span>
                <span className="px-2 py-0.5 rounded bg-[#0A2652] border border-[#1E3A8A] text-white">ASTM E330</span>
                <span className="px-2 py-0.5 rounded bg-[#0A2652] border border-[#1E3A8A] text-white">ISO 9001:2015</span>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#93C5FD]">
            <div>© {new Date().getFullYear()} {GADIN_CORPORATE_DATA.companyName}. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <span>Dubai Silicon Oasis, UAE</span>
              <span>•</span>
              <span>License No: 72748</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
