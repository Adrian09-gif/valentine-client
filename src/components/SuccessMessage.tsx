import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Success Message Component
 * Design: Romantic Maximalist Elegance
 * - Celebratory confetti animation
 * - Heart particles floating
 * - Joyful message display
 */

interface SuccessMessageProps {
  onComplete: () => void;
}

export default function SuccessMessage({ onComplete }: SuccessMessageProps) {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    // Generate confetti particles
    const particles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.3,
    }));
    setConfetti(particles);

    // Auto-complete after 3 seconds
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Confetti particles */}
      {confetti.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-3xl"
          style={{ left: `${particle.left}%`, top: '-50px' }}
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: window.innerHeight + 100,
            opacity: 0,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: 2 + Math.random(),
            delay: particle.delay,
            ease: 'easeIn',
          }}
        >
          {['🎉', '💕', '❤️', '✨', '💖'][Math.floor(Math.random() * 5)]}
        </motion.div>
      ))}

      {/* Success Message */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h3
          className="font-playfair text-5xl sm:text-6xl text-primary mb-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          I love you so much baby ko!❤️
        </motion.h3>
      </motion.div>
    </motion.div>
  );
}
