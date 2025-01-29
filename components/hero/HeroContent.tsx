"use client";

import { motion } from "framer-motion";
import { containerVariants, textVariants } from "../animations/motion-variants";
import { HeroIcon } from "./HeroIcon";

export function HeroContent() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="relative z-10 text-center px-4"
    >
      <HeroIcon />

      <motion.h1
        variants={textVariants}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
          Future of Robotics
        </span>
      </motion.h1>

      <motion.p
        variants={textVariants}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
      >
        Explore the cutting-edge world of robotics and AI innovations
      </motion.p>
    </motion.div>
  );
}