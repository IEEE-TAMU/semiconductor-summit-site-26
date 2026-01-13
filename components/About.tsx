'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden"
    >
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 opacity-5">
        {/* Replace this div with your background image */}
        {/* <Image
          src="/images/about-background.jpg"
          alt=""
          fill
          className="object-cover"
        /> */}
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
              et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </motion.div>

          {/* Image with Floating Bubble */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Image Placeholder */}
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
              {/* Replace this div with your image */}
              {/* <Image
                src="/images/about-main.jpg"
                alt="IEEE Semiconductor Summit"
                fill
                className="object-cover"
              /> */}
              <div className="w-full h-full bg-gradient-to-br from-red-800 to-red-900 flex items-center justify-center text-white text-2xl font-bold">
                {/* Placeholder: Replace with /images/about-main.jpg */}
                About Image
              </div>
            </div>

            {/* Floating Attendance Bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                rotate: [0, -5, 5, -5, 0],
                y: [0, -10, 10, -10, 0],
              }}
              transition={{
                opacity: { delay: 0.5, type: 'spring', stiffness: 200 },
                scale: { delay: 0.5, type: 'spring', stiffness: 200 },
                rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="absolute -top-8 -right-8 bg-red-800 text-white px-6 py-4 rounded-2xl shadow-2xl transform rotate-[-8deg]"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">1,200+</div>
                <div className="text-sm md:text-base font-medium">Attendees</div>
                <div className="text-xs text-red-200 mt-1">Previous Summit</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

