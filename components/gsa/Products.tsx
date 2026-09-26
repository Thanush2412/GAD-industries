"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Droplets, Layers, Flame, Waves, Sprout, ShieldCheck, Globe, Gem, Table, Sparkles } from "lucide-react";
import { TechnicalSpecsModal } from "./TechnicalSpecsModal";

interface Product {
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

const products: Product[] = [
  {
    icon: Layers,
    title: "uPVC Plumbing Pipes",
    description:
      "Precision-engineered 100% all-plastic plumbing pipes and fittings for high-durability cold water distribution, residential risers, and commercial plumbing networks.",
    features: ["100% Pure Plastic", "High Pressure Rating", "Corrosion & Rust Proof"],
    image: "/images/products/upvc_plumbing_plastic.jpg",
  },
  {
    icon: Droplets,
    title: "Lead-Free uPVC",
    description:
      "Advanced 100% lead-free formulation ensuring zero toxicity, zero heavy-metal leaching, and pristine water purity for drinking and domestic supply.",
    features: ["100% Lead-Free & Non-Toxic", "Drinking Water Safe", "NSF-61 Health Compliant"],
    image: "/images/products/lead_free_upvc.jpg",
  },
  {
    icon: Flame,
    title: "CPVC Hot & Cold Pipes",
    description:
      "High-performance Chlorinated Polyvinyl Chloride piping designed for high-temperature hot and cold water distribution up to 93°C with exceptional thermal stability.",
    features: ["Withstands up to 93°C", "Hot & Cold Water Dual Transit", "Low Thermal Expansion"],
    image: "/images/products/cpvc_hot_cold.jpg",
  },
  {
    icon: Waves,
    title: "RPVC/PVC Drainage Pipe",
    description:
      "Heavy-duty rigid PVC and RPVC drainage & SWR pipe systems designed for efficient sewage, soil, waste, and rainwater gravity flow with high chemical and impact resistance.",
    features: ["Smooth Flow Bore", "Chemical & Soil Proof", "Leak-Proof Push-Fit Seals"],
    image: "/images/products/rpvc_pvc_drainage.jpg",
  },
  {
    icon: Sprout,
    title: "Agriculture Pipes",
    description:
      "Specially formulated agricultural uPVC piping engineered for high-pressure farm irrigation, borehole connections, and drip feeder channels with high UV resistance.",
    features: ["UV & Weather Resistant", "High Pressure Irrigation", "Zero Soil Reaction"],
    image: "/images/products/agriculture_pipes.jpg",
  },
  {
    icon: Layers,
    title: "Customized uPVC Gutters",
    description:
      "Precision-extruded custom uPVC rainwater roof gutters and industrial drainage channels engineered for rapid storm water evacuation and zero corrosion.",
    features: ["Custom Profile Extrusion", "High Volume Storm Flow", "Zero Rot & Rust"],
    image: "/images/products/customized_upvc_gutters.jpg",
  },
];

export const Products: React.FC = () => {
  const [isSpecsModalOpen, setIsSpecsModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"proposal" | "specs" | "sourcing">("specs");
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (gridRef.current) {
        const cards = gridRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openModalWithTab = (tab: "proposal" | "specs" | "sourcing") => {
    setModalTab(tab);
    setIsSpecsModalOpen(true);
  };

  return (
    <section ref={sectionRef} id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-blue-600 uppercase tracking-wider text-sm font-semibold">
            Our Complete Product Range
          </span>
          <h2 className="mt-4 text-gray-900 text-4xl md:text-5xl font-bold">
            High-Performance Pipe & Gutter Systems
          </h2>
          <p className="mt-4 text-blue-700 font-medium text-lg">
            &ldquo;Your quintessential source of uPVC.&rdquo;
          </p>
          <p className="mt-3 text-gray-600 text-lg leading-relaxed">
            From residential plumbing and lead-free potable supply to agricultural irrigation and custom rainwater gutters, we deliver uncompromised extrusion excellence.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-14 products-grid"
        >
          {products.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 product-card card-mobile flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-gray-50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 responsive-image"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-xl shadow-md border border-gray-100">
                      <Icon className="text-blue-600" size={22} />
                    </div>
                  </div>
                  <div className="p-6 spacing-mobile">
                    <h3 className="text-gray-900 text-xl font-bold mb-2.5">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
                    {item.features.map((feature, fIdx) => (
                      <span
                        key={fIdx}
                        className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md text-xs border border-blue-100 font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Technical Specs Interactive Bar */}
        <div className="max-w-7xl mx-auto mb-20 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="p-3 bg-blue-600 rounded-xl text-white flex-shrink-0 hidden sm:flex">
              <Table size={26} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-1">
                Access Real Technical Dimensions & Engineering Specs
              </h4>
              <p className="text-slate-300 text-sm">
                View complete ASTM D1785 / D2846 dimension tables, pressure ratings (SDR/SCH), and application data.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => openModalWithTab("specs")}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-xs sm:text-sm transition-all shadow-md cursor-pointer flex items-center gap-2 whitespace-nowrap"
            >
              <Table size={16} />
              <span>Dimension Charts</span>
            </button>
            <button
              onClick={() => openModalWithTab("proposal")}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold rounded-xl text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap"
            >
              <Sparkles size={16} />
              <span>Sourcing Proposal</span>
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50/40 rounded-3xl p-10 lg:p-14 max-w-6xl mx-auto border border-blue-100 shadow-sm spacing-mobile">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-600 uppercase tracking-wider text-xs font-bold bg-blue-100/60 px-3 py-1 rounded-full">
              Engineered for Excellence
            </span>
            <h3 className="mt-3 text-gray-900 text-3xl md:text-4xl font-bold text-center-mobile">
              Why Choose GADIN UPVC?
            </h3>
            <p className="mt-2 text-gray-600 text-base">
              Unmatched manufacturing precision built on raw material superiority and global sourcing standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 benefits-grid">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Gem size={28} />
              </div>
              <h4 className="text-gray-900 font-bold mb-2 text-lg">Raw Material Strengths</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                100% virgin K-67 polymer compounding with premium titanium dioxide for peak impact and burst resistance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Globe size={28} />
              </div>
              <h4 className="text-gray-900 font-bold mb-2 text-lg">Global Procurement</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Direct sourcing partnerships with tier-1 international polymer producers guaranteeing batch-to-batch purity.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                <ShieldCheck size={28} />
              </div>
              <h4 className="text-gray-900 font-bold mb-2 text-lg">100% Lead-Free</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Zero heavy-metal formulation certified for safe drinking water, non-toxic and environmentally compliant.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Flame size={28} />
              </div>
              <h4 className="text-gray-900 font-bold mb-2 text-lg">High Endurance</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Superior pressure thresholds, fire retardancy, and 50+ year service life without degradation or scaling.
              </p>
            </div>
          </div>
        </div>
      </div>

      <TechnicalSpecsModal
        isOpen={isSpecsModalOpen}
        onClose={() => setIsSpecsModalOpen(false)}
        defaultTab={modalTab}
      />
    </section>
  );
};
