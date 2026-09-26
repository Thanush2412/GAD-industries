"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-mobile ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 cursor-pointer flex items-center gap-1.5 focus:outline-none select-none group"
              aria-label="GADIN UPVC Home"
            >
              <span>GADIN</span>
              <span className="text-blue-600 font-extrabold group-hover:text-blue-700 transition-colors">UPVC</span>
            </button>
          </div>
          <nav className="hidden md:flex items-center gap-7 nav-desktop">
            <button
              onClick={() => scrollTo("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo("products")}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Products
            </button>
            <button
              onClick={() => scrollTo("sourcing")}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Sourcing Partners
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </nav>
          <button
            className="md:hidden p-2 text-gray-700 nav-mobile-menu cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 nav-mobile">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollTo("about")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2 cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2 cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollTo("products")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2 cursor-pointer"
              >
                Products
              </button>
              <button
                onClick={() => scrollTo("sourcing")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2 cursor-pointer"
              >
                Sourcing Partners
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-left cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
