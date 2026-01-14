'use client';
import { motion } from 'framer-motion';

export default function AboutHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-10"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        About the Summit
      </h2>
      <div className="w-16 h-1 bg-red-800 mx-auto" />
    </motion.div>
  );
}

