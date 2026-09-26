"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Factory, CheckCircle, Wrench, Truck, Headphones } from "lucide-react";

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (mainCardRef.current) {
        gsap.fromTo(
          mainCardRef.current,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mainCardRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        const img = mainCardRef.current.querySelector(".main-image");
        const cnt = mainCardRef.current.querySelector(".main-content");

        if (img) {
          gsap.fromTo(
            img,
            { x: -50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: mainCardRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        if (cnt) {
          gsap.fromTo(
            cnt,
            { x: 50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              delay: 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: mainCardRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      }

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".service-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (sectionRef.current) {
        const floatingIcons = sectionRef.current.querySelectorAll(".floating-icon");
        floatingIcons.forEach((icon) => {
          gsap.to(icon, {
            y: -10,
            duration: 2,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 bg-gradient-to-br from-gray-50 to-slate-50"
    >
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-blue-600 uppercase tracking-wider text-sm font-medium">
            Our Services
          </span>
          <h2 className="mt-4 text-gray-900 text-4xl md:text-5xl font-bold">
            Comprehensive UPVC Solutions
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            From manufacturing to delivery, we provide end-to-end services to meet all
            your UPVC pipe requirements with excellence.
          </p>
        </div>

        <div
          ref={mainCardRef}
          className="mb-16 bg-white rounded-2xl overflow-hidden shadow-lg max-w-6xl mx-auto hover:shadow-xl transition-shadow duration-300"
        >
          <div className="grid lg:grid-cols-2">
            <div className="main-image h-64 lg:h-auto min-h-[280px] lg:min-h-[420px] relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=650&h=650&q=80"
                alt="Modern Factory Manufacturing Equipment"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />
            </div>
            <div className="main-content p-10 lg:p-12 flex flex-col justify-center">
              <div className="floating-icon inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-xl mb-6">
                <Factory className="text-blue-600" size={32} />
              </div>
              <h3 className="text-gray-900 text-3xl mb-4 font-bold">
                100% Lead-Free Manufacturing
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our state-of-the-art manufacturing facility produces premium UPVC pipes
                using advanced technology and stringent quality control processes. Every
                pipe is tested to ensure it meets international standards.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Advanced extrusion technology</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Strict quality testing protocols</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">100% lead-free materials guarantee</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">ISO certified manufacturing process</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="service-card bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-2 transform">
            <div className="floating-icon bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Wrench className="text-blue-600" size={28} />
            </div>
            <h3 className="text-gray-900 text-xl mb-3 font-semibold">Custom Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              Tailored pipe specifications and fittings designed to meet your specific
              project requirements and industry standards.
            </p>
          </div>

          <div className="service-card bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-2 transform">
            <div className="floating-icon bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Truck className="text-blue-600" size={28} />
            </div>
            <h3 className="text-gray-900 text-xl mb-3 font-semibold">
              Reliable Distribution
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Efficient logistics and timely delivery ensuring your projects stay on
              schedule with our distribution network.
            </p>
          </div>

          <div className="service-card bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-2 transform">
            <div className="floating-icon bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Headphones className="text-blue-600" size={28} />
            </div>
            <h3 className="text-gray-900 text-xl mb-3 font-semibold">Technical Support</h3>
            <p className="text-gray-600 leading-relaxed">
              Expert guidance and consultation for product selection, installation, and
              maintenance to ensure optimal performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
