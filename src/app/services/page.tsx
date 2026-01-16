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
    <div className="relative min-h-screen">
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 z-0 w-full h-full"
        style={{
          backgroundImage: 'url(/service.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Services Section with Slides */}
      <div className="relative z-10">
        {/* Slide 1 - Introduction */}
        <div className="sticky top-0 h-[50vh] flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-slate-900/80">
          <div className="max-w-4xl px-6 py-8 text-center backdrop-blur-sm rounded-lg mx-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Commercial Window Covering Solutions</h2>
            <p className="text-base md:text-lg text-white/90 mt-3">
              We deliver turnkey commercial window covering solutions for complex projects nationwide—supporting every phase from bid through installation with a single, accountable partner.
            </p>
            <p className="mt-6 text-sm text-white/70">Scroll Down for next slide</p>
          </div>
        </div>

        {/* Slide 2 - Project Types */}
        <div className="sticky top-0 h-[50vh] flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-indigo-900/80">
          <div className="max-w-4xl px-6 py-8 backdrop-blur-sm rounded-lg mx-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Project Types</h2>
            <ul className="space-y-3 text-base md:text-lg text-white/90">
              <li>• Multifamily & mixed-use</li>
              <li>• Hospitality</li>
              <li>• Healthcare & senior living</li>
              <li>• Office & commercial interiors</li>
            </ul>
            <p className="mt-8 text-sm text-white/70 text-center">Scroll Down for next slide</p>
          </div>
        </div>

        {/* Slide 3 - What We Do */}
        <div className="sticky top-0 h-[50vh] flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-purple-900/80">
          <div className="max-w-4xl px-6 py-8 backdrop-blur-sm rounded-lg mx-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">What We Do</h2>
            <ul className="space-y-3 text-base md:text-lg text-white/90">
              <li>• Preconstruction support, bidding, and value engineering</li>
              <li>• Submittals, coordination, fabrication, and installation</li>
              <li>• Manual and motorized shade systems with automation-ready capabilities</li>
            </ul>
            <p className="mt-8 text-sm text-white/70 text-center">Scroll Down for next slide</p>
          </div>
        </div>

        {/* Slide 4 - Why Direct Shades & Blinds */}
        <div className="sticky top-0 h-[50vh] flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-slate-800/80">
          <div className="max-w-4xl px-6 py-8 backdrop-blur-sm rounded-lg mx-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Why Direct Shades & Blinds</h2>
            <ul className="space-y-3 text-base md:text-lg text-white/90">
              <li>• One source, end-to-end execution reduces handoffs and risk</li>
              <li>• Schedule-driven delivery aligned with GC and developer timelines</li>
              <li>• Proven national scale with consistent quality across markets</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
