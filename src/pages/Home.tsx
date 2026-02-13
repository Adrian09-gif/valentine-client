import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSurprise from '@/components/HeroSurprise';
import LoveLetter from '@/components/LoveLetter';
import Favorites from '@/components/Favorites';
import ValentineQuestion from '@/components/ValentineQuestion';
import FinalEnding from '@/components/FinalEnding';
import SuccessMessage from '@/components/SuccessMessage';

/**
 * Home Page - Valentine's Day Surprise Website
 * Design: Romantic Maximalist Elegance
 * - Full-page scroll experience
 * - Multiple sections revealing the surprise
 * - Interactive Valentine's question
 * - Joyful ending celebration
 */

export default function Home() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showEnding, setShowEnding] = useState(false);

  const handleReveal = () => {
    // Smooth scroll to love letter section
    const element = document.getElementById('love-letter');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleYes = () => {
    setShowSuccess(true);
  };

  const handleSuccessComplete = () => {
    setShowSuccess(false);
    setShowEnding(true);
    // Scroll to ending
    setTimeout(() => {
      const element = document.getElementById('ending');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      <Navbar />


 {/* Valentine Question Section */}
      <ValentineQuestion onYes={handleYes} />

      {/* Hero Section */}
      <HeroSurprise onReveal={handleReveal} />
 
      {/* Love Letter Section */}
      <div id="love-letter">
        <LoveLetter />
      </div>

      {/* Favorites Section */}
      <Favorites />

      {/* Final Ending Section */}
      <AnimatePresence>
        {showEnding && (
          <motion.div
            id="ending"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FinalEnding />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Message Overlay */}
      <AnimatePresence>
        {showSuccess && <SuccessMessage onComplete={handleSuccessComplete} />}
      </AnimatePresence>
    </div>
  );
}
