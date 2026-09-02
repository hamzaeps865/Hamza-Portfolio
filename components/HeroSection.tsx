"use client";

import { ArrowRight, Layers, HeartHandshake, Zap, Code2, Download } from "lucide-react";
import Link from "next/link";
import { useState, useRef, MouseEvent } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)");

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = -((y - centerY) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * 15;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    // Reset to completely flat original position when cursor leaves
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)");
  };

  return (
    <section id="hero" className="relative flex flex-col justify-center overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 border-b border-border/50">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="text-left">
            <div className="flex justify-start mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="inline-flex items-center gap-2 px-3 py-[6px] rounded-full border border-black/10 dark:border-[rgb(33,43,43)] bg-black/5 dark:bg-[oklab(0.280606_-0.0132002_-0.00388174_/_0.3)] backdrop-blur-[8px] text-gray-900 dark:text-white">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-medium tracking-wide">Available for New Projects</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] relative z-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              <span className="block text-2xl md:text-3xl font-medium text-muted-foreground mb-4 tracking-normal">
                Hi, I'm Hamza Niaz
              </span>
              Building{" "}
              <span className="text-primary relative inline-block z-10">
                High-Performance
                <div className="absolute -bottom-2 left-0 w-full h-auto text-foreground/80 z-[-1] pointer-events-none">
                  <svg className="w-[110%] -ml-[5%] h-6" viewBox="0 0 300 25" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M3.24036 15.6882C75.3167 6.47466 200.72 -6.65828 296.864 10.334" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M6.5 19.5C65.5 13.5 198.6 3.00002 292.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6"></path>
                  </svg>
                </div>
              </span>{" "}
              Next.js Apps
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Dedicated software engineer with expertise in full-stack development. Passionate about building clean, scalable applications using React, Next.js, and modern databases that deliver exceptional user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 relative animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
              <Link href="#contact" className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] border border-transparent bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-full px-8 text-base">
                Start a Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a href="/resume.pdf" download="Hamza_Niaz_Resume.pdf" className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] border border-border bg-black/5 dark:bg-white/5 text-foreground hover:bg-black/10 dark:hover:bg-white/10 h-12 rounded-full px-8 text-base backdrop-blur-sm">
                Download Resume <Download className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="mt-8 pt-8 w-full animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500">
              <p className="text-xs text-muted-foreground mb-6 font-medium uppercase tracking-widest opacity-50 text-left">
                My Tech Stack
              </p>
              <div className="flex flex-wrap md:flex-nowrap justify-between gap-4 items-center w-full overflow-hidden opacity-60">
                 <div className="flex items-center gap-2 font-bold text-lg tracking-tighter text-gray-900 dark:text-white grayscale hover:grayscale-0 transition-all cursor-default">Next.js</div>
                 <div className="flex items-center gap-2 font-bold text-lg tracking-tighter text-gray-900 dark:text-white grayscale hover:grayscale-0 transition-all cursor-default">React</div>
                 <div className="flex items-center gap-2 font-bold text-lg tracking-tighter text-gray-900 dark:text-white grayscale hover:grayscale-0 transition-all cursor-default">TypeScript</div>
                 <div className="flex items-center gap-2 font-bold text-lg tracking-tighter text-gray-900 dark:text-white grayscale hover:grayscale-0 transition-all cursor-default">Tailwind CSS</div>
                 <div className="flex items-center gap-2 font-bold text-lg tracking-tighter text-gray-900 dark:text-white grayscale hover:grayscale-0 transition-all cursor-default">PostgreSQL</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-in fade-in zoom-in-95 duration-1000 delay-500 perspective-[1000px] flex items-center justify-center">
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[520px] mx-auto h-auto rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-border diagonal-pattern transition-transform duration-300 ease-out" 
              style={{ 
                backgroundColor: 'rgba(128, 128, 128, 0.05)',
                transform: transform,
                transformStyle: "preserve-3d"
              }}
            >
                <div className="grid grid-cols-2 gap-4 sm:gap-6" style={{ transform: "translateZ(30px)" }}>
                  
                  <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-[rgb(20,26,26)] border border-border shadow-2xl transition-transform hover:-translate-y-2 duration-300 aspect-square" style={{ transform: "translateZ(20px)" }}>
                     <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center">
                        <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 dark:text-white" />
                     </div>
                     <div>
                        <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tighter mb-1 sm:mb-2">10+</div>
                        <div className="text-[9px] sm:text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Production Apps</div>
                     </div>
                  </div>

                  <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-[rgb(20,26,26)] border border-border shadow-2xl transition-transform hover:-translate-y-2 duration-300 aspect-square" style={{ transform: "translateZ(20px)" }}>
                     <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center">
                        <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 dark:text-white" />
                     </div>
                     <div>
                        <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tighter mb-1 sm:mb-2">100%</div>
                        <div className="text-[9px] sm:text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Client Satisfaction</div>
                     </div>
                  </div>

                  <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-[rgb(20,26,26)] border border-border shadow-2xl transition-transform hover:-translate-y-2 duration-300 aspect-square" style={{ transform: "translateZ(20px)" }}>
                     <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center">
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 dark:text-white" />
                     </div>
                     <div>
                        <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tighter mb-1 sm:mb-2">99%</div>
                        <div className="text-[9px] sm:text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Lighthouse Score</div>
                     </div>
                  </div>

                  <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-[rgb(20,26,26)] border border-border shadow-2xl transition-transform hover:-translate-y-2 duration-300 aspect-square" style={{ transform: "translateZ(20px)" }}>
                     <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center">
                        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 dark:text-white" />
                     </div>
                     <div>
                        <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tighter mb-1 sm:mb-2">100%</div>
                        <div className="text-[9px] sm:text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Type-Safe Code</div>
                     </div>
                  </div>

               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

