"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MagicContainerProps {
  children: ReactNode;
}

export function MagicContainer({ children }: MagicContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}