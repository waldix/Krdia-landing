'use client';

import { motion } from 'motion/react';

interface CursorGlowProps {
  mousePosition: { x: number; y: number };
}

export function CursorGlow({ mousePosition }: CursorGlowProps) {
  return (
    <motion.div
      className="fixed pointer-events-none z-50 mix-blend-screen"
      animate={{
        x: mousePosition.x - 150,
        y: mousePosition.y - 150,
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 200,
      }}
    >
      <div className="w-[300px] h-[300px] bg-gradient-radial from-gray-400/20 via-gray-300/10 to-transparent dark:from-gray-500/30 dark:via-gray-600/15 dark:to-transparent rounded-full blur-2xl" />
    </motion.div>
  );
}