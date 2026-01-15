"use client";

import { CertificatesDock } from "@/components/CertificatesDock";
import { useEffect, useState } from 'react';

export default function MillsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/mill.jpg', '/mill1.jpg', '/mill3.jpg'];

  // Add padding for fixed header
  useEffect(() => {
    document.body.style.paddingTop = 'var(--header-height)';
    return () => {
      document.body.style.paddingTop = '0';
    };
  }, []);

  // Cycle through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background image slideshow */}
      <div className="fixed inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={image}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: currentImageIndex === index ? 1 : 0,
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 min-h-screen flex items-center justify-center">
        {/* Text Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold">Mill & Manufacturing Partnerships</h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/80 max-w-3xl mx-auto">
            Our mill-direct relationships provide quality control and reliable lead times with consistent sourcing at scale.
          </p>
        </div>
      </div>
    </div>
  );
}
