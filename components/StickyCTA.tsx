"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Film } from "lucide-react";
import { useRouter } from "next/navigation";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 600px
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToBookPage = () => {
    router.push("/book");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-30 md:hidden p-3.5 bg-background/80 dark:bg-zinc-950/80 backdrop-blur-lg border-t border-border flex gap-3 shadow-[0_-8px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.6)]"
        >
          <button
            onClick={goToBookPage}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-card border border-border text-foreground text-xs sm:text-sm font-semibold active:scale-[0.98] transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-orange-500" />
            Book Shoot
          </button>
          <button
            onClick={goToBookPage}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs sm:text-sm font-bold shadow-[0_0_15px_rgba(249,115,22,0.3)] active:scale-[0.98] transition-all cursor-pointer"
          >
            <Film className="w-4 h-4" />
            Request Edit
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
