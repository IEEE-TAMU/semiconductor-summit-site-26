'use client';

import { motion } from 'framer-motion';

const scheduleItems = [
  {
    time: '9:00 AM',
    title: 'Registration & Networking',
    description: 'Event check in and networking with sponsors and attendees. Breakfast options available.',
  },
  {
    time: '10:00 AM',
    title: 'Welcome Remarks',
    description: 'Welcome remarks from the event organizers and sponsors.',
  },
  {
    time: '10:20 AM',
    title: 'Keynote Speaker',
    description: 'Speaker details to be announced.',
  },
  {
    time: '10:45 AM',
    title: 'Speaker',
    description: 'Speaker details to be announced.',
  },
  {
    time: '11:00 AM',
    title: 'Break',
    description: '',
  },
  {
    time: '11:15 AM',
    title: 'Panel or Breakout Sessions',
    description: 'Panel details to be announced.',
  },
  {
    time: '12:00 PM',
    title: 'Networking Lunch',
    description: 'Networking lunch with sponsors and attendees.',
  },
  {
    time: '1:05 PM',
    title: 'Keynote Speaker',
    description: 'Speaker details to be announced.',
  },
  {
    time: '1:30 PM',
    title: 'Panel, Breakout Session, or Workshop',
    description: 'Session details to be announced.',
  },
  {
    time: '2:00 PM',
    title: 'Exhibition Hall Focus/Networking',
    description: 'Explore the exhibition hall and network with exhibitors.',
  },
  {
    time: '2:35 PM',
    title: 'Speaker',
    description: 'Speaker details to be announced.',
  },
  {
    time: '2:50 PM',
    title: 'Break',
    description: '',
  },
  {
    time: '3:05 PM',
    title: 'Speaker',
    description: 'Speaker details to be announced.',
  },
  {
    time: '3:30 PM',
    title: 'Panel',
    description: 'Panel details to be announced.',
  },
  {
    time: '3:50 PM',
    title: 'Student Research Spotlight',
    description: 'Showcasing student research and innovations.',
  },
  {
    time: '4:35 PM',
    title: 'Closing Remarks',
    description: 'Final thoughts and wrap-up from event organizers.',
  },
  {
    time: '4:45 PM',
    title: 'Networking Reception',
    description: 'Cocktail appetizers and networking reception.',
  },
];

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="relative py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Schedule
          </h2>
          <div className="w-16 h-0.5 bg-red-800 mx-auto" />
        </motion.div>

        <div className="text-center mb-8">
          NOTE: The schedule will be updated as we get closer to the event.
        </div>

        <div className="space-y-0">
          {scheduleItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border-b border-gray-200 last:border-b-0 py-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <div className="shrink-0 w-20 sm:w-24">
                  <span className="text-red-800 font-semibold text-sm">{item.time}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-snug">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

