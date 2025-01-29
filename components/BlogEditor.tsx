"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "framer-motion";
import { BlogPost } from "@/lib/types";

interface BlogEditorProps {
  post: BlogPost;
  onSave: (updatedPost: BlogPost) => void;
  onCancel: () => void;
}

export default function BlogEditor({ post, onSave, onCancel }: BlogEditorProps) {
  const [editedPost, setEditedPost] = useState(post);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="space-y-2">
        <label className="text-sm font-medium">Title</label>
        <Input
          value={editedPost.title}
          onChange={(e) => setEditedPost({ ...editedPost, title: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Excerpt</label>
        <Textarea
          value={editedPost.excerpt}
          onChange={(e) => setEditedPost({ ...editedPost, excerpt: e.target.value })}
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Content</label>
        {editedPost.content?.map((section, index) => (
          <div key={index} className="space-y-2">
            {section.type === 'paragraph' && (
              <Textarea
                value={section.content}
                onChange={(e) => {
                  const newContent = [...(editedPost.content || [])];
                  newContent[index] = { ...section, content: e.target.value };
                  setEditedPost({ ...editedPost, content: newContent });
                }}
                rows={4}
              />
            )}
            {section.type === 'heading' && (
              <Input
                value={section.content}
                onChange={(e) => {
                  const newContent = [...(editedPost.content || [])];
                  newContent[index] = { ...section, content: e.target.value };
                  setEditedPost({ ...editedPost, content: newContent });
                }}
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={onCancel}>Cancel</Button>
        <Button onClick={() => onSave(editedPost)}>Save Changes</Button>
      </div>
    </motion.div>
  );
}