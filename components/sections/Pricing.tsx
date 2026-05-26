"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Flame } from "lucide-react";

const shootPackages = [
  {
    title: "Starter Shoot",
    price: "₹9,999",
    billing: "per session",
    desc: "Perfect for starting creators testing the waters.",
    features: [
      "5 Edited High-Quality Reels",
      "1 Location (Studio or Outdoors)",
      "Standard Lighting & Audio setup",
      "Raw Footage Delivered",
      "Basic Color Grading",
      "48-hour post-shoot delivery",
    ],
    cta: "Book Starter Shoot",
    featured: false,
  },
  {
    title: "Creator Shoot",
    price: "₹19,999",
    billing: "per session",
    desc: "Our most popular package for active influencers.",
    features: [
      "12 Edited High-Quality Reels",
      "2 Locations (Indoor + Outdoor)",
      "Premium Lighting & Cine Audio Setup",
      "Post-production scripting support",
      "Hormozi-style animated captions",
      "Trending sound effects sync",
      "3 Revision rounds included",
    ],
    cta: "Book Creator Shoot",
    featured: true,
  },
  {
    title: "Premium Brand Shoot",
    price: "₹39,999",
    billing: "per session",
    desc: "For brands looking for elite corporate video presence.",
    features: [
      "25 Edited High-Quality Reels",
      "Unlimited Hyderabad Locations",
      "Full Cine Camera Rig & Crew",
      "Custom Studio Lights & Sound",
      "Complete Scriptwriting & Ideation",
      "Advanced B-rolls graphics post-work",
      "Unlimited revisions",
    ],
    cta: "Book Brand Shoot",
    featured: false,
  },
];

const editingPackages = [
  {
    title: "Basic Edit",
    price: "₹1,499",
    billing: "per reel",
    desc: "Simple, clean editing to get your videos published.",
    features: [
      "Standard subtitles (no animations)",
      "Basic cuts & speed adjustments",
      "Background noise reduction",
      "Trending music sync",
      "48-hour delivery",
      "1 Revision round included",
    ],
    cta: "Request Basic Edit",
    featured: false,
  },
  {
    title: "Viral Edit",
    price: "₹2,999",
    billing: "per reel",
    desc: "Designed to maximize retention and go viral.",
    features: [
      "Engaging animated captions & emojis",
      "Zoom-ins, zoom-outs, & speed ramps",
      "Sound effects (whooshes, pops, SFX)",
      "B-roll footage & meme integration",
      "High-end cinematic color grading",
      "24-hour express delivery available",
      "3 Revision rounds included",
    ],
    cta: "Request Viral Edit",
    featured: true,
  },
  {
    title: "Cinematic Pro Edit",
    price: "₹4,999",
    billing: "per reel",
    desc: "Elite level editing with custom graphics.",
    features: [
      "Custom graphic overlays & lower thirds",
      "3D Text tracking & advanced VFX",
      "AI video upscale & color match",
      "Advanced sound design & soundscapes",
      "Dedicated senior video editor",
      "Unlimited revisions",
      "VIP priority queue support",
    ],
    cta: "Request Cinematic Edit",
    featured: false,
  },
];

interface PricingProps {
  onScrollToSection?: (id: string) => void;
}

export default function Pricing({ onScrollToSection }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<"shoot" | "editing">("shoot");

  const packages = billingCycle === "shoot" ? shootPackages : editingPackages;

  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden select-none">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-primary font-bold">Transparent Plans</h2>
          <p className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Pricing Tailored to Your Growth
          </p>
          <p className="text-sm sm:text-base text-muted-foreground font-medium">
            No hidden charges. Select shoot packages (Hyderabad only) or remote editing packages.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="relative p-1 rounded-full border border-border bg-card/45 backdrop-blur-md flex items-center gap-1 select-none">
            <button
              onClick={() => setBillingCycle("shoot")}
              className={`relative px-5 sm:px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                billingCycle === "shoot" ? "text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {billingCycle === "shoot" && (
                <motion.span
                  layoutId="active-cycle"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-red-600 -z-10 shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                  transition={{ type: "spring", stiffness: 260, damping: 25 }}
                />
              )}
              📍 Hyderabad Shoots
            </button>
            <button
              onClick={() => setBillingCycle("editing")}
              className={`relative px-5 sm:px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                billingCycle === "editing" ? "text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {billingCycle === "editing" && (
                <motion.span
                  layoutId="active-cycle"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-red-600 -z-10 shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                  transition={{ type: "spring", stiffness: 260, damping: 25 }}
                />
              )}
              🎬 Pan-India Editing
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid - limited on wide screen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {packages.map((pkg, idx) => (
              <motion.div
                key={`${billingCycle}-${pkg.title}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`relative rounded-3xl p-6 sm:p-8 glass-card border flex flex-col justify-between shadow-xl transition-all duration-300 ${
                  pkg.featured
                    ? "border-orange-500/50 bg-gradient-to-b from-orange-500/5 via-card/25 to-card/25 shadow-[0_0_30px_rgba(249,115,22,0.1)]"
                    : "border-border bg-card/20"
                }`}
              >
                {/* Glowing featured tag */}
                {pkg.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-[0_0_15px_rgba(249,115,22,0.4)] whitespace-nowrap">
                    <Flame className="w-3.5 h-3.5 fill-current animate-pulse" />
                    Featured Choice
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-extrabold text-foreground">{pkg.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 font-medium">{pkg.desc}</p>
                  
                  {/* Price */}
                  <div className="my-6 flex items-baseline gap-1 text-foreground">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight">{pkg.price}</span>
                    <span className="text-xs text-muted-foreground font-semibold">/{pkg.billing}</span>
                  </div>

                  {/* Checklist */}
                  <ul className="space-y-3.5 border-t border-border/40 pt-6">
                    {pkg.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground font-medium">
                        <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href="/book"
                    className={`block w-full py-3 rounded-xl font-bold text-xs sm:text-sm transition-all active:scale-[0.98] cursor-pointer text-center ${
                      pkg.featured
                        ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/20"
                        : "bg-secondary hover:bg-accent text-foreground border border-border"
                    }`}
                  >
                    {pkg.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
