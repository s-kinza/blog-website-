"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagicTextProps {
  children: React.ReactNode;
  className?: string;
}

export function MagicText({ children, className }: MagicTextProps) {
  return (
    <motion.div
      className={cn("relative group", className)}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient">
        {children}
      </div>
    </motion.div>
  );
}