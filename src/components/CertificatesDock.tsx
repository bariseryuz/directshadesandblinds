"use client";

import { useState } from "react";

export function CertificatesDock() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const certificates = [
    { name: "ISO", gradient: "#000000", icon: "🏆" },
    { name: "LEED", gradient: "#000000", icon: "🌿" },
    { name: "GREENGUARD", gradient: "#000000", icon: "✓" },
    { name: "NFPA", gradient: "#000000", icon: "🔥" },
    { name: "OEKO-TEX", gradient: "#000000", icon: "♻️" },
    { name: "CPSC", gradient: "#000000", icon: "🛡️" },
    { name: "ADA", gradient: "#000000", icon: "♿" },
    { name: "BIFMA", gradient: "#000000", icon: "📋" },
    { name: "ANSI", gradient: "#000000", icon: "⚙️" },
    { name: "ASTM", gradient: "#000000", icon: "🔬" },
    { name: "UL", gradient: "#000000", icon: "⚡" },
    { name: "CE", gradient: "#000000", icon: "🇪🇺" },
    { name: "REACH", gradient: "#000000", icon: "🧪" },
    { name: "RoHS", gradient: "#000000", icon: "🚫" },
    { name: "EPA", gradient: "#000000", icon: "🌍" },
    { name: "CARB", gradient: "#000000", icon: "🌲" },
    { name: "FSC", gradient: "#000000", icon: "🌳" },
    { name: "SCS", gradient: "#000000", icon: "📊" },
    { name: "NAHB", gradient: "#000000", icon: "🏠" },
    { name: "IWCA", gradient: "#000000", icon: "🪟" },
    { name: "WCMA", gradient: "#000000", icon: "✨" },
  ];

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="certificate-dock-wrapper">
        <p className="text-white/70 text-sm mb-3 text-center">Certified & Compliant</p>
        <ul className="blocks">
          {certificates.map((cert, index) => (
            <li key={index} className="block">
              <button
                onClick={() => handleClick(index)}
                className="block__item"
                style={{ "--bg": cert.gradient } as React.CSSProperties}
                title={cert.name}
              >
                <span className="cert-icon">{cert.icon}</span>
                <span className={`cert-name ${activeIndex === index ? 'active' : ''}`}>
                  {cert.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .certificate-dock-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 95%;
          margin: 0 auto;
        }

        .blocks {
          display: flex;
          list-style-type: none;
          padding: 0.5rem;
          border-radius: 1rem;
          gap: 0.75rem;
          background: hsl(0 0% 100% / 0.1);
          align-items: center;
          justify-content: center;
          align-content: center;
          backdrop-filter: blur(10px);
          margin: 0;
          flex-wrap: wrap;
          width: 100%;
        }

        .blocks:hover {
          --show: 1;
        }

        .block {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          align-content: center;
          transition: flex 0.2s;
          flex: calc(0.2 + (var(--lerp, 0) * 1.5));
          position: relative;
          flex-shrink: 0;
        }

        .block:after {
          content: '';
          width: 5%;
          aspect-ratio: 1;
          background: rgba(255, 255, 255, 0.3);
          position: absolute;
          bottom: 10%;
          left: 50%;
          border-radius: 0.5rem;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .block:before {
          content: '';
          position: absolute;
          width: calc(100% + 1rem);
          bottom: 0;
          aspect-ratio: 1 / 2;
          left: 50%;
          transition: transform 0.2s;
          transform-origin: 50% 100%;
          transform: translateX(-50%) scaleY(var(--show, 0));
          z-index: -1;
        }

        .block .block__item {
          transition: outline 0.2s;
          outline: transparent 0.25rem solid;
        }

        :is(.block:hover, .block:focus-visible) .block__item {
          outline: rgba(255, 255, 255, 0.3) 0.25rem solid;
        }

        .block {
          outline: none;
        }

        .block__item {
          width: 100%;
          height: 100%;
          max-width: 48px;
          max-height: 48px;
          aspect-ratio: 1;
          border-radius: 0.75rem;
          background: var(--bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
          transform-origin: 50% 100%;
          position: relative;
          transform: translateY(calc(var(--lerp, 0) * -75%));
          text-decoration: none;
          border: none;
          cursor: pointer;
          gap: 0.25rem;
          padding: 0;
        }

        .cert-icon {
          font-size: 1.25rem;
          z-index: 2;
          position: relative;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
          line-height: 1;
        }

        .cert-name {
          font-size: 0.5rem;
          font-weight: 700;
          color: white;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
          z-index: 2;
          position: absolute;
          bottom: 2px;
          text-align: center;
          line-height: 1;
          opacity: 0;
          transform: translateY(5px);
          transition: all 0.3s ease;
          max-width: 90%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .cert-name.active {
          opacity: 1;
          transform: translateY(0);
        }

        .block__item:after {
          content: '';
          position: absolute;
          height: 100%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          aspect-ratio: 1;
          border-left: 0.25rem solid white;
          border-top: 0.25rem solid white;
          border-radius: 0.75rem;
          mask: linear-gradient(135deg, black, transparent 50%);
        }

        :is(.block:hover, .block:focus-visible) {
          --lerp: 1;
          z-index: 5;
        }
        .block:has(+ :is(.block:hover, .block:focus-visible)),
        :is(.block:hover, .block:focus-visible) + .block {
          --lerp: 0.5625;
          z-index: 4;
        }
        .block:has(+ .block + :is(.block:hover, .block:focus-visible)),
        :is(.block:hover, .block:focus-visible) + .block + .block {
          --lerp: 0.25;
          z-index: 3;
        }
        .block:has(+ .block + .block + :is(.block:hover, .block:focus-visible)),
        :is(.block:hover, .block:focus-visible) + .block + .block + .block {
          --lerp: 0.0625;
          z-index: 2;
        }
        .block:has(+ .block + .block + .block + :is(.block:hover, .block:focus-visible)),
        :is(.block:hover, .block:focus-visible) + .block + .block + .block + .block {
          --lerp: 0;
          z-index: 1;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        @media (max-width: 768px) {
          .certificate-dock-wrapper {
            right: 1rem;
            top: 5rem;
          }

          .blocks {
            gap: 0.5rem;
            padding: 0.4rem;
          }

          .block {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </>
  );
}
