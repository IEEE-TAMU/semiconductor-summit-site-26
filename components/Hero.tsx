'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date('2026-03-26T08:00:00-05:00').getTime();
    const update = () => {
      const diff = Math.max(0, target - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Generate particle positions and directions
  const particles = Array.from({ length: 15 }, (_, i) => {
    const angle = (i / 15) * Math.PI * 2;
    const normalized = (Math.sin(i * 12.9898) + 1) / 2;
    const distance = 40 + normalized * 30;
    return {
      id: i,
      startX: 50, // Start from center
      startY: 50, // Start from center
      endX: Math.cos(angle) * distance,
      endY: Math.sin(angle) * distance,
      delay: i * 0.08,
    };
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-red-950/90 via-red-900/80 to-red-950/90" />
        <Image
          src="/images/bg.jpg"
          alt="IEEE Semiconductor Summit"
          fill
          className="object-cover brightness-40"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-2">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white">
            Semiconductor Summit <span className="animated-maroon-gradient">2026</span>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-6"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
            March 26
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex justify-center gap-3 sm:gap-5">
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' },
            ].map((unit) => (
              <div key={unit.label} className="flex flex-col items-center">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2 sm:px-5 sm:py-3 min-w-[60px] sm:min-w-[80px]">
                  <span className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tabular-nums">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-gray-300 mt-1 uppercase tracking-wider">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mb-4"
        >
          <p className="text-xl sm:text-xl md:text-2xl text-gray-200 font-light">
            The Largest Student-Run Semiconductor Summit in the Nation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-lg inline-block shadow-lg">
            Accelerating AI through Semiconductor Innovations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, '#about')}
            className="px-8 py-3 bg-red-800 text-white rounded-lg font-semibold hover:bg-red-900 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Learn More
          </a>
          <motion.a
            href="https://www.eventbrite.com/e/ieee-tamu-semiconductor-summit-tickets-1982077271475"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-8 py-3 bg-white border-2 border-white text-red-900 rounded-lg font-semibold overflow-visible"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{
              scale: 1.1,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              color: '#991b1b',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
            }}
            animate={{
              x: isHovered ? [0, -1.2, 1.2, -0.8, 0.8, -0.4, 0.4, 0] : 0,
              y: isHovered ? [0, 0.6, -0.6, 0.4, -0.4, 0.2, -0.2, 0] : 0,
              rotate: isHovered ? [0, -0.5, 0.5, -0.3, 0.3, 0] : 0,
            }}
            transition={{
              scale: { duration: 0.3 },
              backgroundColor: { duration: 0.3 },
              color: { duration: 0.3 },
              boxShadow: { duration: 0.3 },
              x: {
                duration: 1.8,
                repeat: isHovered ? Infinity : 0,
                ease: 'easeInOut',
              },
              y: {
                duration: 2.2,
                repeat: isHovered ? Infinity : 0,
                ease: 'easeInOut',
              },
              rotate: {
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: 'easeInOut',
              },
            }}
          >
            {/* Particle effects - only visible on hover */}
            <AnimatePresence>
              {isHovered && (
                <div className="absolute inset-0 pointer-events-none overflow-visible">
                  {particles.map((particle) => (
                    <motion.div
                      key={particle.id}
                      className="absolute w-1.5 h-1.5 bg-white rounded-full"
                      initial={{
                        left: `${particle.startX}%`,
                        top: `${particle.startY}%`,
                        x: '-50%',
                        y: '-50%',
                        opacity: 0,
                        scale: 0,
                      }}
                      animate={{
                        left: `${particle.startX}%`,
                        top: `${particle.startY}%`,
                        x: `calc(-50% + ${particle.endX}px)`,
                        y: `calc(-50% + ${particle.endY}px)`,
                        opacity: [0, 1, 0.9, 0],
                        scale: [0, 1.3, 1.1, 0],
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0,
                      }}
                      transition={{
                        duration: 1.5,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    />
                  ))}
                </div>
              )}
            </AnimatePresence>
            <span className="relative z-10">Register</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <svg
          className="w-6 h-6 text-white animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>

    </section>
  );
}

