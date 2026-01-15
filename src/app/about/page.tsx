"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSecondVisible, setIsSecondVisible] = useState(false);
  const [isThirdVisible, setIsThirdVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  // Add padding for fixed header
  useEffect(() => {
    document.body.style.paddingTop = 'var(--header-height)';
    return () => {
      document.body.style.paddingTop = '0';
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSecondVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref2.current) {
      observer2.observe(ref2.current);
    }

    return () => {
      if (ref2.current) {
        observer2.unobserve(ref2.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsThirdVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref3.current) {
      observer3.observe(ref3.current);
    }

    return () => {
      if (ref3.current) {
        observer3.unobserve(ref3.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/about.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section ref={ref} className="min-h-screen flex items-center">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-4xl">
              <h1 
                className={`text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 tracking-tight transition-all duration-1000 ease-out ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
              >
                EXPERIENCE THE DIFFERENCE
              </h1>
              <div 
                className={`h-0.5 sm:h-1 w-16 sm:w-20 bg-white/80 mb-3 sm:mb-4 transition-all duration-1000 ease-out delay-300 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
              ></div>
              <p 
                className={`text-white/90 text-sm sm:text-base leading-relaxed transition-all duration-1000 ease-out delay-500 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
              >
                We are a direct importer of window covering products to the trades. Direct&apos;s staff has over 25 years of experience in the window covering industry. We offer the best quality products and installation, with prompt professional service. We strive to keep the schedule of your project without sacrificing quality. Our pricing cannot be beat—through our mill and factory-direct partners, we have the most competitive pricing possible. Although we specialize in the multifamily housing market, we are now expanding into the commercial market as well.
              </p>
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section ref={ref2} className="min-h-screen flex items-center bg-black/30 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-4xl ml-auto">
              <h2 
                className={`text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 tracking-tight transition-all duration-1000 ease-out ${
                  isSecondVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
              >
                NATIONAL SOLUTIONS
              </h2>
              <div 
                className={`h-0.5 sm:h-1 w-16 sm:w-20 bg-white/80 mb-3 sm:mb-4 transition-all duration-1000 ease-out delay-300 ${
                  isSecondVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
              ></div>
              <p 
                className={`text-white/90 text-sm sm:text-base leading-relaxed transition-all duration-1000 ease-out delay-500 ${
                  isSecondVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
              >
                Direct Shades &amp; Blinds provides national commercial window-covering solutions with mill-direct sourcing and proven execution. Our leadership team brings decades of experience in multifamily, hospitality, healthcare, and office projects.
              </p>
            </div>
          </div>
        </section>

        {/* Third Section - Health Focus */}
        <section ref={ref3} className="min-h-screen flex items-center">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-4xl">
              <h2 
                className={`text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 tracking-tight transition-all duration-1000 ease-out ${
                  isThirdVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
              >
                HEALTHY CHOICE COLLECTION
              </h2>
              <p 
                className={`text-sm sm:text-base text-white/70 mb-3 sm:mb-4 italic transition-all duration-1000 ease-out delay-200 ${
                  isThirdVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
              >
                Your Health. Our Commitment.
              </p>
              <div 
                className={`h-0.5 sm:h-1 w-16 sm:w-20 bg-white/80 mb-3 sm:mb-4 transition-all duration-1000 ease-out delay-400 ${
                  isThirdVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
              ></div>
              <p 
                className={`text-white/90 text-sm sm:text-base leading-relaxed mb-3 transition-all duration-1000 ease-out delay-600 ${
                  isThirdVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
              >
                At Direct Shades and Blinds, our customers&apos; health and well-being are at the heart of our philosophy. Our commitment to our customers goes beyond functionality and aesthetics; it focuses on <span className="font-bold text-white">SAFETY</span>.
              </p>
              <p 
                className={`text-white/90 text-sm sm:text-base leading-relaxed transition-all duration-1000 ease-out delay-800 ${
                  isThirdVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
              >
                This is why we take great care in choosing fabrics and components that do not include phthalates, formaldehydes, BPA, or heavy metals like Lead, which have been proven to be extremely harmful.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

