/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { ComponentProps } from "@/types/config";

const Header: React.FC<ComponentProps> = ({ config }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="text-white px-4 py-3 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href=""
            className="hover:opacity-80 transition-opacity duration-200"
          >
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover"
            />
          </a>
        </div>

        {/* Center Navigation and Right side container */}
        <div className="flex items-center justify-end flex-1 ml-8">
          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <a
              href="#about"
              className="text-white hover:text-amber-300 transition-colors duration-200 text-2xl xl:text-4xl"
            >
              About
            </a>
            <div className="w-0.5 h-8 xl:h-15 bg-white"></div>
            <a
              href="#evolution"
              className="text-white hover:text-amber-300 transition-colors duration-200 text-2xl xl:text-4xl"
            >
              Evolution
            </a>
            <div className="w-0.5 h-8 xl:h-15 bg-white"></div>
            <a
              href="#tokenomics"
              className="text-white hover:text-amber-300 transition-colors duration-200 text-2xl xl:text-4xl"
            >
              Tokenomics
            </a>
          </nav>

          {/* Right side - Buy Button */}
          <div className="hidden sm:flex items-center space-x-2 lg:space-x-4 ml-2 lg:ml-6">
            {/* Buy Now Button */}
            <a
              href={config?.pump_fun_url}
              target="_bank"
              className="bg-transparent border-2 border-white text-white px-2 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 font-bold hover:bg-white hover:text-black transition-all duration-200 uppercase tracking-wide text-sm sm:text-lg lg:text-2xl xl:text-4xl"
            >
              BUY $VEGETA🔥
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={(): void => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-amber-300 p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-sm border-t border-white/20">
          <nav className="flex flex-col items-center space-y-4 px-4 py-6">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-amber-300 transition-colors duration-200 text-2xl text-center"
            >
              About
            </a>
            <a
              href="#evolution"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-amber-300 transition-colors duration-200 text-2xl text-center"
            >
              Evolution
            </a>
            <a
              href="#tokenomics"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-amber-300 transition-colors duration-200 text-2xl text-center"
            >
              Tokenomics
            </a>
            <div className="pt-4">
              <a
                href={config?.pump_fun_url || "#"}
                target="_bank"
                className="w-full bg-transparent border-2 border-white text-white px-4 py-3 font-bold hover:bg-white hover:text-black transition-all duration-200 uppercase tracking-wide text-lg"
              >
                BUY $VEGETA🔥
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
