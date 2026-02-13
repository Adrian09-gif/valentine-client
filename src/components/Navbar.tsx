import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Navbar Component
 * Design: Romantic Maximalist Elegance
 * - Transparent on initial load, becomes solid on scroll
 * - Elegant, minimal design with romantic colors
 * - Sticky positioning for easy navigation
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.div
          className="text-2xl font-playfair font-bold text-primary"
          whileHover={{ scale: 1.05 }}
        >
          ❤️
        </motion.div>
        <div className="text-sm text-foreground/60 font-poppins">
          To my Butchicccc
        </div>
      </div>
    </motion.nav>
  );
}
