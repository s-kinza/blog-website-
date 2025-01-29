"use client";

import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { blogPosts } from "@/lib/blog-data";

export default function BlogGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {blogPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </motion.div>
    </section>
  );
}