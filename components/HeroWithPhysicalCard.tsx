'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, MousePointer2 } from 'lucide-react';
import { Card3DPhysical } from './Card3DPhysical';
import { useRef } from 'react';

interface HeroWithPhysicalCardProps {
  mousePosition: { x: number; y: number };
}

export function HeroWithPhysicalCard({ mousePosition }: HeroWithPhysicalCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.4]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const cardY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section ref={containerRef} className="relative pt-24 sm:pt-32 pb-16 sm:pb-32 px-4 sm:px-6 overflow-hidden min-h-screen flex items-center">
      {/* Clean background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.012] dark:opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

        {/* Minimal floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full opacity-15"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Atmospheric gradients */}
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-gray-300/12 via-gray-200/6 to-transparent dark:from-gray-700/15 dark:via-gray-800/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 40, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-gray-300/10 via-gray-200/5 to-transparent dark:from-gray-700/12 dark:via-gray-800/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.25, 1],
            x: [0, -25, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="space-y-6 sm:space-y-8 lg:space-y-10 lg:pr-8 text-center lg:text-left"
            style={{ y: textY, opacity }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full backdrop-blur-2xl bg-white/50 dark:bg-black/50 border border-white/30 dark:border-gray-700/30 shadow-xl"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" />
              </motion.div>
              <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                Dispersión de Tarjetas B2B
              </span>
            </motion.div>
            
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
                  <motion.span 
                    className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                  >
                    Dispersión
                  </motion.span>
                </h1>
              </motion.div>
              
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                  de tarjetas,
                </span>
              </motion.h1>

              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <span className="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-100 dark:to-white bg-clip-text text-transparent">
                  sin fricción
                </span>
              </motion.h2>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Emite y distribuye tarjetas de forma ágil, segura y escalable. 
              Control total para tu operación empresarial.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl backdrop-blur-xl bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 font-semibold shadow-2xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-100 dark:to-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg">
                  Solicitar demo
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl backdrop-blur-xl bg-white/40 dark:bg-black/40 border-2 border-gray-300/50 dark:border-gray-700/50 text-gray-900 dark:text-white font-semibold hover:bg-white/60 dark:hover:bg-black/60 transition-all shadow-xl text-sm sm:text-base lg:text-lg"
              >
                Hablar con ventas
              </motion.button>
            </motion.div>

            {/* Interaction hint - hidden on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="pt-4 sm:pt-8 hidden sm:block"
            >
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="flex items-center gap-3 text-gray-500 dark:text-gray-600 justify-center lg:justify-start"
              >
                <MousePointer2 className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium">Tarjeta 3D vertical · Gira continuamente · Hover para explorar</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - VERTICAL Physical 3D Card (Complete, Not Cropped) */}
          <motion.div
            style={{ y: cardY }}
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center lg:justify-end min-h-[400px] sm:min-h-[500px] lg:min-h-[650px] mt-8 lg:mt-0"
          >
            {/* Subtle directional light simulation */}
            <div className="absolute inset-0 flex items-center justify-center lg:justify-end pointer-events-none">
              <motion.div
                className="w-[400px] h-[600px] bg-gradient-to-br from-gray-200/12 via-transparent to-gray-400/12 dark:from-gray-600/15 dark:via-transparent dark:to-gray-800/15 rounded-full blur-[100px] opacity-50"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>

            {/* VERTICAL 3D Physical Card - continuous rotation, complete view */}
            <Card3DPhysical mousePosition={mousePosition} />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white dark:from-black via-white/80 dark:via-black/80 to-transparent pointer-events-none" />
    </section>
  );
}
