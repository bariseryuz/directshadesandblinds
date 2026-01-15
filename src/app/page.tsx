"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CertificatesDock } from "@/components/CertificatesDock";
import { CertificatesMarquee } from "@/components/CertificatesMarquee";
import { MagneticButton } from "@/components/MagneticButton";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSecondVisible, setIsSecondVisible] = useState(false);
  const [isThirdVisible, setIsThirdVisible] = useState(false);
  const [isFourthVisible, setIsFourthVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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

    

    const currentRef = ref2.current;
    if (currentRef) {
      observer2.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer2.unobserve(currentRef);
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

    const currentRef = ref3.current;
    if (currentRef) {
      observer3.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer3.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const observer4 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFourthVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref4.current;
    if (currentRef) {
      observer4.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer4.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="relative bg-black">
      {/* Video Background - Optimized for mobile */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="fixed inset-0 w-full h-full opacity-50 sm:opacity-60 mobile-video"
      >
        <source src="/home.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay - Stronger on mobile for better text readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 sm:from-black/60 sm:via-black/40 sm:to-black/60"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section - Uses fixed positioning for overlay effect */}
        <section ref={ref} className="sticky top-0 min-h-screen flex items-center justify-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center">
            <div className="max-w-5xl mx-auto">
              <h1 
                className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 tracking-tight transition-all duration-1000 ease-out bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent animate-shine-text ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                }`}
              >
                DIRECT SHADES &amp; BLINDS
              </h1>
              <div 
                className={`h-0.5 sm:h-1 w-10 sm:w-16 bg-white/80 mb-3 sm:mb-4 mx-auto transition-all duration-1000 ease-out delay-300 ${
                  isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                }`}
              ></div>
              <p 
                className={`text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-2 sm:mb-3 px-4 transition-all duration-1000 ease-out delay-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                National Commercial Window Covering Solutions
              </p>
              <p 
                className={`text-white/70 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 max-w-3xl mx-auto px-4 transition-all duration-1000 ease-out delay-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                Mill-direct sourcing, proven execution, and decades of expertise serving multifamily, hospitality, healthcare, and office projects nationwide.
              </p>
              <div 
                className={`flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center px-4 transition-all duration-1000 ease-out delay-900 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <MagneticButton href="/contact">
                  Request a Bid
                </MagneticButton>
                <Link 
                  href="/projects" 
                  className="inline-flex items-center justify-center px-3 sm:px-6 py-1.5 sm:py-2.5 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section - Overlays on top with rounded corners */}
        <section ref={ref3} className="relative z-30 py-16 sm:py-24 md:py-32 bg-zinc-950 rounded-t-3xl sm:rounded-t-[3rem] rounded-b-3xl sm:rounded-b-[3rem]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 
                className={`text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 tracking-tight transition-all duration-1000 ease-out ${
                  isThirdVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                FEATURED PROJECTS
              </h2>
              <div 
                className={`h-0.5 sm:h-1 w-16 sm:w-24 bg-white/80 mb-3 sm:mb-4 mx-auto transition-all duration-1000 ease-out delay-200 ${
                  isThirdVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                }`}
              ></div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Project 1 */}
              <div 
                className={`group relative overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-1000 ease-out ${
                  isThirdVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } delay-300`}
              >
                <div className="aspect-video relative">
                  <Image 
                    src="/project1.png" 
                    alt="Los Angeles Project" 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                    <p className="text-white/70 text-[10px] sm:text-xs mb-0.5">MULTIFAMILY</p>
                    <h3 className="text-white text-sm sm:text-base font-bold mb-0.5 sm:mb-1">Los Angeles Project</h3>
                    <p className="text-white/80 text-[10px] sm:text-xs">700 Units • Carmel Partners</p>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div 
                className={`group relative overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-1000 ease-out ${
                  isThirdVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } delay-500`}
              >
                <div className="aspect-video relative">
                  <Image 
                    src="/project2.png" 
                    alt="Anaheim Project" 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                    <p className="text-white/70 text-[10px] sm:text-xs mb-0.5">MULTIFAMILY</p>
                    <h3 className="text-white text-sm sm:text-base font-bold mb-0.5 sm:mb-1">Anaheim Project</h3>
                    <p className="text-white/80 text-[10px] sm:text-xs">320 Units • Wolff Companies</p>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div 
                className={`group relative overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-1000 ease-out ${
                  isThirdVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } delay-700`}
              >
                <div className="aspect-video relative">
                  <Image 
                    src="/project3.png" 
                    alt="San Diego Project" 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                    <p className="text-white/70 text-[10px] sm:text-xs mb-0.5">MIXED USE</p>
                    <h3 className="text-white text-sm sm:text-base font-bold mb-0.5 sm:mb-1">San Diego Tower</h3>
                    <p className="text-white/80 text-[10px] sm:text-xs">222 Units • The Richman Group</p>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className={`text-center mt-8 sm:mt-12 transition-all duration-1000 ease-out delay-900 ${
                isThirdVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <Link 
                href="/projects" 
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Mill Partnership & Trust Indicators - Another layer with rounded top */}
        <section ref={ref4} className="relative z-40 py-16 sm:py-24 md:py-32 bg-black rounded-t-3xl sm:rounded-t-[3rem] rounded-b-3xl sm:rounded-b-[3rem]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              <div>
                <h2 
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 tracking-tight transition-all duration-1000 ease-out ${
                    isFourthVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                >
                  MILL-DIRECT ADVANTAGE
                </h2>
                <div 
                  className={`h-0.5 sm:h-1 w-16 sm:w-24 bg-white/80 mb-3 sm:mb-4 transition-all duration-1000 ease-out delay-200 ${
                    isFourthVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                  }`}
                ></div>
                <p 
                  className={`text-white/90 text-sm sm:text-base md:text-base leading-relaxed mb-3 sm:mb-4 transition-all duration-1000 ease-out delay-400 ${
                    isFourthVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                >
                  Factory‑direct—lower prices, no compromise.
                </p>
                <div 
                  className={`space-y-3 sm:space-y-4 transition-all duration-1000 ease-out delay-600 ${
                    isFourthVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-base sm:text-lg">✓</span>
                    <div>
                      <h4 className="text-white font-bold text-sm sm:text-base mb-0.5 sm:mb-1">Direct Sourcing</h4>
                      <p className="text-xs sm:text-sm text-white/70">Straight from the mill to your project</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-base sm:text-lg">✓</span>
                    <div>
                      <h4 className="text-white font-bold text-sm sm:text-base mb-0.5 sm:mb-1">Competitive Pricing</h4>
                      <p className="text-xs sm:text-sm text-white/70">Best value without sacrificing quality</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-base sm:text-lg">✓</span>
                    <div>
                      <h4 className="text-white font-bold text-sm sm:text-base mb-0.5 sm:mb-1">Quality Control</h4>
                      <p className="text-xs sm:text-sm text-white/70">Direct oversight from factory to installation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <div 
                  className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all duration-1000 ease-out delay-800 ${
                    isFourthVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                  }`}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">25+</h3>
                  <p className="text-white/80 text-xs sm:text-sm">Years of Industry Experience</p>
                </div>

                <div 
                  className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all duration-1000 ease-out delay-1000 ${
                    isFourthVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                  }`}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">National</h3>
                  <p className="text-white/80 text-xs sm:text-sm">Coverage Across All Major Markets</p>
                </div>

                <div 
                  className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all duration-1000 ease-out delay-1200 ${
                    isFourthVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                  }`}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">1000+</h3>
                  <p className="text-white/80 text-xs sm:text-sm">Successful Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Markets We Serve Section */}
        <section ref={ref2} className="relative z-40 py-16 sm:py-24 md:py-32 bg-black rounded-b-3xl sm:rounded-b-[3rem]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight transition-all duration-1000 ease-out ${
                  isSecondVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                MARKETS WE SERVE
              </h2>
              <div 
                className={`h-0.5 sm:h-1 w-16 sm:w-24 bg-white/80 mb-6 sm:mb-8 mx-auto transition-all duration-1000 ease-out delay-200 ${
                  isSecondVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                }`}
              ></div>
              <p 
                className={`text-white/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 transition-all duration-1000 ease-out delay-400 ${
                  isSecondVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                Specialized window covering solutions tailored to your industry&apos;s unique requirements
              </p>
            </div>
            
            {/* Certificates - Mobile: Marquee, Desktop: Dock */}
            <div className="md:hidden">
              <CertificatesMarquee />
            </div>
            <div className="hidden md:block">
              <CertificatesDock />
            </div>
          </div>
        </section>

        {/* CTA Section - Final layer */}
        <section className="relative z-50 py-8 sm:py-12 md:py-16 bg-zinc-900 rounded-t-3xl sm:rounded-t-[3rem] rounded-b-3xl sm:rounded-b-[3rem]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
            <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white mb-2 sm:mb-3 px-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/80 text-[10px] sm:text-xs md:text-sm mb-3 sm:mb-4 max-w-2xl mx-auto px-4">
              Get a competitive bid from our team of window covering experts today.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 text-[10px] sm:text-xs md:text-sm shadow-2xl"
            >
              Request a Bid
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}