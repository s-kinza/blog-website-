"use client";

import { motion } from "framer-motion";
import { Robot } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Robot as RobotIcon, Cpu, Battery, Ruler, Weight, Calendar } from "lucide-react";
import Link from "next/link";

interface RobotCardProps {
  robot: Robot;
  index: number;
}

export default function RobotCard({ robot, index }: RobotCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link href={`/robot/${robot.id}`}>
        <Card className="overflow-hidden h-full group hover:shadow-xl transition-all duration-300 dark:hover:shadow-primary/5">
          <CardHeader className="p-0">
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <RobotIcon className="w-24 h-24 text-primary opacity-80" />
              </motion.div>
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <motion.h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {robot.name}
              </motion.h3>
              <Badge variant="secondary">{robot.category}</Badge>
            </div>
            
            <p className="text-muted-foreground mb-6 line-clamp-2">
              {robot.description}
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center text-muted-foreground">
                <Ruler className="w-4 h-4 mr-2" />
                {robot.specs.height}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Weight className="w-4 h-4 mr-2" />
                {robot.specs.weight}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Battery className="w-4 h-4 mr-2" />
                {robot.specs.power}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Cpu className="w-4 h-4 mr-2" />
                {robot.specs.intelligence}
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-6 pt-0 flex items-center justify-between border-t">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-2 h-4 w-4" />
              {robot.specs.yearReleased}
            </div>
            <span className="text-sm font-medium">{robot.specs.manufacturer}</span>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}