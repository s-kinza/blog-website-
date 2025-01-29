"use client";

import { BlogPost } from "@/lib/types";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "./ui/card";
import { CalendarDays } from "lucide-react";

interface RelatedPostsProps {
  currentPostId: string;
  posts: BlogPost[];
}

export default function RelatedPosts({ currentPostId, posts }: RelatedPostsProps) {
  const relatedPosts = posts
    .filter(post => post.id !== currentPostId)
    .slice(0, 3);

  return (
    <div className="mt-12 space-y-6">
      <h2 className="text-2xl font-bold">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/blog/${post.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative h-48">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="font-semibold line-clamp-2 mb-2">{post.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {post.date}
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}