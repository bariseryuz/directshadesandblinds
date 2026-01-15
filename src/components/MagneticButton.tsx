"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
}

export function MagneticButton({ href, children }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseEnter = () => {
      // Generate random particles
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        delay: Math.random() * 0.5,
      }));
      setParticles(newParticles);
    };

    const handleMouseLeave = () => {
      setParticles([]);
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Link
      ref={buttonRef}
      href={href}
      className="magnetic-btn relative inline-block px-6 py-3 sm:px-12 sm:py-5 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-lg shadow-2xl"
      style={{ overflow: "visible" }}
    >
      {particles.length > 0 && (
        <div className="particles-field">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle"
              style={
                {
                  "--x": `${particle.x}px`,
                  "--y": `${particle.y}px`,
                  animationDelay: `${particle.delay}s`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      )}
      <span className="relative z-10">{children}</span>

      <style jsx>{`
        .magnetic-btn {
          position: relative;
          z-index: 1;
        }

        .particles-field {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          pointer-events: none;
          z-index: 0;
        }

        .particle {
          position: absolute;
          width: 12px;
          height: 12px;
          background: rgba(0, 0, 0, 0.7);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          animation: particleFloat 2s ease-in-out infinite;
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
        }

        @keyframes particleFloat {
          0% {
            transform: translate(-50%, -50%) translate(0, 0) scale(0);
            opacity: 0;
          }
          50% {
            transform: translate(-50%, -50%) translate(var(--x), var(--y)) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) translate(calc(var(--x) * -0.5), calc(var(--y) * -0.5)) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </Link>
  );
}
