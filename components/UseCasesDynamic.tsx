'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { Briefcase, Award, Plane, Building2 } from 'lucide-react';
import { useInView } from './hooks/useInView';
import { useRef } from 'react';

const useCases = [
  {
    icon: Briefcase,
    title: 'Nómina',
    description: 'Dispersa pagos de nómina de forma puntual y segura a todos tus colaboradores.',
    gradient: 'from-gray-300 via-gray-400 to-gray-500 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900',
  },
  {
    icon: Award,
    title: 'Incentivos',
    description: 'Implementa programas de bonos, comisiones y reconocimientos con tarjetas prepagadas.',
    gradient: 'from-gray-400 via-gray-500 to-gray-600 dark:from-gray-600 dark:via-gray-700 dark:to-gray-800',
  },
  {
    icon: Plane,
    title: 'Viáticos',
    description: 'Gestiona gastos de viaje y viáticos con control total y reportes automáticos.',
    gradient: 'from-gray-200 via-gray-300 to-gray-400 dark:from-gray-800 dark:via-gray-900 dark:to-black',
  },
  {
    icon: Building2,
    title: 'Programas corporativos',
    description: 'Beneficios para empleados, tarjetas de regalo y programas de fidelización empresarial.',
    gradient: 'from-gray-500 via-gray-600 to-gray-700 dark:from-gray-600 dark:via-gray-700 dark:to-gray-800',
  },
];

export function UseCasesDynamic() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);

  return (
    <section ref={containerRef} className="py-16 sm:py-24 lg:py-40 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated diagonal stripe */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16 lg:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent mb-4 sm:mb-6">
            Casos de uso
          </h2>
          <p className="text-base sm:text-lg lg:text-lg text-gray-600 dark:text-gray-400 px-4">
            Soluciones para diferentes necesidades empresariales
          </p>
        </motion.div>

        <motion.div 
          style={{ rotateZ: rotate }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -80 : 80, 
                rotateY: index % 2 === 0 ? -20 : 20,
                scale: 0.9,
              }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0, scale: 1 } : {}}
              transition={{ 
                duration: 1, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ 
                scale: 1.03,
                rotateZ: index % 2 === 0 ? 1 : -1,
              }}
              className="group relative"
            >
              <div className="h-full p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[2rem] backdrop-blur-2xl bg-gradient-to-br from-white/50 via-white/40 to-white/30 dark:from-black/50 dark:via-black/40 dark:to-black/30 border border-white/30 dark:border-gray-700/30 shadow-2xl hover:shadow-3xl transition-all duration-700 relative overflow-hidden">
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
                />

                {/* Floating orb */}
                <motion.div
                  className={`absolute -top-8 sm:-top-16 -right-8 sm:-right-16 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-br ${useCase.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                <div className="relative z-10 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 lg:gap-8">
                  <motion.div
                    className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-xl"
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                  >
                    <useCase.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-gray-700 dark:text-gray-300" />
                  </motion.div>

                  <div className="flex-1 space-y-2 sm:space-y-3 lg:space-y-4">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900 dark:text-white">
                      {useCase.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent -translate-x-full"
                  animate={{
                    translateX: ['100%', '-100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2 + index * 0.5,
                    ease: 'easeInOut',
                  }}
                />

                {/* Glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 dark:from-white/5 dark:via-transparent dark:to-white/0 pointer-events-none rounded-[2rem]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
