'use client';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselItem {
  number: number;
  title: string;
  description: string;
  image: string;
}

interface CarouselContentProps {
  items: CarouselItem[];
  activeIndex: number;
  onDotClick: (index: number) => void;
}

export default function CarouselContent({
  items,
  activeIndex,
  onDotClick,
}: CarouselContentProps) {
  const activeItem = items[activeIndex];

  return (
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
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
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
  );
}

