'use client';

import { motion } from 'framer-motion';

const scheduleItems = [
  {
    time: '8:00 AM',
    title: 'Registration & Breakfast',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Welcome reception with networking opportunities.',
  },
  {
    time: '9:00 AM',
    title: 'Opening Keynote',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Industry leaders discuss the future of semiconductors.',
  },
  {
    time: '10:30 AM',
    title: 'Panel Discussion: Innovation in Chip Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Experts share insights on cutting-edge technologies.',
  },
  {
    time: '12:00 PM',
    title: 'Lunch Break',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Networking lunch with sponsors and attendees.',
  },
  {
    time: '1:30 PM',
    title: 'Technical Workshops',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hands-on sessions covering various semiconductor topics.',
  },
  {
    time: '3:00 PM',
    title: 'Startup Showcase',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Emerging companies present their innovations.',
  },
  {
    time: '4:30 PM',
    title: 'Closing Remarks & Networking',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Final thoughts and opportunities to connect.',
  },
];

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 opacity-5">
        {/* Replace this div with your background image */}
        {/* <Image
          src="/images/schedule-background.jpg"
          alt=""
          fill
          className="object-cover"
        /> */}
        <div className="absolute inset-0 bg-[url('/images/schedule-background.jpg')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Schedule
          </h2>
          <div className="w-24 h-1 bg-red-800 mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-red-300 transform md:-translate-x-1/2" />

          {/* Schedule Items */}
          <div className="space-y-12">
            {scheduleItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-red-800 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10" />

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-800">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-red-800 font-bold text-lg">{item.time}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

