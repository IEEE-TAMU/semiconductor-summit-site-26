'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navItems = [
  // { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  // { name: 'Schedule', href: '#schedule' },
  // { name: 'Sponsors', href: '#sponsors' },
  { name: 'Organizers', href: '#organizers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const isScrolledPastThreshold = useScrollPosition(100);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            {/* SVG Logo - Always visible */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center"
            >
              <Image
                src="/images/logo-black-no-circle.svg"
                alt="IEEE Logo"
                width={40}
                height={80}
                className={`h-8 w-4 md:h-10 md:w-5 object-contain transition-all duration-300 ${
                  scrolled ? '' : 'invert'
                }`}
              />
            </motion.div>
            
            {/* IEEE TAMU - Always visible */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-red-800' : 'text-white'
              }`}
            >
              IEEE TAMU
            </motion.span>

            {/* Semiconductor Summit 2026 - Appears when scrolled */}
            <AnimatePresence>
              {isScrolledPastThreshold && (
                <motion.span
                  layoutId="semiconductor-summit-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, layout: { duration: 0.5 } }}
                  className="text-lg md:text-xl font-bold text-red-800"
                >
                  Semiconductor Summit 2026
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`transition-colors duration-200 font-medium text-sm lg:text-base relative group ${
                  scrolled
                    ? 'text-gray-700 hover:text-red-800'
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-800 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              className={`transition-colors duration-200 ${
                scrolled ? 'text-gray-700 hover:text-red-800' : 'text-white hover:text-gray-200'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

