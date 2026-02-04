'use client';

import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';

const logoBlack = '/assets/8e08f8e62548425109b6c90d1381d40cded9e69c.png';
const logoWhite = '/assets/926a13cb5bedd32726567b04d34dbe8a2b14fbfa.png';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export function Header({ isDark, setIsDark }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-white/40 dark:bg-black/40 border-b border-white/20 dark:border-gray-800/20"
      style={{
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo oficial de Krdia - negro en light, blanco en dark */}
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <motion.img 
            key={isDark ? 'logo-white' : 'logo-black'}
            src={isDark ? logoWhite : logoBlack}
            alt="Krdia"
            className="h-8 w-auto select-none"
            draggable="false"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {['Producto', 'Beneficios', 'Cómo funciona', 'Contacto'].map((item, index) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-').replace('ó', 'o'))}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative group"
              whileHover={{ scale: 1.05 }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-400 dark:to-gray-600 group-hover:w-full transition-all duration-300" />
            </motion.button>
          ))}
        </nav>

        <motion.button
          onClick={() => setIsDark(!isDark)}
          className="relative p-3 rounded-xl backdrop-blur-xl bg-white/30 dark:bg-black/30 border border-white/20 dark:border-gray-700/20 hover:bg-white/50 dark:hover:bg-black/50 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400 }}
          aria-label="Toggle theme"
        >
          <motion.div
            initial={false}
            animate={{ rotate: isDark ? 180 : 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </motion.div>
        </motion.button>
      </div>
    </motion.header>
  );
}
