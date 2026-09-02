import { ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard built with Next.js App Router, featuring real-time analytics, inventory management, and seamless order processing. Integrated with Stripe and Prisma.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    link: "#",
    github: "#",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "SaaS Marketing Site",
    description: "A high-conversion landing page for a B2B SaaS company. Features dark mode, framer-motion animations, and integration with a headless CMS for blog content.",
    tags: ["React", "Framer Motion", "Sanity CMS"],
    link: "#",
    github: "#",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "AI Content Generator",
    description: "A full-stack application leveraging OpenAI's API to generate blog posts. Includes user authentication via NextAuth and a credit-based billing system.",
    tags: ["Next.js", "OpenAI", "NextAuth", "Stripe"],
    link: "#",
    github: "#",
    color: "from-orange-500/20 to-red-500/20",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Featured Work</h2>
            <p className="text-muted-foreground text-lg">
              A selection of recent projects showcasing my expertise in building complex, scalable web applications.
            </p>
          </div>
          <Link href="#" className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-6">
            View All Projects
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group relative rounded-[2.5rem] overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-500 flex flex-col">
              
              <div className={`h-48 w-full bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <div className="w-24 h-24 rounded-full bg-background/50 backdrop-blur-md shadow-lg border border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <span className="text-foreground/50 font-mono text-xs">Preview</span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <Link href={project.link} className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                  </Link>
                  <Link href={project.github} className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors">
                    <Code2 className="w-4 h-4 mr-2" /> Source Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

