import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        {/* Card Container */}
        <div className="relative rounded-[2rem] md:rounded-[3rem] bg-card dark:bg-[rgb(20,26,26)] border border-border py-24 px-6 md:px-12 flex flex-col items-center text-center z-10 overflow-hidden shadow-2xl">
          
          {/* Content */}
          <div className="relative z-20 w-full flex flex-col items-center">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-6 block">
              Ready to Start?
            </span>
            
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6 leading-[1.1]">
              Let&apos;s Build Something <br className="hidden sm:block" />
              <span className="text-primary">Amazing</span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a call to discuss your project requirements and how we can help <br className="hidden sm:block" />
              you achieve your business goals.
            </p>
            
            <Link 
              href="#contact" 
              className="inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all duration-300 active:scale-[0.98] border border-transparent bg-primary text-white h-14 rounded-full px-10 text-[15px] gap-2 group hover:bg-primary/90"
            >
              Hire Me
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

