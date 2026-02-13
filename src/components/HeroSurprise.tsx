import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * Hero Surprise Section
 * Design: Romantic Maximalist Elegance
 * - Full-screen layout with romantic gradient background
 * - Subtle tulip silhouettes in background
 * - Cinematic headline with elegant typography
 * - Smooth reveal transition on button click
 */

interface HeroSurpriseProps {
  onReveal: () => void;
}

export default function HeroSurprise({ onReveal }: HeroSurpriseProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with gradient and subtle tulip pattern */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(135deg, #3a0c1a74 0%, #823d2d53 50%, #F5D5D0 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
          variants={itemVariants}
        >
          I Made Something Special for You
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-white/90 mb-12 font-poppins drop-shadow-md max-w-2xl mx-auto"
          variants={itemVariants}
        >
          A digital surprise filled with moments we cherish
        </motion.p>

        <motion.button
          onClick={onReveal}
          className="bg-white text-primary px-8 sm:px-10 py-3 sm:py-4 rounded-full font-poppins font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Tap to Open Your Surprise
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
