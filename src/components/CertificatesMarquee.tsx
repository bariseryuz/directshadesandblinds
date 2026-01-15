"use client";

import Image from 'next/image';

export function CertificatesMarquee() {
  const certificates = [
    { name: "ISO 9001", image: "/logo_iso9001.png" },
    { name: "ISO 14001", image: "/logo_iso14001.png" },
    { name: "LEED", image: "/logo_USGBC.png" },
    { name: "GREENGUARD", image: "/logo_greenguard_gold.png" },
    { name: "NFPA", image: "/logo_NFPA.png" },
    { name: "OEKO-TEX", image: "/logo_oekotex_EN.png" },
    { name: "Lead Free", image: "/logo_lead_free.png" },
    { name: "Prop 65", image: "/Logo_Prop_65_compliant_fullcolor.png" },
    { name: "Phthalate Free", image: "/logo_phtalate-free.jpg" },
    { name: "AITEX", image: "/logo_aitex.png" },
    { name: "EMAS", image: "/logo_emas.png" },
    { name: "Ecocodice", image: "/logo_ecocodice.png" },
    { name: "Sanitized", image: "/logo_sanitized.png" },
    { name: "IMO", image: "/logo_imo_wheelmark.png" },
    { name: "Microterm", image: "/Logo_Microterm.png" },
  ];

  // Duplicate certificates for seamless loop
  const track = [...certificates, ...certificates];

  return (
    <>
      <div className="marquee-wrapper">
        <p className="text-white/70 text-sm mb-3 text-center">Certified & Compliant</p>
        <div className="marquee-container">
          <div className="marquee-track">
            {track.map((cert, index) => (
              <div
                key={`${cert.name}-${index}`}
                className="marquee-item"
              >
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={48}
                  height={48}
                  className="cert-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
        }

        .marquee-container {
          overflow: hidden;
          position: relative;
          width: 100%;
          background: #000000;
          border-radius: 1rem;
          padding: 0.75rem 0;
        }

        .marquee-track {
          display: flex;
          gap: 0.75rem;
          animation: scroll 30s linear infinite;
          width: max-content;
        }

        .marquee-item {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          padding: 0.25rem;
        }

        .cert-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}
