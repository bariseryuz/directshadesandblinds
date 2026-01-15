"use client";

import { CertificatesDock } from "@/components/CertificatesDock";
import { useEffect } from 'react';

export default function MillsPage() {
  // Add padding for fixed header
  useEffect(() => {
    document.body.style.paddingTop = 'var(--header-height)';
    return () => {
      document.body.style.paddingTop = '0';
    };
  }, []);

  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 md:py-24">
      {/* Certificate badges as background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 overflow-hidden">
        <div className="scale-150">
          <CertificatesDock />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-2xl sm:text-3xl font-semibold">Mill & Manufacturing Partnerships</h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/80 max-w-3xl">
          Our mill-direct relationships provide quality control and reliable lead times with consistent sourcing at scale.
        </p>
      </div>
    </div>
  );
}
