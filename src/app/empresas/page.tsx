import { HeroSectionEmpresas } from "@/components/sections/HeroSectionEmpresas";
import { ServicesSectionEmpresas } from "@/components/sections/ServicesSectionEmpresas";
import { QuoterSection } from "@/components/sections/QuoterSection";
import { TrackingSection } from "@/components/sections/TrackingSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FleetSection } from "@/components/sections/FleetSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AgenciesSection } from "@/components/sections/AgenciesSection";

export default function EmpresasPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSectionEmpresas />
            <ServicesSectionEmpresas />
            <WhyChooseUs />
            <FleetSection />
            <QuoterSection />
            <TrackingSection />
            <AgenciesSection />
            <ContactSection />
        </div>
    );
}
