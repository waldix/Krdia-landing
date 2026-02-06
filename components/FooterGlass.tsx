'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const logoBlack = '/assets/8e08f8e62548425109b6c90d1381d40cded9e69c.png';
const logoWhite = '/assets/926a13cb5bedd32726567b04d34dbe8a2b14fbfa.png';

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
            <div className="flex items-center">
              <img 
                src={logoBlack}
                alt="Krdia"
                className="h-6 sm:h-7 w-auto select-none dark:hidden"
                draggable={false}
              />
              <img 
                src={logoWhite}
                alt="Krdia"
                className="h-6 sm:h-7 w-auto select-none hidden dark:block"
                draggable={false}
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Dispersión de tarjetas para empresas. Ágil, seguro, escalable.
            </p>
          </motion.div>

          {[
            {
              title: 'Producto',
              links: [
                { label: 'Documentación API', href: '#' },
                { label: 'Soporte', href: '/soporte' },
              ],
            },
            {
              title: 'Empresa',
              links: [
                { label: 'Acerca de', href: '#' },
                { label: 'Blog', href: '#' },
              ],
            },
            {
              title: 'Legal',
              links: [
                { label: 'Términos y condiciones', href: '/terminos-y-condiciones' },
                { label: 'Aviso de Privacidad', href: '/aviso-de-privacidad' },
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
          <motion.a
            href="mailto:contacto@krdia.tech"
            className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            whileHover={{ y: -2 }}
          >
            contacto@krdia.tech
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
