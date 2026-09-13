"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Search,
  ArrowRight,
  Layers,
  Flame,
  Droplets,
  Gauge,
  Sliders,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { useRFQ } from "@/components/layout/SiteLayoutClient";

interface ProductCatalogEntry {
  id: string;
  name: string;
  category: "plumbing" | "borewell" | "irrigation" | "cabling";
  categoryLabel: string;
  standard: string;
  sizeRange: string;
  pressure: string;
  image: string;
  href: string;
  description: string;
}

const CATALOG_DATA: ProductCatalogEntry[] = [
  {
    id: "cpvc-hot-cold",
    name: "FlowMax cPVC Hot & Cold Water Pipes and Fittings",
    category: "plumbing",
    categoryLabel: "Plumbing & Hot Water",
    standard: "ASTM D2846 / IS:15778",
    sizeRange: '1/2" (15mm) to 2" (50mm)',
    pressure: "SDR-11 (28.1 bar) & SDR-13.5 (22.5 bar)",
    image: "/images/idol/cat_cpvc.webp",
    href: "/products/cpvc-pipes-fittings",
    description: "Engineered for solar thermal rooftop loops and high-rise potable water networks up to 93°C continuous temperature."
  },
  {
    id: "upvc-plumbing-sch",
    name: "UltraPlumb uPVC Schedule 40 & 80 Plumbing Systems",
    category: "plumbing",
    categoryLabel: "Cold Water Plumbing",
    standard: "ASTM D1785 / ASTM D2467",
    sizeRange: '1/2" (15mm) to 4" (100mm)',
    pressure: "Up to 600 PSI (SCH-40) & 850 PSI (SCH-80)",
    image: "/images/idol/cat_upvc_plumbing.webp",
    href: "/products/upvc-plumbing-system",
    description: "100% lead-free formulation ensuring non-toxic potable cold water transmission, swimming pool circuits, and industrial processing."
  },
  {
    id: "swr-drainage-system",
    name: "SilentFlow SWR Soil, Waste & Rainwater Drainage",
    category: "plumbing",
    categoryLabel: "Drainage & Sanitary",
    standard: "IS:13592 (Type A & B) / IS:14735",
    sizeRange: '75mm (2.5"), 110mm (4"), 160mm (6")',
    pressure: "Gravity & Syphonic Self-Cleansing Flow",
    image: "/images/idol/cat_swr_drainage.webp",
    href: "/products/swr-drainage-system",
    description: "High-stiffness sanitary drainage pipes with push-fit elastomeric rubber rings providing 100% leak-proof thermal expansion."
  },
  {
    id: "pvc-garden-hose",
    name: "Flexible Soft PVC Garden & Washdown Hose",
    category: "plumbing",
    categoryLabel: "Flexible Tubing",
    standard: "Food-Grade Plasticized Resin",
    sizeRange: '1/2" (12mm) to 1" (25mm)',
    pressure: "Working Pressure up to 6 bar",
    image: "/images/idol/cat_garden_hose.webp",
    href: "/products/garden-flexible-hose",
    description: "Kink-resistant, oil-free transparent and braided flexible PVC tubing for household gardens, landscaping, and vehicle wash."
  },
  {
    id: "submersible-column-pipe",
    name: "DeepForce Submersible Column & Riser Drop Pipes",
    category: "borewell",
    categoryLabel: "Borewell & Wells",
    standard: "DIN 4925 / High-Tensile Square Thread",
    sizeRange: '1" (25mm) to 4" (100mm)',
    pressure: "15 to 35 kgf/cm² (Depth to 350m)",
    image: "/images/idol/cat_column_pipe.webp",
    href: "/products/submersible-column-pipes",
    description: "Biaxial molecular orientation supporting up to 15,000 kgf hanging motor load without unthreading or corrosion typical of GI pipes."
  },
  {
    id: "upvc-casing-borewell",
    name: "AquaShield uPVC Borehole Casing & Slotted Screen Pipes",
    category: "borewell",
    categoryLabel: "Borewell & Wells",
    standard: "IS:12818:2010 (CS Shallow & CM Medium)",
    sizeRange: '1.5" (40mm) to 12" (300mm)',
    pressure: "Collapse Rating up to 28 kgf/cm²",
    image: "/images/idol/cat_casing_pipe.webp",
    href: "/products/borehole-casing-pipes",
    description: "Characteristic royal blue casing and horizontally slotted filter screens for agricultural tube wells and rainwater recharge shafts."
  },
  {
    id: "agriculture-pvc-pipes",
    name: "AgriFlow Agriculture PVC Rigid Pipes & Fittings",
    category: "borewell",
    categoryLabel: "Agricultural Mains",
    standard: "IS:4985:2000 (Class 1 to Class 5)",
    sizeRange: "20mm to 250mm Outer Diameter",
    pressure: "2.5 bar, 4.0 bar, 6.0 bar, 10.0 bar",
    image: "/images/idol/cat_agriculture.webp",
    href: "/products/agriculture-pvc-pipes",
    description: "Selfit solvent cement and elastomeric ring-fit pressure mains for farm flood irrigation and lift schemes with Hazen-Williams C=150."
  },
  {
    id: "hdpe-telecom-duct",
    name: "TeraDuct HDPE & PLB Optical Fiber Telecom Ducts",
    category: "cabling",
    categoryLabel: "Telecom & Ducts",
    standard: "TEC / G/CDS-08 / IS:4984 / ISO 4427",
    sizeRange: "32/26mm, 40/33mm, 50/42mm & PE-100 Water",
    pressure: "PN 6 to PN 16 (Up to 16 bar)",
    image: "/images/idol/cat_telecom_duct.webp",
    href: "/products/hdpe-telecom-ducts",
    description: "Co-extruded permanently lubricated silicone inner layer with friction coefficient < 0.06 for rapid optical fiber cable blowing."
  },
  {
    id: "drip-micro-irrigation",
    name: "PrecisionDrop Drip Irrigation Systems (Flat & Round)",
    category: "irrigation",
    categoryLabel: "Micro-Irrigation",
    standard: "IS:13488 / IS:12786 / ISO 9261",
    sizeRange: "12mm, 16mm & 20mm Laterals",
    pressure: "0.7 to 2.5 bar (2.0 & 4.0 LPH)",
    image: "/images/idol/cat_drip_irrigation.webp",
    href: "/products/drip-irrigation",
    description: "Flat tape and cylindrical round dripperlines with turbulent emitter labyrinths reducing farm water consumption by up to 60%."
  },
  {
    id: "sprinkler-irrigation-system",
    name: "AgriRain Portable Sprinkler Systems & Rain Pipes",
    category: "irrigation",
    categoryLabel: "Sprinkler Irrigation",
    standard: "IS:14151 (Part 1 & 2) / ISO 7749",
    sizeRange: "63mm & 75mm Quick-Latch Pipes",
    pressure: "2.5 bar to 4.0 bar (1200 - 2500 LPH)",
    image: "/images/idol/cat_sprinkler.webp",
    href: "/products/sprinkler-irrigation",
    description: "Quick-connect HDPE pipes and heavy cast brass 27° rotary sprinkler nozzle heads providing uniform precipitation across row crops."
  },
  {
    id: "irrigation-accessories",
    name: "Industrial Filtration Units, Sand Separators & Valves",
    category: "irrigation",
    categoryLabel: "Irrigation Hardware",
    standard: "ISO 9001 / Commercial Grade",
    sizeRange: '2" (50mm), 2.5" (63mm), 3" (75mm), 4"',
    pressure: "PN 6 to PN 16 Rating",
    image: "/images/idol/cat_fittings_sand.webp",
    href: "/products/irrigation-accessories",
    description: "120-mesh disc and screen filters, hydrocyclone sand vortex separators, air relief valves, and Kaveri/True-Union PP ball valves."
  }
];

export default function ProductsMasterPage() {
  const { openRFQ } = useRFQ();
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = CATALOG_DATA.filter((item) => {
    const matchesFilter = selectedFilter === "all" || item.category === selectedFilter;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.standard.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Hero Header */}
      <section className="relative bg-[#053C82] text-white py-20 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold border border-white/10">
            <ShieldCheck className="w-4 h-4 text-[#DD612A]" />
            Certified Product Directory • 100% Virgin Reliance Polymer
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Piping, Borewell & Precision Micro-Irrigation Catalog
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl leading-relaxed">
            Engineered to rigorous Indian and global standards (ASTM, IS, DIN, ISO). Explore individual product pages for technical wall thickness tables, hydrostatic ratings, and factory procurement.
          </p>
        </div>
      </section>

      {/* 2. Filter & Search Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === "all"
                  ? "bg-[#053C82] text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Products ({CATALOG_DATA.length})
            </button>
            <button
              onClick={() => setSelectedFilter("plumbing")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === "plumbing"
                  ? "bg-[#053C82] text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Plumbing & Drainage
            </button>
            <button
              onClick={() => setSelectedFilter("borewell")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === "borewell"
                  ? "bg-[#053C82] text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Borewell & Agri PVC
            </button>
            <button
              onClick={() => setSelectedFilter("irrigation")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === "irrigation"
                  ? "bg-[#053C82] text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Micro-Irrigation
            </button>
            <button
              onClick={() => setSelectedFilter("cabling")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === "cabling"
                  ? "bg-[#053C82] text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Telecom Ducts
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by size, standard (IS/ASTM)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:ring-2 focus:ring-[#053C82] focus:bg-white outline-none"
            />
          </div>
        </div>
      </section>

      {/* 3. Product Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#053C82] shadow-sm">
                    {product.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="font-mono text-[11px] text-[#DD612A] font-semibold block">
                      {product.standard}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#053C82] transition-colors mt-0.5 leading-snug">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-slate-400 block">Size Range:</span>
                      <span className="font-semibold text-slate-700">{product.sizeRange}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Pressure:</span>
                      <span className="font-semibold text-slate-700">{product.pressure}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between gap-3">
                <Link
                  href={product.href}
                  className="text-xs font-bold text-[#053C82] hover:text-[#DD612A] flex items-center gap-1 transition-colors"
                >
                  Technical Specs →
                </Link>

                <button
                  onClick={() => openRFQ(product.id)}
                  className="px-3.5 py-1.5 rounded-lg bg-orange-50 hover:bg-[#DD612A] text-[#DD612A] hover:text-white font-semibold text-xs transition-colors"
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
