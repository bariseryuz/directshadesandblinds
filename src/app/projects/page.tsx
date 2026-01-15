"use client";

import ProjectsCarousel from '@/components/ProjectsCarousel';
import { useState } from 'react';

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Grid Effect Background */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 z-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="grid-tile relative">
            <div className="dot"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="min-h-[calc(100dvh-var(--header-height))] flex flex-col items-center justify-center pt-[var(--header-height)]">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-white"></h1>
          <ProjectsCarousel />
        </div>
      </div>

      <style jsx>{`
        .grid-tile {
          position: relative;
          cursor: pointer;
        }

        .grid-tile::before {
          content: '';
          position: absolute;
          inset: -1rem;
          z-index: 1;
        }

        .dot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 0.15rem;
          width: 0.15rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transition: 200ms linear all;
          pointer-events: none;
          box-shadow: 
            0 0 0 0rem rgba(255, 255, 255, 0.3),
            2rem 0 0 -0.15rem rgba(255, 255, 255, 0.25),
            -2rem 0 0 -0.15rem rgba(255, 255, 255, 0.25),
            0 -2rem 0 -0.15rem rgba(255, 255, 255, 0.25),
            0 2rem 0 -0.15rem rgba(255, 255, 255, 0.25),
            2rem 2rem 0 -0.3rem rgba(255, 255, 255, 0.2),
            2rem -2rem 0 -0.3rem rgba(255, 255, 255, 0.2),
            -2rem 2rem 0 -0.3rem rgba(255, 255, 255, 0.2),
            -2rem -2rem 0 -0.3rem rgba(255, 255, 255, 0.2),
            4rem 0 0 -0.4rem rgba(255, 255, 255, 0.15),
            -4rem 0 0 -0.4rem rgba(255, 255, 255, 0.15),
            0 -4rem 0 -0.4rem rgba(255, 255, 255, 0.15),
            0 4rem 0 -0.4rem rgba(255, 255, 255, 0.15),
            4rem 2rem 0 -0.6rem rgba(255, 255, 255, 0.1),
            4rem -2rem 0 -0.6rem rgba(255, 255, 255, 0.1),
            -4rem 2rem 0 -0.6rem rgba(255, 255, 255, 0.1),
            -4rem -2rem 0 -0.6rem rgba(255, 255, 255, 0.1),
            2rem 4rem 0 -0.6rem rgba(255, 255, 255, 0.1),
            2rem -4rem 0 -0.6rem rgba(255, 255, 255, 0.1),
            -2rem 4rem 0 -0.6rem rgba(255, 255, 255, 0.1),
            -2rem -4rem 0 -0.6rem rgba(255, 255, 255, 0.1);
        }

        .grid-tile:hover .dot {
          height: 1.5rem;
          width: 1.5rem;
          background: rgba(255, 255, 255, 0.5);
          transition: 40ms linear all;
        }
      `}</style>
    </div>
  );
}
