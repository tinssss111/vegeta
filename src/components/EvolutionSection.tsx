/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ComponentProps } from "@/types/config";

export const EvolutionSection: React.FC<ComponentProps> = ({}) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "-50px",
  });

  return (
    <div
      ref={elementRef}
      className="overflow-hidden relative bg-[#0E20B2] bg-cover bg-center w-full min-h-screen py-10 lg:py-20"
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

        @keyframes slideInFromBottom {
          0% {
            transform: translateY(100px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes evolutionGlow {
          0%,
          100% {
            filter: drop-shadow(0 0 15px rgba(24, 225, 255, 0.8))
              drop-shadow(0 0 30px rgba(24, 225, 255, 0.6));
          }
          50% {
            filter: drop-shadow(0 0 25px rgba(24, 225, 255, 1))
              drop-shadow(0 0 50px rgba(24, 225, 255, 0.8));
          }
        }

        .evolution-img:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 30px rgba(24, 225, 255, 1))
            drop-shadow(0 0 60px rgba(24, 225, 255, 0.8));
        }

        .evolution-title {
          opacity: 0;
          transform: translateY(50px);
        }

        .evolution-title.loaded {
          animation: fadeInUp 1s ease-out forwards;
        }

        .evolution-image {
          opacity: 0;
          transform: scale(0.8);
        }

        .evolution-image.loaded {
          animation: scaleIn 1.2s ease-out 0.3s forwards;
        }

        .evolution-text {
          opacity: 0;
          transform: translateY(100px);
        }

        .evolution-text.loaded {
          animation: slideInFromBottom 1s ease-out 0.6s forwards;
        }

        @media (max-width: 1024px) {
          .evolution-image {
            transform: translateY(-30px);
          }

          .evolution-image.loaded {
            animation: fadeInUp 1s ease-out 0.3s forwards;
          }

          .evolution-text {
            transform: translateY(30px);
          }

          .evolution-text.loaded {
            animation: fadeInUp 1s ease-out 0.6s forwards;
          }
        }

        .evolution-img {
          animation: evolutionGlow 4s ease-in-out infinite;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .evolution-img:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 30px rgba(24, 225, 255, 1))
            drop-shadow(0 0 60px rgba(24, 225, 255, 0.8));
        }

        /* Footer flying line animation (Nimbus) */
        .Footer_line__bDTwA {
          position: absolute;
          right: 0;
          bottom: 0;
          z-index: 10;
          display: block;
          width: 100vw;
          height: clamp(19.2px, 7.129px + 1.271vw, 30px);
          margin-bottom: clamp(44.8px, 16.635px + 2.965vw, 70px);
          transform: translateX(100%);
          transform-origin: right center;
        }

        @media not screen and (min-width: 769px) {
          .Footer_line__bDTwA {
            width: 100vw;
            height: min(46px, 5.4117647059vw);
            margin-bottom: min(74px, 8.7058823529vw);
          }
        }

        [data-mark="true"] .Footer_line__bDTwA {
          margin-bottom: clamp(115.2px, 42.776px + 7.624vw, 180px);
        }

        @media not screen and (min-width: 769px) {
          [data-mark="true"] .Footer_line__bDTwA {
            margin-bottom: 27.0588235294%;
          }
        }

        .Footer_line__bDTwA[data-animation="true"] {
          animation: Footer_flying-nimbus__GKidf 4.56s linear 0.3s infinite
            forwards;
        }

        @keyframes Footer_flying-nimbus__GKidf {
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
          .Footer_line__bDTwA[data-animation="true"] {
            width: 150vw;
            animation: Footer_flying-nimbus__GKidf 3.6s linear infinite forwards;
          }
        }

        @media only screen and (min-width: 1400px) {
          .Footer_line__bDTwA[data-animation="true"] {
            animation-duration: 5.472s;
          }
        }
        @media only screen and (min-width: 1600px) {
          .Footer_line__bDTwA[data-animation="true"] {
            animation-duration: 5.928s;
          }
        }
        @media only screen and (min-width: 1800px) {
          .Footer_line__bDTwA[data-animation="true"] {
            animation-duration: 6.384s;
          }
        }
        @media only screen and (min-width: 2000px) {
          .Footer_line__bDTwA[data-animation="true"] {
            animation-duration: 7.296s;
          }
        }

        .Footer_line__bDTwA:before {
          position: absolute;
          top: 50%;
          right: 0;
          width: 100%;
          height: clamp(2.4px, 0.891px + 0.159vw, 3.75px);
          content: "";
          background: #fbe202;
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
          .Footer_line__bDTwA:before {
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

        .Footer_line__bDTwA:after {
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
          .Footer_line__bDTwA:after {
            width: min(88px, 10.3529411765vw);
          }
        }

        /* Right-side cloud icon */
        .Footer_line__iconRight {
          position: absolute;
          top: 0;
          right: 0;
          width: clamp(35.2px, 11.539px + 2.491vw, 56.3701067616px);
          height: 100%;
          background: url(/assets/images/footer/icon_cloud.png) no-repeat 50% /
            contain;
          z-index: 1;
          pointer-events: none;
        }

        @media not screen and (min-width: 769px) {
          .Footer_line__iconRight {
            width: min(88px, 10.3529411765vw);
          }
        }

        /* Background decorative element - stays behind all content */
        .bg-decorative {
          z-index: 0;
          pointer-events: none;
        }
      `}</style>

      {/* Background decorative element - positioned to stay behind all content */}
      <div className="absolute bottom-0 right-[-300px] bg-decorative">
        <img
          src="/images/bg_left.png"
          alt=""
          className="w-200 auto opacity-30"
        />
      </div>
      <div className="absolute bottom-0 left-[-300px] bg-decorative">
        <img
          src="/images/bg_right.png"
          alt=""
          className="w-200 auto opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-6 xl:px-12 relative z-10">
        {/* Title */}
        <div
          className={`text-center mb-8 lg:mb-16 evolution-title ${
            isIntersecting ? "loaded" : ""
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-amber-300 mb-4">
            Evolution of Vegeta
          </h1>
        </div>

        {/* Evolution Image */}
        <div
          className={`flex justify-center mb-8 lg:mb-16 evolution-image ${
            isIntersecting ? "loaded" : ""
          }`}
        >
          <img
            src="/images/5.png"
            alt="Evolution of Vegeta"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-4xl xl:max-w-6xl h-auto evolution-img"
          />
        </div>

        {/* Quote Text */}
        <div
          className={`text-center evolution-text ${
            isIntersecting ? "loaded" : ""
          }`}
        >
          <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4">
            <blockquote className="text-white text-base font-mono sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-relaxed font-bold italic">
              &ldquo;You may have invaded my mind and my body, but there&apos;s
              one thing a Saiyan always keeps: his pride!&rdquo;
            </blockquote>
            <div className="mt-4 lg:mt-6">
              <span className="text-amber-300 text-lg sm:text-xl lg:text-2xl font-semibold">
                - Vegeta
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Flying Nimbus footer line */}
      <div className="Footer_line__bDTwA" data-animation={true}>
        <span className="Footer_line__iconRight" aria-hidden="true"></span>
      </div>
    </div>
  );
};
