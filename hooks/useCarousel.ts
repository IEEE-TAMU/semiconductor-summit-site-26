import { useState, useEffect, useRef } from 'react';

interface UseCarouselProps {
  itemCount: number;
  autoRotateInterval?: number;
  pauseOnInteraction?: boolean;
  resumeAfterPause?: number;
}

export function useCarousel({
  itemCount,
  autoRotateInterval = 7000,
  pauseOnInteraction = true,
  resumeAfterPause = 10000,
}: UseCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotation logic
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % itemCount);
      }, autoRotateInterval);
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
  }, [isPaused, itemCount, autoRotateInterval]);

  const goToIndex = (index: number) => {
    setActiveIndex(index);
    if (pauseOnInteraction) {
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), resumeAfterPause);
    }
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + itemCount) % itemCount);
    if (pauseOnInteraction) {
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), resumeAfterPause);
    }
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % itemCount);
    if (pauseOnInteraction) {
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), resumeAfterPause);
    }
  };

  return {
    activeIndex,
    isPaused,
    setIsPaused,
    goToIndex,
    goToPrevious,
    goToNext,
  };
}

