"use client";

import { Code, Zap, Server, Palette, ShoppingCart, ShieldCheck } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Custom Web Development",
    description: "Building scalable, highly interactive, and fully customized web applications using Next.js and React ecosystem tailored to your unique business needs.",
    icon: Code,
    tags: ["React", "Next.js", "TypeScript"],
    hoverTitle: "Build Your Platform",
  },
  {
    title: "Performance Optimization",
    description: "Supercharging your existing web applications. I optimize Core Web Vitals, reduce bundle sizes, and implement advanced caching for lightning-fast load times.",
    icon: Zap,
    tags: ["Core Web Vitals", "Lighthouse", "SEO"],
    hoverTitle: "Boost Your Speed",
  },
  {
    title: "Full Stack Architecture",
    description: "Designing robust backend systems, APIs, and database architectures that can scale infinitely and securely handle complex business logic.",
    icon: Server,
    tags: ["Node.js", "PostgreSQL", "APIs"],
    hoverTitle: "Scale Your Backend",
  },
  {
    title: "UI/UX Implementation",
    description: "Translating pixel-perfect designs from Figma into highly responsive, accessible, and beautifully animated frontend interfaces.",
    icon: Palette,
    tags: ["Tailwind CSS", "Framer Motion", "Figma"],
    hoverTitle: "Bring Designs to Life",
  },
  {
    title: "E-commerce Solutions",
    description: "Creating high-converting custom storefronts. From headless Shopify builds to Stripe integrations, I build experiences that drive sales.",
    icon: ShoppingCart,
    tags: ["Headless Shopify", "Stripe", "Next.js Commerce"],
    hoverTitle: "Sell More Online",
  },
  {
    title: "Security & Maintenance",
    description: "Providing ongoing technical support, vulnerability patching, dependency updates, and 24/7 monitoring to keep your platform running smoothly.",
    icon: ShieldCheck,
    tags: ["Maintenance", "Security", "DevOps"],
    hoverTitle: "Ensure Reliability",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden bg-background border-b border-border">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <div className="flex justify-start mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-[6px] rounded-full border border-black/10 dark:border-[rgb(33,43,43)] bg-black/5 dark:bg-[oklab(0.280606_-0.0132002_-0.00388174_/_0.3)] backdrop-blur-[8px] text-gray-900 dark:text-white">
                <span className="text-xs font-medium tracking-wide">OUR SERVICES</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
              Comprehensive <span className="text-primary">Next.js</span> Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Expert full-stack development services designed to elevate your digital presence. From concept to deployment, I deliver high-performance applications that scale.
            </p>
          </div>
          <div className="shrink-0 pb-2">
            <a href="#contact" className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] border border-transparent bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-full px-8 text-base shadow-lg shadow-primary/25">
              Start Your Project
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              tags={service.tags}
              hoverTitle={service.hoverTitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
