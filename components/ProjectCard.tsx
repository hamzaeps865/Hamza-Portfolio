import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  id: string;
  category: string;
  year: string;
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

export default function ProjectCard({ category, year, title, description, imageUrl, href }: ProjectCardProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="group block w-[300px] md:w-[450px] shrink-0 h-full">
      <article className="flex flex-col gap-5 whitespace-normal">
        
        {/* Card Image Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl md:rounded-3xl border border-border group-hover:border-primary/50 transition-colors duration-500">
          <div className="relative w-full h-full bg-zinc-900">
            <Image 
              src={imageUrl} 
              alt={title}
              fill
              className="object-cover object-left-top group-hover:scale-[1.03] transition-transform duration-700 ease-out" 
            />
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            {/* Center Green Action Circle */}
            <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg shadow-primary/20">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Card Info Section */}
        <div className="flex flex-col gap-3 px-1">
          {/* Category Tag & Year */}
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-primary uppercase tracking-wider">{category}</span>
            <span className="text-muted-foreground">{year}</span>
          </div>
          
          {/* Project Title */}
          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          {/* Project Description */}
          <p className="text-sm md:text-base text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>
        
      </article>
    </Link>
  );
}

