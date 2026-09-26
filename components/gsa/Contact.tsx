"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-blue-600 uppercase tracking-wider text-sm font-medium">
            Contact Us
          </span>
          <h2 className="mt-4 text-gray-900 text-4xl md:text-5xl font-bold">
            Get in Touch
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Have questions about our products or services? Our team is here to assist
            you with your UPVC pipe requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:scale-105 transform duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:example@example.com"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    example@example.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:scale-105 transform duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">Phone</h3>
                  <a
                    href="tel:+919876543210"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    +91 9876543210
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:scale-105 transform duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">Address</h3>
                  <p className="text-gray-600">Your factory address here</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 text-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={24} />
                <h3 className="text-white font-semibold text-lg">Working Hours</h3>
              </div>
              <div className="space-y-2 text-blue-50 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-8">
                <h3 className="text-gray-900 text-2xl font-bold mb-2">
                  Send Us a Message
                </h3>
                <p className="text-gray-600">
                  Fill out the form and we will get back to you as soon as possible.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2 hover:scale-105 transform duration-300 cursor-pointer font-medium"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
