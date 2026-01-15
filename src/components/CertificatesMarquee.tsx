"use client";

export function CertificatesMarquee() {
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
                style={{ background: cert.gradient }}
              >
                <span className="cert-icon">{cert.icon}</span>
                <span className="cert-name">{cert.name}</span>
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
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          position: relative;
        }

        .cert-icon {
          font-size: 1.25rem;
          line-height: 1;
          z-index: 2;
        }

        .cert-name {
          font-size: 0.5rem;
          font-weight: 700;
          color: white;
          position: absolute;
          bottom: 2px;
          text-align: center;
          line-height: 1;
          max-width: 90%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          z-index: 2;
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
