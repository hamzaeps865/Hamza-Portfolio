"use client";

import { useState, useRef, MouseEvent } from "react";
import { ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  hoverTitle: string;
}

export default function ServiceCard({ title, description, icon: Icon, tags, hoverTitle }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Slight tilt effect
    const rotateX = -((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div 
      ref={cardRef}
      className="relative w-full h-[380px] sm:h-[420px] lg:h-[450px] xl:h-[400px] perspective-[1000px] cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="w-full h-full relative transition-transform duration-700 ease-out"
        style={{ 
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt.x}deg) rotateY(${isHovered ? tilt.y + 180 : tilt.y}deg)`
        }}
      >
        {/* Front Face */}
        <div 
          className="absolute inset-0 w-full h-full bg-card dark:bg-[rgb(20,26,26)] border border-border rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 dark:text-white" />
          </div>
          
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span key={i} className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400 bg-black/5 dark:bg-white/5 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div 
          className="absolute inset-0 w-full h-full bg-card dark:bg-[rgb(20,26,26)] border border-primary rounded-[2rem] p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(142,191,69,0.15)]"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-8">{hoverTitle}</h3>
          
          <Link href="#contact" className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] border border-transparent bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-full px-6 text-sm w-full max-w-[200px]">
            Explore More <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

