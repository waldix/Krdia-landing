'use client';

import { motion } from 'motion/react';
import { FileText, Send, CreditCard, BarChart3, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    number: '01',
    title: 'Define tu programa',
    description: 'Configura los parámetros de tu programa de tarjetas: límites, vigencia, usuarios.',
    color: 'from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800',
  },
  {
    icon: Send,
    number: '02',
    title: 'Integra y dispersa',
    description: 'Conecta tu sistema vía API y realiza la dispersión masiva de tarjetas en minutos.',
    color: 'from-gray-400 to-gray-500 dark:from-gray-600 dark:to-gray-700',
  },
  {
    icon: CreditCard,
    number: '03',
    title: 'Activa y distribuye',
    description: 'Las tarjetas se emiten y activan automáticamente. Tus usuarios están listos para usar.',
    color: 'from-gray-500 to-gray-600 dark:from-gray-500 dark:to-gray-600',
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Monitorea en tiempo real',
    description: 'Dashboard completo con métricas, alertas y reportería detallada de todas las operaciones.',
    color: 'from-gray-600 to-gray-700 dark:from-gray-400 dark:to-gray-500',
  },
];

export function HowItWorksHorizontal() {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-gray-300 to-transparent dark:from-gray-700 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 sm:mb-16 lg:mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent mb-4 sm:mb-6">
            Cómo funciona
          </h2>
          <p className="text-base sm:text-lg lg:text-lg text-gray-600 dark:text-gray-400 px-4">
            Cuatro pasos para implementar tu programa de dispersión
          </p>
        </motion.div>
      </div>

      {/* Mobile: Vertical grid / Desktop: Grid */}
      <div className="relative px-4 sm:px-0">
        {/* Mobile/Tablet: Vertical grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:hidden px-0 sm:px-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-5 sm:p-6 rounded-2xl backdrop-blur-2xl bg-gradient-to-br from-white/60 via-white/50 to-white/40 dark:from-black/60 dark:via-black/50 dark:to-black/40 border border-white/40 dark:border-gray-700/40 shadow-xl overflow-hidden">
                {/* Number watermark */}
                <div className="absolute top-2 right-3 text-5xl sm:text-6xl font-light text-gray-200/30 dark:text-gray-800/30 select-none leading-none">
                  {step.number}
                </div>

                <div className="relative z-10 space-y-3 sm:space-y-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} shadow-lg`}>
                    <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white dark:text-gray-900" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-medium text-gray-900 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden lg:block max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-4 xl:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="relative h-full p-5 xl:p-6 rounded-2xl backdrop-blur-2xl bg-gradient-to-br from-white/60 via-white/50 to-white/40 dark:from-black/60 dark:via-black/50 dark:to-black/40 border border-white/40 dark:border-gray-700/40 shadow-xl"
                >
                  {/* Number watermark */}
                  <div className="absolute top-3 right-3 text-4xl xl:text-5xl font-light text-gray-200/20 dark:text-gray-800/20 select-none leading-none">
                    {step.number}
                  </div>

                  <div className="relative z-10 space-y-3">
                    <div className={`inline-flex items-center justify-center w-10 xl:w-12 h-10 xl:h-12 rounded-xl bg-gradient-to-br ${step.color} shadow-lg`}>
                      <step.icon className="w-5 xl:w-6 h-5 xl:h-6 text-white dark:text-gray-900" />
                    </div>

                    <h3 className="text-base xl:text-lg font-medium text-gray-900 dark:text-white">
                      {step.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Connector arrow between cards */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-2 xl:-right-3 -translate-y-1/2 z-10">
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}
