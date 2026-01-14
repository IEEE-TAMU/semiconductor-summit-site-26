'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselItem {
  number: number;
  title: string;
  description: string;
  image: string;
}

const carouselItems: CarouselItem[] = [
  {
    number: 1,
    title: 'Visionary Keynotes',
    description:
      'Gain unique perspectives from a diverse lineup of speakers, including veterans from major tech giants and pioneers from agile startups. We cover the full hardware stack, from logic design to manufacturing.',
    image: '/images/panel.jpg',
  },
  {
    number: 2,
    title: 'Trend-Focused Panels',
    description:
      'Go beyond the headlines with discussions that dissect current trends. Our panels offer a comprehensive look at the technologies driving the semiconductor renaissance.',
    image: '/images/crowd.jpg',
  },
  {
    number: 3,
    title: 'Interactive Exhibition',
    description:
      'Experience the industry\'s latest innovations up close. The exhibition hall is the primary hub for networking, offering a dedicated space to meet industry members, discuss new tech, and explore career opportunities.',
    image: '/images/panel.jpg',
  },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotation logic
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % carouselItems.length);
      }, 7000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const goToIndex = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    // Resume after 10 seconds of inactivity
    setTimeout(() => setIsPaused(false), 10000);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % carouselItems.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const getCardStyle = (index: number) => {
    const offset = (index - activeIndex + carouselItems.length) % carouselItems.length;
    
    if (offset === 0) {
      // Active card
      return {
        zIndex: 30,
        rotate: 0,
        y: 0,
        x: 0,
        opacity: 1,
        scale: 1,
      };
    } else if (offset === 1) {
      // First card behind
      return {
        zIndex: 20,
        rotate: 10,
        y: -25,
        x: 20,
        opacity: 0.7,
        scale: 0.95,
      };
    } else {
      // Second card behind
      return {
        zIndex: 10,
        rotate: 18,
        y: -45,
        x: 35,
        opacity: 0.5,
        scale: 0.9,
      };
    }
  };

  const activeItem = carouselItems[activeIndex];

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/crowd.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[url('/images/about-background.jpg')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            About the Summit
          </h2>
          <div className="w-24 h-1 bg-red-800 mx-auto" />
        </motion.div>

        {/* Carousel Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Numbered Item Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {activeItem.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {activeItem.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex gap-3 mt-8">
              {carouselItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex
                      ? 'w-12 h-3 bg-red-800'
                      : 'w-3 h-3 bg-gray-400 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to item ${item.number}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Card Stack Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div
              className="relative h-96 md:h-[500px]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative w-full h-full">
              {carouselItems.map((item, index) => {
                const style = getCardStyle(index);
                const isActive = index === activeIndex;
                
                return (
                  <motion.div
                    key={index}
                    initial={false}
                    animate={{
                      rotate: style.rotate,
                      y: style.y,
                      x: style.x,
                      opacity: style.opacity,
                      scale: style.scale,
                      zIndex: style.zIndex,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => goToIndex(index)}
                    style={{
                      transformOrigin: 'center center',
                    }}
                  >
                    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        priority={isActive}
                      />
                    </div>
                  </motion.div>
                );
              })}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4">
              <button
                onClick={goToPrevious}
                className="w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
