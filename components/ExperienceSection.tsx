import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export default function ExperienceSection() {
  const timeline = [
    {
      id: "exp-1",
      type: "work",
      title: "Frontend Developer",
      organization: "Revnix Software House",
      date: "Apr 2025 - Present",
      icon: <Briefcase className="w-5 h-5 text-primary" />,
      bullets: [
        "Built responsive, production-grade web applications using Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui.",
        "Managed complex client-side state with Zustand and optimized server-state data fetching using TanStack Query.",
        "Integrated MongoDB and PostgreSQL databases, leveraging Drizzle ORM for type-safe queries.",
        "Collaborated to translate UI/UX designs into CMS-driven interfaces, optimizing Core Web Vitals."
      ]
    },
    {
      id: "edu-1",
      type: "education",
      title: "BS Software Engineering",
      organization: "University of Haripur",
      date: "2020 - 2024",
      icon: <GraduationCap className="w-5 h-5 text-primary" />,
      bullets: [
        "Relevant Coursework: Advanced Web Development, Frontend Engineering with React & Next.js, TypeScript.",
        "Database Systems (PostgreSQL & MongoDB), RESTful API Design, Object-Oriented Programming (OOP).",
        "Software Engineering, Version Control with Git & GitHub."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background border-b border-border">
      <div className="container max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary/80 mb-3 block">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Experience & <span className="text-primary">Education</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-20">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary md:-translate-x-1/2 hidden sm:block"></div>
          
          <div className="space-y-16">
            {timeline.map((item, index) => (
              <div key={item.id} className={`relative flex flex-col sm:flex-row gap-8 md:gap-16 items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                
                {/* Timeline Dot (Hidden on mobile for cleaner look, visible on sm+) */}
                <div className="hidden sm:flex absolute left-8 md:left-1/2 top-4 -translate-x-1/2 w-16 h-16 rounded-full bg-background border border-[#8ebf45] items-center justify-center z-10">
                  {item.icon}
                </div>

                {/* Date/Time (Desktop only - offset to opposite side) */}
                <div className={`hidden md:block w-1/2 pt-8 ${index % 2 === 0 ? "text-right pr-16" : "pl-16"}`}>
                  <div className="inline-flex items-center gap-2 text-primary font-semibold tracking-wide bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                </div>

                {/* Content Card */}
                <div className="w-full sm:pl-24 md:pl-0 md:w-1/2">
                  <div className="bg-card dark:bg-[rgb(20,26,26)] border border-border p-6 md:p-8 rounded-3xl shadow-xl hover:border-primary/30 transition-colors duration-300 relative group overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] group-hover:bg-primary/10 transition-colors pointer-events-none"></div>
                    
                    {/* Mobile Date Tag */}
                    <div className="md:hidden inline-flex items-center gap-2 text-primary text-xs font-semibold tracking-wide bg-primary/10 px-3 py-1 rounded-full border border-primary/20 mb-4">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                    <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-6">{item.organization}</p>
                    
                    <ul className="space-y-3">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}

