"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { motion, AnimatePresence } from "framer-motion";

interface Comment {
  id: string;
  text: string;
  author: {
    name: string;
    avatar: string;
  };
  createdAt: string;
}

interface BlogCommentsProps {
  postId: string;
  initialComments?: Comment[];
}

export default function BlogComments({ postId, initialComments = [] }: BlogCommentsProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleSubmitComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      text: newComment,
      author: {
        name: "Guest User",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3"
      },
      createdAt: new Date().toISOString()
    };

    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-2xl font-bold">Comments</h2>
      
      <div className="space-y-4">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts..."
          className="min-h-[100px]"
        />
        <Button onClick={handleSubmitComment}>Post Comment</Button>
      </div>

      <AnimatePresence>
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex gap-4 p-4 rounded-lg bg-secondary/20"
          >
            <Avatar>
              <AvatarImage src={comment.author.avatar} />
              <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-medium">{comment.author.name}</span>
                <span className="text-sm text-muted-foreground">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="mt-2 text-muted-foreground">{comment.text}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}