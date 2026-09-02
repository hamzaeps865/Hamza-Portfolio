"use client";

import { MessageSquare, Lightbulb, Code2, Settings, Rocket, ShieldCheck } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    title: "Discovery Call",
    description: "We start with a detailed discussion to understand your business needs, goals, and vision for your application.",
    icon: MessageSquare,
  },
  {
    title: "Strategy & Planning",
    description: "My team develops a comprehensive plan tailored to your specific requirements and business objectives.",
    icon: Lightbulb,
  },
  {
    title: "Development",
    description: "I bring your vision to life with clean, efficient Next.js code and regular progress updates throughout the process.",
    icon: Code2,
  },
  {
    title: "Testing & QA",
    description: "Rigorous testing and quality assurance to ensure your web application functions flawlessly across all devices and scenarios.",
    icon: Settings,
  },
  {
    title: "Launch",
    description: "After thorough testing, we launch your project with a detailed checklist to ensure a smooth deployment.",
    icon: Rocket,
  },
  {
    title: "Support & Maintenance",
    description: "Ongoing support and maintenance to keep your platform running optimally and help you scale your business.",
    icon: ShieldCheck,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-20 lg:py-32 border-t border-border bg-card dark:bg-[rgb(20,26,26)]">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <span className="text-xs font-semibold tracking-wider text-primary uppercase mb-4 block">
              OUR PROCESS
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-6">
              From Concept to <span className="text-primary">Launch</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-md mb-8 leading-relaxed">
              A streamlined, transparent workflow designed to deliver high-quality web applications on time and exceed your expectations.
            </p>
            <Link href="#contact" className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-200 border border-transparent bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-full px-8 text-base shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]">
              Start Your Project
            </Link>
          </div>

          {/* Right Column (Timeline) */}
          <div className="lg:col-span-7">
            {steps.map((step, idx) => {
              return (
                <div key={idx} className="relative pl-24 pb-16 last:pb-0 group">
                  {/* Connecting Line Segment */}
                  {idx !== steps.length - 1 && (
                    <div className="absolute left-[31px] top-16 bottom-[-16px] w-[2px]">
                      {/* Active static line fill */}
                      <div className="absolute top-0 left-0 w-full bg-primary h-full" />
                    </div>
                  )}
                  
                  {/* Circle Icon Badge */}
                  <div className="absolute left-0 top-0 flex items-center justify-center w-16 h-16 rounded-full bg-card dark:bg-[rgb(20,26,26)] text-primary z-10" style={{ border: "1px solid rgb(142, 191, 69)" }}>
                    <step.icon className="w-6 h-6" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <div className="pt-3">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base sm:text-lg leading-relaxed max-w-lg text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
