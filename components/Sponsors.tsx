'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const sponsors = [
  { name: 'Arm', logo: '/images/sponsors/arm.png', url: 'https://www.arm.com' },
  { name: 'Cadence', logo: '/images/sponsors/cadence.png', url: 'https://www.cadence.com' },
  { name: 'Texas Instruments', logo: '/images/sponsors/TI.png', url: 'https://www.ti.com' },
  { name: 'Circuits & Systems Society (CAS)', logo: '/images/sponsors/CAS.gif', url: 'https://www.ieee-cas.org' },
  { name: 'Falcomm', logo: '/images/sponsors/FALCOMM.svg', url: 'https://www.falcomm.com' },
  { name: 'IEEE USA', logo: '/images/sponsors/IEEE-USA.png', url: 'https://www.ieeeusa.org' },
  { name: 'Infineon', logo: '/images/sponsors/infineon.png', url: 'https://www.infineon.com' },
  { name: 'Keysight Technologies', logo: '/images/sponsors/keysight.png', url: 'https://www.keysight.com' },
  { name: 'Micron', logo: '/images/sponsors/micron.png', url: 'https://www.micron.com' },
  { name: 'MathWorks', logo: '/images/sponsors/MathWorks.png', url: 'https://www.mathworks.com' },
  { name: 'Microwave Theory and Technology Society (MTT-S)', logo: '/images/sponsors/MTT-S.webp', url: 'https://mtt.org' },
  { name: 'NASA', logo: '/images/sponsors/NASA.png', url: 'https://www.nasa.gov' },
  { name: 'TAMU Department of Electrical and Computer Engineering', logo: '/images/sponsors/TAMU-ECEN.png', url: 'https://engineering.tamu.edu/electrical' },
  { name: 'TAMU Semiconductor Institute', logo: '/images/sponsors/TAMU-semiconductor-inst.png', url: 'https://engineering.tamu.edu/semiconductor' },
  { name: 'IEEE TAMU', logo: '/images/logo-black-no-circle.svg', url: 'https://ieeetamu.org' }
];

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white overflow-hidden"
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
            Previous Partners
          </h2>
          <div className="w-24 h-1 bg-red-800 mx-auto mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are grateful to our sponsors and partners for their support in making the 2025 IEEE Semiconductor Summit a success.
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
                <Link
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 min-h-[180px] cursor-pointer">
                    <div className="flex-1 flex items-center justify-center w-full mb-4">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={200}
                        height={80}
                        className="object-contain max-w-full max-h-24 w-auto h-auto"
                      />
                    </div>
                    <div className="text-center mt-auto">
                      <div className="text-sm font-semibold text-gray-700 mb-1">{sponsor.name}</div>
                      <div className="text-xs text-gray-500">2025 Partner</div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

