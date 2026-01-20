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

        {/* Prominent Attendance Stat */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16 md:mb-20"
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-50 rounded-2xl md:rounded-3xl shadow-2xl border-4 border-red-200 p-8 md:p-12 lg:p-16">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgb(220 38 38) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }} />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              {/* Large number with gradient */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 200 }}
                className="text-center md:text-left"
              >
                <div className="relative">
                  <div className="text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-black leading-none bg-gradient-to-br from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                    500+
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-black leading-none text-red-400/20 blur-xl">
                    500+
                  </div>
                </div>
              </motion.div>
              
              {/* Text content */}
              <div className="text-center md:text-left flex-1 max-w-md">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 tracking-tight">
                  Attendees
                </h3>
                <p className="text-lg md:text-xl text-gray-600 font-semibold mb-4">
                  Previous Summit
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <motion.div 
                    className="w-16 h-1.5 bg-red-800 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '4rem' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                  <motion.div 
                    className="w-10 h-1.5 bg-red-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '2.5rem' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  />
                  <motion.div 
                    className="w-6 h-1.5 bg-red-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '1.5rem' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative gradient orbs */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-300 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-200 rounded-full blur-3xl opacity-25" />
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
