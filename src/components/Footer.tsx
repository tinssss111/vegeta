/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { ComponentProps } from "@/types/config";

export const Footer: React.FC<ComponentProps> = ({ config, isLoading }) => {
  return (
    <footer className="bg-[#FF3131] w-full py-8 lg:py-12 px-4 lg:px-6 xl:px-12 overflow-x-hidden relative">
      <style jsx>{`
        /* Footer flying line animation */
        .footer-line {
          position: absolute;
          right: 0;
          bottom: 60px;
          z-index: 10;
          display: block;
          width: 100vw;
          height: clamp(19.2px, 7.129px + 1.271vw, 30px);
          transform: translateX(100%);
          transform-origin: right center;
        }

        @media not screen and (min-width: 769px) {
          .footer-line {
            width: 100vw;
            height: min(46px, 5.4117647059vw);
            bottom: 40px;
          }
        }

        .footer-line[data-animation="true"] {
          animation: footer-flying-line 4.56s linear 0.3s infinite forwards;
        }

        @keyframes footer-flying-line {
          0% {
            transform: translateX(100%);
          }
          30% {
            transform: translateX(-5%);
          }
          60%,
          to {
            transform: translateX(-100%);
          }
        }

        @media not screen and (min-width: 769px) {
          .footer-line[data-animation="true"] {
            width: 150vw;
            animation: footer-flying-line 3.6s linear infinite forwards;
          }
        }

        @media only screen and (min-width: 1400px) {
          .footer-line[data-animation="true"] {
            animation-duration: 5.472s;
          }
        }
        @media only screen and (min-width: 1600px) {
          .footer-line[data-animation="true"] {
            animation-duration: 5.928s;
          }
        }
        @media only screen and (min-width: 1800px) {
          .footer-line[data-animation="true"] {
            animation-duration: 6.384s;
          }
        }
        @media only screen and (min-width: 2000px) {
          .footer-line[data-animation="true"] {
            animation-duration: 7.296s;
          }
        }

        .footer-line:before {
          position: absolute;
          top: 50%;
          right: 0;
          width: 100%;
          height: clamp(2.4px, 0.891px + 0.159vw, 3.75px);
          content: "";
          background: #fbbf24;
          background-repeat: no-repeat;
          background-position: 0 0;
          background-size: 100% 100%;
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0,
            transparent 1%,
            #000 0,
            #000 80%,
            rgba(0, 0, 0, 0.5) 90%,
            transparent
          );
          mask-image: linear-gradient(
            90deg,
            transparent 0,
            transparent 1%,
            #000 0,
            #000 80%,
            rgba(0, 0, 0, 0.5) 90%,
            transparent
          );
          transform: translateY(-50%);
          z-index: 0;
          pointer-events: none;
        }

        @media not screen and (min-width: 769px) {
          .footer-line:before {
            height: min(7px, 0.8235294118vw);
            -webkit-mask-image: linear-gradient(
              90deg,
              transparent 0,
              transparent 1%,
              #000 0,
              transparent
            );
            mask-image: linear-gradient(
              90deg,
              transparent 0,
              transparent 1%,
              #000 0,
              transparent
            );
          }
        }

        .footer-line:after {
          position: absolute;
          top: 0;
          left: 0;
          width: clamp(35.2px, 11.539px + 2.491vw, 56.3701067616px);
          height: 100%;
          content: "";
          background: url(/images/icon_cloud.png) no-repeat 50% / contain;
          z-index: 1;
          pointer-events: none;
        }

        @media not screen and (min-width: 769px) {
          .footer-line:after {
            width: min(88px, 10.3529411765vw);
          }
        }

        @media not screen and (min-width: 769px) {
          .footer-line-icon-right {
            width: min(88px, 10.3529411765vw);
          }
        }

        /* Fix responsive text sizes */
        .footer-nav-text {
          font-size: clamp(1.5rem, 4vw, 3rem);
        }

        @media (min-width: 1024px) {
          .footer-nav-text {
            font-size: clamp(2rem, 3vw, 4rem);
          }
        }

        @media (min-width: 1280px) {
          .footer-nav-text {
            font-size: clamp(2.5rem, 4vw, 5rem);
          }
        }
      `}</style>

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column - Navigation Links */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
            <a
              href="#about"
              className="flex items-center justify-center lg:justify-start space-x-3 transition-opacity duration-200 group"
            >
              <img
                src="/images/ngoc.png"
                alt=""
                className="w-8 h-8 lg:w-12 lg:h-12 flex-shrink-0"
              />
              <h3 className="text-amber-300 footer-nav-text font-bold group-hover:scale-105 transition-transform duration-200 hover:text-white">
                About
              </h3>
            </a>

            <a
              href="#evolution"
              className="flex items-center justify-center lg:justify-start space-x-3 hover:text-white transition-opacity duration-200 group"
            >
              <img
                src="/images/ngoc.png"
                alt=""
                className="w-8 h-8 lg:w-12 lg:h-12 flex-shrink-0"
              />
              <h3 className="text-amber-300 footer-nav-text font-bold group-hover:scale-105 transition-transform duration-200 hover:text-white">
                Evolution
              </h3>
            </a>
          </div>

          {/* Center Column - Tokenomics and Buy Now */}
          <div className="lg:col-span-4 space-y-8 text-center">
            <a
              href="#tokenomics"
              className="flex items-center justify-center space-x-3 hover:text-white transition-opacity duration-200 group"
            >
              <img
                src="/images/ngoc.png"
                alt=""
                className="w-8 h-8 lg:w-12 lg:h-12 flex-shrink-0"
              />
              <h3 className="text-amber-300 footer-nav-text font-bold group-hover:scale-105 transition-transform duration-200 hover:text-white">
                Tokenomics
              </h3>
            </a>

            <div className="space-y-6">
              <a
                href={config?.pump_fun_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-110 group"
              >
                <img
                  src="/images/ngoc.png"
                  alt=""
                  className="w-8 h-8 lg:w-12 lg:h-12 flex-shrink-0"
                />
                <h3 className="text-white footer-nav-text font-bold group-hover:text-amber-300 transition-colors duration-200">
                  {isLoading ? "Loading..." : "Buynow"}
                </h3>
                <img
                  src="/images/ngoc.png"
                  alt=""
                  className="w-8 h-8 lg:w-12 lg:h-12 flex-shrink-0"
                />
              </a>

              {/* Social Buttons */}
              <div className="flex justify-center items-center space-x-4 flex-wrap gap-y-3">
                <a
                  href={config?.x_link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-black transition-all duration-300 text-white font-bold py-8 px-10 text-xl lg:text-2xl inline-flex items-center justify-center min-w-[60px] h-[50px]"
                >
                  <FaXTwitter />
                </a>
                <a
                  href={config?.tiktok_link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white hover:bg-white hover:text-black transition-all duration-300 text-white font-bold py-8 px-10 text-xl lg:text-2xl inline-flex items-center justify-center min-w-[60px] h-[50px]"
                >
                  <img
                    src="/images/pump.png"
                    alt="pump"
                    className="h-6 w-6 lg:h-8 lg:w-8 object-contain"
                  />
                </a>
                <a
                  href={config?.instagram_link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-black transition-all duration-300 text-white font-bold py-8 px-10 text-xl lg:text-2xl inline-flex items-center justify-center min-w-[60px] h-[50px]"
                >
                  Swap
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Logo */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative">
              <a href="#" className="block">
                <div className="text-center">
                  <img
                    src="/images/logo.png"
                    alt="Vegeta Logo"
                    className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 transition-all duration-300 hover:scale-105 mx-auto"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 text-center relative">
          {/* Flying line animation */}
          <div className="footer-line" data-animation={true}>
            <span className="footer-line-icon-right" aria-hidden="true"></span>
          </div>

          <p className="text-white text-base lg:text-lg font-bold relative z-20 bangers-regular">
            © 2025 $VEGETA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
