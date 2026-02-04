'use client';

import { motion } from 'motion/react';

export function FooterGlass() {
  return (
    <footer className="backdrop-blur-xl bg-white/30 dark:bg-black/30 border-t border-white/20 dark:border-gray-800/20 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-400 dark:to-gray-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white dark:text-gray-900 font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Krdia
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Dispersión de tarjetas para empresas. Ágil, seguro, escalable.
            </p>
          </motion.div>

          {[
            {
              title: 'Producto',
              links: ['Características', 'Precios', 'Documentación API'],
            },
            {
              title: 'Empresa',
              links: ['Acerca de', 'Blog', 'Carreras'],
            },
            {
              title: 'Legal',
              links: ['Términos y condiciones', 'Privacidad', 'Cumplimiento'],
            },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200/50 dark:border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2026 Krdia. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {['LinkedIn', 'Twitter', 'contacto@krdia.tech'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
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