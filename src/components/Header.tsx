"use client";

import { useEffect, useState } from 'react';
import { MobileMenu } from '@/components/MobileMenu';
import Image from 'next/image';

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Hide header immediately when scrolling
      setIsVisible(false);

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set new timeout to show header immediately when scrolling stops
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, 100); // Show after 100ms of no scrolling

      setScrollTimeout(timeout);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 h-[var(--header-height)] bg-gradient-to-b from-black/60 to-transparent lg:bg-gradient-to-b lg:from-black/60 lg:to-transparent transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="h-full flex items-start justify-center gap-2 px-2.5 backdrop-blur-[1.56rem] rounded-sm bg-black/40 md:px-4 lg:px-6 lg:backdrop-blur-none lg:rounded-none lg:bg-transparent relative">
        
        {/* Mobile: Logo and Burger in flex container */}
        <div className="lg:hidden w-full flex items-center justify-end px-4 h-full gap-4">
          <a href="/" className="flex items-center gap-3 flex-shrink-0 group transition-all hover:scale-105 mr-auto ml-0.5">
            <div className="relative h-28 w-28 flex-shrink-0">
              <Image 
                src="/logo.png" 
                alt="Direct Shades & Blinds Logo" 
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </a>
          
          <MobileMenu />
        </div>
        
        {/* Desktop: All elements in centered flex container */}
        <div className="hidden lg:flex items-center justify-center gap-6 w-full h-full relative">
          <span className="absolute left-6 text-xl font-bold tracking-wide text-white">
            Direct Shades & Blinds
          </span>
          
          <a href="/" className="flex items-center gap-3 flex-shrink-0 group transition-all hover:scale-105">
            <div className="relative h-32 w-32 flex-shrink-0">
              <Image 
                src="/logo.png" 
                alt="Direct Shades & Blinds Logo" 
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </a>
          
          <nav className="absolute right-6 flex gap-3 text-sm">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/markets', label: 'Markets' },
              { href: '/projects', label: 'Projects' },
              { href: '/services', label: 'Services' },
              { href: '/mills', label: 'Mill Partnerships' },
              { href: '/contact', label: 'Request a Bid' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 rounded-full hover:bg-white/10 border border-white/10"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
