"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Heart, MessageCircle, Eye } from "lucide-react";

const categories = ["All", "Fashion", "Fitness", "Restaurants", "Real Estate", "Personal Branding"];

const portfolioItems = [
  {
    id: 1,
    title: "Vogue Streetwear Shoot",
    category: "Fashion",
    views: "2.1M",
    likes: "142k",
    comments: "1.2k",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=640",
    size: "md:col-span-2",
  },
  {
    id: 2,
    title: "High-Intensity Athlete Session",
    category: "Fitness",
    views: "850k",
    likes: "64k",
    comments: "582",
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=640",
    size: "md:col-span-1 md:row-span-2",
  },
  {
    id: 3,
    title: "Bespoke Steakhouse Crafting",
    category: "Restaurants",
    views: "1.4M",
    likes: "92k",
    comments: "841",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=640",
    size: "md:col-span-1",
  },
  {
    id: 4,
    title: "Penthouse Sunset Showcase",
    category: "Real Estate",
    views: "3.2M",
    likes: "210k",
    comments: "2.4k",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=640",
    size: "md:col-span-2",
  },
  {
    id: 5,
    title: "3 Creator Hacks for Editing",
    category: "Personal Branding",
    views: "5.6M",
    likes: "420k",
    comments: "3.9k",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=640",
    size: "md:col-span-1",
  },
  {
    id: 6,
    title: "Summer Collection Capsule",
    category: "Fashion",
    views: "1.1M",
    likes: "78k",
    comments: "614",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=640",
    size: "md:col-span-1",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = portfolioItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-24 bg-background relative overflow-hidden select-none">
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-primary font-bold">Featured Portfolio</h2>
          <p className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Reels That Went Viral
          </p>
          <p className="text-sm sm:text-base text-muted-foreground font-medium">
            Explore our curated posts sorted by categories. Hover to view performance metrics.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-orange-500 to-red-600 text-white border-transparent shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                  : "bg-card border-border hover:bg-accent hover:text-foreground text-muted-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className={`relative group rounded-2xl border border-border bg-card/25 overflow-hidden h-[280px] ${
                  item.id === 2 ? "md:h-[580px]" : "md:h-[280px]"
                } ${item.size} cursor-pointer shadow-lg hover:shadow-2xl hover:border-orange-500/20 transition-all duration-300`}
              >
                {/* Background image preview */}
                <div
                  className="absolute inset-0 bg-cover bg-center filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${item.img}')` }}
                />
                
                {/* Gradient vignette backdrop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content top tag */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-sm border border-white/10 text-white text-[9px] font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Centered play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg"
                  >
                    <Play className="w-5 h-5 fill-current translate-x-0.5 text-white" />
                  </motion.div>
                </div>

                {/* Details Footer */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col justify-end">
                  <h3 className="text-sm sm:text-base font-black text-white leading-tight">
                    {item.title}
                  </h3>
                  
                  {/* Metric stats horizontal panel */}
                  <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/10 text-[10px] text-white/80 font-bold">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-orange-400" />
                      {item.views} views
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                      {item.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 text-blue-400" />
                      {item.comments}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
