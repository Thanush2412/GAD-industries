"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LoadCalculator } from "@/components/LoadCalculator";
import { ProductCatalog } from "@/components/ProductCatalog";
import { TechnicalSpecTable } from "@/components/TechnicalSpecTable";
import { InfrastructureBento } from "@/components/InfrastructureBento";
import { Footer } from "@/components/Footer";
import { DealerModal } from "@/components/DealerModal";

export default function HomePage() {
  const [dealerModalOpen, setDealerModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState("upvc-casement-windows");

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#1E293B]">
      {/* Top Fixed / Sticky Navigation */}
      <Navbar onOpenDealerModal={() => setDealerModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Monolithic Editorial Hero */}
        <Hero onOpenDealerModal={() => setDealerModalOpen(true)} />

        {/* Structural, Acoustic & Thermal Simulator */}
        <LoadCalculator />

        {/* Comprehensive Product Catalog Bento */}
        <ProductCatalog
          onSelectProductForSpecs={(id) => setSelectedProductId(id)}
          onOpenDealerModal={() => setDealerModalOpen(true)}
        />

        {/* Certified Dimensional & Hydraulic Matrices */}
        <TechnicalSpecTable
          selectedProductId={selectedProductId}
          onSelectProduct={(id) => setSelectedProductId(id)}
        />

        {/* Manufacturing & QA Infrastructure Bento */}
        <InfrastructureBento />
      </main>

      {/* Enterprise Footprint & Corporate Footer */}
      <Footer onOpenDealerModal={() => setDealerModalOpen(true)} />

      {/* Interactive Dealership Onboarding / RFQ Modal */}
      <DealerModal
        isOpen={dealerModalOpen}
        onClose={() => setDealerModalOpen(false)}
      />
    </div>
  );
}
