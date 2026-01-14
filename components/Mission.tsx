'use client';
import { motion } from 'framer-motion';

export default function Mission() {
  return (
    <section
      id="mission"
      className="relative py-6 md:py-10 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Our Mission
          </h2>
          <div className="w-16 h-0.5 bg-red-800 mx-auto" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Large decorative quote marks */}
          <div className="relative">
            {/* Opening quote */}
            <div className="absolute -top-4 -left-2 md:-left-4 text-red-800/20 font-serif text-6xl md:text-8xl leading-none select-none">
              &ldquo;
            </div>
            
            {/* Mission statement text */}
            <blockquote className="relative z-10 pt-4 pb-3 px-4 md:px-6">
              <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-800 leading-relaxed italic">
                Furthering the semiconductor industry by connecting the next generation of engineers with professionals and leaders in the field
              </p>
            </blockquote>
            
            {/* Closing quote */}
            <div className="absolute -bottom-2 -right-2 md:-right-4 text-red-800/20 font-serif text-6xl md:text-8xl leading-none select-none">
              &rdquo;
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

