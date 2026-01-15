"use client";

import { useEffect } from 'react';

export default function ServicesPage() {
  // Add padding for fixed header
  useEffect(() => {
    document.body.style.paddingTop = 'var(--header-height)';
    return () => {
      document.body.style.paddingTop = '0';
    };
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 md:py-24">
      <h1 className="text-2xl sm:text-3xl font-semibold">Services</h1>
      <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-sm sm:text-base text-white/80">
        <li>Commercial window coverings</li>
        <li>Project types: multifamily, hospitality, healthcare, office</li>
        <li>Turnkey execution — bid through installation</li>
        <li>Motorization / automation (high level)</li>
      </ul>
    </div>
  );
}
