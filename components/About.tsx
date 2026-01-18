'use client';
import { motion } from 'framer-motion';
import { useCarousel } from '@/hooks/useCarousel';
import AboutHeader from './AboutHeader';
import AboutBackground from './AboutBackground';
import CarouselContent from './CarouselContent';
import CardStackCarousel from './CardStackCarousel';

interface CarouselItem {
  number: number;
  title: string;
  description: string;
  image: string;
}

const carouselItems: CarouselItem[] = [
  {
    number: 1,
    title: 'Keynotes',
    description:
      'Gain unique perspectives from a diverse lineup of speakers, including veterans from major tech giants and pioneers from agile startups. We cover the full hardware stack, from logic design to manufacturing.',
    image: '/images/speaker.jpg',
  },
  {
    number: 2,
    title: 'Panels',
    description:
      'Go beyond the headlines with discussions that dissect current trends. Our panels offer a comprehensive look at the technologies driving the semiconductor renaissance.',
    image: '/images/panel.jpg',
  },
  {
    number: 3,
    title: 'Interactive Exhibition',
    description:
      'Experience the industry\'s latest innovations up close. The exhibition hall is the primary hub for networking, offering a dedicated space to meet industry members, discuss new tech, and explore career opportunities.',
    image: '/images/interaction.jpg',
  },
];

export default function About() {
  const {
    activeIndex,
    setIsPaused,
    goToIndex,
    goToPrevious,
    goToNext,
  } = useCarousel({
    itemCount: carouselItems.length,
  });

  return (
    <section
      id="about"
      className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden"
    >
      <AboutBackground />

      <div className="relative z-10 max-w-5xl mx-auto">
        <AboutHeader />

        {/* Prominent Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16 md:mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* 500+ Attendees Stat */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-50 rounded-2xl shadow-2xl border-4 border-red-200 p-6 md:p-8 lg:p-10">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgb(220 38 38) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }} />
                </div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Large number with gradient */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5, type: 'spring', stiffness: 200 }}
                  >
                    <div className="relative">
                      <div className="text-6xl md:text-7xl lg:text-8xl font-black leading-none bg-gradient-to-br from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                        500+
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl font-black leading-none text-red-400/20 blur-xl">
                        500+
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Text content */}
                  <div className="mt-4">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
                      Attendees
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 font-semibold mb-3">
                      Previous Summit
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <motion.div 
                        className="w-12 h-1.5 bg-red-800 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '3rem' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                      />
                      <motion.div 
                        className="w-8 h-1.5 bg-red-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '2rem' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      />
                      <motion.div 
                        className="w-5 h-1.5 bg-red-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '1.25rem' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Decorative gradient orbs */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-300 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-0 left-0 w-28 h-28 bg-red-200 rounded-full blur-3xl opacity-25" />
              </div>
            </motion.div>

            {/* 15+ Companies Stat */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-50 rounded-2xl shadow-2xl border-4 border-red-200 p-6 md:p-8 lg:p-10">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgb(220 38 38) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }} />
                </div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Large number with gradient */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6, type: 'spring', stiffness: 200 }}
                  >
                    <div className="relative">
                      <div className="text-6xl md:text-7xl lg:text-8xl font-black leading-none bg-gradient-to-br from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                        15+
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl font-black leading-none text-red-400/20 blur-xl">
                        15+
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Text content */}
                  <div className="mt-4">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
                      Companies
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 font-semibold mb-3">
                      Participating
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <motion.div 
                        className="w-12 h-1.5 bg-red-800 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '3rem' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      />
                      <motion.div 
                        className="w-8 h-1.5 bg-red-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '2rem' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                      />
                      <motion.div 
                        className="w-5 h-1.5 bg-red-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '1.25rem' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Decorative gradient orbs */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-300 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-0 left-0 w-28 h-28 bg-red-200 rounded-full blur-3xl opacity-25" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Carousel Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <CarouselContent
            items={carouselItems}
            activeIndex={activeIndex}
            onDotClick={goToIndex}
          />

          <CardStackCarousel
            items={carouselItems}
            activeIndex={activeIndex}
            onCardClick={goToIndex}
            onPrevious={goToPrevious}
            onNext={goToNext}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          />
        </div>
      </div>
    </section>
  );
}
