"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { Button } from "./ui/button";

export default function BlogHero() {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      
      <motion.div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mb-8 inline-block p-4 rounded-full bg-primary/5"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Brain className="w-16 h-16 text-primary" />
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
          TechVision Blog
        </h1>

        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Exploring Technology, AI, and Innovation
        </p>

        <Button
          size="lg"
          className="rounded-full px-8"
        >
          Start Reading
        </Button>
      </motion.div>
    </div>
  );
}