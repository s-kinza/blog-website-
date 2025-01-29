"use client";

import { motion } from "framer-motion";
import { BlogPost } from "@/lib/types";

interface BlogContentProps {
  post: BlogPost;
}

export default function BlogContent({ post }: BlogContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose prose-lg max-w-none dark:prose-invert"
    >
      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
        {post.excerpt}
      </p>
      
      <div className="space-y-6">
        {post.content?.map((section, index) => (
          <div key={index}>
            {section.type === 'paragraph' && (
              <p>{section.content}</p>
            )}
            {section.type === 'heading' && (
              <h2 className="text-3xl font-bold mt-12 mb-6">{section.content}</h2>
            )}
            {section.type === 'image' && (
              <div className="my-8">
                <img
                  src={section.url}
                  alt={section.caption || ''}
                  className="rounded-lg w-full"
                />
                {section.caption && (
                  <p className="text-center text-sm text-muted-foreground mt-2">
                    {section.caption}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}