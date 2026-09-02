import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: "proj-1",
    category: "Healthcare / AI",
    year: "2026",
    title: "MediTrack System",
    description: "Clinic management system with isolated role-based portals and NextAuth authentication. Integrated Llama 3.3 AI via LangChain for automated clinical notes generation and drug interaction checks.",
    imageUrl: "/meditrack.png",
    href: "https://meditrack-alpha-nine.vercel.app/",
  },
  {
    id: "proj-2",
    category: "Financial App",
    year: "2026",
    title: "Expense Tracker",
    description: "Minimal and fast expense tracking web application focusing on privacy and modern UI/UX. Uses NextAuth for secure authentication and Drizzle ORM for complex financial data modeling.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    href: "#",
  },
  {
    id: "proj-3",
    category: "Corporate Platform",
    year: "2025",
    title: "4Rivers Equipment",
    description: "High-performance front-end architecture built with Next.js 16 and React 19, integrating Nextly CMS. Features comprehensive JSON-LD structured data to optimize traditional SEO and AI crawler readiness.",
    imageUrl: "/4rivers.png",
    href: "https://4riversequipment.com",
  },
  {
    id: "proj-4",
    category: "E-Commerce",
    year: "2025",
    title: "The Backyard",
    description: "Responsive e-commerce user interface focusing on seamless cross-device experiences. Integrates Stripe APIs for secure checkouts and connects to Nextly CMS for dynamic content rendering.",
    imageUrl: "/thebackyard.png",
    href: "https://thebackyard.com/",
  },
];

export default function FeaturedProjectsSection() {
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden bg-background">
      <div className="container px-4 mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary/80 mb-3 block">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mt-4">
              A curated selection of high-performance web applications and digital solutions built for ambitious brands.
            </p>
          </div>
          
          <Link 
            href="#projects" 
            className="hidden md:inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 active:scale-[0.98] border border-transparent bg-primary text-primary-foreground h-12 rounded-full px-8 text-base gap-2 group hover:bg-primary/90 shadow-lg shadow-primary/20"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

      </div>

      {/* Infinite Marquee Container */}
      {/* The before/after pseudo-elements create the fade-in/fade-out gradient masks on the edges */}
      <div className="relative w-full overflow-hidden py-4 sm:py-10 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-12 sm:before:w-24 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-12 sm:after:w-24 after:bg-gradient-to-l after:from-background after:to-transparent">
        
        {/* Scrolling Inner Track */}
        <div className="flex gap-6 sm:gap-8 whitespace-nowrap animate-marquee w-max px-4">
          
          {/* Original List */}
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
          
          {/* Duplicated List for seamless infinite loop */}
          {projects.map((project) => (
            <ProjectCard key={`${project.id}-dup`} {...project} />
          ))}

          {/* Triplicated List to ensure the screen is always filled on ultra-wide monitors */}
          {projects.map((project) => (
            <ProjectCard key={`${project.id}-trip`} {...project} />
          ))}

        </div>
      </div>
      
      {/* Mobile CTA (Visible only on small screens) */}
      <div className="container px-4 mx-auto mt-12 flex justify-center md:hidden">
        <Link 
          href="#projects" 
          className="inline-flex w-full items-center justify-center whitespace-nowrap font-medium transition-all duration-300 active:scale-[0.98] border border-transparent bg-primary text-primary-foreground h-12 rounded-full px-8 text-base gap-2 group hover:bg-primary/90 shadow-lg shadow-primary/20"
        >
          View All Projects
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

    </section>
  );
}
