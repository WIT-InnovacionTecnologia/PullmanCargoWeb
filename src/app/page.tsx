import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { QuoterSection } from "@/components/sections/QuoterSection";
import { TrackingSection } from "@/components/sections/TrackingSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FleetSection } from "@/components/sections/FleetSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AgenciesSection } from "@/components/sections/AgenciesSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <FleetSection />
      <QuoterSection />
      <TrackingSection />
      <AgenciesSection />
      <ContactSection />
    </div>
  );
}
