"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type project = { id: number; title: string };

export default function ProjectsCarousel({ items: initialItems }: { items?: project[] }) {
  const items: project[] = useMemo(
    () => initialItems ?? Array.from({ length: 12 }).map((_, i) => ({ id: i + 1, title: `Project ${i + 1}` })),
    [initialItems]
  );

  const trackItems = useMemo(() => [...items, ...items], [items]);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(360);
  const gap = 24; // px

  // Measure card width responsively
  useEffect(() => {
    const measure = () => {
      if (cardRef.current) setCardWidth(cardRef.current.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Smooth infinite flow via requestAnimationFrame
  useEffect(() => {
    const speed = 0.6; // px per frame (~36px/sec at 60fps)
    let offsetPx = 0;
    const unit = cardWidth + gap;
    const totalUnits = items.length * unit; // length of one unique track

    const step = () => {
      offsetPx = (offsetPx + speed) % totalUnits;
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(calc(50% - ${items.length * unit + offsetPx}px))`;
      }
      requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [cardWidth, gap, items.length]);

  // Function to get project content
  const getProjectContent = (projectId: number) => {
    switch (projectId) {
      case 1:
        return (
          <>
            <Image 
              src="/project1.png" 
              alt="Project 1" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4 z-10">
              <p className="text-xs font-semibold mb-1">MULTI-FAMILY</p>
              <p className="text-xs">FABRIC: VX SCREEN 3000 1% AND 3%</p>
              <p className="text-xs">UNITS: 700</p>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <Image 
              src="/project2.png" 
              alt="Project 2" 
              fill
              className="object-cover"
            />
             <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4 z-10">
              <p className="text-xs font-semibold mb-1">MULTI-FAMILY</p>
              <p className="text-xs">FABRIC: VX SCREEN 3000-1% WHITE PEARL | WHITE 3&quot; FASCIA</p>
              <p className="text-xs">UNITS: 320 – STUDIO, 1,2 &amp; 3 .</p>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <Image 
              src="/project3.png" 
              alt="Project 3" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4 z-10">
              <p className="text-xs font-semibold mb-1">MULTI-FAMILY</p>
              <p className="text-xs">FABRIC: VX SCREEN 3000-3% &amp; VX SCREEN 3000 BLACKOUT</p>
              <p className="text-xs">UNITS: 222 MIXED USE</p>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <Image 
              src="/project4.png" 
              alt="Project 4" 
              fill
              className="object-cover"
            />
             <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4 z-10">
              <p className="text-xs font-semibold mb-1">MULTI-FAMILY</p>
              <p className="text-xs">FABRIC: VX SCREEN 3000-1% WHITE AND IMAGINE BLACK OUT WHITE</p>
              <p className="text-xs">UNITS: 554 MIXED-USE & RETAIL SPACE.</p>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <Image 
              src="/project5.png" 
              alt="Project 5" 
              fill
              className="object-cover"
            />
             <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4 z-10">
              <p className="text-xs font-semibold mb-1">MULTI-FAMILY</p>
              <p className="text-xs">VX SCREEN BLACK OUT & SOLAR SCREEN 3000-3%</p>
              <p className="text-xs">UNITS: 554 MIXED-USE.</p>
            </div>
          </>
        );
      case 6:
        return (
          <>
            <Image 
              src="/project6.png" 
              alt="Project 6" 
              fill
              className="object-cover"
            />
             <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4 z-10">
              <p className="text-xs font-semibold mb-1">MULTI-FAMILY</p>
              <p className="text-xs">FABRIC: VX SCREEN 3000-1% WHITE PEARL | WHITE 3&quot; FASCIA</p>
              <p className="text-xs">UNITS: 320 – STUDIO, 1,2 &amp; 3 .</p>
            </div>
          </>
        );
      case 7:
        return (
          <>
            <Image 
              src="/project7.png" 
              alt="Project 7" 
              fill
              className="object-cover"
            />
             <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4 z-10">
              <p className="text-xs font-semibold mb-1">MULTI-FAMILY</p>
              <p className="text-xs">FABRIC: VX SCREEN 3101 1% IN WHITE AND VX SCREEN 3000 1% IN WHITE LINEN</p>
              <p className="text-xs">UNITS:340.</p>
            </div>
          </>
        );
      case 8:
        return (
          <>
            <Image 
              src="/project8.png" 
              alt="Project 8" 
              fill
              className="object-cover"
            />
             <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4 z-10">
              <p className="text-xs font-semibold mb-1">MULTI-FAMILY</p>
              <p className="text-xs">FABRIC: VX SCREEN 3000 1/3%, VX SCREEN BLACK OUT</p>
              <p className="text-xs">	UNITS: 294 APARTMENTS/TOWN HOMES/PENTHOUSES.</p>
            </div>
          </>
        );
      case 9:
        return (
          <>
            <Image 
              src="/project9.png" 
              alt="Project 9" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4 z-10">
              <p className="text-xs font-semibold mb-1">MULTI-FAMILY</p>
              <p className="text-xs">VX SCREEN 3101 1% IN WHITE</p>
              <p className="text-xs">UNITS: 1100.</p>
            </div>
          </>
        );
      case 10:
        return (
          <>
            <Image 
              src="/project10.png" 
              alt="Project 10" 
              fill
              className="object-cover"
            />
             <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4 z-10">
              <p className="text-xs font-semibold mb-1">MULTI-FAMILY</p>
              <p className="text-xs"> NEOLUX MONACO DIM OUT/VTX 3000 3%</p>
              <p className="text-xs">	UNITS: 1/2 BEDROOM UNITS/RETAIL SPACE/STUDIO.</p>
            </div>
          </>
        );
      case 11:
        return (
          <>
            <Image 
              src="/project11.png" 
              alt="Project 11" 
              fill
              className="object-cover"
            />
             <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4 z-10">
              <p className="text-xs font-semibold mb-1">MULTI-FAMILY</p>         
              <p className="text-xs">FABRIC: VX SCREEN 3000-1% WHITE PEARL | WHITE 3&quot; FASCIA</p>
              <p className="text-xs">UNITS: 383.</p>
            </div>
          </>
        );
      case 12:
        return (
          <>
            <Image 
              src="/project12.png" 
              alt="Project 12" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4 z-10">
              <p className="text-xs font-semibold mb-1">MULTI-FAMILY</p>
              <p className="text-xs">FABRIC: VX SCREEN 3101 1% IN WHITE</p>
              <p className="text-xs">UNITS: 1100.</p>
            </div>
          </>
        );
      default:
        return <span className="text-sm text-white/70">Media Placeholder</span>;
    }
  };

  const getProjectDetails = (projectId: number) => {
    switch (projectId) {
      case 1:
        return "Los Angeles, CA • Carmel Partners";
      case 2:
        return "Anaheim, CA • Wolff Companies";
      case 3:
        return "San Diego, CA • The Richman Group";
      case 4:
        return "San Francisco, CA • Related";
      case 5:
        return "San Francisco, CA • Build Group INC.";
      case 6:
        return "Oakland, CA • Carmel Partners";
      case 7:
        return "Reno NV• Lyon Living";
      case 8:
        return " SCOTTSDALE, AZ • LMZ ";
      case 9:
        return "WASHINGTON, DC• 	BUILDER: TOLL BROTHERS APARTMENT LIVING, GSLM CAPITAL PARTNERS, & L+M DEVELOPMENT PARTNERS";
      case 10:
        return "Portland , OR • R&H CONSTRUCTION";
      case 11:
        return " HOUSTON, TX • The Dinerstein Companies";
      case 12:
        return "Anaheim, CA • Wolff Companies";
      default:
        return "Washington, DC • TOLL BROTHERS APARTMENT LIVING, GSLM CAPITAL PARTNERS, & L+M DEVELOPMENT PARTNERS";
    }
  };

  const getProjectTitle = (projectId: number) => {
    switch (projectId) {
      case 1:
        return "Eighth and Grand";
      case 2:
        return "Katella Grand";
      case 3:
        return "K1";
      case 4:
        return "TRANSBAY BLOCK 8";
      case 5:
        return "1500 Mission";
      case 6:
        return "Atlas";
      case 7:
        return "Reno Experience District";
      case 8:
        return "The Kierland";
      case 9:
        return "Banner Lane";
      case 10:
        return "Banner LaneRaleigh Slabtown Apartments";
      case 11:
        return "Aspire Post Oak";
      case 12:
        return "Banner Lane";
      default:
        return "Project Title";
    }
  };

  return (
    <div className="relative w-full min-h-[calc(100dvh-var(--header-height))] flex items-center justify-center px-6 overflow-hidden">
      <div className="w-full">
        <div ref={trackRef} className="flex items-center will-change-transform" style={{ gap: `${gap}px` }}>
          {trackItems.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              ref={i === 0 ? cardRef : undefined}
              className="w-[360px] md:w-[420px] shrink-0 rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-soft backdrop-blur-sm"
            >
              <div className="aspect-video bg-white/10 flex items-center justify-center relative overflow-hidden">
                {getProjectContent(item.id)}
              </div>
              <div className="p-4">
                <div className="text-white/60 text-sm">{getProjectDetails(item.id)}</div>
                <div className="text-white font-semibold text-lg mt-1">{getProjectTitle(item.id)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}