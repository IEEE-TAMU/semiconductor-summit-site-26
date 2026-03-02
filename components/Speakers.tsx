'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { speakers } from '@/lib/speakers';

import 'swiper/css';
import 'swiper/css/pagination';

const SPEAKERS_HASH_PREFIX = '#speakers';
const SPEAKERS_HASH_ID_PREFIX = 'speakers-';

function parseSpeakerIdFromHash(): string | null {
  if (typeof window === 'undefined') return null;
  const hash = window.location.hash.slice(1);
  if (hash === 'speakers') return null;
  if (hash.startsWith(SPEAKERS_HASH_ID_PREFIX)) return hash.slice(SPEAKERS_HASH_ID_PREFIX.length);
  return null;
}

export default function Speakers() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);

  const openPopup = useCallback((index: number) => {
    setPopupIndex(index);
  }, []);

  const closePopup = useCallback(() => {
    setPopupIndex(null);
    if (typeof window !== 'undefined') {
      const id = parseSpeakerIdFromHash();
      if (id) {
        window.history.replaceState(null, '', window.location.pathname + '#speakers');
      }
    }
  }, []);

  // Handle hash: #speakers or #speakers-<id> — scroll to section, slide to speaker, open popup if id present
  useEffect(() => {
    const applyHash = () => {
      const speakerId = parseSpeakerIdFromHash();
      const index = speakerId != null ? speakers.findIndex((s) => s.id === speakerId) : -1;

      const el = document.getElementById('speakers');
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }

      if (index >= 0 && swiperInstance) {
        swiperInstance.slideTo(index, 0);
        setPopupIndex(index);
      }
    };

    const handleHashChange = () => {
      const speakerId = parseSpeakerIdFromHash();
      const el = document.getElementById('speakers');
      if (el && window.location.hash.startsWith(SPEAKERS_HASH_PREFIX)) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      if (speakerId) {
        const index = speakers.findIndex((s) => s.id === speakerId);
        if (index >= 0 && swiperInstance) {
          swiperInstance.slideTo(index, 0);
          setPopupIndex(index);
        }
      }
    };

    if (window.location.hash.startsWith(SPEAKERS_HASH_PREFIX) && swiperInstance) {
      applyHash();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [swiperInstance]);

  // Body scroll lock when popup is open
  useEffect(() => {
    if (popupIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [popupIndex]);

  if (speakers.length === 0) return null;

  return (
    <section
      id="speakers"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Speakers
          </h2>
          <div className="w-24 h-1 bg-red-800 mx-auto mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the experts behind the 2026 IEEE Semiconductor Summit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-6xl mx-auto"
        >
          <Swiper
            onSwiper={setSwiperInstance}
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView="auto"
            centeredSlides
            centeredSlidesBounds
            pagination={{ clickable: true }}
            className="speakers-swiper"
            breakpoints={{
              768: {
                centeredSlides: false,
              },
            }}
          >
            {speakers.map((speaker, index) => (
              <SwiperSlide key={speaker.id} className="w-[440px]! max-w-[85vw]">
                <button
                  type="button"
                  onClick={() => openPopup(index)}
                  className="w-full block aspect-[8.5/11] relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2"
                  aria-label={`View ${speaker.name}`}
                >
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 85vw, 440px"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="pointer-events-none absolute left-0 top-0 bottom-12 z-10 w-10 bg-linear-to-r from-white to-transparent sm:w-16" />
          <div className="pointer-events-none absolute top-0 right-0 bottom-12 z-10 w-10 bg-linear-to-l from-white to-transparent sm:w-16" />
        </motion.div>
      </div>

      {/* Popup overlay */}
      <AnimatePresence>
        {popupIndex !== null && speakers[popupIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/60"
          >
            <div
              className="relative w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.target === e.currentTarget && closePopup()}
            >
              {/* Close button - top left */}
              <button
                type="button"
                onClick={closePopup}
                className="absolute top-4 left-4 z-102 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-lg transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Zoomable image */}
              <div className="w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <TransformWrapper
                  initialScale={1}
                  minScale={0.5}
                  maxScale={4}
                  centerOnInit
                  wheel={{ step: 0.1 }}
                  pinch={{ step: 5 }}
                  doubleClick={{ mode: 'reset' }}
                >
                  <TransformComponent
                    wrapperClass="!w-full !h-full flex items-center justify-center"
                    contentClass="!w-full !h-full flex items-center justify-center"
                  >
                    <div className="relative w-full h-full min-h-[300px]" style={{ maxWidth: '85vw', maxHeight: '85vh' }}>
                      <Image
                        src={speakers[popupIndex].image}
                        alt={speakers[popupIndex].name}
                        fill
                        className="object-contain"
                        sizes="85vw"
                        unoptimized={false}
                      />
                    </div>
                  </TransformComponent>
                </TransformWrapper>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
