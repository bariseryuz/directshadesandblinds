"use client";

import { useEffect, useRef, useState } from 'react';

export default function HeroMedia({ dim = 0 }: { dim?: number }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const initial = process.env.NEXT_PUBLIC_HERO_VIDEO_URL || '/main.mp4';
  const [src, setSrc] = useState<string>(initial);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    
    // Ping-pong loop: play forward then backwards
    let isPlayingForward = true;
    
    const handleTimeUpdate = () => {
      if (!v) return;
      
      // When playing forward and near the end (6 seconds), reverse
      if (isPlayingForward && v.currentTime >= 6) {
        v.playbackRate = -1;
        isPlayingForward = false;
      }
      // When playing backward and near the start, go forward
      else if (!isPlayingForward && v.currentTime <= 0.5) {
        v.playbackRate = 1;
        isPlayingForward = true;
      }
    };
    
    v.addEventListener('timeupdate', handleTimeUpdate);
    
    // Start playing
    const play = async () => {
      try { 
        v.playbackRate = 1;
        await v.play(); 
      } catch {}
    };
    play();
    
    return () => {
      v.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div className="hero-fixed-bg">
      {/* Background media with ping-pong loop effect */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        src={src}
        onError={() => {
          // Fallback to hero.mp4 if main.mp4 or external URL is missing
          if (src !== '/main.mp4') setSrc('/main.mp4');
        }}
        onLoadedData={() => {
          const v = videoRef.current;
          if (v) { try { v.play(); } catch {} }
        }}
      />
      {/* Base gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      {/* Scroll-sensitive dark overlay */}
      <div className="absolute inset-0 bg-black transition-opacity duration-500" style={{ opacity: Math.max(0, Math.min(0.95, dim)) }} />
      {!src && <span className="media-placeholder">Media Placeholder</span>}
    </div>
  );
}
