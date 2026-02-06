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
    <section ref={containerRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
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
          className="text-center mb-8 sm:mb-12 lg:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-light bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent mb-3 sm:mb-4">
            Casos de uso
          </h2>
          <p className="text-base sm:text-lg lg:text-lg text-gray-600 dark:text-gray-400">
            Soluciones para diferentes necesidades empresariales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-5">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group"
            >
              <div className="h-full p-5 xl:p-6 rounded-2xl backdrop-blur-2xl bg-gradient-to-br from-white/50 via-white/40 to-white/30 dark:from-black/50 dark:via-black/40 dark:to-black/30 border border-white/30 dark:border-gray-700/30 shadow-xl relative overflow-hidden">
                <div className="relative z-10 space-y-3">
                  <div
                    className={`inline-flex items-center justify-center w-10 xl:w-12 h-10 xl:h-12 rounded-xl bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg`}
                  >
                    <useCase.icon className="w-5 xl:w-6 h-5 xl:h-6 text-gray-700 dark:text-gray-300" />
                  </div>

                  <h3 className="text-base xl:text-lg font-medium text-gray-900 dark:text-white">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
