'use client';
import { motion } from 'framer-motion';

export default function LocationInfo() {
  // Rudder Tower at Texas A&M University
  // To get the proper embed URL: 
  // 1. Go to Google Maps and search for "Rudder Tower Texas A&M"
  // 2. Click Share > Embed a map
  // 3. Copy the iframe src URL and replace mapsEmbedUrl below
  // 
  // For a 3D orbiting view GIF: Replace the iframe with the img tag (see comment in JSX)
  const mapsEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.5!2d-96.3404!3d30.6105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683a8b8c8c8c9%3A0x8c8c8c8c8c8c8c8c!2sRudder%20Tower!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus';

  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* 3D Map Section - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:block relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Google Maps Embed - Shows Rudder Tower */}
            {/* Note: For a true 3D orbiting view, you would need Google Maps JavaScript API with custom code */}
            {/* To use a GIF instead, replace the iframe below with: */}
            {/* <img src="/images/rudder-tower-3d.gif" alt="Rudder Tower 3D View" className="w-full h-full object-cover" /> */}
            <iframe
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>

          {/* Information Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-red-800 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Rudder Tower<br />
                    Texas A&M University<br />
                    401 Joe Routt Blvd<br />
                    College Station, TX 77843
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Rudder+Tower+Texas+A%26M+University"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-red-800 hover:text-red-900 font-medium underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Date and Time */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-red-800 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Date & Time</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">Date:</span> March 26, 2026<br />
                    <span className="font-semibold">Time:</span> 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Parking Information */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-red-800 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Parking</h3>
                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    <div>
                      <p className="font-semibold mb-1">Visitor Parking:</p>
                      <p>Parking information will be provided closer to the event date.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

