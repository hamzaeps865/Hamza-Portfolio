import HeroSection from "@/components/HeroSection";
import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("@/components/AboutSection"));
const ExperienceSection = dynamic(() => import("@/components/ExperienceSection"));
const TechStackSection = dynamic(() => import("@/components/TechStackSection"));
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const PricingSection = dynamic(() => import("@/components/PricingSection"));
const ProcessSection = dynamic(() => import("@/components/ProcessSection"));
const FeaturedProjectsSection = dynamic(() => import("@/components/FeaturedProjectsSection"));
const CtaSection = dynamic(() => import("@/components/CtaSection"));
const ContactSection = dynamic(() => import("@/components/ContactSection"));
const ReviewSection = dynamic(() => import("@/components/ReviewSection"));

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
      <Divider />
      <ReviewSection />
    </>
  );
}
