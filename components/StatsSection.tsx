import { Terminal, Layers, Zap, HeartHandshake } from "lucide-react";

const stats = [
  {
    value: "5+",
    label: "Years Experience",
    icon: Terminal,
  },
  {
    value: "50+",
    label: "Projects Completed",
    icon: Layers,
  },
  {
    value: "100%",
    label: "Client Satisfaction",
    icon: HeartHandshake,
  },
  {
    value: "2x",
    label: "Faster Delivery",
    icon: Zap,
  },
];

export default function StatsSection() {
  return (
    <section className="relative -mt-16 z-20 container mx-auto px-4">
      <div className="glass-panel rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="group flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
