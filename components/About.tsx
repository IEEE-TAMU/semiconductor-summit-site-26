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

      {/* Floating Attendance Bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={{
          rotate: [0, -5, 5, -5, 0],
          y: [0, -10, 10, -10, 0],
        }}
        transition={{
          opacity: { delay: 0.5, type: 'spring', stiffness: 200 },
          scale: { delay: 0.5, type: 'spring', stiffness: 200 },
          rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute top-8 left-8 md:top-12 md:left-12 z-20 bg-red-800 text-white px-6 py-4 rounded-2xl shadow-2xl transform rotate-[-8deg]"
      >
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold">500+</div>
          <div className="text-sm md:text-base font-medium">Attendees</div>
          <div className="text-xs text-red-200 mt-1">Previous Summit</div>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <AboutHeader />

        {/* Carousel Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
