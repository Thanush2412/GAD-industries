"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight, ShieldCheck, Building2, Send } from "lucide-react";

interface DealerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DealerModal: React.FC<DealerModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    businessType: "fabricator",
    countryState: "",
    warehouseArea: "",
    annualVolume: "5000-15000-sqm",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `GIT-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      businessType: "fabricator",
      countryState: "",
      warehouseArea: "",
      annualVolume: "5000-15000-sqm",
      notes: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FFFFFF] border border-[#CBD5E1] rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-[#1E293B]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-[#64748B] hover:text-[#053C82] hover:bg-[#F1F5F9] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase px-2.5 py-1 rounded bg-[#EFF6FF] text-[#053C82] border border-[#BFDBFE] font-bold">
                B2B Architectural & Dealer Portal
              </span>
              <span className="text-xs font-mono text-[#DD612A] font-bold">
                DUBAI FZCO LIC: 72748
              </span>
            </div>

            <h3 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight text-[#053C82] mb-2">
              Fabricator Onboarding & Direct Factory RFQ
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] mb-6 leading-relaxed">
              Partner directly with GADIN INDUSTRIES TRADING FZCO. We supply certified Class A tropicalized uPVC profile dies, roll-formed galvanized steel cores, and European hardware accessories.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#334155] mb-1 uppercase">
                    Company / Firm Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Apex Fenestration & Glazing LLC"
                    className="w-full text-xs font-mono py-2.5 px-3 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] focus:outline-none focus:border-[#053C82]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#334155] mb-1 uppercase">
                    Authorized Contact Person *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="Full name & title"
                    className="w-full text-xs font-mono py-2.5 px-3 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] focus:outline-none focus:border-[#053C82]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#334155] mb-1 uppercase">
                    Business Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="procurement@company.com"
                    className="w-full text-xs font-mono py-2.5 px-3 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] focus:outline-none focus:border-[#053C82]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#334155] mb-1 uppercase">
                    Contact Phone / WhatsApp *
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 / Country code followed by number"
                    className="w-full text-xs font-mono py-2.5 px-3 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] focus:outline-none focus:border-[#053C82]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#334155] mb-1 uppercase">
                    Business Model
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full text-xs font-mono py-2.5 px-3 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] focus:outline-none focus:border-[#053C82]"
                  >
                    <option value="fabricator">Window Fabricator / Glazing Specialist</option>
                    <option value="distributor">Regional Profile Distributor</option>
                    <option value="builder">Real Estate Developer / Contractor</option>
                    <option value="architect">Architect / Façade Consultant</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#334155] mb-1 uppercase">
                    Location (City / Country) *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.countryState}
                    onChange={(e) => setFormData({ ...formData, countryState: e.target.value })}
                    placeholder="e.g. Dubai, UAE or Mumbai, India"
                    className="w-full text-xs font-mono py-2.5 px-3 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] focus:outline-none focus:border-[#053C82]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#334155] mb-1 uppercase">
                    Project Volume (Sq. Metres)
                  </label>
                  <select
                    value={formData.annualVolume}
                    onChange={(e) => setFormData({ ...formData, annualVolume: e.target.value })}
                    className="w-full text-xs font-mono py-2.5 px-3 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] focus:outline-none focus:border-[#053C82]"
                  >
                    <option value="under-2000">Under 2,000 m² (Villa Project)</option>
                    <option value="5000-15000-sqm">2,000 - 10,000 m² (Tower Project)</option>
                    <option value="over-10000">Over 10,000 m² (Container Profiles)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#334155] mb-1 uppercase">
                  Project Notes or Target uPVC Profile Requirements
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Specify system requirements: e.g. PrimaTherm 70mm casement profiles, GlideMax 3-track sliding with SS mesh, 2.0mm steel reinforcement..."
                  className="w-full text-xs font-mono py-2.5 px-3 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] focus:outline-none focus:border-[#053C82]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#64748B]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Dubai Desk Direct Response within 24 Hours</span>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#053C82] hover:bg-[#073F86] text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors shadow-md shadow-blue-900/10"
                >
                  <span>Submit Dealership Docket</span>
                  <Send className="w-3.5 h-3.5 text-[#DD612A]" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-sans font-extrabold text-2xl text-[#053C82]">
              Docket Successfully Registered
            </h3>
            <div className="inline-block p-3 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] font-mono text-xs text-[#053C82]">
              OFFICIAL FILE REF: <span className="font-bold text-[#DD612A]">{referenceId}</span>
            </div>
            <p className="max-w-md mx-auto text-xs sm:text-sm text-[#475569] leading-relaxed">
              Thank you, <span className="font-bold text-[#1E293B]">{formData.contactPerson}</span>. The GADIN INDUSTRIES TRADING FZCO commercial desk has received your dossier for <span className="font-bold text-[#1E293B]">{formData.companyName}</span>. A senior fenestration specialist will contact you via {formData.email} within 24 business hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-lg bg-[#053C82] text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#073F86] transition-colors"
              >
                Return to Engineering Portal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
