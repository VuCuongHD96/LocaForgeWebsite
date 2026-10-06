"use client";

import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { LeaderboardTeaser } from "@/components/landing/leaderboard-teaser";
import { CTASection } from "@/components/landing/cta-section";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <LeaderboardTeaser />
        <CTASection />
      </main>
    </div>
  );
}
