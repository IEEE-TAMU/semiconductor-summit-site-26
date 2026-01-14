'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CarouselItem {
  number: number;
  title: string;
  description: string;
  image: string;
}

interface CardStackCarouselProps {
  items: CarouselItem[];
  activeIndex: number;
  onCardClick: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function CardStackCarousel({
  items,
  activeIndex,
  onCardClick,
  onPrevious,
  onNext,
  onMouseEnter,
  onMouseLeave,
}: CardStackCarouselProps) {
  const getCardStyle = (index: number) => {
    const offset = (index - activeIndex + items.length) % items.length;

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

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-4"
    >
      <div
        className="relative h-96 md:h-[500px]"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="relative w-full h-full">
          {items.map((item, index) => {
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
                onClick={() => onCardClick(index)}
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
          onClick={onPrevious}
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
          onClick={onNext}
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
  );
}

