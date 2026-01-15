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
        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8">
            Mill & Manufacturing Partnership
          </h1>
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
            <p>
              Our factory-direct partnership with Vertilux gives Direct Shades & Blinds a distinct advantage on every project. By working directly with the manufacturer, we maintain tight quality control, predictable lead times, and consistent product availability at scale.
            </p>
            <p>
              This direct relationship eliminates unnecessary intermediaries—allowing us to move faster, reduce risk, and deliver competitive pricing without compromising performance or finish quality. The result is a more reliable window-covering scope that aligns with construction schedules and supports efficient project delivery nationwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
