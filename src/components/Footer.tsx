/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ComponentProps } from "@/types/config";

export const Footer: React.FC<ComponentProps> = ({ config, isLoading }) => {
  return (
    <footer className="bg-[#FF3131] w-full py-8 lg:py-12 px-4 lg:px-6 xl:px-12 overflow-x-hidden">
      <style jsx>{`
        /* Footer flying line animation */
        .footer-line {
          position: absolute;
          right: 0;
          top: 0;
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
      `}</style>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 items-start">
          {/* Left Column - Navigation Links */}
          <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
            <a
              href="#about"
              className="flex items-center justify-center lg:justify-start space-x-2 lg:space-x-3 hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/images/ngoc.png"
                alt=""
                className="w-8 h-8 lg:w-10 lg:h-10"
              />
              <h3 className="text-amber-300 text-2xl sm:text-3xl lg:text-4xl xl:text-6xl">
                About
              </h3>
            </a>

            <a
              href="#evolution"
              className="flex items-center justify-center lg:justify-start space-x-2 lg:space-x-3 hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/images/ngoc.png"
                alt=""
                className="w-8 h-8 lg:w-10 lg:h-10"
              />
              <h3 className="text-amber-300 text-2xl sm:text-3xl lg:text-4xl xl:text-6xl">
                Evolution
              </h3>
            </a>
          </div>

          {/* Center Column - Tokenomics and Social Buttons */}
          <div className="space-y-6 lg:space-y-8 text-center">
            <a
              href="#tokenomics"
              className="flex items-center justify-center space-x-2 lg:space-x-3 hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/images/ngoc.png"
                alt=""
                className="w-8 h-8 lg:w-10 lg:h-10"
              />
              <h3 className="text-amber-300 text-2xl sm:text-3xl lg:text-4xl xl:text-6xl">
                Tokenomics
              </h3>
            </a>

            <div className="space-y-4 lg:space-y-6">
              <a
                href={config?.pump_fun_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 lg:space-x-3 transition-all duration-300 hover:scale-110"
              >
                <img
                  src="/images/ngoc.png"
                  alt=""
                  className="w-8 h-8 lg:w-10 lg:h-10"
                />
                <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-6xl hover:text-amber-300">
                  {isLoading ? "Loading..." : "Buynow"}
                </h3>
                <img
                  src="/images/ngoc.png"
                  alt=""
                  className="w-8 h-8 lg:w-10 lg:h-10"
                />
              </a>

              {/* Social Buttons */}
              <div className="flex justify-center space-x-3 lg:space-x-4">
                <a
                  href={config?.x_link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 lg:border-3 border-white hover:bg-white hover:text-black transition-all duration-300 text-white font-bold py-2 px-6 lg:py-3 lg:px-10 text-xl lg:text-3xl inline-block"
                >
                  <FaXTwitter />
                </a>
                <a
                  href={config?.tiktok_link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 lg:border-3 border-white hover:bg-white hover:text-black transition-all duration-300 text-white font-bold py-2 px-6 lg:py-3 lg:px-10 text-xl lg:text-3xl inline-block"
                >
                  <FaTiktok />
                </a>
                <a
                  href={config?.instagram_link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 lg:border-3 border-white hover:bg-white hover:text-black transition-all duration-300 text-white font-bold py-2 px-6 lg:py-3 lg:px-10 text-xl lg:text-3xl inline-block"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Branding */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Circular Background */}
              <a href="" className="">
                {/* Logo */}
                <div className="text-center">
                  <img
                    src="/images/logo.png"
                    alt=""
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-60 xl:h-60 rounded-full object-cover"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 relative text-center overflow-hidden">
          {/* Flying line animation */}
          <div className="footer-line" data-animation={true}>
            <span className="footer-line-icon-right" aria-hidden="true"></span>
          </div>
          <p className="text-white text-sm sm:text-base lg:text-lg flex items-center bangers-regular justify-center mt-6 lg:mt-8">
            © 2024 $VEGETA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
