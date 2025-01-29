"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { Newspaper } from "lucide-react";

export function SiteHeader() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2">
          <Newspaper className="h-6 w-6" />
          <span className="font-bold">Modern Blog</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </motion.header>
  );
}