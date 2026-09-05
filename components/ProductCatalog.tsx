"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GAD_PRODUCT_SPECS } from "@/data/gadSpecifications";
import { ArrowUpRight, ChevronDown, ChevronUp, Shield, Wind, VolumeX, Eye, Sparkles } from "lucide-react";

interface ProductCatalogProps {
  onSelectProductForSpecs: (productId: string) => void;
  onOpenDealerModal: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProductForSpecs,
  onOpenDealerModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>("upvc-casement-windows");

  const categories = [
    { id: "all", label: "All Architectural Systems" },
    { id: "casement", label: "Casement Windows & Doors" },
    { id: "sliding", label: "Sliding Patio & Multi-Track" },
    { id: "tilt-turn", label: "Tilt & Turn High-Rise" },
    { id: "bifold", label: "Slide & Fold (Bi-Fold)" },
    { id: "facade", label: "Panoramic Fixed & Facade" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? GAD_PRODUCT_SPECS
      : GAD_PRODUCT_SPECS.filter((p) => p.category === selectedCategory);

  return (
    <section id="catalog" className="py-16 md:py-24 border-b border-[#E2E8F0] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#E2E8F0]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase px-2.5 py-1 rounded bg-[#EFF6FF] text-[#053C82] border border-[#BFDBFE] font-bold">
                GADIN Systems Catalog
              </span>
              <span className="text-xs font-mono text-[#64748B]">
                EN 12608 CLASS A • TROPICALIZED uPVC
              </span>
            </div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#053C82] tracking-tight">
              Architectural uPVC Windows, Doors & Façade Systems
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#475569] leading-relaxed">
            Engineered with tropicalized multi-chamber compounds, galvanized steel reinforcing cores, and high-performance sound and thermal insulation.
          </p>
        </div>

        {/* Featured Visual Grid of Modern uPVC Windows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Main Hero Card: Luxury Living Villa */}
          <div className="lg:col-span-8 relative rounded-xl overflow-hidden border border-[#CBD5E1] shadow-lg bg-[#051E42] group min-h-[380px] flex flex-col justify-end">
            <Image
              src="/images/upvc_bifold_doors.jpg"
              alt="GADIN Luxury uPVC Sliding Patio & Bi-Fold Systems"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051E42] via-[#051E42]/40 to-transparent" />
            <div className="relative z-10 p-6 sm:p-8 text-white space-y-3">
              <span className="font-mono text-xs text-[#DD612A] uppercase font-bold tracking-wider bg-[#051E42]/80 px-2.5 py-1 rounded border border-[#DD612A]/40 inline-block backdrop-blur-sm">
                FLAGSHIP PANORAMIC SYSTEM
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                PanoramaFold & GlideMax uPVC Balcony Systems
              </h3>
              <p className="text-xs sm:text-sm text-[#CBD5E1] max-w-xl leading-relaxed">
                Spans up to 7.0 meters. Seamless outdoor-indoor transitions with heavy-duty tandem stainless steel rollers, multi-point perimeter compression seals, and acoustic double glazing.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={onOpenDealerModal}
                  className="px-5 py-2.5 rounded bg-[#DD612A] hover:bg-[#C24F1E] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Request Architectural Catalog
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Card: Casement & French Doors */}
          <div className="lg:col-span-4 relative rounded-xl overflow-hidden border border-[#CBD5E1] shadow-lg bg-[#051E42] group min-h-[380px] flex flex-col justify-end">
            <Image
              src="/images/upvc_casement_doors.jpg"
              alt="GADIN PrimaTherm Casement Windows & French Doors"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051E42] via-[#051E42]/40 to-transparent" />
            <div className="relative z-10 p-6 text-white space-y-2">
              <span className="font-mono text-[11px] text-[#DD612A] uppercase font-bold tracking-wider bg-[#051E42]/80 px-2 py-0.5 rounded border border-[#DD612A]/40 inline-block backdrop-blur-sm">
                ACOUSTIC & WEATHER PROOF
              </span>
              <h4 className="text-xl font-bold tracking-tight">
                PrimaTherm 60/70mm Casement Series
              </h4>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                42 dB sound attenuation, Class 9A driving rain seal, and European espagnolette locking hardware.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 text-xs font-mono rounded-lg border transition-colors ${
                selectedCategory === cat.id
                  ? "bg-[#053C82] text-[#FFFFFF] border-[#053C82] font-bold shadow-sm"
                  : "bg-[#F8FAFC] text-[#475569] border-[#CBD5E1] hover:bg-[#F1F5F9]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid in GADIN Navy & Orange */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const isExpanded = expandedId === product.id;
            return (
              <div
                key={product.id}
                className="card-hover-fx bg-[#FFFFFF] border border-[#CBD5E1] rounded-xl p-6 shadow-sm flex flex-col justify-between hover:border-[#053C82]"
              >
                <div>
                  {/* Card Header & Standard Badge */}
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <span className="font-mono text-[11px] font-bold text-[#DD612A] bg-[#FFF7ED] px-2 py-0.5 rounded border border-[#FFEDD5]">
                      {product.standard}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-[#64748B] font-bold">
                      {product.categoryLabel}
                    </span>
                  </div>

                  <h3 className="font-sans font-extrabold text-lg text-[#053C82] leading-snug mb-2">
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#475569] line-clamp-2 mb-4 leading-relaxed font-medium">
                    {product.materialCompounding}
                  </p>

                  {/* High-Level Technical Matrix Metrics */}
                  <div className="grid grid-cols-2 gap-2 py-3 border-y border-[#E2E8F0] mb-4 text-xs font-mono">
                    <div>
                      <span className="text-[#64748B] text-[10px] uppercase block font-semibold">Frame Depth:</span>
                      <span className="font-bold text-[#1E293B]">{product.sizeRange.split("&")[0]}</span>
                    </div>
                    <div>
                      <span className="text-[#64748B] text-[10px] uppercase block font-semibold">Wind Rating:</span>
                      <span className="font-bold text-[#053C82]">{product.pressureRating.split("(")[0]}</span>
                    </div>
                    <div>
                      <span className="text-[#64748B] text-[10px] uppercase block font-semibold">Steel Core:</span>
                      <span className="font-bold text-[#1E293B]">{product.tensileLoad.split("(")[0]}</span>
                    </div>
                    <div>
                      <span className="text-[#64748B] text-[10px] uppercase block font-semibold">Water Tightness:</span>
                      <span className="font-bold text-[#DD612A]">{product.burstPressure.split("(")[0]}</span>
                    </div>
                  </div>

                  {/* Primary Applications Preview */}
                  <div className="mb-4">
                    <span className="text-[10px] font-mono uppercase text-[#64748B] block mb-1.5 font-bold">
                      Certified Architectural Uses:
                    </span>
                    <ul className="space-y-1 text-xs text-[#334155]">
                      {product.primaryApplications.slice(0, 2).map((app, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 leading-tight">
                          <span className="text-[#DD612A] font-bold">•</span>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Collapsible Engineering Rule */}
                  {isExpanded && (
                    <div className="mt-3 p-3 bg-[#F8FAFC] border border-[#CBD5E1] rounded text-xs space-y-2">
                      <div className="font-mono text-[10px] uppercase font-bold text-[#053C82]">
                        Mandatory Installation Specification:
                      </div>
                      <p className="text-[#475569] text-[11px] leading-relaxed">
                        {product.engineeringRules[0]}
                      </p>
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-2">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : product.id)}
                    className="text-xs font-mono text-[#64748B] hover:text-[#053C82] inline-flex items-center gap-1 font-semibold"
                  >
                    <span>{isExpanded ? "Collapse" : "Tech Rule"}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => onSelectProductForSpecs(product.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#053C82] hover:text-[#DD612A] transition-colors"
                  >
                    <span>View Section Dimensions</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#DD612A]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
