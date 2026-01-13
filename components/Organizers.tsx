'use client';

import { motion } from 'framer-motion';

// Placeholder organizer data - replace with actual organizer info
const organizers = [
  { name: 'John Doe', role: 'Lead Organizer', photo: '/images/organizers/john-doe.jpg' },
  { name: 'Jane Smith', role: 'Technical Director', photo: '/images/organizers/jane-smith.jpg' },
  { name: 'Mike Johnson', role: 'Event Coordinator', photo: '/images/organizers/mike-johnson.jpg' },
  { name: 'Sarah Williams', role: 'Marketing Lead', photo: '/images/organizers/sarah-williams.jpg' },
  { name: 'David Brown', role: 'Sponsor Relations', photo: '/images/organizers/david-brown.jpg' },
  { name: 'Emily Davis', role: 'Content Manager', photo: '/images/organizers/emily-davis.jpg' },
  { name: 'Chris Wilson', role: 'Logistics Coordinator', photo: '/images/organizers/chris-wilson.jpg' },
  { name: 'Alex Martinez', role: 'Communications', photo: '/images/organizers/alex-martinez.jpg' },
];

export default function Organizers() {
  return (
    <section
      id="organizers"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden"
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Organizers
          </h2>
          <div className="w-24 h-1 bg-red-800 mx-auto mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the team behind the IEEE Semiconductor Summit
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
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
                {/* Photo Placeholder */}
                <div className="relative w-full h-64 bg-gradient-to-br from-red-600 to-red-800">
                  {/* Replace with actual organizer photo */}
                  {/* <Image
                    src={organizer.photo}
                    alt={organizer.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  /> */}
                  <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                    {organizer.name.charAt(0)}
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{organizer.name}</h3>
                  <p className="text-sm text-gray-600">{organizer.role}</p>
                  <div className="text-xs text-gray-400 mt-2">
                    {/* Replace with: {organizer.photo} */}
                    Photo: {organizer.photo}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

