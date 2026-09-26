"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Award, Users, TrendingUp } from "lucide-react";

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
            duration: 0.8,
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (imagesRef.current) {
        const imgs = imagesRef.current.querySelectorAll("img");
        gsap.fromTo(
          imgs,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: imagesRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-blue-600 uppercase tracking-wider text-sm font-medium">
            About GADIN UPVC
          </span>
          <h2 className="mt-4 text-gray-900 text-4xl md:text-5xl font-bold">
            Crafting Quality Since Inception
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            GADIN UPVC is a premier manufacturer of high-quality uPVC, CPVC, and RPVC
            pipes and fittings. We produce durable, corrosion-resistant, and reliable
            piping solutions for residential, commercial, and industrial
            applications. Our uPVC pipes are 100% lead-free, ensuring safe drinking water
            supply and full compliance with modern health standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 max-w-6xl mx-auto about-grid">
          <div ref={imagesRef} className="grid grid-cols-2 gap-4 about-images">
            <div className="space-y-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1715783058283-2e31a1cb7684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NjUyNzMwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Manufacturing Facility"
                className="w-full h-64 object-cover rounded-lg responsive-image"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1581094482523-8555833e6aba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjB3b3JraW5nfGVufDF8fHx8MTc2NTIyODkwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Engineering Team"
                className="w-full h-48 object-cover rounded-lg responsive-image"
              />
            </div>
            <div className="space-y-4 pt-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1700727448575-6f1680cd7d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29udHJvbCUyMHRlc3Rpbmd8ZW58MXx8fHwxNzY1MTc0NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Quality Control"
                className="w-full h-48 object-cover rounded-lg responsive-image"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1667604579449-14298726118b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjUyMTgxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Construction Applications"
                className="w-full h-64 object-cover rounded-lg responsive-image"
              />
            </div>
          </div>

          <div ref={contentRef} className="space-y-8">
            <div className="bg-blue-50 border border-blue-100 p-8 rounded-xl card-mobile">
              <div className="flex items-start gap-4 about-feature">
                <ShieldCheck className="text-blue-600 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-gray-900 text-xl font-bold mb-3">
                    100% Lead-Free Guarantee
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our UPVC pipes are completely lead-free, ensuring safe water supply
                    and full compliance with modern health and safety standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors about-feature">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <ShieldCheck className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1">Quality Assurance</h4>
                  <p className="text-gray-600">Rigorous testing at every production stage</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors about-feature">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Award className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1">Industry Excellence</h4>
                  <p className="text-gray-600">Commitment to manufacturing standards</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors about-feature">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Users className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1">Customer Focused</h4>
                  <p className="text-gray-600">Dedicated to meeting diverse client needs</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors about-feature">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <TrendingUp className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1">Continuous Innovation</h4>
                  <p className="text-gray-600">Modern manufacturing techniques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
