'use client';

import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';

export function FinalCTADynamic() {
  return (
    <section id="contacto" className="relative py-16 sm:py-24 lg:py-40 px-4 sm:px-6 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-950 dark:to-gray-900">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(156, 163, 175, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(156, 163, 175, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(156, 163, 175, 0.4) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8 lg:space-y-10"
        >
          <motion.div
            animate={{
              textShadow: [
                '0 0 30px rgba(255,255,255,0.1)',
                '0 0 50px rgba(255,255,255,0.2)',
                '0 0 30px rgba(255,255,255,0.1)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3 sm:mb-4 lg:mb-6">
              Comienza a dispersar
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white">
              tarjetas hoy
            </h2>
          </motion.div>
          
          <p className="text-base sm:text-lg lg:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Agenda una demo personalizada y descubre cómo Krdia puede transformar 
            la gestión de tarjetas en tu empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 justify-center pt-4 sm:pt-6 lg:pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 bg-white text-gray-900 rounded-xl sm:rounded-2xl font-semibold overflow-hidden shadow-2xl"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
              <span className="relative z-10 inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                Solicitar demo
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
              </span>
              
              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-xl sm:rounded-2xl bg-white"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 backdrop-blur-xl bg-white/20 border-2 border-white/40 text-white rounded-xl sm:rounded-2xl font-semibold hover:bg-white/30 transition-all shadow-2xl text-sm sm:text-base lg:text-lg"
            >
              Contactar a ventas
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="pt-6 sm:pt-8 lg:pt-12"
          >
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
              ¿Tienes preguntas? Estamos aquí para ayudarte
            </p>
            <a 
              href="mailto:hola@krdia.tech" 
              className="inline-flex items-center gap-2 text-sm sm:text-base lg:text-lg text-white hover:text-gray-300 transition-colors underline decoration-gray-500 hover:decoration-gray-300"
            >
              hola@krdia.tech
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
