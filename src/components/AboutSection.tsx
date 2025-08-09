/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ComponentProps } from "@/types/config";

export const AboutSection: React.FC<ComponentProps> = ({ config }) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "-50px",
  });

  return (
    <div
      ref={elementRef}
      className="bg-[url('/bg/bg_about.png')] bg-cover bg-center w-full min-h-screen py-10 lg:py-20 relative"
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

        @keyframes pulseGlow {
          0%,
          100% {
            filter: drop-shadow(0 0 15px rgba(253, 65, 126, 0.9))
              drop-shadow(0 0 30px rgba(253, 65, 126, 0.7))
              drop-shadow(0 0 45px rgba(253, 65, 126, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 25px rgba(253, 65, 126, 1))
              drop-shadow(0 0 50px rgba(253, 65, 126, 0.9))
              drop-shadow(0 0 75px rgba(253, 65, 126, 0.7));
          }
        }

        .about-content {
          opacity: 0;
          transform: translateY(50px);
        }

        .about-content.loaded {
          animation: fadeInUp 1s ease-out forwards;
        }

        .about-image {
          opacity: 0;
          transform: translateX(-100px);
        }

        .about-image.loaded {
          animation: slideInFromLeft 1.2s ease-out forwards;
        }

        .about-text {
          opacity: 0;
          transform: translateX(100px);
        }

        .about-text.loaded {
          animation: slideInFromRight 1.2s ease-out 0.3s forwards;
        }

        @media (max-width: 1024px) {
          .about-image {
            transform: translateY(-50px);
          }

          .about-image.loaded {
            animation: fadeInUp 1s ease-out forwards;
          }

          .about-text {
            transform: translateY(50px);
          }

          .about-text.loaded {
            animation: fadeInUp 1s ease-out 0.3s forwards;
          }
        }

        .about-buttons {
          opacity: 0;
          transform: translateY(50px);
        }

        .about-buttons.loaded {
          animation: fadeInUp 1s ease-out 0.6s forwards;
        }

        .vegeta-image {
          animation: pulseGlow 3s ease-in-out infinite;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .vegeta-image:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 40px rgba(253, 65, 126, 1))
            drop-shadow(0 0 80px rgba(253, 65, 126, 0.9))
            drop-shadow(0 0 120px rgba(253, 65, 126, 0.7));
        }
      `}</style>

      {/* Background Effects - Positioned behind content */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
        <img src="/images/effects_blue2.svg" alt="" className="" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
        <img src="/images/effects_pink.svg" alt="" className="" />
      </div>

      <div className="container mx-auto relative z-10 px-4 lg:px-8">
        {/* Title */}
        <div
          className={`text-center about-content mb-8 lg:mb-16 ${
            isIntersecting ? "loaded" : ""
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-amber-300">
            About $VEGETA
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-8 lg:mb-16">
          {/* Image on the left */}
          <div
            className={`w-full lg:w-1/2 flex justify-center about-image order-1 lg:order-1 ${
              isIntersecting ? "loaded" : ""
            }`}
          >
            <img
              src="/images/layout2.png"
              alt="Vegeta Ultra Ego"
              className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] h-auto vegeta-image"
            />
          </div>

          {/* Text content on the right */}
          <div
            className={`w-full lg:w-1/2 about-text order-2 lg:order-2 ${
              isIntersecting ? "loaded" : ""
            }`}
          >
            <div className="py-4 lg:py-8 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 text-[#0E20B2] font-bold">
                Vegeta Ultra Ego
              </h2>
              <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-mono mb-4">
                A new power state of Vegeta in Dragon Ball Super, developed
                after training with Beerus, the God of Destruction. This state
                allows Vegeta to harness the power of the God of Destruction and
                become stronger in battle, especially when taking damage.
              </p>
              <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-mono">
                And may soon be on par with Beerus in Dragon Ball Super 2025…
              </p>
            </div>
            {/* Buttons */}
            <div
              className={`flex flex-col text-center sm:flex-row justify-center lg:justify-start items-center gap-4 lg:gap-6 about-buttons ${
                isIntersecting ? "loaded" : ""
              }`}
            >
              <a
                href={config?.pump_fun_url}
                target="_bank"
                className="w-full sm:w-auto bg-white border-2 border-white text-amber-400 font-bold py-3 px-6 lg:py-4 lg:px-8 text-lg lg:text-xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 shadow-lg hover:shadow-purple-500/50 relative z-20"
              >
                Buy $VEGETA🔥
              </a>

              <a
                href="#footer"
                className="w-full sm:w-auto bg-transparent text-white border-2 border-white font-bold py-3 px-6 lg:py-4 lg:px-8 text-lg lg:text-xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/50 relative z-20"
              >
                Community
              </a>

              <a
                href={config?.pump_fun_url}
                target="_bank"
                className="w-full sm:w-auto bg-transparent text-white border-2 border-white font-bold py-3 px-6 lg:py-4 lg:px-8 text-lg lg:text-xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 shadow-lg hover:shadow-orange-500/50 relative z-20"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
