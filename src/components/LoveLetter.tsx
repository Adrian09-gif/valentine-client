import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Love Letter Section
 * Design: Romantic Maximalist Elegance
 * - Centered elegant card with cream paper feel
 * - Soft shadow and rounded corners
 * - Heartfelt message with fade-in on scroll
 * - Ornamental texture background
 */

export default function LoveLetter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(/butchic1.jpg)',
          backgroundSize: 'cover',
        }}
      />

      <motion.div
        ref={ref}
        className="relative z-10 max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 border border-accent/20">
          <div className="text-center space-y-6">
            <div className="text-5xl">💌</div>
            
            <h2 className="font-playfair text-4xl md:text-5xl text-primary">
              A Letter for You
              
            </h2>

            <div className="h-1 w-16 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />

            <div className="space-y-4 text-foreground/80 font-poppins text-lg leading-relaxed">
              <p>
                i just wanted to make something simple but special for you. it’s not much, but it’s from my heart. you mean more to me than i can ever fully explain. being with you feels safe, calm, and right, like no matter how heavy my day gets, you’re always my comfort.
              </p>
              
              <p>
                loving you has never felt complicated. it just feels real. the more i know you, the more i appreciate you. you’ve become my favorite part of every day, my peace, and the person i always want to run to.
              </p>

              <p>
                this is just a small surprise for now, baby. eto lang muna ngayon baby, promise sa march 12 babawi ako. i’ll make it up to you the way you deserve. but for now, i hope you can feel even a little of how much i love you through this.
              </p>

              <p className="text-primary font-semibold pt-4">
                    i’ll always choose you. always.
    <br />
    always and all ways,
    <br />
    yours 
 
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
