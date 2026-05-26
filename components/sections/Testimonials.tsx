"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Samarth Verma",
    handle: "@sam_fashion_hub",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
    review: "The Hyderabad shoot team was incredible. They directed my postures, set up cinema lighting, and delivered 5 viral reels in 48 hours. Hits over 1.2M views on Instagram!",
    rating: 5,
  },
  {
    name: "Pooja Hegde",
    handle: "@pooja_eats",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
    review: "Post-production was next-level. I submitted my restaurant footages and got a Drive link. The editing style synced perfectly with trending audios. My engagement jumped 240%!",
    rating: 5,
  },
  {
    name: "Dr. Vikram Seth",
    handle: "@vikram_brandtalks",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150",
    review: "Finding an agency that handles both reels shoots and edits can be hard. Shot Visuals nailed my business promotional videos. Invaluable for scaling my personal brand.",
    rating: 5,
  },
  {
    name: "Karan Johar",
    handle: "@karan_fit_life",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150",
    review: "Editing turnaround is insanely fast. I drop raw videos on the Drive link and get polished edits with captions and sound effects within 2 days. Absolute lifesaver.",
    rating: 5,
  },
  {
    name: "Ananya Roy",
    handle: "@ananya_looks",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150",
    review: "The aesthetic of the reels they edit is so premium. The color-grading and caption animations match exactly what is trending right now. Highly recommended!",
    rating: 5,
  },
];

// Duplicate list for infinite scroll marquee
const extendedTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden select-none">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-primary font-bold">Creator Reviews</h2>
          <p className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            What Creators Say
          </p>
          <p className="text-sm sm:text-base text-muted-foreground font-medium">
            Join 120+ influencers and business owners who have scaled their video assets with us.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden py-4 mask-gradient-fade">
          {/* Left and right fade overlay gradients for premium cinematic effect */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-scroll flex gap-6">
            {extendedTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="w-[300px] sm:w-[360px] shrink-0 p-6 rounded-2xl glass-card border border-border bg-card/25 hover:border-orange-500/20 transition-colors duration-300 flex flex-col justify-between space-y-4 shadow-md"
              >
                {/* Review Text */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium italic">
                  "{item.review}"
                </p>

                {/* Profile Card */}
                <div className="flex items-center justify-between pt-4 border-t border-border/40">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 rounded-full border border-border bg-muted object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-foreground leading-tight">
                        {item.name}
                      </h4>
                      <span className="text-[10px] text-primary font-semibold">
                        {item.handle}
                      </span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
