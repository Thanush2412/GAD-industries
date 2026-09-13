"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building,
  ShieldCheck,
  CheckCircle2,
  Send,
  Award,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  Truck
} from "lucide-react";
import { useRFQ } from "@/components/layout/SiteLayoutClient";

export default function DealershipPage() {
  const { openRFQ } = useRFQ();

  const [firmName, setFirmName] = useState("");
  const [applicantName, setApplicantName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [constitution, setConstitution] = useState("Proprietorship");
  const [stateName, setStateName] = useState("Gujarat");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [targetCategory, setTargetCategory] = useState("Both Plumbing & Agri/Irrigation");
  const [experienceYears, setExperienceYears] = useState("5 - 10 Years");
  const [warehouseSqft, setWarehouseSqft] = useState("2,000 - 5,000 Sq. Ft.");
  const [annualTurnover, setAnnualTurnover] = useState("₹1 Crore – ₹5 Crores");
  const [notes, setNotes] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `IDOL-DLR-${Math.floor(100000 + Math.random() * 900000)}`;
    setAppId(generatedId);
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Hero Header */}
      <section className="relative bg-[#0B2545] text-white py-20 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold border border-white/10">
            <Building className="w-4 h-4 text-[#DD612A]" />
            National & International Distributor Network
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Partner With India's Trusted Piping & Irrigation Manufacturer
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Expand your distribution footprint with 30+ years of manufacturing brand trust, guaranteed 100% virgin polymer quality, robust dealer margins, and direct factory dispatch from Rajkot.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#application-portal"
              className="px-6 py-3 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-xs transition-all shadow-md"
            >
              Start Dealership Application
            </a>
            <button
              onClick={() => openRFQ()}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
            >
              Request Distributor Catalog →
            </button>
          </div>
        </div>
      </section>

      {/* 2. Value Proposition for Dealers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0B2545] flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Protected Territories & Margins</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We allocate well-defined geographic zones to prevent internal price discounting, ensuring healthy, dependable gross margins for our channel partners.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#DD612A] flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Direct Mill Dispatch</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full truckloads (FTL) dispatched directly from our twin Rajkot units (NH-8B & Ranpur) with express turnaround times and live transit tracking.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Zero-Complaint Quality</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              100% virgin polymer compounding eliminates field rupture returns and protects your reputation among plumbers, farmers, and contractors.
            </p>
          </div>
        </div>
      </section>

      {/* 3. On-Site Interactive Application Portal */}
      <section id="application-portal" className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="bg-[#0B2545] p-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FDBA74]">
                  Channel Partner Onboarding
                </span>
                <h2 className="text-2xl font-bold tracking-tight mt-1">
                  Authorized Dealership & Distributor Application
                </h2>
              </div>
              <span className="hidden sm:inline px-3 py-1 bg-white/10 rounded-full text-xs font-mono text-slate-200 border border-white/10">
                FY 2026-27 Registrations
              </span>
            </div>
          </div>

          <div className="p-8">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Application Submitted Successfully</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{applicantName}</strong> from <strong>{firmName}</strong>. Your application for <strong>{district}, {stateName}</strong> has been logged.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto text-left font-mono text-xs text-slate-700 space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Tracking Code:</span>
                    <span className="font-bold text-[#0B2545]">{appId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Target Segment:</span>
                    <span className="font-semibold">{targetCategory}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Assigned Manager:</span>
                    <span className="font-semibold text-slate-800">State Zonal Head</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Review Turnaround:</span>
                    <span className="text-emerald-600 font-bold">24-48 Hours</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <a
                    href={`https://wa.me/919265496492?text=Hello%20Idol%20Pipe%20Sales%20Team,%20I%20have%20submitted%20dealership%20application%20${appId}%20for%20${firmName}%20(${district},%20${stateName}).%20Please%20connect.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" /> Connect with Zonal Head on WhatsApp
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-xs transition-colors"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-100 pb-2">
                    1. Enterprise & Contact Information
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Registered Firm / Enterprise Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Patel Sanitation & Tube Wells"
                        value={firmName}
                        onChange={(e) => setFirmName(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2545] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Authorized Person / Partner Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Haresh Patel"
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2545] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Constitution *
                      </label>
                      <select
                        value={constitution}
                        onChange={(e) => setConstitution(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-xs focus:ring-2 focus:ring-[#0B2545] outline-none"
                      >
                        <option value="Proprietorship">Proprietorship</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Private Limited">Private Limited</option>
                        <option value="LLP">LLP</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Mobile / WhatsApp *
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
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sales@firm.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2545] outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-100 pb-2">
                    2. Target Geographic Territory
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Target State *
                      </label>
                      <select
                        value={stateName}
                        onChange={(e) => setStateName(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-xs focus:ring-2 focus:ring-[#0B2545] outline-none"
                      >
                        <option value="Gujarat">Gujarat</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Andhra Pradesh / Telangana">Andhra Pradesh / Telangana</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Punjab / Haryana">Punjab / Haryana</option>
                        <option value="Other Indian State">Other Indian State</option>
                        <option value="International (Outside India)">International (Outside India)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        District / City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajkot, Surat, Indore"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2545] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        PIN / Postal Code *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 360001"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2545] outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-100 pb-2">
                    3. Commercial Profile & Capacity
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Product Portfolio Interest *
                      </label>
                      <select
                        value={targetCategory}
                        onChange={(e) => setTargetCategory(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-xs focus:ring-2 focus:ring-[#0B2545] outline-none"
                      >
                        <option value="Plumbing & Drainage (cPVC, uPVC, SWR)">Plumbing & Drainage (cPVC, uPVC, SWR)</option>
                        <option value="Agriculture & Borewell (Casing, Column, IS:4985)">Agriculture & Borewell (Casing, Column, IS:4985)</option>
                        <option value="Precision Micro-Irrigation (Drip & Sprinkler)">Precision Micro-Irrigation (Drip & Sprinkler)</option>
                        <option value="Both Plumbing & Agri/Irrigation">Comprehensive Portfolio (Plumbing + Agri + Irrigation)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Industry Experience *
                      </label>
                      <select
                        value={experienceYears}
                        onChange={(e) => setExperienceYears(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-xs focus:ring-2 focus:ring-[#0B2545] outline-none"
                      >
                        <option value="New Venture (< 2 Years)">New Venture (&lt; 2 Years)</option>
                        <option value="2 - 5 Years">2 - 5 Years</option>
                        <option value="5 - 10 Years">5 - 10 Years</option>
                        <option value="10+ Years Established Network">10+ Years Established Network</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Godown / Storage Footprint *
                      </label>
                      <select
                        value={warehouseSqft}
                        onChange={(e) => setWarehouseSqft(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-xs focus:ring-2 focus:ring-[#0B2545] outline-none"
                      >
                        <option value="1,000 - 2,000 Sq. Ft.">1,000 - 2,000 Sq. Ft.</option>
                        <option value="2,000 - 5,000 Sq. Ft.">2,000 - 5,000 Sq. Ft.</option>
                        <option value="5,000 - 15,000 Sq. Ft.">5,000 - 15,000 Sq. Ft.</option>
                        <option value="15,000+ Sq. Ft. Logistics Yard">15,000+ Sq. Ft. Logistics Yard</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Annual Turnover *
                      </label>
                      <select
                        value={annualTurnover}
                        onChange={(e) => setAnnualTurnover(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-xs focus:ring-2 focus:ring-[#0B2545] outline-none"
                      >
                        <option value="< ₹50 Lakhs">&lt; ₹50 Lakhs</option>
                        <option value="₹50 Lakhs – ₹1 Crore">₹50 Lakhs – ₹1 Crore</option>
                        <option value="₹1 Crore – ₹5 Crores">₹1 Crore – ₹5 Crores</option>
                        <option value="₹5 Crores+">₹5 Crores+</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-xs transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Dealership Application Directly to Rajkot HQ
                  </button>
                  <p className="text-center text-[10px] text-slate-500 mt-2">
                    🔒 All disclosures are strictly protected under corporate non-disclosure.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
