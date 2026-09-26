"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Globe2, ShieldCheck, CheckCircle2, Sparkles, Award } from "lucide-react";
import { TechnicalSpecsModal } from "./TechnicalSpecsModal";

interface PartnerItem {
  name: string;
  category: string;
  role: string;
  badge: string;
  highlights: string[];
}

const partners: PartnerItem[] = [
  {
    name: "Reliance Polymers",
    category: "Primary PVC Resin",
    role: "World-class virgin suspension PVC resins (K-67 grade) providing consistent molecular weight and high hydrostatic strength.",
    badge: "Tier-1 Resin Partner",
    highlights: ["100% Virgin K-67 Resin", "High Tensile Yield", "Zero Molecular Variance"],
  },
  {
    name: "DCW Limited",
    category: "Chemical & Suspension Resin",
    role: "Pioneering chemical manufacturer providing ultra-pure suspension PVC resins with zero heavy metal contaminants.",
    badge: "Domestic Polymer Pioneer",
    highlights: ["High Chemical Purity", "Lead-Free Compliant", "Exceptional Flow Rate"],
  },
  {
    name: "Kothari Plant",
    category: "Polymer Compounding",
    role: "Specialized high-precision compounding and polymer stabilization facility ensuring rigorous thermal endurance.",
    badge: "Compounding Facility",
    highlights: ["Thermal Stability", "Custom Compounding", "Rigid Dimensional Control"],
  },
  {
    name: "Eastman International",
    category: "Specialty Chemicals",
    role: "Global leader supplying performance additives, heat stabilizers, and premium processing aids for flawless pipe surface finishes.",
    badge: "Global Additives Leader",
    highlights: ["Advanced Processing Aids", "Surface Gloss & Finish", "Impact Modifiers"],
  },
  {
    name: "Chinese & Korean Partners",
    category: "Global Chemical Alliances",
    role: "International direct procurement of premium Titanium Dioxide (TiO2) pigments, UV absorbers, and weather-resistant modifiers.",
    badge: "Global Procurement",
    highlights: ["Rutile Grade TiO2", "Extreme UV Resistance", "Long-term Weatherproofing"],
  },
];

export const SourcingPartners: React.FC = () => {
  const [isSpecsModalOpen, setIsSpecsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

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

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (summaryRef.current) {
        gsap.fromTo(
          summaryRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: summaryRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="sourcing" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 rounded-full mb-4">
            <Globe2 className="text-blue-400" size={16} />
            <span className="text-blue-200 text-xs font-semibold tracking-wider uppercase">
              Global Procurement Network
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Raw Material Strengths & Sourcing Partners
          </h2>
          <p className="text-blue-300 font-medium text-lg mb-4">
            &ldquo;Your quintessential source of uPVC.&rdquo;
          </p>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            The foundation of every GADIN pipe starts with world-class raw materials. Through our long-standing global procurement alliances, we secure only 100% virgin polymer resins and premium additives.
          </p>
        </div>

        {/* Partners Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16"
        >
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/10 hover:border-blue-400/50 rounded-2xl p-7 transition-all duration-300 hover:shadow-2xl hover:bg-white/[0.14] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-300 bg-blue-900/60 px-3 py-1 rounded-full border border-blue-700/50">
                    {partner.badge}
                  </span>
                  <Building2 className="text-blue-400 group-hover:scale-110 transition-transform" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-blue-200 text-xs font-medium mb-3">
                  {partner.category}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {partner.role}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                {partner.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 size={14} className="text-blue-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Sourcing Summary Badge Card */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-7 flex flex-col justify-between shadow-xl border border-blue-400/30">
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 text-white">
                <Sparkles size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Uncompromising Polymer Standards
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                We never use substandard fillers or recycled regrinds. Every shipment from DCW, Reliance, Kothari, Eastman, and our Asian partners is laboratory-verified.
              </p>
            </div>
            <div className="bg-white/15 rounded-xl p-4 border border-white/20">
              <p className="text-xs font-semibold text-blue-100 uppercase tracking-wider mb-1">
                Quality Guarantee
              </p>
              <p className="text-sm font-bold text-white">
                100% Virgin Resins • Zero Lead • Full Batch Traceability
              </p>
            </div>
          </div>
        </div>

        {/* Global Procurement Strengths Feature Box */}
        <div
          ref={summaryRef}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400 flex-shrink-0">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg mb-1">Zero Regrind Policy</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Only virgin polymers ensuring consistent wall thickness and burst tolerance under extreme working pressures.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400 flex-shrink-0">
                <Globe2 size={28} />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg mb-1">Direct Import Logistics</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Direct relationships with Korean and Chinese chemical manufacturers for Rutile TiO2 UV stabilization.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400 flex-shrink-0">
                <Award size={28} />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg mb-1">Batch-by-Batch Lab Test</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Every batch tested for Melt Flow Index (MFI), bulk density, and heat reversion before entering extrusion lines.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h5 className="font-bold text-white text-base">Explore Complete Sourcing Data & Proposal</h5>
              <p className="text-slate-400 text-xs">Access verified ASTM standards, polymer compounding breakdown, and dimension tables.</p>
            </div>
            <button
              onClick={() => setIsSpecsModalOpen(true)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-sm transition-all shadow-lg hover:shadow-blue-500/20 cursor-pointer flex items-center gap-2 whitespace-nowrap"
            >
              <span>View Sourcing & Specs Deck</span>
              <Sparkles size={16} />
            </button>
          </div>
        </div>
      </div>

      <TechnicalSpecsModal
        isOpen={isSpecsModalOpen}
        onClose={() => setIsSpecsModalOpen(false)}
        defaultTab="sourcing"
      />
    </section>
  );
};
