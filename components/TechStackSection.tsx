"use client";

import React from "react";

const row1 = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "Drizzle ORM",
  "Zustand",
];

const row2 = [
  "TanStack Query",
  "PostgreSQL",
  "MongoDB",
  "Llama 3.3 AI",
  "Stripe",
  "Node.js",
];

export default function TechStackSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-background border-b border-border">
      <div className="container px-4 mx-auto mb-10 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary/80 mb-2 block">
          Arsenal
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          My <span className="text-primary">Tech Stack</span>
        </h2>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden py-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 sm:before:w-32 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 sm:after:w-32 after:bg-gradient-to-l after:from-background after:to-transparent flex flex-col gap-6">
        
        {/* Row 1 */}
        <div className="flex gap-6 sm:gap-8 whitespace-nowrap animate-marquee w-max px-4 hover:[animation-play-state:paused]">
          {[1, 2, 3, 4].map((dupIdx) => (
            <React.Fragment key={`r1-dup-${dupIdx}`}>
              {row1.map((tech, i) => (
                <div key={`tech-1-${i}-${dupIdx}`} className="flex items-center justify-center px-6 py-3 rounded-full bg-white dark:bg-[rgb(20,26,26)] border border-border shadow-lg hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 cursor-default group">
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors tracking-wide uppercase">
                    {tech}
                  </span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>

        {/* Row 2 (Reversed) */}
        <div className="flex gap-6 sm:gap-8 whitespace-nowrap animate-marquee-reverse w-max px-4 hover:[animation-play-state:paused]">
          {[1, 2, 3, 4].map((dupIdx) => (
            <React.Fragment key={`r2-dup-${dupIdx}`}>
              {row2.map((tech, i) => (
                <div key={`tech-2-${i}-${dupIdx}`} className="flex items-center justify-center px-6 py-3 rounded-full bg-white dark:bg-[rgb(20,26,26)] border border-border shadow-lg hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 cursor-default group">
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors tracking-wide uppercase">
                    {tech}
                  </span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}

