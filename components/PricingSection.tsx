"use client";

import { Check, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    name: "Basic",
    description: "Perfect for personal portfolios or small business landing pages.",
    price: "$50",
    delivery: "1 Week Delivery",
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "Basic 3rd-Party API Integration",
    ],
    notIncluded: [
      "Custom Animations",
      "E-commerce Functionality",
      "Advanced Backend/API",
    ],
    popular: false,
    buttonText: "Start Basic",
  },
  {
    name: "Standard",
    description: "Ideal for growing businesses needing dynamic content and CMS.",
    price: "$150",
    delivery: "2-3 Weeks Delivery",
    features: [
      "Up to 10 Pages",
      "Custom UI/UX Design",
      "Advanced SEO Optimization",
      "CMS Integration (Sanity/Strapi)",
      "Basic Animations",
      "Custom Authentication System",
      "Complex API Integrations",
    ],
    notIncluded: [
      "Complex E-commerce",
    ],
    popular: true,
    buttonText: "Start Standard",
  },
  {
    name: "Premium",
    description: "Full-scale custom applications with complex logic and scalable architecture.",
    price: "Custom",
    delivery: "Timeline Varies",
    features: [
      "Unlimited Pages",
      "Complex Web App Logic",
      "Full Stack (Frontend & Backend)",
      "Database Architecture",
      "E-commerce / Payment Gateway",
      "Advanced Animations & Interactions",
      "Real-time WebSockets Data",
      "Scalable Cloud Architecture",
    ],
    notIncluded: [],
    popular: false,
    buttonText: "Get a Quote",
  },
];

export default function PricingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden bg-background border-b border-border">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16 lg:mb-24">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-[6px] rounded-full border border-black/10 dark:border-[rgb(33,43,43)] bg-black/5 dark:bg-[oklab(0.280606_-0.0132002_-0.00388174_/_0.3)] backdrop-blur-[8px] text-gray-900 dark:text-white">
              <span className="text-xs font-medium tracking-wide">PRICING PLANS</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground max-w-3xl mx-auto">
            Transparent Pricing for <span className="text-primary">Premium</span> Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Choose the perfect plan for your project needs. From simple landing pages to complex full-stack web applications, I deliver quality at every tier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative flex flex-col p-8 rounded-[2rem] transition-all duration-300 ${
                plan.popular 
                  ? "bg-card dark:bg-[rgb(20,26,26)] border-2 border-primary shadow-[0_0_30px_rgba(142,191,69,0.15)] md:-translate-y-4" 
                  : "bg-card dark:bg-[rgb(20,26,26)] border border-border hover:border-primary/50"
              } ${hoveredIndex === index && !plan.popular ? "md:-translate-y-2" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm min-h-[40px]">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground font-medium">/project</span>}
                </div>
                <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold shadow-sm">
                  <Clock className="w-4 h-4" />
                  <span>{plan.delivery}</span>
                </div>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                      <div className="mt-0.5 rounded-full p-1 bg-primary/10 text-primary shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                  
                  {plan.notIncluded && plan.notIncluded.map((feature, i) => (
                    <li key={`not-${i}`} className="flex items-start gap-3 text-sm text-muted-foreground opacity-60">
                      <div className="mt-0.5 rounded-full p-1 bg-muted text-muted-foreground shrink-0">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      </div>
                      <span className="line-through decoration-muted-foreground/30 leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="#contact" 
                className={`inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] h-12 rounded-full px-6 text-sm w-full group ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                    : "bg-black/5 dark:bg-white/5 text-foreground hover:bg-black/10 dark:hover:bg-white/10 border border-transparent hover:border-black/10 dark:hover:border-white/10"
                }`}
              >
                {plan.buttonText} <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
