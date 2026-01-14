'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';

// Placeholder organizer data - replace with actual organizer info
const organizers = [
  { name: 'Alan Jaf', role: 'Summit Co-Chair', photo: '/images/organizers/alan-jaf.jpg' },
  { name: 'Arju Kafle', role: 'Summit Co-Chair', photo: '/images/organizers/arju-kafle.jpg' },
  { name: 'Nafi Baksh', role: 'Finance Coordinator', photo: '/images/organizers/nafi-baksh.jpg' },
  { name: 'Jadon Lee', role: 'Public Relations Coordinator', photo: '/images/organizers/jadon-lee.jpg' },
  { name: 'Pallavi Gokul', role: 'Outreach Coordinator', photo: '/images/organizers/pallavi-gokul.png' },
  { name: 'Tanmai Buyyanapragada', role: 'Outreach Coordinator', photo: '/images/organizers/tanmai-buyyanapragada.jpg' },

];

{/* TODO: IDEA: use transparent bg photos of the organizers and have their face zoom at a different speed than the background (crowd or smth) could look cool and polished */}

export default function Organizers() {
  return (
    <section
      id="organizers"
      className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden"
    >
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 opacity-5">
        {/* Replace this div with your background image */}
        {/* <Image
          src="/images/organizers-background.jpg"
          alt=""
          fill
          className="object-cover"
        /> */}
        <div className="absolute inset-0 bg-[url('/images/organizers-background.jpg')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Organizers
          </h2>
          <div className="w-24 h-1 bg-red-800 mx-auto mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the team behind the IEEE Semiconductor Summit
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {organizers.map((organizer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                <div className="relative w-full h-48 bg-linear-to-br from-red-600 to-red-800">
                  <Image
                    src={organizer.photo}
                    alt={organizer.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{organizer.name}</h3>
                  <p className="text-xs text-gray-600">{organizer.role}</p>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

