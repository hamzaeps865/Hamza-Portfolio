import { Database, Layout, Server, Smartphone, Code2, Cpu } from "lucide-react";

const skills = [
  {
    name: "Frontend Development",
    description: "Building responsive, accessible, and performant user interfaces using React, Next.js, and Tailwind CSS.",
    icon: Layout,
  },
  {
    name: "Backend Architecture",
    description: "Designing scalable APIs and server-side logic with Node.js, Express, and modern Serverless edge functions.",
    icon: Server,
  },
  {
    name: "Database Design",
    description: "Structuring robust data models using PostgreSQL, Prisma ORM, and NoSQL solutions like MongoDB.",
    icon: Database,
  },
  {
    name: "Mobile-First Design",
    description: "Ensuring seamless experiences across all devices with responsive web design principles.",
    icon: Smartphone,
  },
  {
    name: "Clean Code",
    description: "Writing maintainable, strongly-typed code using TypeScript and modern JavaScript features.",
    icon: Code2,
  },
  {
    name: "Performance Tuning",
    description: "Optimizing web vitals, implementing caching strategies, and reducing bundle sizes.",
    icon: Cpu,
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Core Competencies</h2>
          <p className="text-muted-foreground text-lg">
            I leverage modern technologies to build full-stack applications that are scalable, maintainable, and highly performant.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <div key={i} className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <skill.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
