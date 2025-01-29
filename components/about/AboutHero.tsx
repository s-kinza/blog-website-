"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { MagicText } from "../effects/MagicText";

export function AboutHero() {
  return (
    <div className="relative py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 text-center"
      >
        <motion.div
          className="mb-8 inline-block bg-primary/5 p-6 rounded-full backdrop-blur-xl border border-primary/10"
          whileHover={{ scale: 1.05 }}
        >
          <Brain className="w-16 h-16 text-primary" />
        </motion.div>
        
        <MagicText>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Kanzul-Eeman
          </h1>
        </MagicText>
        
        <p className="text-xl text-muted-foreground leading-relaxed">
          Aspiring Web Developer & Undergraduate Student
        </p>
      </motion.div>
    </div>
  );
}