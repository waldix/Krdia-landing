'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useRef } from 'react';

export function WhatIsKrdexGlass() {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 0.5, 1], ['100%', '0%', '-20%']);
  const rotateZ = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -2]);

  return (
    <section id="producto" ref={containerRef} className="py-40 px-6 relative overflow-hidden">
      {/* Diagonal animated background */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-gray-100/60 to-transparent dark:from-gray-900/60 dark:to-transparent"
        style={{ x, rotateZ }}
      />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="backdrop-blur-3xl bg-gradient-to-br from-white/50 via-white/40 to-white/30 dark:from-black/50 dark:via-black/40 dark:to-black/30 rounded-[2rem] p-16 lg:p-20 border border-white/30 dark:border-gray-700/30 shadow-2xl relative overflow-hidden"
        >
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-gray-300/40 to-gray-400/20 dark:from-gray-600/40 dark:to-gray-700/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tl from-gray-200/40 to-gray-300/20 dark:from-gray-700/40 dark:to-gray-800/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl lg:text-7xl font-light bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent mb-10 text-center relative z-10"
          >
            ¿Qué es Krdex?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8 text-center relative z-10"
          >
            <p className="text-2xl lg:text-3xl text-gray-800 dark:text-gray-200 leading-relaxed font-light">
              Krdex es un servicio de dispersión de tarjetas diseñado para empresas que necesitan 
              emitir, distribuir y controlar tarjetas de forma masiva y eficiente.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-block px-8 py-4 rounded-2xl backdrop-blur-xl bg-white/50 dark:bg-black/50 border border-white/30 dark:border-gray-700/30"
            >
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl">
                Desde nómina hasta programas de incentivos, Krdex te permite gestionar todo el ciclo 
                de vida de las tarjetas con tecnología de nivel empresarial, trazabilidad completa 
                y cumplimiento normativo garantizado.
              </p>
            </motion.div>
          </motion.div>

          {/* Glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 dark:from-white/10 dark:via-transparent dark:to-white/5 pointer-events-none rounded-[2rem]" />
        </motion.div>
      </div>
    </section>
  );
}
