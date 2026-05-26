"use client";

import { motion } from "framer-motion";
import { Film, Users, Eye, Star } from "lucide-react";

const stats = [
  {
    label: "Reels Edited",
    value: "500+",
    icon: Film,
    desc: "Post-produced to viral standards",
  },
  {
    label: "Happy Clients",
    value: "120+",
    icon: Users,
    desc: "Creators and brands worldwide",
  },
  {
    label: "Accumulated Views",
    value: "20M+",
    icon: Eye,
    desc: "Organic video impressions",
  },
  {
    label: "Average Rating",
    value: "4.9/5",
    icon: Star,
    desc: "Across all post projects",
  },
];

export default function SocialProof() {
  return (
    <section className="py-16 bg-background relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl glass-card border border-border bg-card/10 shadow-xl">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="text-center space-y-2 flex flex-col items-center justify-center p-4 border-r last:border-r-0 border-border/40 max-md:even:border-r-0 max-md:nth-2:border-r-0"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center border border-border text-primary shadow-sm mb-1">
                {stat.label === "Average Rating" ? (
                  <stat.icon className="w-5 h-5 text-amber-500 fill-amber-500" />
                ) : (
                  <stat.icon className="w-5 h-5" />
                )}
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight">
                {stat.value}
              </p>
              <h3 className="text-xs sm:text-sm font-bold text-foreground">
                {stat.label}
              </h3>
              <p className="text-[10px] text-muted-foreground font-medium max-w-[130px] leading-tight">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
