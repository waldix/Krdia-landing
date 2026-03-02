'use client';

import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';

export function FinalCTADynamic() {
  return (
    <section id="contacto" className="relative py-40 px-6 overflow-hidden">
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

      {/* Floating particles - fixed positions to avoid hydration mismatch */}
      {[
        { left: 10, top: 15, duration: 3.5, delay: 0.2 },
        { left: 25, top: 40, duration: 4, delay: 0.8 },
        { left: 45, top: 20, duration: 3.8, delay: 1.2 },
        { left: 60, top: 70, duration: 4.2, delay: 0.5 },
        { left: 80, top: 30, duration: 3.6, delay: 1.5 },
        { left: 15, top: 80, duration: 4.5, delay: 0.3 },
        { left: 35, top: 55, duration: 3.2, delay: 1.8 },
        { left: 70, top: 10, duration: 4.8, delay: 0.6 },
        { left: 90, top: 50, duration: 3.4, delay: 1.1 },
        { left: 5, top: 60, duration: 4.1, delay: 1.9 },
        { left: 50, top: 85, duration: 3.7, delay: 0.4 },
        { left: 75, top: 45, duration: 4.3, delay: 1.4 },
      ].map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
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
            <h2 className="text-6xl lg:text-7xl font-light text-white mb-6">
              Administra tus pagos
            </h2>
            <h2 className="text-6xl lg:text-7xl font-normal text-white">
              con tarjetas de servicio
            </h2>
          </motion.div>
          
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Agenda una demo personalizada y descubre cómo Krdex puede optimizar 
            la administración de pagos y consumos en tu empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-6 bg-white text-gray-900 rounded-2xl font-semibold overflow-hidden shadow-2xl"
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
              <span className="relative z-10 inline-flex items-center gap-3 text-lg">
                <Zap className="w-5 h-5" />
                Solicitar demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
              
              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-white"
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
              className="px-12 py-6 backdrop-blur-xl bg-white/20 border-2 border-white/40 text-white rounded-2xl font-semibold hover:bg-white/30 transition-all shadow-2xl text-lg"
            >
              Contactar a ventas
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="pt-12"
          >
            <p className="text-gray-400 mb-4">
              ¿Tienes preguntas? Estamos aquí para ayudarte
            </p>
            <a 
              href="mailto:hola@krdex.tech" 
              className="inline-flex items-center gap-2 text-lg text-white hover:text-gray-300 transition-colors underline decoration-gray-500 hover:decoration-gray-300"
            >
              hola@krdex.tech
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
