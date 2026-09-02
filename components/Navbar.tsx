"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] w-full left-0 ${
        isScrolled 
          ? "top-4 px-4" 
          : "top-0 bg-background/60 backdrop-blur-md border-b border-border"
      }`}
    >
      <div 
        className={`mx-auto flex items-center justify-between gap-4 transition-all duration-500 container ${
          isScrolled 
            ? "bg-white/80 dark:bg-[oklab(0.211369_-0.00856631_-0.00253534_/_0.8)] backdrop-blur-md border border-border rounded-full shadow-2xl py-2 px-4" 
            : "py-4 px-4"
        }`}
      >
        {/* Logo / Profile */}
        <div className="flex-1/4 min-w-fit flex items-center gap-3">
          {isScrolled ? (
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-full bg-primary overflow-hidden border border-white/10 flex items-center justify-center shrink-0">
                 <Image src="/profile2.jpg" alt="Hamza Niaz" fill className="object-cover object-top" />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-bold text-gray-900 dark:text-white leading-tight mb-0.5">Hamza Niaz</div>
                <div className="text-[10px] text-gray-600 dark:text-gray-400 leading-tight">Develop. Optimize. Scale.</div>
              </div>
            </Link>
          ) : (
            <Link href="/" className="text-xl font-bold tracking-tighter">
              Hamza<span className="text-primary">Niaz.</span>
            </Link>
          )}
        </div>
        
        {/* Navigation Links */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-1">
          {["about", "experience", "services", "projects"].map((section) => (
            <Link 
              key={section}
              href={`#${section}`} 
              onClick={() => setActiveSection(section)}
              className={`relative px-4 py-1.5 text-xs font-medium transition-all rounded-full capitalize ${
                activeSection === section 
                  ? "bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100" 
                  : isScrolled 
                    ? "text-gray-600 hover:text-black hover:bg-black/5 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/10" 
                    : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10"
              }`}
            >
              {section}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex-1/4 min-w-fit flex items-center justify-end gap-3">
          
          <Link href="#contact" className={`inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer rounded-full text-xs h-9 px-4 ${
            isScrolled 
              ? "bg-primary text-[#020817] hover:bg-primary/90" 
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          }`}>
            Let's Talk <ArrowRight className="w-3 h-3 ml-1.5" />
          </Link>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${isScrolled ? "text-gray-600 hover:text-black hover:bg-black/5 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10" : "text-muted-foreground hover:bg-muted"}`}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-2xl p-4 flex flex-col gap-2">
          {["about", "experience", "services", "projects"].map((section) => (
            <Link 
              key={section}
              href={`#${section}`} 
              onClick={() => {
                setActiveSection(section);
                setIsMobileMenuOpen(false);
              }}
              className={`px-4 py-3 rounded-xl capitalize text-sm font-medium transition-colors ${
                activeSection === section
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              {section}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

