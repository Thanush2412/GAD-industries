import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#053C82] flex items-center justify-center mx-auto text-2xl font-black">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold text-slate-900">Page Not Found</h1>
          <p className="text-xs text-slate-500 leading-relaxed">
            The page or product specification you requested could not be located. Browse our certified product catalog below.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            href="/"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#053C82] hover:bg-[#042d62] text-white text-xs font-semibold transition-colors"
          >
            <Home className="w-4 h-4" /> Home Page
          </Link>
          <Link
            href="/products"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Products Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}
