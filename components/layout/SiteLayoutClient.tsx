"use client";

import React, { useState, createContext, useContext } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { RFQModal } from "./RFQModal";

interface LayoutContextType {
  openRFQ: (productId?: string) => void;
}

const LayoutContext = createContext<LayoutContextType>({
  openRFQ: () => {}
});

export const useRFQ = () => useContext(LayoutContext);

export const SiteLayoutClient: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rfqOpen, setRfqOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("cpvc-hot-cold");

  const handleOpenRFQ = (productId?: string) => {
    if (productId) {
      setSelectedProduct(productId);
    }
    setRfqOpen(true);
  };

  return (
    <LayoutContext.Provider value={{ openRFQ: handleOpenRFQ }}>
      <div className="min-h-screen flex flex-col bg-white text-[#1E293B]">
        <Header onOpenRFQ={handleOpenRFQ} />
        <main className="flex-grow">{children}</main>
        <Footer onOpenRFQ={handleOpenRFQ} />
        <RFQModal
          isOpen={rfqOpen}
          onClose={() => setRfqOpen(false)}
          defaultProduct={selectedProduct}
        />
      </div>
    </LayoutContext.Provider>
  );
};
