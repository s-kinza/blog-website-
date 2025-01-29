"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { BookOpen, Clock, Share2, Bookmark } from "lucide-react";

interface InfoCardsProps {
  readTime: string;
  category: string;
}

export default function InfoCards({ readTime, category }: InfoCardsProps) {
  const cards = [
    {
      icon: Clock,
      title: "Read Time",
      value: readTime,
    },
    {
      icon: BookOpen,
      title: "Category",
      value: category,
    },
    {
      icon: Share2,
      title: "Share",
      value: "Share this article",
      action: true,
    },
    {
      icon: Bookmark,
      title: "Save",
      value: "Save for later",
      action: true,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={`h-full ${card.action ? 'cursor-pointer hover:bg-secondary/50' : ''}`}>
              <CardContent className="p-4 flex flex-col items-center text-center">
                <Icon className="h-6 w-6 mb-2 text-primary" />
                <h3 className="font-medium text-sm mb-1">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.value}</p>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}