"use client";

import { useEffect } from 'react';
import { USMarketMap } from '@/components/USMarketMap';

export default function MarketsPage() {
  // Add padding for fixed header
  useEffect(() => {
    document.body.style.paddingTop = 'var(--header-height)';
    return () => {
      document.body.style.paddingTop = '0';
    };
  }, []);

  return (
    <div className="relative">
      {/* Animated shade background */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #1a1a1a 0%, #0a0a0a 100%)' }}>
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'repeating-linear-gradient(0deg, rgba(40, 40, 40, 0.2) 0px, rgba(40, 40, 40, 0.2) 2px, rgba(50, 50, 50, 0.1) 2px, rgba(50, 50, 50, 0.1) 4px)',
            animation: 'shadeAnimation 4s ease-in-out infinite',
            transformOrigin: 'top',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 md:py-24 pb-24">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Markets We Serve</h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/80 max-w-3xl mb-8 sm:mb-12">
          Nationwide coverage with representative projects in key regions. We serve multifamily, hospitality, healthcare, and office markets.
        </p>
        
        <USMarketMap />
      </div>

      <style jsx>{`
        @keyframes shadeAnimation {
          0% {
            transform: scaleY(0);
          }
          50% {
            transform: scaleY(1);
          }
          100% {
            transform: scaleY(0);
          }
        }
      `}</style>
    </div>
  );
}
