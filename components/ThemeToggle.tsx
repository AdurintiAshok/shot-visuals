"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card/50 backdrop-blur-md hover:bg-accent text-foreground transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180, scale: theme === "dark" ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="absolute flex items-center justify-center"
      >
        <Sun className="w-5 h-5 text-orange-500" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : -180, scale: theme === "dark" ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="absolute flex items-center justify-center"
      >
        <Moon className="w-5 h-5 text-orange-400" />
      </motion.div>
    </button>
  );
}
