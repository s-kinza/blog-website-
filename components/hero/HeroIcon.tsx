"use client";

import { motion } from "framer-motion";
import { Robot } from "lucide-react";
import { iconVariants } from "../animations/motion-variants";

export function HeroIcon() {
  return (
    <motion.div
      variants={iconVariants}
      className="mb-6 inline-block bg-background/50 p-4 rounded-full backdrop-blur-sm"
    >
      <Robot className="w-24 h-24 text-primary" />
    </motion.div>
  );
}