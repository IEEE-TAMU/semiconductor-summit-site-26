'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Is the event free to attend?',
    answer: 'Yes, the Semiconductor Summit is completely free and open to all attendees.',
  },
  {
    question: 'Who can attend the summit?',
    answer: 'The summit is open to students, professionals, researchers, and anyone interested in the semiconductor industry. All are welcome!',
  },
  {
    question: 'Where is the event located?',
    answer: 'The event will take place throughout the Rudder Exhibition Hall and Rudder Auditorium. ', // TODO: more specific info including address, parking, and pictures
  },
  {
    question: 'Will food be provided?',
    answer: 'Lunch will be provided for attendees.',
  },
  {
    question: 'Can I present or speak at the summit?',
    answer: 'We welcome speaker submissions! Please contact us  at events@ieeetamu.org if you are interested in speaking.',
  },
//   {
//     question: 'Is parking available?',
//     answer: 'Parking information will be provided in the event details sent to registered attendees. We recommend carpooling or using public transportation when possible.',
//   },
//   {
//     question: 'Will the sessions be recorded?',
//     answer: 'Some sessions may be recorded. Details about recordings and availability will be shared with registered attendees after the event.',
//   },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-0.5 bg-red-800 mx-auto" />
        </motion.div>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 md:px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">
                  {item.question}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-red-800 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 md:px-6 pb-4 pt-2">
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

