"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ShieldCheck, ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
      }
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 1, delay: 0.3, ease: "power2.out" }
        );
        gsap.to(imageRef.current, {
          y: -15,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative pt-16 lg:pt-20 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto hero-grid">
          <div
            ref={contentRef}
            className="space-y-6 lg:space-y-8 hero-content order-2 lg:order-1 flex flex-col justify-center"
          >
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
                <ShieldCheck className="text-blue-600" size={18} />
                <span className="text-blue-900 text-sm font-medium">
                  100% Lead-Free Manufacturing
                </span>
              </div>
              <div>
                <p className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2">
                  Your quintessential source of uPVC
                </p>
                <h1 className="text-gray-900 text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold">
                  Premium UPVC Pipes
                </h1>
              </div>
              <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-lg">
                Manufactured with precision and backed by world-class raw material partners,
                our uPVC & CPVC pipes deliver unmatched strength for residential, agricultural, and industrial infrastructure.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2 lg:pt-4 hero-buttons">
              <button
                onClick={() => scrollTo("contact")}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollTo("products")}
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all cursor-pointer"
              >
                View Products
              </button>
            </div>
          </div>

          <div className="relative hero-image order-1 lg:order-2 flex items-center justify-center">
            <div
              ref={imageRef}
              className="relative rounded-2xl overflow-hidden max-w-md mx-auto flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/hero-pipes.png"
                alt="GADIN UPVC Pipes"
                className="w-full max-w-[440px] h-auto object-contain bg-white mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
