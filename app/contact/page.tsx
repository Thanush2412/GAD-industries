"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe2,
  Building,
  Send,
  CheckCircle2,
  ShieldCheck,
  MessageSquare
} from "lucide-react";
import { useRFQ } from "@/components/layout/SiteLayoutClient";

export default function ContactPage() {
  const { openRFQ } = useRFQ();

  const [department, setDepartment] = useState("Domestic Plumbing & SWR (Unit 1)");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [ticketNo, setTicketNo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tick = `IDOL-MSG-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketNo(tick);
    setSent(true);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Hero Header */}
      <section className="relative bg-[#0B2545] text-white py-20 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold border border-white/10">
            <Phone className="w-4 h-4 text-[#DD612A]" />
            Direct Factory Desk & Global Export Support
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Connect With Our Manufacturing Plants & Technical Sales Desks
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Reach our specialized sales, engineering submittal, and export logistics teams across our twin Rajkot manufacturing facilities and our Dubai international desk.
          </p>
        </div>
      </section>

      {/* 2. Three Specialized Divisions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Unit 1 */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6 flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#0B2545]">
                  Plant Unit 01
                </span>
                <span className="text-[11px] font-mono text-slate-400">NH-8B Corridor</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900">Idol Plasto Private Limited</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Plumbing (cPVC, uPVC), SWR Drainage & Garden Hose Division
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#DD612A] shrink-0 mt-0.5" />
                  <span>Survey No. 552, Opp. Kuvadava High School, Wankaner Chokadi, Rajkot - Ahmedabad NH-8B, Kuvadva, Dist: Rajkot - 360023, Gujarat.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#0B2545] shrink-0" />
                  <span className="font-mono">+91 92654 96492 / +91 89807 00100</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#0B2545] shrink-0" />
                  <span className="font-mono">sales@idolpipe.com / export@idolpipe.com</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href="https://maps.google.com/?q=Idol+Plasto+Private+Limited+Rajkot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#0B2545] hover:text-[#DD612A]"
              >
                Open Google Maps →
              </a>
              <button
                onClick={() => openRFQ("cpvc-hot-cold")}
                className="text-xs font-bold text-[#DD612A] hover:underline"
              >
                Plumbing RFQ
              </button>
            </div>
          </div>

          {/* Unit 2 */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6 flex flex-col justify-between hover:border-orange-300 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-[#DD612A]">
                  Plant Unit 02
                </span>
                <span className="text-[11px] font-mono text-slate-400">Ranpur Zone</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900">Idol Polytech Private Limited</h3>
                <p className="text-xs text-slate-500 mt-1">
                  HDPE, Borewell Casing, Submersible Column & Irrigation Division
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#DD612A] shrink-0 mt-0.5" />
                  <span>RK Industrial Zone-8, Wankaner - Kuwadva Chowkdi, Rajkot - Ahmedabad Highway, At-Ranpur (Navagam), Dist: Rajkot - 360023, Gujarat.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#0B2545] shrink-0" />
                  <span className="font-mono">+91 99254 55255 / +91 97730 44163</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#0B2545] shrink-0" />
                  <span className="font-mono">hdpe@idolpipe.com / agri@idolpipe.com</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href="https://maps.google.com/?q=Idol+Polytech+Private+Limited+Ranpur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#0B2545] hover:text-[#DD612A]"
              >
                Open Google Maps →
              </a>
              <button
                onClick={() => openRFQ("submersible-column")}
                className="text-xs font-bold text-[#DD612A] hover:underline"
              >
                Agri/HDPE RFQ
              </button>
            </div>
          </div>

          {/* Dubai Desk */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6 flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800">
                  Dubai Global Desk
                </span>
                <span className="text-[11px] font-mono text-emerald-600 font-bold">Lic. 72748</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900">GADIN Industries Trading FZCO</h3>
                <p className="text-xs text-slate-500 mt-1">
                  International Trade, Multicurrency LC & CIF Container Dispatches
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#DD612A] shrink-0 mt-0.5" />
                  <span>Building A1, IFZA Business Park, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#0B2545] shrink-0" />
                  <span className="font-mono">+971 50 596 9577</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#0B2545] shrink-0" />
                  <span className="font-mono">adityavmgadin@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-mono">GCC & Africa Logistics</span>
              <button
                onClick={() => openRFQ()}
                className="text-xs font-bold text-[#0B2545] hover:underline"
              >
                Global CIF Rates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Direct Message Dispatch Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DD612A]">
              Direct Inquiries
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
              Send a Message to Our Departmental Managers
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Responses dispatched within 4 hours during factory operating schedules (Mon-Sat, 9:00 AM – 7:00 PM IST).
            </p>
          </div>

          {sent ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Message Dispatched</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you <strong>{fullName}</strong>. Your inquiry reference <strong>{ticketNo}</strong> has been routed to <strong>{department}</strong>.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-2 px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Route to Department *
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-xs focus:ring-2 focus:ring-[#0B2545] outline-none"
                  >
                    <option value="Domestic Plumbing & SWR (Unit 1)">Domestic Plumbing & SWR (Unit 1)</option>
                    <option value="Agriculture & Borewell (Unit 2)">Agriculture & Borewell (Unit 2)</option>
                    <option value="Micro-Irrigation & Sprinkler Systems">Micro-Irrigation & Sprinkler Systems</option>
                    <option value="HDPE Water & Telecom Ducts">HDPE Water & Telecom Ducts</option>
                    <option value="International Export Desk (Dubai)">International Export Desk (Dubai)</option>
                    <option value="Quality & Lab Testing Department">Quality & Lab Testing Department</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ketan Shah"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2545] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="contact@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2545] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Message or Technical Inquiry *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Provide project details, requirements, or dealership location..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2545] outline-none resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#DD612A] hover:bg-[#EA580C] text-white font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  Dispatch Inquiry to Selected Factory Desk
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
