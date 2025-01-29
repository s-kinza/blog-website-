"use client";

import { Robot } from "@/lib/types";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface RobotDetailsProps {
  robot: Robot;
}

export default function RobotDetails({ robot: initialRobot }: RobotDetailsProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [robot, setRobot] = useState(initialRobot);
  const [editedRobot, setEditedRobot] = useState(initialRobot);

  const handleSave = () => {
    setRobot(editedRobot);
    setIsEditing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose prose-lg max-w-none dark:prose-invert"
    >
      <div className="flex justify-end mb-4">
        {isEditing ? (
          <div className="space-x-2">
            <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </div>
        ) : (
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
        )}
      </div>

      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <Input
              value={editedRobot.name}
              onChange={(e) => setEditedRobot({ ...editedRobot, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <Textarea
              value={editedRobot.description}
              onChange={(e) => setEditedRobot({ ...editedRobot, description: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(editedRobot.specs).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium mb-1 capitalize">{key}</label>
                <Input
                  value={value}
                  onChange={(e) => setEditedRobot({
                    ...editedRobot,
                    specs: { ...editedRobot.specs, [key]: e.target.value }
                  })}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {robot.description}
          </p>
          <div className="grid grid-cols-2 gap-8">
            {Object.entries(robot.specs).map(([key, value]) => (
              <div key={key} className="bg-secondary/20 p-4 rounded-lg">
                <h3 className="text-lg font-semibold capitalize mb-2">{key}</h3>
                <p className="text-muted-foreground">{value}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}