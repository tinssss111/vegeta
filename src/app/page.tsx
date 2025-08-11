"use client";
import Header from "@/components/Header";
import { MainSection } from "@/components/MainSection";
import { AboutSection } from "@/components/AboutSection";
import { EvolutionSection } from "@/components/EvolutionSection";
import { TokenomicsSection } from "@/components/TokenomicsSection";
import { Footer } from "@/components/Footer";
import { useConfig } from "@/hooks/useConfig";

export default function Home() {
  const { config, isLoading, error, refetch } = useConfig();

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-red-500">{error}</p>
          <button
            onClick={refetch}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden" style={{ scrollBehavior: "smooth" }}>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header config={config} isLoading={isLoading} />
      </div>
      <div id="home">
        <MainSection config={config} isLoading={isLoading} />
      </div>
      <div id="about">
        <AboutSection config={config} isLoading={isLoading} />
      </div>
      <div id="evolution">
        <EvolutionSection config={config} isLoading={isLoading} />
      </div>
      <div id="tokenomics">
        <TokenomicsSection config={config} isLoading={isLoading} />
      </div>
      <div id="footer">
        <Footer config={config} isLoading={isLoading} />
      </div>
    </div>
  );
}
