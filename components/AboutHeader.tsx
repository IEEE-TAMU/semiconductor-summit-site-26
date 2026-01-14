'use client';
import { motion } from 'framer-motion';

export default function AboutHeader() {
  return (
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
  );
}

