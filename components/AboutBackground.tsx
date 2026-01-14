'use client';
import Image from 'next/image';

export default function AboutBackground() {
  return (
    <div className="absolute inset-0 opacity-5">
      <Image
        src="/images/crowd.jpg"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[url('/images/about-background.jpg')] bg-cover bg-center" />
    </div>
  );
}

