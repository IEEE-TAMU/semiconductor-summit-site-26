'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const sponsorRows = [
  {
    size: 'large',
    sponsors: [
      { name: 'Arm', url: 'https://www.arm.com', logo: '/images/sponsors/arm.png' },
      { name: 'Keysight Technologies', url: 'https://www.keysight.com', logo: '/images/sponsors/keysight.png' },
    ],
  },
  {
    size: 'medium',
    sponsors: [
      { name: 'Cadence', url: 'https://www.cadence.com', logo: '/images/sponsors/cadence.png' },
      { name: 'IEEE USA', url: 'https://www.ieeeusa.org', logo: '/images/sponsors/IEEE-USA.png' },
    ],
  },
  {
    size: 'medium',
    sponsors: [
      { name: 'TAMU Department of Electrical and Computer Engineering', url: 'https://engineering.tamu.edu/electrical', logo: '/images/sponsors/TAMU-ECEN.png' },
      { name: 'Texas Instruments', url: 'https://www.ti.com', logo: '/images/sponsors/TI.png' },

    ],
  },
];

const sizeConfig: Record<
  string,
  { container: string; width: number; height: number; imageClass: string }
> = {
  large: {
    container: 'px-10 py-8',
    width: 260,
    height: 120,
    imageClass: 'max-h-32 md:max-h-36',
  },
  medium: {
    container: 'px-8 py-6',
    width: 100,
    height: 50,
    imageClass: 'max-h-16 md:max-h-20',
  },
  small: {
    container: 'px-6 py-4',
    width: 180,
    height: 80,
    imageClass: 'max-h-24 md:max-h-28',
  },
};

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
            Sponsors
          </h2>
          <div className="w-24 h-1 bg-red-800 mx-auto mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are grateful to our sponsors for their support in making the 2026 IEEE Semiconductor Summit a success.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {sponsorRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
            >
              {row.sponsors.map((sponsor) => {
                const { container, width, height, imageClass } =
                  sizeConfig[row.size] ?? sizeConfig.medium;

                return (
                  <Link
                    key={sponsor.name}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div
                      className={`flex flex-col items-center justify-center cursor-pointer text-center ${container}`}
                    >
                      <div className="flex-1 flex items-center justify-center w-full mb-3">
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          width={width}
                          height={height}
                          className={`object-contain max-w-full w-auto h-auto ${imageClass}`}
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

