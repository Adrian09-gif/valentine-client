import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * Valentine Question Section
 * Design: Romantic Maximalist Elegance
 * - Centered layout with deep red background
 * - Playful No button that moves away or changes text
 * - Yes button triggers confetti and success message
 * - Cute and charming, not frustrating
 */

interface ValentineQuestionProps {
  onYes: () => void;
}

export default function ValentineQuestion({ onYes }: ValentineQuestionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [noClickCount, setNoClickCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const noMessages = [
    'Are you sure?',
    'Really sure?',
    'Last chance',
    'You know you want to...',
    'Come on!',
  ];

  const handleNoClick = () => {
    if (noClickCount < 3) {
      // Move the button away
      const randomX = (Math.random() - 0.5) * 200;
      const randomY = (Math.random() - 0.5) * 200;
      setNoPosition({ x: randomX, y: randomY });
    }
    setNoClickCount(noClickCount + 1);

    // After 3 clicks, make it lead to yes
    if (noClickCount >= 4) {
      onYes();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full flex items-center justify-center py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #3a0c1a74 0%, #cd4b9576 50%, #F5D5D0 100%)',
      }}
    >
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-6xl opacity-20"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-6xl opacity-20"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          ❤️
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2
          className="font-playfair text-5xl sm:text-6xl md:text-7xl text-white mb-8 drop-shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Will you be my Valentine?
        </motion.h2>

        <motion.p
          className="text-xl sm:text-2xl text-white/90 mb-12 font-poppins drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          
        </motion.p>

        {/* Buttons Container */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {/* Yes Button */}
          <motion.button
            onClick={onYes}
            className="px-10 py-4 bg-white text-primary rounded-full font-playfair font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            YES 
          </motion.button>

          {/* No Button - Playful */}
          <motion.button
            onClick={handleNoClick}
            className="px-10 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-playfair font-bold text-xl border-2 border-white/50 hover:border-white transition-all duration-300"
            animate={{
              x: noPosition.x,
              y: noPosition.y,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {noClickCount > 3 ? 'Okay, YES! 😄' : noMessages[Math.min(noClickCount, noMessages.length - 1)]}
          </motion.button>
        </motion.div>

        {/* Encouraging message */}
        {noClickCount > 0 && noClickCount <= 3 && (
          <motion.p
            className="mt-8 text-white/80 font-poppins text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            You can't escape this one! 😉
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
