'use client';

import { motion } from 'motion/react';
import { Zap, Shield, Plug, Lock, TrendingUp } from 'lucide-react';
import { useInView } from './hooks/useInView';
import { useState } from 'react';

const benefits = [
  {
    icon: Zap,
    title: 'Dispersión masiva',
    description: 'Emite y distribuye miles de tarjetas de forma simultánea y automatizada.',
    gradient: 'from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800',
  },
  {
    icon: Shield,
    title: 'Control y trazabilidad',
    description: 'Visibilidad completa de cada transacción y tarjeta en tiempo real.',
    gradient: 'from-gray-400 to-gray-500 dark:from-gray-600 dark:to-gray-700',
  },
  {
    icon: Plug,
    title: 'Integración sencilla',
    description: 'API REST moderna que se conecta fácilmente con tus sistemas existentes.',
    gradient: 'from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900',
  },
  {
    icon: Lock,
    title: 'Seguridad y cumplimiento',
    description: 'Infraestructura certificada con los más altos estándares de seguridad financiera.',
    gradient: 'from-gray-500 to-gray-600 dark:from-gray-600 dark:to-gray-700',
  },
  {
    icon: TrendingUp,
    title: 'Escalabilidad',
    description: 'Crece sin límites. Nuestra infraestructura se adapta a tu volumen de operación.',
    gradient: 'from-gray-300 to-gray-500 dark:from-gray-700 dark:to-gray-800',
  },
];

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        className="h-full p-5 sm:p-6 lg:p-7 rounded-2xl backdrop-blur-2xl bg-white/50 dark:bg-black/50 border border-white/30 dark:border-gray-700/30 shadow-xl relative overflow-hidden"
        whileHover={{ 
          scale: 1.02,
          y: -4,
          boxShadow: '0 30px 80px rgba(0,0,0,0.2)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Gradient glow on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0`}
          animate={{ opacity: isHovered ? 0.15 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10">
          <motion.div
            className={`w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6 }}
          >
            <benefit.icon className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white dark:text-gray-900" />
          </motion.div>

          <h3 className="text-base sm:text-lg lg:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
            {benefit.title}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {benefit.description}
          </p>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-gray-200/20 dark:from-gray-700/20 to-transparent rounded-bl-full" />
        
        {/* Glass reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 dark:from-white/5 dark:via-transparent dark:to-white/0 pointer-events-none rounded-3xl" />
      </motion.div>

      {/* Floating particle */}
      <motion.div
        className="absolute -top-2 -right-2 w-3 h-3 bg-gray-400 dark:bg-gray-600 rounded-full blur-sm"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: index * 0.3,
        }}
      />
    </motion.div>
  );
}

export function BenefitsAnimated() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="beneficios" ref={ref} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-light bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent mb-3 sm:mb-4">
            Beneficios clave
          </h2>
          <p className="text-base sm:text-lg lg:text-lg text-gray-600 dark:text-gray-400 px-4">
            Todo lo que necesitas para gestionar tu programa de tarjetas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-5">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
