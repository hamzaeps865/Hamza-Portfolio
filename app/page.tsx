import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechStackSection from "@/components/TechStackSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";

const Divider = () => (
  <div className="w-full h-px bg-white/5"></div>
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <Divider />
      <TechStackSection />
      <Divider />
      <AboutSection />
      <Divider />
      <PricingSection />
      <Divider />
      <ExperienceSection />
      <Divider />
      <ServicesSection />
      <Divider />
      <ProcessSection />
      <Divider />
      <FeaturedProjectsSection />
      <Divider />
      <CtaSection />
      <Divider />
      <ContactSection />
    </>
  );
}
