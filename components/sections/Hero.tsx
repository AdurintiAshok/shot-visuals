"use client";

import { motion } from "framer-motion";
import { MapPin, Film, Play, Sparkles, TrendingUp, BarChart } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-background bg-grid-pattern"
    >
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Left */}
          <motion.div
            className="lg:col-span-7 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider select-none"
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "3s" }} />
              Premium Creator Economy Agency
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight max-w-2xl"
            >
              We Create{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-600 drop-shadow-[0_2px_15px_rgba(249,115,22,0.15)]">
                Viral Reels
              </span>{" "}
              That Grow Your Brand
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-medium"
            >
              Professional high-production reel shoots in Hyderabad and premium cinematic editing services across India. We turn raw ideas into million-view assets.
            </motion.p>

            {/* Service Action Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 text-left w-full max-w-xl"
            >
              {/* Card 1: Hyderabad Shoots */}
              <div className="relative group p-5 rounded-2xl glass-card border border-border bg-card/25 hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(249,115,22,0.05)]">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-500/5 to-transparent rounded-tr-2xl -z-10 group-hover:from-orange-500/10 transition-colors duration-300" />
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                    <h3 className="text-sm sm:text-base font-bold text-foreground">Hyderabad Shoots</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-5 font-medium">
                    Book professional in-person reel shoots with our production crew at top locations in Hyderabad.
                  </p>
                </div>
                <Link
                  href="/book"
                  className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md shadow-orange-500/10 cursor-pointer text-center"
                >
                  Book Shoot
                </Link>
              </div>

              {/* Card 2: Remote Editing */}
              <div className="relative group p-5 rounded-2xl glass-card border border-border bg-card/25 hover:border-red-500/30 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(239,68,68,0.05)]">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-500/5 to-transparent rounded-tr-2xl -z-10 group-hover:from-red-500/10 transition-colors duration-300" />
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <Film className="w-5 h-5 text-red-500 shrink-0" />
                    <h3 className="text-sm sm:text-base font-bold text-foreground">Reel Editing</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-5 font-medium">
                    Request expert cinematic editing. Submit details, get a secure Google Drive folder, and see the magic.
                  </p>
                </div>
                <Link
                  href="/book"
                  className="w-full py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-800 dark:hover:bg-zinc-700 border border-border text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer text-center"
                >
                  Request Editing
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Visuals Right */}
          <div className="lg:col-span-5 relative w-full max-w-[450px] lg:max-w-none h-[420px] sm:h-[480px] flex items-center justify-center mx-auto">
            
            {/* Visual Blob backdrop */}
            <div className="absolute w-[240px] h-[240px] bg-gradient-to-br from-orange-500 to-red-600 rounded-full opacity-10 filter blur-[70px] pointer-events-none" />

            {/* Editing Timeline Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
              className="absolute top-2 w-full sm:w-[360px] p-4 rounded-xl border border-white/5 bg-zinc-950/80 backdrop-blur-md shadow-2xl z-10 select-none"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/5 text-[10px] text-muted-foreground">
                <span>Timeline editor.prproj</span>
                <span className="text-orange-500 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                  Rendering
                </span>
              </div>
              {/* Tracks */}
              <div className="space-y-2 mt-3">
                <div className="flex gap-1.5 items-center">
                  <span className="text-[9px] text-muted-foreground w-4 shrink-0 font-mono">V1</span>
                  <div className="w-1/4 h-5 rounded bg-zinc-800 border border-white/5" />
                  <div className="w-1/3 h-5 rounded bg-orange-500/20 border border-orange-500/40 relative overflow-hidden flex items-center justify-center text-[9px] font-semibold text-orange-400">
                    Clip_03.mp4
                  </div>
                  <div className="w-1/3 h-5 rounded bg-zinc-800 border border-white/5" />
                </div>
                <div className="flex gap-1.5 items-center">
                  <span className="text-[9px] text-muted-foreground w-4 shrink-0 font-mono">A1</span>
                  <div className="w-[15%] h-4 rounded bg-zinc-800/80 border border-white/5" />
                  <div className="w-[60%] h-4 rounded bg-red-500/20 border border-red-500/40 flex items-center px-1.5 justify-between">
                    <div className="flex gap-0.5 items-center w-full h-full">
                      {[30, 70, 45, 90, 60, 40, 75, 50, 95, 30, 60, 80, 50, 20].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-red-500/60 rounded-full"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="w-[20%] h-4 rounded bg-zinc-800/80 border border-white/5" />
                </div>
              </div>
            </motion.div>

            {/* Floating Reel Mockup Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20, y: 80 }}
              animate={{ opacity: 1, scale: 1, x: 10, y: 100 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
              whileHover={{ rotateY: -8, rotateX: 8, scale: 1.03 }}
              className="absolute w-[220px] h-[330px] rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-zinc-950 flex flex-col justify-between p-4 cursor-pointer transform preserve-3d"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              <div
                className="absolute inset-0 bg-cover bg-center filter brightness-95"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=640')",
                }}
              />

              {/* Reel Header */}
              <div className="relative z-20 flex justify-between items-center text-[9px] text-white">
                <span className="font-semibold bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm flex items-center gap-1">
                  <Play className="w-2.5 h-2.5 fill-current" />
                  Preview
                </span>
                <span className="text-white/80">Instagram</span>
              </div>

              {/* Reel Play Overlay */}
              <div className="relative z-20 self-center w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-md">
                <Play className="w-4 h-4 fill-current translate-x-0.5 text-white" />
              </div>

              {/* Reel Footer info */}
              <div className="relative z-20 text-white space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-orange-500/80 border border-white/20" />
                  <span className="text-[10px] font-bold">@viral_creator</span>
                </div>
                <p className="text-[9px] text-white/90 leading-tight">
                  How we edited this simple clip to hit 1M+ views... 🚀
                </p>
                <div className="h-1 bg-white/30 rounded-full w-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 w-2/3" />
                </div>
              </div>
            </motion.div>

            {/* Floating Stats Label */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-16 left-2 sm:left-4 z-20 flex items-center gap-2.5 p-2.5 rounded-xl border border-white/5 bg-zinc-950/80 backdrop-blur-md shadow-lg select-none"
            >
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[8px] text-muted-foreground uppercase font-bold tracking-wider">Average CTR</p>
                <p className="text-xs font-black text-foreground">+248% Increase</p>
              </div>
            </motion.div>

            {/* Another Floating Stats Card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute right-2 sm:right-4 top-1/3 z-20 flex items-center gap-2.5 p-2.5 rounded-xl border border-white/5 bg-zinc-950/80 backdrop-blur-md shadow-lg select-none"
            >
              <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0">
                <BarChart className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[8px] text-muted-foreground uppercase font-bold tracking-wider">Total Views</p>
                <p className="text-xs font-black text-foreground">22.4 Million</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
