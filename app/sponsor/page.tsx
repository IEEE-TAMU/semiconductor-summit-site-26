'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SponsorNavbar from '@/components/SponsorNavbar';
import Footer from '@/components/Footer';

export default function SponsorPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState('submitting');

    const myForm = event.target as HTMLFormElement;
    const formData = new FormData(myForm);
    const params = new URLSearchParams();
    
    formData.forEach((value, key) => {
      params.append(key, value.toString());
    });

    fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    })
      .then(() => {
        console.log('Form successfully submitted');
        setFormState('success');
        myForm.reset();
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        setFormState('error');
      });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <SponsorNavbar />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-red-950 via-red-900 to-red-950">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Support the Summit
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Join us in making the IEEE Semiconductor Summit 2026 a success. 
            Become a sponsor and connect with the next generation of semiconductor leaders.
          </motion.p>
        </div>
      </section>

      {/* Sponsorship Materials Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sponsorship Information
            </h2>
            <div className="w-24 h-1 bg-red-800 mx-auto mb-8" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn more about sponsorship opportunities and benefits
            </p>
          </motion.div>

          {/* PDF Viewer Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Sponsorship Packet
            </h3>
            <div className="bg-gray-100 rounded-lg p-4 md:p-8 shadow-lg">
              <div className="aspect-[8.5/11] w-full max-w-4xl mx-auto">
                <embed
                  src="/sponsorship-packet.pdf"
                  className="w-full h-full rounded-lg border-2 border-gray-300"
                  title="Sponsorship Packet PDF"
                />
              </div>
              <div className="mt-4 text-center">
                <a
                  href="/sponsorship-packet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-800 hover:text-red-900 font-medium underline transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Open PDF
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-red-800 mx-auto mb-4" />
            <p className="text-lg text-gray-600">
              Interested in sponsoring? Fill out the form below and we&apos;ll get back to you soon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              name="sponsor-contact"
              method="POST"
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-6"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="sponsor-contact" />
              <input type="hidden" name="bot-field" />

              {/* Success Message */}
              {formState === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6"
                >
                  <p className="font-medium">Thank you for your interest! We&apos;ll be in touch soon.</p>
                </motion.div>
              )}

              {/* Error Message */}
              {formState === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6"
                >
                  <p className="font-medium">Something went wrong. Please try again or contact us directly at events@ieeetamu.org</p>
                </motion.div>
              )}

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name <span className="text-red-800">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>

              {/* Organization Field */}
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  Organization <span className="text-red-800">*</span>
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-colors"
                  placeholder="Your organization or company"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-800">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-colors resize-vertical"
                  placeholder="Tell us about your interest in sponsoring..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full px-8 py-3 bg-red-800 text-white rounded-lg font-semibold hover:bg-red-900 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {formState === 'submitting' ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

