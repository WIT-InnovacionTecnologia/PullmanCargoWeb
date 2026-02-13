import { HeroSectionEmpresas } from "@/components/sections/HeroSectionEmpresas";
import { ServicesSectionEmpresas } from "@/components/sections/ServicesSectionEmpresas";
import { BusinessPortalCTA } from "@/components/sections/BusinessPortalCTA";
import { TrackingSection } from "@/components/sections/TrackingSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FleetSection } from "@/components/sections/FleetSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AgenciesBannerSection } from "@/components/sections/AgenciesBannerSection";

export default function EmpresasPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSectionEmpresas />
            <BusinessPortalCTA />
            <ServicesSectionEmpresas />
            <WhyChooseUs />
            <FleetSection />
            <TrackingSection />
            <AgenciesBannerSection />
            <ContactSection />
        </div>
    );
}
