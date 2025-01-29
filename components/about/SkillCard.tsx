"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
  delay?: number;
}

export function SkillCard({ icon: Icon, title, skills, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full bg-background/50 backdrop-blur-lg border-primary/10 hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Icon className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <ul className="space-y-2">
            {skills.map((skill, index) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + index * 0.1 }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                {skill}
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}