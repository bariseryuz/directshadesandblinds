"use client";

import { useEffect, useRef, useState } from 'react';
import HeroMedia from '@/components/HeroMedia';
import { OverlaySection } from '@/components/OverlaySlides';
import { CTAButtons } from '@/components/CTAButtons';

export default function HomeHero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [ratio, setRatio] = useState(1);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setRatio(entry.intersectionRatio);
      },
      { root: null, threshold: thresholds }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dim = Math.min(0.9, Math.max(0, (1 - ratio) * 0.9));

  return (
    <>
      <HeroMedia dim={dim} />
      <OverlaySection ref={heroRef} sticky snap className="pt-[var(--header-height)]">
        <div className="max-w-3xl glass-panel p-6 md:p-8">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight drop-shadow-xl">
            National Commercial Window Coverings
          </h1>
          <p className="mt-4 text-white/90 drop-shadow-sm">
            Mill-direct sourcing and proven execution at scale — bid-ready nationwide.
          </p>
          <div className="mt-6">
            <CTAButtons />
          </div>
        </div>
      </OverlaySection>
    </>
  );
}
