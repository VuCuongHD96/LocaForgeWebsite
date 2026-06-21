import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { FeaturesSection } from "./FeaturesSection";
import { LeaderboardTeaser } from "./LeaderboardTeaser";
import { CTASection } from "./CTASection";
import { Footer } from "./FooterSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <LeaderboardTeaser />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
