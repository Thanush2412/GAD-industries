"use client";

import React, { useState } from "react";
import { GAD_PRODUCT_SPECS } from "@/data/gadSpecifications";
import { Search, Download, Check, Copy, SlidersHorizontal, Table, ShieldCheck, Layers } from "lucide-react";

interface TechnicalSpecTableProps {
  selectedProductId: string;
  onSelectProduct: (id: string) => void;
}

export const TechnicalSpecTable: React.FC<TechnicalSpecTableProps> = ({
  selectedProductId,
  onSelectProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [copied, setCopied] = useState(false);

  const currentProduct =
    GAD_PRODUCT_SPECS.find((p) => p.id === selectedProductId) || GAD_PRODUCT_SPECS[0];

  const filteredRows = currentProduct.dimensionsTable.filter((row) =>
    Object.values(row).some((val) =>
      val.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleCopy = () => {
    const header = "Profile Section | Dimensions (W x D) | Wall Thickness | Structural Wind Rating | Water / Sound Rating\n";
    const body = filteredRows
      .map(
        (r) =>
          `${r.nominalSize} | ${r.outerDiameter} | ${r.wallThickness} | ${r.workingPressure} | ${r.burstPressure}`
      )
      .join("\n");
    navigator.clipboard.writeText(header + body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="specifications" className="py-16 md:py-24 border-b border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#E2E8F0]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase px-2.5 py-1 rounded bg-[#EFF6FF] text-[#053C82] border border-[#BFDBFE] font-bold">
                Profile Cross-Section Dimensional Matrices
              </span>
              <span className="text-xs font-mono text-[#64748B]">
                STANDARDS: EN 12608 CLASS A • BS 6375 • IS 875
              </span>
            </div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#053C82] tracking-tight">
              Certified uPVC Profile Engineering Specifications
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#475569] leading-relaxed">
            Detailed outer frame, sash, mullion, and interlock profiles with exact wall thicknesses, steel core moment of inertia ($I_x$), wind pressure ratings, and acoustic sound attenuation.
          </p>
        </div>

        {/* Product System Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none border-b border-[#E2E8F0]">
          {GAD_PRODUCT_SPECS.map((product) => (
            <button
              key={product.id}
              onClick={() => onSelectProduct(product.id)}
              className={`whitespace-nowrap px-4 py-2.5 text-xs font-mono rounded-lg transition-colors border ${
                selectedProductId === product.id
                  ? "bg-[#053C82] text-[#FFFFFF] border-[#053C82] font-bold shadow-sm"
                  : "bg-[#FFFFFF] text-[#475569] border-[#CBD5E1] hover:bg-[#F1F5F9] hover:text-[#053C82]"
              }`}
            >
              {product.categoryLabel}
            </button>
          ))}
        </div>

        {/* Active Product Meta Info & Filter Bar */}
        <div className="bg-[#FFFFFF] border border-[#CBD5E1] rounded-xl p-5 mb-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-mono text-[#64748B] uppercase font-bold">Active Architectural Profile Series:</div>
            <div className="font-sans font-extrabold text-base sm:text-lg text-[#053C82]">{currentProduct.name}</div>
            <div className="text-xs font-mono text-[#DD612A] font-semibold">{currentProduct.standard}</div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search section, mm, or rating..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-xs font-mono pl-8 pr-3 py-2 rounded bg-[#F8FAFC] border border-[#CBD5E1] focus:outline-none focus:border-[#053C82] text-[#1E293B]"
              />
            </div>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] hover:bg-[#F1F5F9] text-xs font-mono text-[#053C82] font-bold transition-colors shadow-sm"
              title="Copy table to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#DD612A]" />}
              <span className="hidden sm:inline">{copied ? "Copied" : "Copy TSV"}</span>
            </button>
          </div>
        </div>

        {/* Specification Table */}
        <div className="bg-[#FFFFFF] border border-[#CBD5E1] rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono divide-y divide-[#E2E8F0]">
              <thead className="bg-[#EFF6FF] text-[#053C82]">
                <tr>
                  <th className="px-5 py-3.5 font-bold uppercase tracking-wider">Profile Section / Member</th>
                  <th className="px-5 py-3.5 font-bold uppercase tracking-wider">Section Dimension (W x D)</th>
                  <th className="px-5 py-3.5 font-bold uppercase tracking-wider">Wall Thickness (Class A)</th>
                  <th className="px-5 py-3.5 font-bold uppercase tracking-wider">Structural Wind Rating</th>
                  <th className="px-5 py-3.5 font-bold uppercase tracking-wider">Water / Sound / Load Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9] text-[#1E293B]">
                {filteredRows.length > 0 ? (
                  filteredRows.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F8FAFC] hover:bg-[#EFF6FF]/60 transition-colors"}
                    >
                      <td className="px-5 py-3.5 font-bold text-[#053C82] whitespace-nowrap">
                        {row.nominalSize}
                      </td>
                      <td className="px-5 py-3.5 text-[#475569] whitespace-nowrap font-medium">
                        {row.outerDiameter}
                      </td>
                      <td className="px-5 py-3.5 text-[#475569] whitespace-nowrap font-medium">
                        {row.wallThickness}
                      </td>
                      <td className="px-5 py-3.5 font-bold text-[#053C82] whitespace-nowrap">
                        {row.workingPressure}
                      </td>
                      <td className="px-5 py-3.5 text-[#DD612A] font-bold whitespace-nowrap">
                        {row.burstPressure}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-5 py-8 text-center text-[#64748B]">
                      No profile sections match your query "{searchTerm}". Clear search to view complete catalog.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer Note */}
          <div className="px-5 py-3 bg-[#EFF6FF]/40 border-t border-[#E2E8F0] flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-[#64748B] gap-2">
            <span>
              All profiles compounded with European lead-free stabilizers conforming to EN 12608 Class A & ASTM E330.
            </span>
            <span className="font-bold text-[#053C82]">
              Total Profile Sections: {filteredRows.length} of {currentProduct.dimensionsTable.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
