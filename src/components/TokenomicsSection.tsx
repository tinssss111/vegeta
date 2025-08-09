/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ComponentProps } from "@/types/config";

export const TokenomicsSection: React.FC<ComponentProps> = ({}) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "-50px",
  });

  return (
    <div
      ref={elementRef}
      className="bg-[url('/bg/bg.jpg')] bg-cover bg-center w-full min-h-screen py-10 lg:py-20 mt-[-1px]"
    >
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromRight {
          0% {
            transform: translateX(100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes powerGlow {
          0%,
          100% {
            filter: drop-shadow(0 0 15px rgba(24, 225, 255, 0.9))
              drop-shadow(0 0 30px rgba(24, 225, 255, 0.7))
              drop-shadow(0 0 45px rgba(24, 225, 255, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 25px rgba(24, 225, 255, 1))
              drop-shadow(0 0 50px rgba(24, 225, 255, 0.9))
              drop-shadow(0 0 75px rgba(24, 225, 255, 0.7));
          }
        }

        @keyframes numberCounter {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .tokenomics-title {
          opacity: 0;
          transform: translateY(50px);
        }

        .tokenomics-title.loaded {
          animation: fadeInUp 1s ease-out forwards;
        }

        .tokenomics-data {
          opacity: 0;
          transform: translateX(-100px);
        }

        .tokenomics-data.loaded {
          animation: slideInFromLeft 1.2s ease-out 0.3s forwards;
        }

        .tokenomics-image {
          opacity: 0;
          transform: translateX(100px);
        }

        .tokenomics-image.loaded {
          animation: slideInFromRight 1.2s ease-out 0.5s forwards;
        }

        @media (max-width: 1024px) {
          .tokenomics-data {
            transform: translateY(-30px);
          }

          .tokenomics-data.loaded {
            animation: fadeInUp 1s ease-out 0.3s forwards;
          }

          .tokenomics-image {
            transform: translateY(30px);
          }

          .tokenomics-image.loaded {
            animation: fadeInUp 1s ease-out 0.5s forwards;
          }
        }

        .vegeta-img {
          animation: powerGlow 3s ease-in-out infinite;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .vegeta-img:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 40px rgba(24, 225, 255, 1))
            drop-shadow(0 0 80px rgba(24, 225, 255, 0.9))
            drop-shadow(0 0 120px rgba(24, 225, 255, 0.7));
        }

        .token-stat {
          animation: numberCounter 0.8s ease-out forwards;
        }

        .token-stat:nth-child(1) {
          animation-delay: 0.6s;
        }
        .token-stat:nth-child(2) {
          animation-delay: 0.8s;
        }
        .token-stat:nth-child(3) {
          animation-delay: 1s;
        }
        .token-stat:nth-child(4) {
          animation-delay: 1.2s;
        }
      `}</style>

      <div className="container mx-auto px-4 lg:px-6 xl:px-12">
        {/* Title */}
        <div
          className={`text-center mb-8 lg:mb-16 tokenomics-title ${
            isIntersecting ? "loaded" : ""
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-amber-300 mb-4">
            Tokenomics
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16">
          {/* Tokenomics Data on the left */}
          <div
            className={`w-full lg:w-1/3 tokenomics-data order-2 lg:order-1 ${
              isIntersecting ? "loaded" : ""
            }`}
          >
            <div className="space-y-6 lg:space-y-8">
              {/* Ticker */}
              <div className="text-center mb-8 lg:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  $VEGETA
                </h2>
              </div>

              {/* Token Stats - Vertical Layout */}
              <div className="space-y-4 lg:space-y-6">
                <div className="token-stat bg-white/30 backdrop-blur-sm rounded-xl p-4 lg:p-6 transition-all duration-300 hover:scale-110">
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-amber-300 text-lg sm:text-xl lg:text-2xl font-semibold">
                      Total Supply
                    </span>
                    <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-mono">
                      968,686,868.8866
                    </span>
                    <span className="text-amber-300 text-lg sm:text-xl lg:text-2xl">
                      tokens
                    </span>
                  </div>
                </div>

                <div className="token-stat bg-white/30 backdrop-blur-sm rounded-xl p-4 lg:p-6transition-all duration-300 hover:scale-110">
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-amber-300 text-lg sm:text-xl lg:text-2xl font-semibold">
                      Max Supply
                    </span>
                    <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono">
                      1,000,000,000
                    </span>
                    <span className="text-amber-300 text-lg sm:text-xl lg:text-2xl">
                      tokens
                    </span>
                  </div>
                </div>

                <div className="token-stat bg-white/30 backdrop-blur-sm rounded-xl p-4 lg:p-6 transition-all duration-300 hover:scale-110">
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-amber-300 text-lg sm:text-xl lg:text-2xl font-semibold">
                      Liquidity
                    </span>
                    <span className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">
                      🔥
                    </span>
                    <span className="text-red-400 text-lg sm:text-xl lg:text-2xl font-semibold">
                      Burned Forever
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vegeta Image on the right */}
          <div
            className={`w-full lg:w-2/3 flex justify-center tokenomics-image relative order-1 lg:order-2 ${
              isIntersecting ? "loaded" : ""
            }`}
          >
            <img
              src="/images/Layout4.png"
              alt="Vegeta Ultra Ego"
              className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-lg xl:max-w-xl h-auto vegeta-img"
            />
            <img
              src="/images/main.svg"
              alt="overlay"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="hidden lg:block absolute bottom-0 right-[-200px] -z-1">
              <img src="/bgobject/section3.png" alt="" className="w-500 auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
