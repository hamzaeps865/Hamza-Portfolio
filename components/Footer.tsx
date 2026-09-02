"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowRight, Sun, Monitor, Moon } from "lucide-react";

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("subject", "New Newsletter Subscriber");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="border-t border-border bg-card dark:bg-[#0a0c0c] text-gray-900 dark:text-white pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          
          {/* Left Column - Profile Card */}
          <div className="w-full lg:w-[420px] xl:w-[512px] shrink-0 flex flex-col gap-6">
            <Link href="#contact" className="group block relative overflow-hidden p-5 rounded-2xl border border-[color-mix(in_oklab,var(--color-white)_5%,transparent)] bg-[color-mix(in_oklab,var(--color-white)_5%,transparent)] hover:border-primary transition-all duration-300 shadow-xl">
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30 overflow-hidden">
                  <Image src="/profile2.jpg" alt="Hamza Niaz" fill className="object-cover object-top" />
                  {/* Optional green online dot if using an image */}
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-[#131616] z-10"></div>
                </div>
                <div>
                  <h3 className="font-bold text-[17px] text-gray-900 dark:text-white mb-1">Hamza Niaz</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full border border-[color-mix(in_oklab,var(--color-white)_5%,transparent)] bg-[color-mix(in_oklab,var(--color-white)_5%,transparent)] text-gray-700 dark:text-gray-300 font-medium">Software Engineer</span>
                    <span className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full border border-[color-mix(in_oklab,var(--color-white)_5%,transparent)] bg-[color-mix(in_oklab,var(--color-white)_5%,transparent)] text-gray-700 dark:text-gray-300 font-medium">React & Next.js</span>
                  </div>
                </div>
              </div>
              <p className="text-[13px] text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Crafting scalable, modern web applications and intuitive user experiences.
              </p>
              <div className="flex items-center justify-between border-t border-border pt-5 mt-auto">
                <span className="text-[15px] font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">Available for Work</span>
                <span className="inline-flex items-center justify-center whitespace-nowrap text-[13px] font-semibold transition-all bg-primary text-white h-9 rounded-full px-5 group-hover:bg-primary/90">
                  Get in Touch <ArrowRight className="w-3.5 h-3.5 ml-1.5" strokeWidth={2} />
                </span>
              </div>
            </Link>
            
            <div className="mt-2">
              <p className="text-[13px] text-gray-600 dark:text-gray-400 mb-4 font-medium">Follow me on social media</p>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/hamzaniaz865/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-2xl bg-black/5 dark:bg-[#131616] border border-border flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 hover:bg-black/10 dark:hover:bg-white/5 transition-all">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#contact" className="w-11 h-11 rounded-2xl bg-black/5 dark:bg-[#131616] border border-border flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 hover:bg-black/10 dark:hover:bg-white/5 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://github.com/hamzaeps865" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-2xl bg-black/5 dark:bg-[#131616] border border-border flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 hover:bg-black/10 dark:hover:bg-white/5 transition-all">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Middle Column - Navigation */}
          <div className="w-full lg:w-auto shrink-0 pr-8">
            <h4 className="font-bold text-[17px] text-gray-900 dark:text-white mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">About</Link></li>
              <li><Link href="#experience" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Experience</Link></li>
              <li><Link href="#services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Projects</Link></li>
            </ul>
          </div>
          
          {/* Right Column - Newsletter */}
          <div className="w-full lg:w-[480px] xl:w-[500px] shrink-0 grid gap-5">
            <div className="justify-self-start inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary">
              <Mail className="w-3.5 h-3.5" />
              <span className="text-[13px] font-medium tracking-wide">Weekly Insights</span>
            </div>
            <h2 className="text-[28px] sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight whitespace-nowrap">
              Master Full-Stack Engineering
            </h2>
            <p className="text-[15px] sm:text-[16px] text-gray-600 dark:text-gray-400 leading-relaxed">
              Join 2,500+ developers getting weekly insights on React, Next.js architecture, and full-stack performance strategies.
            </p>
            
            {isSuccess ? (
              <div className="flex items-center justify-center w-full mt-2 bg-primary/10 border border-primary/20 rounded-full p-3 transition-all text-primary font-medium text-[15px]">
                ✓ You're subscribed! Check your inbox soon.
              </div>
            ) : (
            <form 
              className="flex items-center w-full mt-2 bg-black/5 dark:bg-white/5 border border-border rounded-full p-1.5 focus-within:border-black/20 dark:focus-within:border-white/20 transition-all" 
              onSubmit={handleSubscribe}
            >
              <input type="hidden" name="access_key" value="691ade5f-001d-4f25-8f89-209be382af7f" />
              <input 
                id="newsletter-email"
                name="email"
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-transparent pl-4 pr-2 py-[10px] focus:outline-none text-[15px] text-gray-900 dark:text-white placeholder:text-gray-500"
                required
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="shrink-0 inline-flex items-center justify-center whitespace-nowrap font-medium bg-primary text-white rounded-full px-6 py-[10px] text-base hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Subscribing..." : (
                  <>Get Updates <ArrowRight className="w-4 h-4 ml-1.5" strokeWidth={2} /></>
                )}
              </button>
            </form>
            )}
            <p className="text-[14px] text-gray-500 text-center w-full">
              One email per week. Unsubscribe anytime.
            </p>
          </div>
          
        </div>
        
        {/* Bottom Footer Row */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[13px] text-gray-500">© {new Date().getFullYear()} Hamza Niaz</p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            {/* Theme Toggle */}
            <div className="flex items-center bg-black/5 dark:bg-[#131616] rounded-full border border-border p-1 gap-1">
              <button 
                onClick={() => setTheme('light')}
                aria-label="Light Theme" 
                className={`p-2 rounded-full transition-colors ${mounted && theme === 'light' ? 'bg-white shadow-sm text-gray-900 dark:bg-white/10 dark:text-white cursor-default' : 'hover:bg-black/5 dark:hover:bg-white/5 text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer'}`}
              >
                <Sun className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setTheme('system')}
                aria-label="System Theme" 
                className={`p-2 rounded-full transition-colors ${mounted && theme === 'system' ? 'bg-white shadow-sm text-gray-900 dark:bg-white/10 dark:text-white cursor-default' : 'hover:bg-black/5 dark:hover:bg-white/5 text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer'}`}
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setTheme('dark')}
                aria-label="Dark Theme" 
                className={`p-2 rounded-full transition-colors ${mounted && theme === 'dark' ? 'bg-white shadow-sm text-gray-900 dark:bg-white/10 dark:text-white cursor-default' : 'hover:bg-black/5 dark:hover:bg-white/5 text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer'}`}
              >
                <Moon className="w-4 h-4" />
              </button>
            </div>
            
            <Link href="#" className="text-[13px] text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

