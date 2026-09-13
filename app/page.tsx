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
  Flame,
  Factory,
  Cpu,
  Building,
  Sliders,
  Wind,
  FileCheck,
  TrendingUp,
  ExternalLink,
  Newspaper,
  Calendar
} from "lucide-react";
import { useRFQ } from "@/components/layout/SiteLayoutClient";

interface InteractiveProduct {
  id: string;
  name: string;
  category: string;
  image: string;
  standard: string;
  sizeRange: string;
  pressure: string;
  tagline: string;
  href: string;
}

const INTERACTIVE_PRODUCTS: Record<string, InteractiveProduct> = {
  // Plumbing
  "cpvc-hot-cold": {
    id: "cpvc-hot-cold",
    name: "CPVC Hot & Cold Water Pipes and Fittings",
    category: "Plumbing Pipes",
    image: "/images/idol/cat_cpvc.webp",
    standard: "ASTM D2846 / IS:15778",
    sizeRange: '1/2" (15mm) to 2" (50mm)',
    pressure: "SDR-11 (28.1 bar) & SDR-13.5 (22.5 bar)",
    tagline: "Chlorinated PVC compound rated up to 93°C continuous temperature for rooftop solar water heaters and multi-story potable lines.",
    href: "/products/cpvc-pipes-fittings"
  },
  "upvc-plumbing": {
    id: "upvc-plumbing",
    name: "UPVC Plumbing System (Schedule 40 & 80)",
    category: "Plumbing Pipes",
    image: "/images/idol/cat_upvc_plumbing.webp",
    standard: "ASTM D1785 / ASTM D2467",
    sizeRange: '1/2" (15mm) to 4" (100mm)',
    pressure: "Up to 850 PSI Burst Rating",
    tagline: "100% lead-free, non-toxic unplasticized formulation for potable residential cold water networks and chemical processing.",
    href: "/products/upvc-plumbing-system"
  },
  "garden-hose": {
    id: "garden-hose",
    name: "PVC Garden Flexible Hose Pipe & Tubing",
    category: "Plumbing Pipes",
    image: "/images/idol/cat_garden_hose.webp",
    standard: "100% Virgin Plasticized Resin",
    sizeRange: '1/2" (12.5mm) to 1" (25mm)',
    pressure: "18 bar Burst Pressure",
    tagline: "Flexible, oil-free PVC tubing with instant kink recovery for residential gardens, landscaping, and vehicle wash stations.",
    href: "/products/garden-flexible-hose"
  },

  // Irrigation
  "drip-irrigation": {
    id: "drip-irrigation",
    name: "Drip Irrigation Systems (Flat & Round)",
    category: "Irrigation System",
    image: "/images/idol/cat_drip_irrigation.webp",
    standard: "IS:13488 / IS:12786 / ISO 9261",
    sizeRange: "12mm, 16mm & 20mm Laterals",
    pressure: "0.7 to 2.5 bar (2.0 & 4.0 LPH)",
    tagline: "Integrated turbulent labyrinth flat tape and cylindrical round dripperlines slashing farm water consumption by up to 60%.",
    href: "/products/drip-irrigation"
  },
  "sprinkler-irrigation": {
    id: "sprinkler-irrigation",
    name: "Sprinkler Irrigation System & Rain Pipes",
    category: "Irrigation System",
    image: "/images/idol/cat_sprinkler.webp",
    standard: "IS:14151 (Part 1 & 2) / ISO 7749",
    sizeRange: "63mm & 75mm Quick-Latch Pipes",
    pressure: "2.5 to 4.0 bar (1200 - 2500 LPH)",
    tagline: "Heavy cast brass 27° rotary nozzle heads with quick-coupled HDPE latch pipes for uniform groundnut, wheat, and tea irrigation.",
    href: "/products/sprinkler-irrigation"
  },
  "spray-pipe": {
    id: "spray-pipe",
    name: "Spray Pipe & High-Pressure Sprayers",
    category: "Irrigation System",
    image: "/images/idol/cat_mini_sprinkler.webp",
    standard: "ISO 9001 Commercial Grade",
    sizeRange: "5-Layer Micro-Spray Tube",
    pressure: "Working Pressure up to 10 bar",
    tagline: "Precision laser-punched micro-mist rain spray pipes for delicate leafy vegetable nurseries and close-spaced pulses.",
    href: "/products/irrigation-accessories"
  },

  // Sewage
  "swr-pipes": {
    id: "swr-pipes",
    name: "SWR Drainage System (Pipes & Push-Fit Ring)",
    category: "Sewage Pipes",
    image: "/images/idol/cat_swr_drainage.webp",
    standard: "IS:13592:2013 (Type A & B)",
    sizeRange: '75mm (2.5"), 110mm (4"), 160mm (6")',
    pressure: "Gravity & Syphonic Self-Cleansing",
    tagline: "High-stiffness sanitary drainage stacks with push-fit elastomeric rubber rings providing 100% leak-proof thermal absorption.",
    href: "/products/swr-drainage-system"
  },
  "swr-fittings": {
    id: "swr-fittings",
    name: "SWR Molded Sanitary Fittings & Vent Cowls",
    category: "Sewage Pipes",
    image: "/images/idol/cat_swr_drainage.webp",
    standard: "IS:14735 Specification",
    sizeRange: "Bends, Tees, Door Traps, Nahani Traps",
    pressure: "Self-Cleansing Hydraulic Radius",
    tagline: "Precision-molded bends with access inspection doors and multi-inlet floor traps engineered for zero-blockage sanitary discharge.",
    href: "/products/swr-drainage-system"
  },

  // Agricultural & Borewell
  "agri-pipes": {
    id: "agri-pipes",
    name: "Agri Pressure Pipe & Fittings (IS:4985)",
    category: "Agricultural & Borewell",
    image: "/images/idol/cat_agriculture.webp",
    standard: "IS:4985:2000 (Class 1 to 5)",
    sizeRange: "20mm to 250mm Outer Diameter",
    pressure: "2.5, 4.0, 6.0, 10.0 bar",
    tagline: "Selfit solvent cement and elastomeric ring-fit pressure mains with mirror-smooth hydraulic bore (Hazen-Williams C=150).",
    href: "/products/agriculture-pvc-pipes"
  },
  "column-pipes": {
    id: "column-pipes",
    name: "Submersible Column & Drop/Riser Pipes",
    category: "Agricultural & Borewell",
    image: "/images/idol/cat_column_pipe.webp",
    standard: "DIN 4925 / High-Tensile Square Thread",
    sizeRange: '1" (25mm) to 4" (100mm)',
    pressure: "15 to 35 kgf/cm² (Depth to 350m)",
    tagline: "Biaxial molecular orientation supporting up to 15,000 kgf hanging pump motor weight without corrosion or joint unthreading.",
    href: "/products/submersible-column-pipes"
  },
  "hdpe-pipe": {
    id: "hdpe-pipe",
    name: "HDPE / PLB Telecom Duct Pipe & Water Mains",
    category: "Agricultural & Borewell",
    image: "/images/idol/cat_telecom_duct.webp",
    standard: "TEC / G/CDS-08 / IS:4984 / ISO 4427",
    sizeRange: "32/26mm, 40/33mm, 50/42mm & PE-100",
    pressure: "PN 6 to PN 16 (Up to 16 bar)",
    tagline: "Co-extruded permanently lubricated (PLB) silicone inner lining with friction < 0.06 for rapid optical fiber cable blowing.",
    href: "/products/hdpe-telecom-ducts"
  },
  "casing-pipe": {
    id: "casing-pipe",
    name: "uPVC Borehole Casing & Slotted Screen Pipes",
    category: "Agricultural & Borewell",
    image: "/images/idol/cat_casing_pipe.webp",
    standard: "IS:12818:2010 (CS Shallow & CM Medium)",
    sizeRange: '1.5" (40mm) to 12" (300mm)',
    pressure: "Collapse Rating up to 28 kgf/cm²",
    tagline: "Characteristic deep royal blue casing and horizontal slotted ribs for deep agricultural tube wells and groundwater recharge shafts.",
    href: "/products/borehole-casing-pipes"
  }
};

export default function HomePage() {
  const { openRFQ } = useRFQ();
  const [selectedProductKey, setSelectedProductKey] = useState<string>("cpvc-hot-cold");
  const activeProduct = INTERACTIVE_PRODUCTS[selectedProductKey];

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Hero Cockpit with Authentic Brand Statement */}
      <section className="relative bg-[#0B2545] text-white pt-16 pb-24 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#DD612A]/15 blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold border border-white/10 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-[#DD612A]" />
            <span>IDOL PIPE FITTINGS & IRRIGATION • Est. 1989 • 35+ Years of Manufacturing Excellence</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FDBA74] block">
                INDIA'S LEADING MANUFACTURER & EXPORTER
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
                Pipes, Fittings & <br />
                <span className="text-[#DD612A]">Precision Irrigation</span> <br />
                Systems
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                With a tremendous experience of more than 35 years in pipeline diligence, we are the essential companion for all types of piping solutions across residential plumbing, agricultural tube wells, infrastructure drainage, and precision drip irrigation.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openRFQ()}
                  className="px-7 py-3.5 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-bold text-xs shadow-lg shadow-orange-950/20 transition-all flex items-center gap-2 active:scale-95"
                >
                  Request Direct Factory Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/products"
                  className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 backdrop-blur-md transition-colors flex items-center gap-2"
                >
                  Explore Master Catalog
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DD612A]" /> 2 Plants in Rajkot (52,000 m²)
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DD612A]" /> 18 Twin-Screw Extruders
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DD612A]" /> 24,000 MT/Year Capacity
                </span>
              </div>
            </div>

            {/* Hero Right Visual */}
            <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 flex flex-col justify-between backdrop-blur-sm">
              <div className="relative w-full h-56">
                <Image
                  src="/images/idol/cat_cpvc.webp"
                  alt="Idol Pipes Flagship Range"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">Raw Polymer Partner</span>
                  <span className="font-bold text-white">Reliance Industries Limited (RIL)</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">Global Export Desk</span>
                  <span className="font-bold text-[#FDBA74]">Dubai, UAE (GADIN FZCO)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Factory Performance Statistics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-12">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-900/5 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="border-r border-slate-100 last:border-0">
            <span className="text-3xl sm:text-4xl font-black text-[#0B2545] font-mono">24,000 MT</span>
            <p className="text-xs font-bold uppercase text-slate-500 mt-1">Annual Extrusion Volume</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Automated High-Speed Lines</p>
          </div>
          <div className="border-r border-slate-100 last:border-0">
            <span className="text-3xl sm:text-4xl font-black text-[#DD612A] font-mono">35+ Years</span>
            <p className="text-xs font-bold uppercase text-slate-500 mt-1">Established 1989</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Pioneering Gujarat Plastics</p>
          </div>
          <div className="border-r border-slate-100 last:border-0">
            <span className="text-3xl sm:text-4xl font-black text-emerald-600 font-mono">100% Virgin</span>
            <p className="text-xs font-bold uppercase text-slate-500 mt-1">Polymer Compounding</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Zero Recycled Scrap Used</p>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-[#0B2545] font-mono">18 Extruders</span>
            <p className="text-xs font-bold uppercase text-slate-500 mt-1">Twin-Screw Systems</p>
            <p className="text-[11px] text-slate-400 mt-0.5">2 Plants Across Rajkot</p>
          </div>
        </div>
      </section>

      {/* 3. The Authentic Interactive "Product Range and Application" Studio */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
            Interactive Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Product Range and Application
          </h2>
          <p className="text-sm text-slate-600">
            Delivering exceptional service. Manufacturing top-notch products across four core industrial sectors.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Plumbing & Irrigation */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <div className="bg-[#0B2545] text-white px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-[#DD612A]" /> Plumbing Pipes
                </div>
                <div className="space-y-1.5 mt-2">
                  <button
                    onClick={() => setSelectedProductKey("cpvc-hot-cold")}
                    className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                      selectedProductKey === "cpvc-hot-cold"
                        ? "bg-orange-50 text-[#DD612A] font-bold border border-orange-200"
                        : "text-slate-600 hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    CPVC Hot & Cold Water
                  </button>
                  <button
                    onClick={() => setSelectedProductKey("upvc-plumbing")}
                    className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                      selectedProductKey === "upvc-plumbing"
                        ? "bg-orange-50 text-[#DD612A] font-bold border border-orange-200"
                        : "text-slate-600 hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    UPVC Plumbing System
                  </button>
                  <button
                    onClick={() => setSelectedProductKey("garden-hose")}
                    className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                      selectedProductKey === "garden-hose"
                        ? "bg-orange-50 text-[#DD612A] font-bold border border-orange-200"
                        : "text-slate-600 hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    Garden & Tubing Hose
                  </button>
                </div>
              </div>

              <div>
                <div className="bg-[#0B2545] text-white px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#DD612A]" /> Irrigation System
                </div>
                <div className="space-y-1.5 mt-2">
                  <button
                    onClick={() => setSelectedProductKey("drip-irrigation")}
                    className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                      selectedProductKey === "drip-irrigation"
                        ? "bg-orange-50 text-[#DD612A] font-bold border border-orange-200"
                        : "text-slate-600 hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    Drip Irrigation (Flat & Round)
                  </button>
                  <button
                    onClick={() => setSelectedProductKey("sprinkler-irrigation")}
                    className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                      selectedProductKey === "sprinkler-irrigation"
                        ? "bg-orange-50 text-[#DD612A] font-bold border border-orange-200"
                        : "text-slate-600 hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    Sprinkler Irrigation
                  </button>
                  <button
                    onClick={() => setSelectedProductKey("spray-pipe")}
                    className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                      selectedProductKey === "spray-pipe"
                        ? "bg-orange-50 text-[#DD612A] font-bold border border-orange-200"
                        : "text-slate-600 hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    Spray Pipe & Rain Tubes
                  </button>
                </div>
              </div>
            </div>

            {/* Center Column: High-Res Interactive Product Display */}
            <div className="lg:col-span-6 bg-slate-50 rounded-3xl border border-slate-100 p-6 sm:p-8 flex flex-col items-center justify-between text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#053C82] text-xs font-bold">
                {activeProduct.category}
              </div>

              <div className="relative h-64 sm:h-72 w-full">
                <Image
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  fill
                  className="object-contain transition-all duration-300 drop-shadow-md"
                />
              </div>

              <div className="space-y-2 max-w-md">
                <span className="font-mono text-xs font-bold text-[#DD612A]">{activeProduct.standard}</span>
                <h3 className="text-xl font-bold text-slate-900">{activeProduct.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{activeProduct.tagline}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 w-full max-w-md text-xs bg-white p-3 rounded-2xl border border-slate-200/80">
                <div className="text-left">
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">Sizes:</span>
                  <span className="font-semibold text-slate-800">{activeProduct.sizeRange}</span>
                </div>
                <div className="text-left">
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">Pressure:</span>
                  <span className="font-semibold text-slate-800">{activeProduct.pressure}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Link
                  href={activeProduct.href}
                  className="px-5 py-2.5 rounded-xl bg-[#053C82] hover:bg-[#073F86] text-white font-semibold text-xs transition-colors"
                >
                  View Technical Specification →
                </Link>
                <button
                  onClick={() => openRFQ(activeProduct.id)}
                  className="px-5 py-2.5 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  Request RFQ
                </button>
              </div>
            </div>

            {/* Right Column: Sewage & Agriculture / Borewell */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <div className="bg-[#0B2545] text-white px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#DD612A]" /> Sewage Pipes
                </div>
                <div className="space-y-1.5 mt-2">
                  <button
                    onClick={() => setSelectedProductKey("swr-pipes")}
                    className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                      selectedProductKey === "swr-pipes"
                        ? "bg-orange-50 text-[#DD612A] font-bold border border-orange-200"
                        : "text-slate-600 hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    SWR Drainage Pipes
                  </button>
                  <button
                    onClick={() => setSelectedProductKey("swr-fittings")}
                    className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                      selectedProductKey === "swr-fittings"
                        ? "bg-orange-50 text-[#DD612A] font-bold border border-orange-200"
                        : "text-slate-600 hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    SWR Molded Fittings
                  </button>
                </div>
              </div>

              <div>
                <div className="bg-[#0B2545] text-white px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                  <Factory className="w-4 h-4 text-[#DD612A]" /> Agri & Borewell
                </div>
                <div className="space-y-1.5 mt-2">
                  <button
                    onClick={() => setSelectedProductKey("agri-pipes")}
                    className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                      selectedProductKey === "agri-pipes"
                        ? "bg-orange-50 text-[#DD612A] font-bold border border-orange-200"
                        : "text-slate-600 hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    Agri Pressure Pipe & Fitting
                  </button>
                  <button
                    onClick={() => setSelectedProductKey("column-pipes")}
                    className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                      selectedProductKey === "column-pipes"
                        ? "bg-orange-50 text-[#DD612A] font-bold border border-orange-200"
                        : "text-slate-600 hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    Column Pipe & Accessories
                  </button>
                  <button
                    onClick={() => setSelectedProductKey("hdpe-pipe")}
                    className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                      selectedProductKey === "hdpe-pipe"
                        ? "bg-orange-50 text-[#DD612A] font-bold border border-orange-200"
                        : "text-slate-600 hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    HDPE / PLB Telecom Duct
                  </button>
                  <button
                    onClick={() => setSelectedProductKey("casing-pipe")}
                    className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                      selectedProductKey === "casing-pipe"
                        ? "bg-orange-50 text-[#DD612A] font-bold border border-orange-200"
                        : "text-slate-600 hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    Borehole Casing Pipe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Current Affairs & Sector Intelligence (2026 Active Developments) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#DD612A]">
              <Newspaper className="w-4 h-4" /> Current Affairs & Sector Intelligence (2026)
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mt-1">
              National Water Missions, BIS Updates & Agricultural Trends
            </h2>
          </div>
          <Link
            href="/updates"
            className="text-xs font-bold text-[#053C82] hover:text-[#DD612A] flex items-center gap-1 transition-colors"
          >
            Explore All Updates & Technical Advisories →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: PMKSY & Per Drop More Crop */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px]">
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold">
                  Government Policy
                </span>
                <span className="text-slate-400 font-mono">Active 2026</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                PMKSY "Per Drop More Crop": Enhanced Micro-Irrigation Subsidies
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Under the updated 2026 agricultural guidelines, small and marginal farmers qualify for up to 55% to 70% direct benefit transfers on certified IS:13488 drip and sprinkler packages.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono text-[11px]">Subsidies & Guidelines</span>
              <Link href="/products/drip-irrigation" className="font-semibold text-[#053C82] hover:text-[#DD612A]">
                View Drip Systems →
              </Link>
            </div>
          </div>

          {/* Card 2: Jal Jeevan Mission */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px]">
                <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#053C82] font-bold">
                  Infrastructure Mission
                </span>
                <span className="text-slate-400 font-mono">Current Affairs</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                Jal Jeevan Mission (JJM): Zero-Lead Mandates for Potable Water
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                National rural tap water networks mandate 100% lead-free, non-toxic uPVC (ASTM D1785) and cPVC (IS:15778) piping to eradicate heavy metal leaching in village water supplies.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono text-[11px]">Potable Water Quality</span>
              <Link href="/products/upvc-plumbing-system" className="font-semibold text-[#053C82] hover:text-[#DD612A]">
                uPVC Lead-Free Data →
              </Link>
            </div>
          </div>

          {/* Card 3: BharatNet Phase 3 Telecom Ducts */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px]">
                <span className="px-2.5 py-1 rounded-full bg-orange-50 text-[#DD612A] font-bold">
                  5G & Optical Fiber
                </span>
                <span className="text-slate-400 font-mono">Telecom Expansion</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                BharatNet 5G Expansion: High-Speed PLB Duct Blowing Standards
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Accelerating optical fiber connectivity to 250,000 gram panchayats requires permanently lubricated silicone-lined HDPE ducts enabling continuous 2,000m air-blown cable runs.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono text-[11px]">TEC / IS:4984 Certified</span>
              <Link href="/products/hdpe-telecom-ducts" className="font-semibold text-[#053C82] hover:text-[#DD612A]">
                Explore Telecom Ducts →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Dual Manufacturing Facility Details (Rajkot Units) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#053C82]">
            Two Dedicated Plants in Rajkot, Gujarat
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Our Manufacturing Divisions
          </h2>
          <p className="text-sm text-slate-600">
            Split-facility operational strategy engineered for zero cross-contamination and maximum extrusion throughput.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Unit 1 */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6 hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#053C82]">
                Plumbing & SWR Division
              </span>
              <span className="text-xs font-mono text-slate-400">Unit 01</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">IDOL PLASTO PVT. LTD.</h3>
              <p className="text-xs font-mono text-slate-500 mt-1">
                Rajkot - Ahmedabad NH-8B, Wankaner Chokadi, Survey No. 552, Opp. Kuvadava High School, Dist: Rajkot, Kuvadva - 360023, Gujarat, India.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                cPVC Hot & Cold Water Piping & Fittings (ASTM D2846 / IS:15778)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                uPVC Schedule 40 & 80 Potable Water Plumbing Systems
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                SWR Soil, Waste & Rainwater Drainage Systems (Push-Fit Rings)
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono">Hotline: +91 92654 96492</span>
              <button onClick={() => openRFQ()} className="font-bold text-[#053C82] hover:text-[#DD612A]">
                Inquire Unit 1 →
              </button>
            </div>
          </div>

          {/* Unit 2 */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6 hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-[#DD612A]">
                Agri, Borewell & Drip Division
              </span>
              <span className="text-xs font-mono text-slate-400">Unit 02</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">IDOL POLYTECH PVT. LTD.</h3>
              <p className="text-xs font-mono text-slate-500 mt-1">
                RK Industrial Zone-8, Wankaner - Kuwadva Chowkdi, Rajkot - Ahmedabad National Highway, At-Ranpur (Navagam), Dist: Rajkot - 360023, Gujarat, India.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Submersible Column & Riser Drop Pipes (up to 350m well depth)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                uPVC Borehole Casing & Slotted Ribbed Screen Pipes (IS:12818)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Flat Tape & Round Micro-Drip Irrigation Systems (IS:13488)
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono">Hotline: +91 99254 55255</span>
              <button onClick={() => openRFQ()} className="font-bold text-[#DD612A] hover:text-[#EA580C]">
                Inquire Unit 2 →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom Direct Factory CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#0B2545] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono text-[#DD612A] font-bold uppercase tracking-wider">
              Direct Factory Allocation & Export Logistics
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Looking for Factory-Direct Container or Dispatch Rates?</h2>
            <p className="text-sm text-slate-300">
              Contact our sales desks in Rajkot or our international trading hub in Dubai for certified technical submittals, test certificates, and FOB / CIF pricing.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => openRFQ()}
              className="px-6 py-3.5 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-bold text-xs shadow-lg shadow-orange-950/20 transition-all active:scale-95"
            >
              Request Factory Quotation
            </button>
            <Link
              href="/dealership"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 backdrop-blur-md transition-colors"
            >
              Register as Distributor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
