"use client";

import { motion } from "framer-motion";
import RobotCard from "./RobotCard";
import { robots } from "@/lib/robot-data";

export default function RobotGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {robots.map((robot, index) => (
          <RobotCard key={robot.id} robot={robot} index={index} />
        ))}
      </motion.div>
    </section>
  );
}