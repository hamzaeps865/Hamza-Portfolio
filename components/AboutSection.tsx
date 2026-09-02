import Image from "next/image";
import { GraduationCap, Briefcase, Award, Code2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background border-b border-border">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Visual/Graphic */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 bg-card dark:bg-[rgb(20,26,26)] border border-border rounded-[3rem] shadow-2xl flex items-center justify-center group">
              {/* Abstract decorative elements - contained within an inner overflow hidden box */}
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
                <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-colors duration-700"></div>
                <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-colors duration-700"></div>
              </div>
              
              <div className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden p-2">
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                  <Image 
                    src="/profile2.jpg" 
                    alt="Hamza Niaz" 
                    fill 
                    className="object-cover object-top hover:scale-105 transition-transform duration-700" 
                    priority
                  />
                </div>
              </div>
              
              {/* Floating badges - now allowed to break outside the parent */}
              <div className="absolute top-12 -right-4 sm:-right-8 lg:-right-12 bg-white dark:bg-[#0a0c0c] border border-border px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-in fade-in zoom-in duration-1000 delay-300 z-20">
                <Code2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap">Full Stack Dev</span>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
              Engineering the <br className="hidden sm:block" />
              <span className="text-primary">Digital Future</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I am a dedicated software engineer with expertise in full-stack development, seeking to leverage modern web technologies to drive impactful projects. I am passionate about building clean, scalable applications using React, Next.js, and robust databases that deliver exceptional user experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              
              {/* Experience Card */}
              <div className="bg-card dark:bg-[rgb(20,26,26)] border border-border p-6 rounded-3xl transition-transform hover:-translate-y-1 duration-300 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] group-hover:bg-primary/10 transition-colors"></div>
                <div className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center mb-4 border border-border">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-1">Frontend Developer</h3>
                <p className="text-primary text-sm font-medium mb-2">Revnix Software House</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Apr 2025 - Present</p>
              </div>

              {/* Education Card */}
              <div className="bg-card dark:bg-[rgb(20,26,26)] border border-border p-6 rounded-3xl transition-transform hover:-translate-y-1 duration-300 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] group-hover:bg-primary/10 transition-colors"></div>
                <div className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center mb-4 border border-border">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-1">BS Software Eng.</h3>
                <p className="text-primary text-sm font-medium mb-2">University of Haripur</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">2020 - 2024</p>
              </div>

            </div>

            {/* Certification / Extra */}
            <div className="mt-8 flex items-center gap-4 bg-primary/5 border border-primary/20 p-5 rounded-2xl w-fit">
              <Award className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold text-sm">Certified Front-End Developer</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">IBM via Coursera</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

