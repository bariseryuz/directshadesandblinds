"use client";

import { useState, useEffect } from "react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/markets', label: 'Markets' },
    { href: '/projects', label: 'Projects' },
    { href: '/services', label: 'Services' },
    { href: '/mills', label: 'Mill Partnerships' },
    { href: '/specification', label: 'Division 12000' },
    { href: '/contact', label: 'Request a Bid' },
  ];

  return (
    <>
      {/* Hamburger Button - Only visible on mobile and tablet */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden relative z-[100000] w-9 h-9 flex flex-col items-center justify-center gap-1.5 flex-shrink-0 "
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={`w-6 h-0.5 bg-white  transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[99999] ${
          isOpen ? 'block' : 'hidden'
        }`}
        style={{ backgroundColor: '#000000' }}
        onClick={() => setIsOpen(false)}
      >
        <nav
          className={`flex flex-col items-center justify-center min-h-screen h-full w-full bg-black/90 gap-8 px-6 py-20 overflow-y-auto transition-all duration-300 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl sm:text-3xl font-semibold text-white hover:text-white/70 transition-colors relative z-10 text-center"
              style={{
                transitionDelay: isOpen ? `${index * 100}ms` : '0ms',
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
