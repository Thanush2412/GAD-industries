"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  CheckCircle2,
  Calendar,
  Search,
  Filter,
  ArrowRight,
  ShieldCheck,
  Tag,
  Newspaper,
  Sun,
  Wind,
  Droplets,
  Layers,
  Sparkles,
  Download
} from "lucide-react";
import { useRFQ } from "@/components/layout/SiteLayoutClient";

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  isCurrentAffairs?: boolean;
  image?: string;
  summary: string;
  keyDirectives: string[];
  specsStandard: string;
}

const ARTICLES: Article[] = [
  {
    id: "swr-pipe-guide",
    title: "What is an SWR Pipe? The Complete Guide to Soil, Waste & Rainwater Drainage Systems",
    category: "SWR Drainage",
    date: "September 12, 2026",
    isCurrentAffairs: true,
    summary: "When building or renovating a property, most critical infrastructure remains completely invisible inside walls and underground channels. SWR pipes engineered with push-fit elastomeric rubber rings eliminate foul sewer gases, structural dampness, and costly repairs.",
    keyDirectives: [
      "Type A pipes are designated for ventilation cowls and rainwater down-takes; Type B pipes feature heavier wall geometry for underground sewage and soil waste.",
      "10mm Expansion Gap Rule: Always pull back spigot 10mm after seating into push-fit socket to absorb multi-story thermal expansion without fitting distortion.",
      "Self-Cleansing Velocity: Lay horizontal lines at 1:40 to 1:50 gradients to ensure wastewater maintains ≥ 0.75 m/s velocity, preventing sludge buildup."
    ],
    specsStandard: "IS:13592:2013 / IS:14735 Push-Fit Specification"
  },
  {
    id: "jal-jeevan-mission-lead-free",
    title: "Current Affairs: Jal Jeevan Mission (JJM) Mandates 100% Lead-Free Potable Water Networks",
    category: "National Standards",
    date: "August 28, 2026",
    isCurrentAffairs: true,
    summary: "Under the national Har Ghar Jal directives, public water supply agencies and municipal contractors are strictly prohibited from procuring piping stabilized with heavy metal lead compounds. All cold and hot potable supply lines must conform to non-toxic ASTM D1785 / IS:15778.",
    keyDirectives: [
      "Zero Lead Leaching: 100% calcium-zinc (Ca-Zn) or organic stabilizer systems ensure heavy metal concentrations remain undetectable in drinking water.",
      "Pressure Proofing: Water distribution mains must sustain 10 bar continuous pressure with zero biological biofilm colonization on inner pipe walls.",
      "Third-Party NABL Verification: Every production lot is certified with hydrostatic pressure testing at 27°C and 82°C before government site dispatch."
    ],
    specsStandard: "Jal Jeevan Mission Guidelines / ASTM D1785 / NSF-61"
  },
  {
    id: "farmers-choice-agri-plumbing",
    title: "The Farmer’s Choice: Why Idol is the Trusted Name in Agricultural Plumbing",
    category: "Agriculture Pipes",
    date: "February 13, 2026",
    summary: "When farm livelihoods depend on groundwater flowing reliably from deep aquifers to distant fields, equipment isn't just a purchase—it's a multi-decade partnership. Discover how Idol's square-thread column pipes and agriculture PVC mains have stood the test of time.",
    keyDirectives: [
      "Biaxial Molecular Orientation: Imparts high circumferential and axial tensile strength to withstand suspended submersible pump motor weights up to 15 MT.",
      "Non-Corrosive uPVC vs GI: Eliminates electrolytic rust and calcification scale, preserving motor pump hydraulic efficiency over 25+ years.",
      "Kickback Lock Rings: Engineered polymer lock rings prevent column sections from loosening or unthreading during sudden motor startup torque."
    ],
    specsStandard: "DIN 4925 / IS:12818 Borewell Standards"
  },
  {
    id: "pmksy-per-drop-more-crop",
    title: "Current Affairs: PMKSY 2026 'Per Drop More Crop' Subsidies for Micro-Irrigation",
    category: "Micro-Irrigation",
    date: "January 30, 2026",
    isCurrentAffairs: true,
    summary: "Under the enhanced 2026 agricultural budget for the Pradhan Mantri Krishi Sinchayee Yojana (PMKSY), central and state governments offer 55% to 70% direct financial assistance for certified flat drip and rotary sprinkler installations across water-stressed regions.",
    keyDirectives: [
      "Water Efficiency Benchmark: Verified micro-drip systems reduce farm water usage by 40% to 60% compared to traditional flood irrigation.",
      "Fertigation Integration: Water-soluble fertilizer dosing through drip laterals increases crop yields by 25% to 40% while preventing nitrogen leaching.",
      "BIS Mandatory Subsidy Rule: Only drip lines manufactured with 100% virgin LLDPE and 2.5% carbon black masterbatch (IS:13488) qualify for direct subsidy credit."
    ],
    specsStandard: "PMKSY Policy / IS:13488 / ISO 9261 Certified"
  },
  {
    id: "sustainable-harvests-pvc-pipes",
    title: "Sustainable Harvests: Maximizing Water Efficiency with Idol Agriculture PVC Pipes",
    category: "Agriculture Pipes",
    date: "January 15, 2026",
    summary: "In the modern world of farming, water is the lifeblood of every harvest. With changing climate patterns and increasing water scarcity, the difference between a struggling season and a sustainable harvest comes down to efficient pipeline conveyance.",
    keyDirectives: [
      "Mirror-Smooth Bore (C=150): Hazen-Williams friction coefficient of 150 yields 30% lower pump head resistance compared to legacy concrete or iron channels.",
      "Surge Air Valve Directive: Install double-acting kinetic air relief valves every 300 to 400 meters along main lines to eliminate catastrophic water hammer bursts.",
      "Class 1 to 5 Pressure Ratings: Matched precisely to farm topography and lift scheme elevations (2.5 bar to 10.0 bar operating ratings)."
    ],
    specsStandard: "IS:4985:2000 Agricultural PVC Standards"
  },
  {
    id: "no-more-frozen-pipes-winter",
    title: "No More Frozen Pipes: Preparing Your Home for Sub-Zero Winter Conditions with Idol",
    category: "CPVC & Plumbing",
    date: "December 30, 2025",
    summary: "As ambient temperatures plummet below freezing, standard rigid plastic pipes can turn brittle and fracture under internal water ice expansion. Idol FlowMax cPVC and impact-modified uPVC retain exceptional impact ductility in freezing environments.",
    keyDirectives: [
      "Sub-Zero Ductility: Impact modifiers prevent micro-cracks from propagating even when external temperatures drop to -5°C.",
      "Insulation Protocol: For exposed outdoor piping runs, apply closed-cell elastomeric foam insulation sleeves with minimum 13mm wall thickness.",
      "Slow Thawing Technique: Never apply direct open torch flames to PVC or cPVC pipes; use hot water towels or electrical heat tracing cables."
    ],
    specsStandard: "ASTM D2846 / IS:15778 Impact Directives"
  },
  {
    id: "hot-waters-trusted-route-solar",
    title: "Hot Water’s Most Trusted Route: Why Pipe Quality Matters for Rooftop Solar Heaters",
    category: "CPVC & Plumbing",
    date: "December 15, 2025",
    summary: "There is immense value in solar water heating, but stagnant summer rooftop collectors can reach localized temperatures over 100°C. Connecting standard plastic pipes directly to solar tanks causes softening; learn the mandatory 1000mm metallic loop protocol.",
    keyDirectives: [
      "1000mm Metallic Buffer Rule: Always install a minimum 1-meter copper, brass, or stainless steel transition loop immediately following the solar collector outlet.",
      "Continuous 93°C Service: FlowMax cPVC is engineered with 67–69% chlorine content, sustaining continuous 82°C–93°C operating temperatures.",
      "Support Spacing: Place pipe hangers every 0.9m for 1/2\" lines to eliminate thermal expansion sagging under continuous boiling solar flow."
    ],
    specsStandard: "ASTM D2846 SDR-11 / IS:15778"
  },
  {
    id: "clogged-drains-swr-power",
    title: "Clogged Drains No More: Discover the Precision-Engineered Power of Idol SWR Pipes",
    category: "SWR Drainage",
    date: "November 29, 2025",
    summary: "Beneath elegant tiles and inside high-rise plumbing shafts lies the silent hero of hygiene: the SWR drainage stack. Idol's mirror-smooth internal surfaces prevent grease calcification, sewer gas back-draft, and acoustic flushing noise.",
    keyDirectives: [
      "Acoustic Noise Attenuation: High-density PVC compounds dampen wastewater rush and flushing vibrations across multi-story residential towers.",
      "Push-Fit Rubber Rings: Resilient EPDM sealing gaskets guarantee 100% leak-proof performance under both positive head and negative siphon vacuums.",
      "Bacteriological Shield: Zero surface pores prevent microbial colonization, algae slime, and persistent bathroom odor formation."
    ],
    specsStandard: "IS:13592 / IS:14735 Push-Fit Standards"
  },
  {
    id: "strong-enough-deepest-wells",
    title: "Strong Enough for the Deepest Wells: Revolutionizing Irrigation with Idol uPVC Column Pipes",
    category: "Submersible Column",
    date: "November 15, 2025",
    summary: "When you rely on tube wells extending 200m to 350m underground to nourish your crops, the riser drop pipe is the backbone of the entire operation. Idol column pipes eliminate rusted metal threads, cracked casings, and catastrophic pump drops.",
    keyDirectives: [
      "Square CNC Threading: Square thread profile distributes axial motor suspension load uniformly across thread flanks without shear slip.",
      "Strap Wrench Requirement: Never use sharp-toothed metal chain wrenches on column pipes; always use canvas strap wrenches to prevent notch creation.",
      "Safety Cable Backup: Thread a continuous stainless steel safety wire rope through the pump housing as secondary anchor to the well cap."
    ],
    specsStandard: "DIN 4925 / Square Thread Engineering"
  },
  {
    id: "reducing-water-waste-productivity",
    title: "IDOL Agriculture PVC Pipes: Reducing Water Waste and Increasing Agricultural Yields",
    category: "Agriculture Pipes",
    date: "October 27, 2025",
    summary: "Water is the single most valuable input in Indian agriculture. Idol's rigid pressure mains eliminate the 30% to 50% conveyance losses typical of open dirt canals, channeling 100% of pumped water directly to crop root zones.",
    keyDirectives: [
      "Zero Seepage Conveyance: Fully sealed Selfit solvent and rubber-ring pipelines eliminate groundwater percolation and ditch evaporation.",
      "Trench Bedding Standard: Lay pipes on 30cm stone-free fine sand bedding with 60cm crown soil cover to isolate tractor compaction loads.",
      "Long-Life Compound: Virgin resin compounding with UV stabilizers guarantees 30+ year buried service life without embrittlement."
    ],
    specsStandard: "IS:4985 Class 2 & Class 3"
  },
  {
    id: "borehole-casing-pipes-performance",
    title: "IDOL Borehole Casing Pipes: Durable and Corrosion-Resistant for Long-Lasting Tube Wells",
    category: "Borewell Casing",
    date: "October 16, 2025",
    summary: "A tube well is only as reliable as the casing that stabilizes it against collapsing earth and aggressive underground minerals. Idol's deep royal blue casing and screen pipes provide impenetrable subterranean protection.",
    keyDirectives: [
      "CS vs CM Selection: Deploy CS (Shallow) casing for boreholes up to 80m; always select CM (Medium) thick-wall casing for 80m to 250m depths.",
      "Ribbed Screen Slots: Horizontal slotted ribs prevent sand scuffing while maintaining maximum groundwater intake flow rates.",
      "Pea Gravel Packing: Envelop slotted casing sections with clean, rounded 2.0mm to 4.0mm river pea gravel to form a natural filter envelope."
    ],
    specsStandard: "IS:12818:2010 CS & CM Standard"
  },
  {
    id: "bharatnet-telecom-ducts",
    title: "Current Affairs: BharatNet Phase 3 & 5G Optical Fiber Conduit Rollout",
    category: "Telecom Ducts",
    date: "October 02, 2025",
    isCurrentAffairs: true,
    summary: "Connecting 250,000 gram panchayats with high-speed 5G broadband requires permanently lubricated (PLB) optical fiber conduits. Idol TeraDuct HDPE ducts feature co-extruded silicone inner layers enabling 2,000m continuous air-blown cable runs.",
    keyDirectives: [
      "Ultra-Low Friction Coefficient: Internal co-extruded silicone layer achieves friction coefficient < 0.06 for rapid 80 m/min cable blowing.",
      "Cold Bend Radius: Minimum bend radius must exceed 20 times the pipe outside diameter (OD) to prevent cable snagging during installation.",
      "High Hydrostatic Crush Strength: Sustains high pneumatic compressor blowing pressures (up to 12 bar) without outer wall bulging."
    ],
    specsStandard: "TEC / G/CDS-08 / IS:4984 Conformance"
  }
];

export default function UpdatesMasterPage() {
  const { openRFQ } = useRFQ();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "current-affairs" && article.isCurrentAffairs) ||
      article.category.toLowerCase().includes(selectedCategory.toLowerCase());

    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.specsStandard.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Hero Header */}
      <section className="relative bg-[#0B2545] text-white py-20 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="relative max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold border border-white/10">
            <Newspaper className="w-4 h-4 text-[#DD612A]" />
            Official Knowledge Base • Current Affairs & Field Technical Bulletins
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Industry Updates, Field Advisories & Current Affairs
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Authentic engineering insights, national water mission updates (JJM & PMKSY), and field installation best practices derived from 35+ years of manufacturing leadership at Idol Pipe.
          </p>
        </div>
      </section>

      {/* 2. Controls: Filter Tabs & Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === "all"
                  ? "bg-[#0B2545] text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Updates ({ARTICLES.length})
            </button>
            <button
              onClick={() => setSelectedCategory("current-affairs")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === "current-affairs"
                  ? "bg-[#DD612A] text-white shadow"
                  : "bg-orange-50 text-[#DD612A] hover:bg-orange-100"
              }`}
            >
              ⚡ Current Affairs (2026)
            </button>
            <button
              onClick={() => setSelectedCategory("agriculture")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === "agriculture"
                  ? "bg-[#0B2545] text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Agriculture & Borewell
            </button>
            <button
              onClick={() => setSelectedCategory("swr")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === "swr"
                  ? "bg-[#0B2545] text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              SWR Drainage
            </button>
            <button
              onClick={() => setSelectedCategory("cpvc")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === "cpvc"
                  ? "bg-[#0B2545] text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              CPVC & Plumbing
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic, scheme, standard..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:ring-2 focus:ring-[#0B2545] focus:bg-white outline-none"
            />
          </div>
        </div>
      </section>

      {/* 3. Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="space-y-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              id={article.id}
              className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-6 hover:border-blue-300 transition-all"
            >
              {/* Top Meta */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#053C82]">
                    {article.category}
                  </span>
                  {article.isCurrentAffairs && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-[#DD612A]">
                      Current Affairs
                    </span>
                  )}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    {article.title}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.date}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm font-medium text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                {article.summary}
              </p>

              {/* Key Implementation Directives */}
              <div className="space-y-3 text-xs text-slate-600">
                <span className="font-bold text-slate-900 uppercase tracking-wider block text-[11px]">
                  Technical Directives & Standards Guidelines:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {article.keyDirectives.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 flex flex-col justify-between"
                    >
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed text-slate-700">{point}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs">
                <span className="text-slate-500 font-mono text-[11px]">
                  Standard Conformance: <strong className="text-slate-700">{article.specsStandard}</strong>
                </span>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => openRFQ()}
                    className="font-bold text-[#053C82] hover:text-[#DD612A] flex items-center gap-1 transition-colors"
                  >
                    Request Technical Datasheet →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom Consultation Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#0B2545] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold">Have a Custom Project or Pipeline Specification?</h2>
            <p className="text-sm text-slate-300">
              Our Rajkot technical application engineers assist consultants, EPC contractors, and agricultural irrigation planners with friction calculations, pipe wall thickness selection, and project bill of quantities (BOQ).
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => openRFQ()}
              className="px-6 py-3 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-xs transition-all shadow-md"
            >
              Consult Technical Engineers
            </button>
            <Link
              href="/calculator"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all"
            >
              Open Flow Calculators
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
