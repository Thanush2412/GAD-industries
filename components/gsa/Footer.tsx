"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 cursor-pointer flex items-center gap-1.5 mb-2 focus:outline-none select-none group text-left"
              aria-label="GADIN UPVC Home"
            >
              <span>GADIN</span>
              <span className="text-blue-600 font-extrabold group-hover:text-blue-700 transition-colors">UPVC</span>
            </button>
            <p className="text-blue-700 font-semibold text-xs uppercase tracking-wider mb-4">
              &ldquo;Your quintessential source of uPVC.&rdquo;
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed hover:text-gray-800 transition-colors duration-300 text-sm">
              GADIN UPVC is a leading manufacturer of high-quality uPVC, CPVC, and RPVC pipes, agricultural irrigation, and custom roof gutters. Sourced with global polymer leaders.
            </p>
            <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300 text-sm">
              Our pipes are 100% lead-free, ensuring safe drinking water supply and compliance with modern health standards.
            </p>
          </div>

          <div className="transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-gray-900 mb-4 font-semibold text-lg">Products</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollTo("products")}
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 text-left hover:translate-x-2 transform cursor-pointer text-sm"
                >
                  uPVC Plumbing Pipes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("products")}
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 text-left hover:translate-x-2 transform cursor-pointer text-sm"
                >
                  Lead-Free uPVC
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("products")}
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 text-left hover:translate-x-2 transform cursor-pointer text-sm"
                >
                  CPVC Hot & Cold Pipes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("products")}
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 text-left hover:translate-x-2 transform cursor-pointer text-sm"
                >
                  RPVC/PVC Drainage Pipe
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("products")}
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 text-left hover:translate-x-2 transform cursor-pointer text-sm"
                >
                  Agriculture Pipes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("products")}
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 text-left hover:translate-x-2 transform cursor-pointer text-sm"
                >
                  Customized uPVC Gutters
                </button>
              </li>
            </ul>
          </div>

          <div className="transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-gray-900 mb-4 font-semibold text-lg">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 group">
                <Mail
                  className="text-blue-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300"
                  size={18}
                />
                <a
                  href="mailto:example@example.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  example@example.com
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone
                  className="text-blue-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300"
                  size={18}
                />
                <a
                  href="tel:+919876543210"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  +91 9876543210
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin
                  className="text-blue-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300"
                  size={18}
                />
                <span className="text-gray-600">Your factory address here</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left hover:text-gray-800 transition-colors duration-300">
              © 2025 GADIN UPVC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 text-sm hover:scale-105 transform"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 text-sm hover:scale-105 transform"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
