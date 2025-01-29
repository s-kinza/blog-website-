"use client";

import { HeroBackground, HeroContent } from "./hero";

export default function RobotHero() {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <HeroContent />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  );
}