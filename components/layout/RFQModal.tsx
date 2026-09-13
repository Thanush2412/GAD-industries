"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, ShieldCheck, Phone, Mail, FileText, Globe2 } from "lucide-react";

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const RFQModal: React.FC<RFQModalProps> = ({
  isOpen,
  onClose,
  defaultProduct = "cpvc-hot-cold"
}) => {
  const [productCategory, setProductCategory] = useState(defaultProduct);
  const [estimatedQuantity, setEstimatedQuantity] = useState("1 Full Container Load (FCL)");
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("India");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [specNotes, setSpecNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [rfqTicket, setRfqTicket] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketId = `IDOL-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setRfqTicket(ticketId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0B2545] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#DD612A] text-white">
              <ShieldCheck className="w-3.5 h-3.5" /> Direct Mill Quotation
            </span>
            <span className="text-xs text-blue-200">ISO 9001:2015 Certified Units</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight">Request Factory Quotation & Submittals</h3>
          <p className="text-xs text-slate-300 mt-1">
            Connect directly with commercial pricing teams at Rajkot manufacturing plants and Dubai international desk.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">RFQ Successfully Logged</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you <strong className="text-slate-800">{fullName}</strong> ({companyName || "Valued Buyer"}). Your request is being processed.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto text-left font-mono text-xs text-slate-700 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">RFQ ID:</span>
                  <span className="font-bold text-[#0B2545]">{rfqTicket}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Product:</span>
                  <span className="font-semibold capitalize">{productCategory.replace(/-/g, " ")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Volume:</span>
                  <span className="font-semibold">{estimatedQuantity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Response:</span>
                  <span className="text-emerald-600 font-bold">&lt; 4 Hours</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href={`https://wa.me/919265496492?text=Hello%20Idol%20Pipe%20Team,%20I%20have%20submitted%20RFQ%20${rfqTicket}%20for%20${productCategory}.%20Please%20expedite.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Instant WhatsApp Dispatch
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-xs transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Product Line *
                  </label>
                  <select
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-xs focus:ring-2 focus:ring-[#0B2545] outline-none"
                    required
                  >
                    <option value="cpvc-hot-cold">cPVC Hot & Cold Water Pipes (SDR 11/13.5)</option>
                    <option value="upvc-plumbing">uPVC SCH 40 & 80 Lead-Free Cold Water</option>
                    <option value="swr-drainage">SWR Soil, Waste & Rainwater Drainage</option>
                    <option value="agriculture-pvc">Agriculture PVC Rigid Pipes (IS:4985)</option>
                    <option value="submersible-column">Submersible Column Riser Pipes (15 MT Load)</option>
                    <option value="borehole-casing">uPVC Borewell Casing & Screen Pipes (IS:12818)</option>
                    <option value="hdpe-telecom">HDPE Pressure & PLB Telecom Ducts</option>
                    <option value="drip-irrigation">Flat & Round Precision Drip Systems</option>
                    <option value="sprinkler-irrigation">HDPE Sprinklers & Rotary Brass Nozzles</option>
                    <option value="irrigation-accessories">Disc/Screen Filters & Valves</option>
                    <option value="garden-hose">Flexible PVC Garden Hose</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Batch Volume *
                  </label>
                  <select
                    value={estimatedQuantity}
                    onChange={(e) => setEstimatedQuantity(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-xs focus:ring-2 focus:ring-[#0B2545] outline-none"
                    required
                  >
                    <option value="Sample / Pilot Trial (< 2 MT)">Sample / Pilot Trial (&lt; 2 MT)</option>
                    <option value="Distributor Truckload (5 - 15 MT)">Distributor Truckload (5 - 15 MT)</option>
                    <option value="1 Full Container Load (20ft / 40ft FCL)">1 Full Container Load (20ft / 40ft FCL)</option>
                    <option value="Multiple Containers (50+ MT Export)">Multiple Containers (50+ MT Export)</option>
                    <option value="EPC Government Tender Specification">EPC Government Tender Specification</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2545] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Enterprise / Company *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Skyline Infrastructure Ltd."
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2545] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Destination Country *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="India, UAE, Mexico..."
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2545] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2545] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="procurement@firm.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2545] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Technical Specifications or Delivery Port (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Specify SDR classes, wall thickness, port (e.g. Mundra / Jebel Ali), or specific ASTM/IS submittals..."
                  value={specNotes}
                  onChange={(e) => setSpecNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2545] outline-none resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-xs transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  Submit Quotation Request to Factory Desk
                </button>
                <p className="text-center text-[10px] text-slate-500 mt-2">
                  🔒 Direct B2B factory pricing from Idol Plasto & Idol Polytech manufacturing units.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
