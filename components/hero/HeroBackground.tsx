"use client";

import { motion } from "framer-motion";
import { backgroundVariants } from "../animations/motion-variants";

export function HeroBackground() {
  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5"
      variants={backgroundVariants}
      animate="animate"
    />
  );
}