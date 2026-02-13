import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Final Ending Section
 * Design: Romantic Maximalist Elegance
 * - Animated floating hearts and confetti
 * - Emotional final message
 * - Calm, joyful atmosphere
 * - Optional soft background music toggle
 */

export default function FinalEnding() {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random floating hearts
    const generatedHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
    }));
    setHearts(generatedHearts);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="relative min-h-screen w-full flex items-center justify-center py-20 overflow-hidden bg-gradient-to-b from-secondary/20 via-background to-primary/5">
      {/* Animated floating hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-4xl sm:text-5xl pointer-events-none"
          style={{ left: `${heart.left}%` }}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-100vh',
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 2,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {['❤️', '💕', '💖', '💗'][Math.floor(Math.random() * 4)]}
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="font-playfair text-5xl sm:text-6xl md:text-7xl text-primary mb-4">
            Happy Valentine's Day
          </h2>
          <p className="font-playfair text-3xl sm:text-4xl text-accent">
            My Baby
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <div className="h-1 w-20 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="space-y-6 text-foreground/80 font-poppins text-lg sm:text-xl leading-relaxed mb-12"
        >
          <p>
            You've just made me the happiest person in the world. 
          </p>
          <p>
            Thank you for being the love of my life, for your kindness, your laughter, and for choosing to be with me every single day.
          </p>
          <p>
            I can't wait to create a thousand more beautiful moments with you.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <p className="text-2xl font-playfair text-primary">
            Forever and always, Adobong Babsy
          </p>

          {/* Music Toggle */}
          <motion.div
            className="flex justify-center gap-4 mt-8"
            variants={itemVariants}
          >
            <button 
  onClick={() => {
    const audio = new Audio('https://dl.dropboxusercontent.com/scl/fi/avgf37b2wal0dorb84364/Balisong-320-Kbps-1.mp3?rlkey=nlvx8wueyxuqnth1vk1w7sywo&st=it3ymuvd&dl=0' );
    audio.play();
  }}
  className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full font-poppins font-semibold transition-all duration-300 border border-primary/30"
>
   Play Music
</button>

          </motion.div>
        </motion.div>

        {/* Decorative emoji */}
        <motion.div
          className="mt-12 text-6xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          
        </motion.div>
      </motion.div>
    </section>
  );
}
