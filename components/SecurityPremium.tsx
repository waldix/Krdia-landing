'use client';

import { motion } from 'motion/react';
import { ShieldCheck, Lock, FileCheck, Server } from 'lucide-react';
import { useInView } from './hooks/useInView';

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: 'PCI DSS',
    description: 'Certificación nivel 1',
  },
  {
    icon: Lock,
    title: 'Encriptación',
    description: 'TLS 1.3 y AES-256',
  },
  {
    icon: FileCheck,
    title: 'Cumplimiento',
    description: 'Regulación local',
  },
  {
    icon: Server,
    title: 'Infraestructura',
    description: '99.9% uptime SLA',
  },
];

export function SecurityPremium() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-40 px-6 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-gray-400 to-transparent dark:from-gray-600 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-gray-300 to-transparent dark:from-gray-700 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl lg:text-7xl font-light bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent mb-6">
            Seguridad y confianza
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400">
            Infraestructura certificada y cumplimiento normativo garantizado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="text-center group"
            >
              <motion.div
                className="inline-flex items-center justify-center w-28 h-28 rounded-3xl backdrop-blur-xl bg-white/60 dark:bg-black/60 border-2 border-white/40 dark:border-gray-700/40 shadow-2xl mb-6 relative overflow-hidden"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gray-300/50 to-gray-400/50 dark:from-gray-600/50 dark:to-gray-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <feature.icon className="w-12 h-12 text-gray-700 dark:text-gray-300 relative z-10" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="backdrop-blur-3xl bg-gradient-to-br from-white/60 via-white/50 to-white/40 dark:from-black/60 dark:via-black/50 dark:to-black/40 rounded-[2rem] p-16 border border-white/30 dark:border-gray-700/30 shadow-2xl text-center relative overflow-hidden"
        >
          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-[2rem]"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(156, 163, 175, 0.4), transparent)',
            }}
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed relative z-10"
          >
            Krdia opera con los más altos estándares de seguridad de la industria financiera. 
            Nuestra infraestructura está diseñada para proteger cada transacción y garantizar 
            el cumplimiento de las regulaciones locales e internacionales.
          </motion.p>

          {/* Glass reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 dark:from-white/10 dark:via-transparent dark:to-white/5 pointer-events-none rounded-[2rem]" />
        </motion.div>
      </div>
    </section>
  );
}