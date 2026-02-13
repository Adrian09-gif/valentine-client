import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Favorites Section Component
 * Design: Two-column responsive layout with elegant image cards
 * - Left: Rd tulips with caption
 * - Right: Basque cheesecake with caption
 * - Hover scale effects and smooth animations
 * - Stacked on mobile, side-by-side on desktop
 */

export default function Favorites() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="favorites" className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Advance surprise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            
          </p>
        </motion.div>

        {/* Two-Column Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {/* Left Card - Tulips */}
          <motion.div
            variants={cardVariants}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover-scale h-196 md:h-full">
              <img
                 src="/tulips.jpg"
                alt="Your Favorite Red Tulips"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                <div className="text-center">
                  <p className="text-white text-lg font-serif font-semibold">
                    Your Favorite Flowers
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                
              </h3>
              <p className="text-gray-600">
                
              </p>
            </div>
          </motion.div>

          {/* Right Card - Cheesecake */}
          <motion.div
            variants={cardVariants}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover-scale h-96 md:h-full">
              <img
                 src="/burnt.jpg"
                alt="Basque Burnt Cheesecake"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                <div className="text-center">
                  <p className="text-white text-lg font-serif font-semibold">
                    
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                     
              </h3>
              <p className="text-gray-600">
                
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
