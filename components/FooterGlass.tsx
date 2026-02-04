'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export function FooterGlass() {
  return (
    <footer className="backdrop-blur-xl bg-white/30 dark:bg-black/30 border-t border-white/20 dark:border-gray-800/20 px-4 sm:px-6 py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          <motion.div 
            className="col-span-2 md:col-span-1 space-y-3 sm:space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-400 dark:to-gray-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white dark:text-gray-900 font-bold text-base sm:text-lg">K</span>
              </div>
              <span className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Krdia
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Dispersión de tarjetas para empresas. Ágil, seguro, escalable.
            </p>
          </motion.div>

          {[
            {
              title: 'Producto',
              links: [
                { label: 'Características', href: '#producto' },
                { label: 'Precios', href: '#' },
                { label: 'Documentación API', href: '#' },
              ],
            },
            {
              title: 'Empresa',
              links: [
                { label: 'Acerca de', href: '#' },
                { label: 'Blog', href: '#' },
                { label: 'Carreras', href: '#' },
              ],
            },
            {
              title: 'Legal',
              links: [
                { label: 'Términos y condiciones', href: '/terminos-y-condiciones' },
                { label: 'Aviso de Privacidad', href: '/aviso-de-privacidad' },
                { label: 'Cumplimiento', href: '#' },
              ],
            },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="font-medium text-sm sm:text-base text-gray-900 dark:text-white mb-3 sm:mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <motion.span
                        className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
                        whileHover={{ x: 2 }}
                      >
                        {link.label}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="pt-6 sm:pt-8 border-t border-gray-200/50 dark:border-gray-800/50 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
            © 2026 Krdia. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {['LinkedIn', 'Twitter', 'contacto@krdia.tech'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
