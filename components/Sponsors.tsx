'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Placeholder sponsor data - replace with actual sponsor logos
const sponsors = [
  { name: 'Sponsor 1', logo: '/images/sponsors/sponsor1.png' },
  { name: 'Sponsor 2', logo: '/images/sponsors/sponsor2.png' },
  { name: 'Sponsor 3', logo: '/images/sponsors/sponsor3.png' },
  { name: 'Sponsor 4', logo: '/images/sponsors/sponsor4.png' },
  { name: 'Sponsor 5', logo: '/images/sponsors/sponsor5.png' },
  { name: 'Sponsor 6', logo: '/images/sponsors/sponsor6.png' },
  { name: 'Sponsor 7', logo: '/images/sponsors/sponsor7.png' },
  { name: 'Sponsor 8', logo: '/images/sponsors/sponsor8.png' },
];

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 opacity-5">
        {/* Replace this div with your background image */}
        {/* <Image
          src="/images/sponsors-background.jpg"
          alt=""
          fill
          className="object-cover"
        /> */}
        <div className="absolute inset-0 bg-[url('/images/sponsors-background.jpg')] bg-cover bg-center" />
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
            Our Sponsors
          </h2>
          <div className="w-24 h-1 bg-red-800 mx-auto mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are grateful to our sponsors for their support in making this event possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            className="sponsor-carousel"
          >
            {sponsors.map((sponsor, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-32 md:h-40 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
                  {/* Replace with actual sponsor logo */}
                  {/* <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={200}
                    height={80}
                    className="object-contain max-w-full max-h-full"
                  /> */}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-400 mb-2">{sponsor.name}</div>
                    <div className="text-xs text-gray-500">Logo Placeholder</div>
                    <div className="text-xs text-gray-400 mt-1">
                      {/* Replace with: {sponsor.logo} */}
                      /images/sponsors/{sponsor.name.toLowerCase().replace(' ', '')}.png
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

