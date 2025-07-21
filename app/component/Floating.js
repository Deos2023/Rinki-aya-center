"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaPhone, FaWhatsapp, FaArrowUp, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";

// Floating Buttons
export function FloatingButtons() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918777563481"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Call Button */}
      <a
        href="tel:8777563481"
        className="bg-teal-700 text-white p-4 rounded-full shadow-lg hover:bg-teal-800 transition-colors"
        aria-label="Call us"
      >
        <FaPhone className="text-2xl" />
      </a>

      {/* Email Button */}
      <a
        href="mailto:pradippahar2017@gmail.com"
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Send us an email"
      >
        <FaEnvelope className="text-2xl" />
      </a>

      {/* Scroll to top button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="bg-white text-teal-700 p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors border border-teal-200"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-2xl" />
        </button>
      )}
    </div>
  );
}

// Footer Section
export function FooterWithMap() {
  return (
    <footer className="bg-teal-900 text-white relative">
      <svg
        className="absolute top-0 left-0 w-full rotate-180"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z"
        />
      </svg>

     
    </footer>
  );
}