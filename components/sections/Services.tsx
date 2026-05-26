"use client";

import { motion } from "framer-motion";
import { Camera, Film, Play, ShoppingBag, Briefcase, Heart, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Reel Shoots",
    desc: "Professional multi-cam video shoots in Hyderabad. High-end lighting, audio, and director guidance to make you look like a pro.",
    icon: Camera,
    color: "text-orange-500",
    glow: "hover:shadow-orange-500/10 hover:border-orange-500/30",
  },
  {
    title: "Reel Editing",
    desc: "Post-production for creators. Engaging captions, speed ramps, trending overlays, audio leveling, and hooks designed to retain viewers.",
    icon: Film,
    color: "text-red-500",
    glow: "hover:shadow-red-500/10 hover:border-red-500/30",
  },
  {
    title: "YouTube Shorts Editing",
    desc: "Turn long form recordings into highly engaging YouTube Shorts. Retention-focused cuts, zooms, and animation callouts.",
    icon: Play,
    color: "text-rose-500",
    glow: "hover:shadow-rose-500/10 hover:border-rose-500/30",
  },
  {
    title: "Product Reels",
    desc: "Make your products sell. Dynamic lighting, close-ups, sound-synced cuts, and cinematic macros that showcase features with impact.",
    icon: ShoppingBag,
    color: "text-amber-500",
    glow: "hover:shadow-amber-500/10 hover:border-amber-500/30",
  },
  {
    title: "Business Promo Videos",
    desc: "Corporate and brand introductory videos. Clean pacing, testimonials showcase, custom text lower thirds, and call-to-actions.",
    icon: Briefcase,
    color: "text-blue-500",
    glow: "hover:shadow-blue-500/10 hover:border-blue-500/30",
  },
  {
    title: "Wedding Highlight Reels",
    desc: "Transform wedding footage into breathtaking cinematic highlights. Soft color grades, speed sweeps, and emotional soundtracks.",
    icon: Heart,
    color: "text-pink-500",
    glow: "hover:shadow-pink-500/10 hover:border-pink-500/30",
  },
  {
    title: "AI Enhanced Editing",
    desc: "Leveraging cutting-edge AI tools to clear noise, auto-generate captions, track objects, add digital face lighting, and upscale visuals.",
    icon: Cpu,
    color: "text-teal-500",
    glow: "hover:shadow-teal-500/10 hover:border-teal-500/30",
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden select-none">
      {/* Background gradients */}
      <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/10 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-primary font-bold">Post & Production</h2>
          <p className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Our Premium Services
          </p>
          <p className="text-sm sm:text-base text-muted-foreground font-medium">
            From creative ideation and script writing to premium high-end post-production, we have you covered.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`p-6 rounded-2xl glass-card border border-border bg-card/20 transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-lg ${item.glow}`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center border border-border group-hover:scale-110 transition-transform duration-300">
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mt-5 group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2.5 font-medium">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border/40">
                <Link
                  href="/book"
                  className="flex items-center gap-2 text-xs font-bold text-foreground group-hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  Get Package Info
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
