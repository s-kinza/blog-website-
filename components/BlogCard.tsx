"use client";

import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPost } from "@/lib/types";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link href={`/blog/${post.id}`}>
        <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden">
          <CardHeader className="p-0">
            <div className="relative h-48">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-muted-foreground line-clamp-2 mb-4">
              {post.excerpt}
            </p>
          </CardContent>
          
          <CardFooter className="p-6 pt-0 flex items-center justify-between border-t">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.author.avatar} />
                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">
                {post.author.name}
              </span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarDays className="mr-2 h-4 w-4" />
              {post.date}
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}