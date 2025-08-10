"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ComponentProps } from "@/types/config";

export const MainSection: React.FC<ComponentProps> = ({
  config,
  isLoading,
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "-50px",
  });

  const copyToClipboard = async (): Promise<void> => {
    try {
      const textToCopy: string =
        config?.contract_address ||
        "Ho9oeNUR9QBkmSmXbgsgLGPGkW9CjFSkCNKGMFXJpump";
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error: unknown) {
      console.error("Failed to copy: ", error);
    }
  };

  return (
    <div
      ref={elementRef}
      className="bg-[url('/bg/bg.jpg')] bg-cover bg-center w-full min-h-screen -z-10 pt-20 lg:pt-0"
    >
      <style jsx>{`
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
            z-index: 100;
          }
        }

        @keyframes slideUpFromBottom {
          0% {
            transform: translateY(150%);
            opacity: 0;
          }
          70% {
            transform: translateY(-8%);
            opacity: 0.95;
          }
          100% {
            transform: translateY(0%);
            opacity: 1;
          }
        }

        @keyframes gentleFloat {
          0%,
          100% {
            filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.4))
              drop-shadow(0 0 15px rgba(255, 215, 0, 0.2));
            transform: translateY(0px);
          }
          50% {
            filter: drop-shadow(0 0 12px rgba(255, 215, 0, 0.6))
              drop-shadow(0 0 25px rgba(255, 215, 0, 0.3));
            transform: translateY(-10px);
          }
        }

        @keyframes glow {
          0%,
          100% {
            filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.8))
              drop-shadow(0 0 20px rgba(255, 215, 0, 0.6))
              drop-shadow(0 0 30px rgba(255, 215, 0, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(255, 215, 0, 1))
              drop-shadow(0 0 40px rgba(255, 215, 0, 0.8))
              drop-shadow(0 0 60px rgba(255, 215, 0, 0.6));
          }
        }

        @keyframes textGlow {
          0%,
          100% {
            filter: drop-shadow(0 15px 25px rgba(24, 240, 255, 0.8))
              drop-shadow(0 25px 40px rgba(24, 240, 255, 0.6))
              drop-shadow(0 35px 60px rgba(24, 240, 255, 0.4))
              drop-shadow(0 -15px 25px rgba(253, 65, 126, 0.8));
          }
          50% {
            filter: drop-shadow(0 25px 35px rgba(24, 240, 255, 1))
              drop-shadow(0 35px 60px rgba(24, 240, 255, 0.9))
              drop-shadow(0 50px 80px rgba(24, 240, 255, 0.7))
              drop-shadow(0 -25px 35px rgba(253, 65, 126, 1));
          }
        }

        .left-content {
          transform: translateY(150%);
          opacity: 0;
        }

        .left-content.loaded {
          animation: slideUpFromBottom 2.5s
            cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        @media (max-width: 1024px) {
          .left-content {
            transform: translateY(50px);
          }

          .left-content.loaded {
            animation: slideUpFromBottom 1.5s ease-out forwards;
          }
        }

        .character-container {
          transform: translateX(-100%);
          opacity: 0;
        }

        .character-container.loaded {
          animation: slideInFromLeft 1.2s ease-out forwards;
        }

        @media (max-width: 1024px) {
          .character-container {
            transform: translateY(-50px);
          }

          .character-container.loaded {
            animation: slideUpFromBottom 1.2s ease-out forwards;
          }
        }

        .character-image {
          animation: gentleFloat 3s ease-in-out infinite;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform, filter;
        }

        .character-image:hover {
          animation: glow 1.5s ease-in-out infinite;
          transform: scale(1.05);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .text-main-image {
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
          will-change: transform, filter;
        }

        .text-main-image:hover {
          animation: textGlow 1.5s ease-in-out infinite;
          transform: scale(1.03);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center min-h-screen relative z-10 px-4 lg:px-8">
        <div
          className={`w-full lg:w-2/3 flex flex-col items-center justify-center left-content order-2 lg:order-1 ${
            isIntersecting ? "loaded" : ""
          }`}
        >
          <img
            src="/images/text.png"
            alt=""
            className="w-full my-20 max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto text-main-image"
          />
          <div className="flex flex-col sm:flex-row justify-center w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[540px] xl:max-w-[650px] items-center bg-white p-3 sm:p-4 border-[2px] border-b-[4px] border-[var(--black)] rounded-[8px] text-[16px] sm:text-[18px] xl:text-[20px] transition-all duration-300 ease-in-out hover:border-t-[4px] hover:border-b-[2px] hover:shadow-lg mt-[-30px] sm:mt-[-40px] lg:mt-[-50px] sm:mb-20">
            <span className="text-[14px] sm:text-[15px] bangers-regular transform scale-y-150 md:text-[14px] lg:text-[14px] xl:text-[16px] font-bold hover:text-orange-500 transition-colors duration-300 break-all text-center sm:text-left mb-2 sm:mb-0">
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin mr-2 scale-y-1"></div>
                  Loading...
                </div>
              ) : (
                config?.contract_address ||
                "Ho9oeNUR9QBkmSmXbgsgLGPGkW9CjFSkCNKGMFXJpump"
              )}
            </span>

            <button
              onClick={copyToClipboard}
              disabled={isLoading}
              className={`rounded-md py-2 px-3 sm:px-4 text-lg sm:text-xl lg:text-2xl xl:text-4xl ml-0 sm:ml-3 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : copied
                  ? "bg-amber-300 hover:bg-amber-500 text-white"
                  : "bg-amber-300 hover:bg-amber-500"
              }`}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

        <div
          className={`w-full lg:w-1/3 character-container relative order-1 lg:order-2 mb-8 lg:mb-0 ${
            isIntersecting ? "loaded" : ""
          }`}
        >
          <img
            src="/images/chamain.png"
            alt="saiyan"
            className="w-full max-w-[250px] sm:max-w-[300px] lg:max-w-full h-auto character-image mx-auto"
          />
          {/* Ảnh đè lên vừa khít */}
          <img
            src="/images/main.svg"
            alt="overlay"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </div>
        {/* <div className="absolute bottom-0 right-[-200px] -z-1">
          <img src="/images/bg_left.png" alt="" className="w-200 auto" />
        </div> */}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-0">
        <img src="/images/effects_blue2.svg" alt="" className="" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <img src="/images/effects_pink.svg" alt="" className="" />
      </div>
    </div>
  );
};
