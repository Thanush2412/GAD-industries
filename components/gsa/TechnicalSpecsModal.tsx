"use client";

import React, { useState } from "react";
import { X, FileText, CheckCircle2, ShieldCheck, Download, Table, Layers, ChevronRight, Globe2, Building2 } from "lucide-react";
import { GAD_PRODUCT_SPECS } from "@/data/gadSpecifications";

interface TechnicalSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "proposal" | "specs" | "sourcing";
}

export const TechnicalSpecsModal: React.FC<TechnicalSpecsModalProps> = ({
  isOpen,
  onClose,
  defaultTab = "proposal",
}) => {
  const [activeTab, setActiveTab] = useState<"proposal" | "specs" | "sourcing">(defaultTab);
  const [selectedProductIndex, setSelectedProductIndex] = useState<number>(0);

  if (!isOpen) return null;

  const currentSpec = GAD_PRODUCT_SPECS[selectedProductIndex] || GAD_PRODUCT_SPECS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden border border-gray-100">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 bg-slate-900 text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <FileText size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">GADIN UPVC</h3>
                <span className="text-xs font-semibold bg-blue-500/30 text-blue-200 border border-blue-400/40 px-2.5 py-0.5 rounded-full">
                  Official Technical Deck
                </span>
              </div>
              <p className="text-xs text-blue-300">
                &ldquo;Your quintessential source of uPVC.&rdquo;
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 bg-gray-50 px-6 gap-2">
          <button
            onClick={() => setActiveTab("proposal")}
            className={`py-3.5 px-4 font-semibold text-sm border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "proposal"
                ? "border-blue-600 text-blue-600 bg-white shadow-sm rounded-t-lg"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <ShieldCheck size={16} />
            Executive Sourcing Proposal
          </button>
          <button
            onClick={() => setActiveTab("specs")}
            className={`py-3.5 px-4 font-semibold text-sm border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "specs"
                ? "border-blue-600 text-blue-600 bg-white shadow-sm rounded-t-lg"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <Table size={16} />
            Engineering Specs & Dimensions
          </button>
          <button
            onClick={() => setActiveTab("sourcing")}
            className={`py-3.5 px-4 font-semibold text-sm border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "sourcing"
                ? "border-blue-600 text-blue-600 bg-white shadow-sm rounded-t-lg"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <Globe2 size={16} />
            Global Sourcing Alliances
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          {/* TAB 1: EXECUTIVE PROPOSAL */}
          {activeTab === "proposal" && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                  Executive Brief
                </span>
                <h4 className="text-2xl font-bold text-gray-900 mt-3 mb-2">
                  High-Performance uPVC & CPVC Manufacturing Ecosystem
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  GADIN UPVC stands at the forefront of polymer pipe extrusion by combining direct global procurement of 100% virgin K-67 suspension resins with high-precision twin-screw extrusion technology. Our 100% lead-free formulations guarantee zero heavy metal contamination and decades of structural integrity.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 transition-colors bg-white">
                  <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-base">
                    <CheckCircle2 size={18} className="text-blue-600" />
                    Raw Material Excellence
                  </h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Zero recycled regrind policy. We procure strictly prime virgin resin from <strong>Reliance Polymers</strong> and <strong>DCW Limited</strong>, compounded with <strong>Kothari</strong> thermal stabilizers and <strong>Eastman International</strong> processing aids.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 transition-colors bg-white">
                  <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-base">
                    <CheckCircle2 size={18} className="text-blue-600" />
                    Global Chemical Procurement
                  </h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Direct import contracts with certified Chinese and Korean chemical leaders for rutile Titanium Dioxide (TiO2) pigments, ensuring maximum UV block, color retention, and weather tolerance.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 transition-colors bg-white">
                  <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-base">
                    <CheckCircle2 size={18} className="text-blue-600" />
                    100% Lead-Free Potable Safety
                  </h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Complies with NSF/ANSI 61 and ASTM D1785 standards. Completely free from toxic heavy metals (Pb &lt; 0.001%), making it safe for continuous domestic drinking water transit.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 transition-colors bg-white">
                  <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-base">
                    <CheckCircle2 size={18} className="text-blue-600" />
                    Full Spectrum Product Coverage
                  </h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    6 specialized product lines spanning cold plumbing (SCH 40/80), CPVC hot water (up to 93°C), SWR & underground drainage, agricultural irrigation, and custom rainwater roof gutters.
                  </p>
                </div>
              </div>

              {/* Proposal Table Summary */}
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-100 text-gray-900 font-bold border-b border-gray-200">
                    <tr>
                      <th className="p-3.5">Category</th>
                      <th className="p-3.5">Primary Partner / Standard</th>
                      <th className="p-3.5">Technical Characteristic</th>
                      <th className="p-3.5">Application</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    <tr className="hover:bg-gray-50">
                      <td className="p-3.5 font-semibold text-gray-900">uPVC Plumbing</td>
                      <td className="p-3.5">ASTM D1785 SCH 40/80</td>
                      <td className="p-3.5">Burst rating &gt; 140 kgf/cm², 100% plastic</td>
                      <td className="p-3.5">Potable water risers & main distribution</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3.5 font-semibold text-gray-900">cPVC Hot & Cold</td>
                      <td className="p-3.5">ASTM D2846 / IS:15778</td>
                      <td className="p-3.5">93°C Continuous rating, SDR 11/13.5</td>
                      <td className="p-3.5">Solar heating loops & high-rise hot water</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3.5 font-semibold text-gray-900">RPVC Drainage & SWR</td>
                      <td className="p-3.5">IS:13592 / DIN 19531</td>
                      <td className="p-3.5">High hydraulic flow ($C=150$), chemical proof</td>
                      <td className="p-3.5">Waste, soil, and underground sewage</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3.5 font-semibold text-gray-900">Agriculture Pipes</td>
                      <td className="p-3.5">IS:4985 / ISO 1452</td>
                      <td className="p-3.5">UV-stabilized, high impact resistance</td>
                      <td className="p-3.5">Farm irrigation & borehole water lines</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3.5 font-semibold text-gray-900">Custom uPVC Gutters</td>
                      <td className="p-3.5">EN 607 / ASTM D2729</td>
                      <td className="p-3.5">Zero rot, high volume storm runoff channel</td>
                      <td className="p-3.5">Architectural roof rainwater evacuation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: TECHNICAL SPECIFICATIONS & DIMENSIONS */}
          {activeTab === "specs" && (
            <div className="space-y-6">
              {/* Product Selector Bar */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Select Product Line for Detailed Dimensions & Engineering Data:
                </label>
                <div className="flex flex-wrap gap-2">
                  {GAD_PRODUCT_SPECS.map((spec, idx) => (
                    <button
                      key={spec.id}
                      onClick={() => setSelectedProductIndex(idx)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        selectedProductIndex === idx
                          ? "bg-blue-600 text-white shadow-sm"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {spec.name.split(" ")[0]} {spec.categoryLabel}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Spec Overview */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100 px-2.5 py-1 rounded-md">
                      {currentSpec.standard}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 mt-2">
                      {currentSpec.name}
                    </h4>
                  </div>
                  <div className="text-left md:text-right text-xs text-gray-500">
                    <p className="font-semibold text-gray-700">Pressure Rating: {currentSpec.pressureRating}</p>
                    <p>Max Temp: {currentSpec.maxTemp}</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  <strong>Compounding Formulation:</strong> {currentSpec.materialCompounding}
                </p>

                <div className="grid md:grid-cols-2 gap-4 text-xs">
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <p className="font-bold text-gray-900 mb-1">Primary Applications:</p>
                    <ul className="list-disc list-inside space-y-0.5 text-gray-600">
                      {currentSpec.primaryApplications.map((app, aIdx) => (
                        <li key={aIdx}>{app}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <p className="font-bold text-gray-900 mb-1">Engineering Installation Rules:</p>
                    <ul className="list-disc list-inside space-y-0.5 text-gray-600">
                      {currentSpec.engineeringRules.map((rule, rIdx) => (
                        <li key={rIdx}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Dimensions Table */}
              <div>
                <h5 className="font-bold text-gray-900 text-base mb-3 flex items-center gap-2">
                  <Table size={18} className="text-blue-600" />
                  Engineering Dimension & Pressure Chart ({currentSpec.categoryLabel})
                </h5>
                <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <table className="w-full text-left text-xs md:text-sm">
                    <thead className="bg-gray-100 text-gray-900 font-bold border-b border-gray-200">
                      <tr>
                        <th className="p-3">Nominal Size</th>
                        <th className="p-3">Outer Diameter</th>
                        <th className="p-3">Wall Thickness</th>
                        <th className="p-3">Working Pressure</th>
                        <th className="p-3">Burst Rating</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      {currentSpec.dimensionsTable.map((row, dIdx) => (
                        <tr key={dIdx} className="hover:bg-blue-50/50 transition-colors">
                          <td className="p-3 font-semibold text-gray-900">{row.nominalSize}</td>
                          <td className="p-3 font-mono">{row.outerDiameter}</td>
                          <td className="p-3 font-mono">{row.wallThickness}</td>
                          <td className="p-3 font-semibold text-blue-700">{row.workingPressure}</td>
                          <td className="p-3 font-mono">{row.burstPressure}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: GLOBAL SOURCING ALLIANCES */}
          {activeTab === "sourcing" && (
            <div className="space-y-6">
              <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <Globe2 size={20} />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Tier-1 Supply Chain Assurance
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Verified Sourcing Ecosystem
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Every batch of GADIN UPVC begins with raw material integrity. We source exclusively from certified polymer petrochemical plants and international chemical manufacturers.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-gray-900 text-base">Reliance Polymers</h5>
                    <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Resin Supplier</span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    Supplying 100% virgin K-67 grade suspension PVC resin with consistent bulk density (0.54–0.58 g/cc) and zero molecular variance.
                  </p>
                  <div className="text-xs text-gray-500 bg-gray-50 p-2.5 rounded-lg">
                    <strong>Key Metric:</strong> Tensile strength &ge; 50 MPa; Hydrostatic hoop stress compliant with IS 4985.
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-gray-900 text-base">DCW Limited</h5>
                    <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Chemical Pioneer</span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    India&apos;s leading chlor-alkali & PVC manufacturer delivering high-purity suspension resin with ultra-low residual VCM (&lt; 2 PPM).
                  </p>
                  <div className="text-xs text-gray-500 bg-gray-50 p-2.5 rounded-lg">
                    <strong>Key Metric:</strong> High clarity and zero heavy-metal contamination for potable water safety.
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-gray-900 text-base">Kothari Plant</h5>
                    <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Compounding Plant</span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    Precision one-pack calcium-zinc (Ca-Zn) thermal stabilizers and internal lubricants ensuring smooth gelation during extrusion.
                  </p>
                  <div className="text-xs text-gray-500 bg-gray-50 p-2.5 rounded-lg">
                    <strong>Key Metric:</strong> 100% lead-free stabilizer packs meeting international eco-toxicological standards.
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-gray-900 text-base">Eastman International</h5>
                    <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Specialty Additives</span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    Global performance additives, acrylic processing aids, and high-efficiency impact modifiers for mirror-like interior bore finish.
                  </p>
                  <div className="text-xs text-gray-500 bg-gray-50 p-2.5 rounded-lg">
                    <strong>Key Metric:</strong> Izod Impact strength enhancement (&gt; 100 J/m); Hazen-Williams friction coefficient $C=150$.
                  </div>
                </div>
              </div>

              {/* Chinese & Korean Partners Banner */}
              <div className="bg-gradient-to-r from-blue-50 via-slate-50 to-indigo-50 border border-blue-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Globe2 className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm">Chinese & Korean Chemical Partners</h5>
                    <p className="text-gray-600 text-xs mt-1 leading-relaxed">
                      Direct supply of chloride-process Rutile Titanium Dioxide (TiO2, 93%+ purity) and high-weatherability chlorinated polyethylene (CPE 135A) ensuring complete resistance to tropical UV sunlight, chalking, and environmental stress cracking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            &ldquo;Your quintessential source of uPVC.&rdquo; &bull; ISO 9001:2015 &amp; ASTM Standards Compliant
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download size={14} />
              Print / Save Data
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            >
              Close Deck
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
