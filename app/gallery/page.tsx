'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import galleryData from './urls.json';

interface GalleryImage {
  image_url: string;
  file_name: string;
  height: string;
  width: string;
  tags: string[];
}

interface GalleryData {
  data: GalleryImage[];
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const data = galleryData as GalleryData;
      setImages(data.data);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load images');
      setLoading(false);
    }
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-red-950 via-red-900 to-red-950">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Relive the moments from the IEEE Semiconductor Summit
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {loading && (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-red-800 border-t-transparent"></div>
              <p className="mt-4 text-gray-600">Loading gallery...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <p className="text-red-800 text-lg">Error: {error}</p>
            </div>
          )}

          {!loading && !error && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Summit Photos
                </h2>
                <div className="w-24 h-1 bg-red-800 mx-auto mb-4" />
                <p className="text-lg text-gray-600">
                  {images.length} photos from the event
                </p>
              </motion.div>

              <div 
                className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6"
                style={{ columnFill: 'balance' }}
              >
                {images.map((image, index) => {
                  const width = parseInt(image.width);
                  const height = parseInt(image.height);
                  const aspectRatio = width / height;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: (index % 20) * 0.02 }}
                      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4 md:mb-6 break-inside-avoid"
                      style={{
                        width: '100%',
                      }}
                    >
                      <div
                        className="relative w-full bg-gray-100"
                        style={{
                          aspectRatio: `${width} / ${height}`,
                        }}
                      >
                        <Image
                          src={image.image_url}
                          alt={image.file_name}
                          width={width}
                          height={height}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <p className="text-white text-sm truncate">{image.file_name}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

