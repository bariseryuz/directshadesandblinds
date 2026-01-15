"use client";

import { useState } from "react";

export function InteractiveTitle() {
  const [hoverArea, setHoverArea] = useState<'none' | 'top' | 'bottom'>('none');

  return (
    <>
      <div className="interactive-title-container">
        <div 
          className="hover-area hover-top"
          onMouseEnter={() => setHoverArea('top')}
          onMouseLeave={() => setHoverArea('none')}
        />
        <div 
          className="hover-area hover-bottom"
          onMouseEnter={() => setHoverArea('bottom')}
          onMouseLeave={() => setHoverArea('none')}
        />
        <h1 
          className="interactive-title"
          style={{
            marginTop: hoverArea === 'top' ? '-10px' : hoverArea === 'bottom' ? '-50px' : '-30px'
          }}
        >
          DIRECT SHADES &amp; BLINDS
        </h1>
      </div>

      <style jsx>{`
        .interactive-title-container {
          position: relative;
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hover-area {
          position: absolute;
          width: 100%;
          z-index: 5;
        }

        .hover-top {
          top: 0;
          height: 50%;
        }

        .hover-bottom {
          bottom: 0;
          height: 50%;
        }

        .interactive-title {
          position: absolute;
          margin: auto;
          left: 0;
          right: 0;
          top: 50%;
          color: #fff;
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 900;
          text-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          letter-spacing: 0.15em;
          z-index: 0;
          transition: margin-top 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .interactive-title {
            font-size: clamp(1.5rem, 6vw, 3rem);
            letter-spacing: 0.1em;
          }

          .interactive-title-container {
            height: 150px;
          }
        }
      `}</style>
    </>
  );
}
