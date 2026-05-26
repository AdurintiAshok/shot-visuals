"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar, Film } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-background relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Container */}
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden border border-orange-500/30 bg-gradient-to-br from-zinc-950/90 via-orange-950/20 to-zinc-950/95 shadow-2xl text-center flex flex-col items-center justify-center space-y-8">
          {/* Backdrop blur blobs */}
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 -z-10" />
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-orange-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-red-600/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Icon */}
          <motion.div
            initial={{ scale: 0.9, rotate: 0 }}
            whileInView={{ scale: 1, rotate: [0, 5, -5, 0] }}
            viewport={{ once: true }}
            className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500"
          >
            <Sparkles className="w-6 h-6 animate-pulse" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight max-w-2xl">
            Ready to Create{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 drop-shadow-[0_2px_10px_rgba(249,115,22,0.2)]">
              Viral Content
            </span>{" "}
            that converts?
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed font-medium">
            Whether you want a professional shoot crew in Hyderabad or cinematic editing that keeps viewers hooked, we deliver quality that fits your creative scale.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <Link
              href="/book"
              className="flex items-center justify-center gap-2 py-3 px-8 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-[0_0_20px_rgba(249,115,22,0.4)] active:scale-[0.98] transition-all cursor-pointer w-full sm:w-auto text-center"
            >
              <Calendar className="w-4 h-4" />
              Book Hyderabad Shoot
            </Link>
            <Link
              href="/book"
              className="flex items-center justify-center gap-2 py-3 px-8 rounded-xl bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 font-bold text-sm active:scale-[0.98] transition-all cursor-pointer w-full sm:w-auto text-center"
            >
              <Film className="w-4 h-4 text-red-500" />
              Request Reel Editing
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
