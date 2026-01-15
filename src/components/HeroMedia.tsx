"use client";

import { useEffect, useRef, useState } from 'react';

export default function HeroMedia({ dim = 0 }: { dim?: number }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const initial = process.env.NEXT_PUBLIC_HERO_VIDEO_URL || '/home.mp4';
  const [src, setSrc] = useState<string>(initial);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    
    console.log('Video element loaded, src:', src);
    
    // Ping-pong loop: play forward then backwards
    let isPlayingForward = true;
    
    const handleTimeUpdate = () => {
      if (!v) return;
      
      // When playing forward and near the end (6 seconds), reverse
      if (isPlayingForward && v.currentTime >= 6) {
        v.playbackRate = -1;
        isPlayingForward = false;
        console.log('Reversing at', v.currentTime);
      }
      // When playing backward and near the start, go forward
      else if (!isPlayingForward && v.currentTime <= 0.5) {
        v.playbackRate = 1;
        isPlayingForward = true;
        console.log('Going forward at', v.currentTime);
      }
    };
    
    v.addEventListener('timeupdate', handleTimeUpdate);
    
    // Start playing
    const play = async () => {
      try { 
        v.playbackRate = 1;
        await v.play();
        console.log('Video playing');
      } catch (e) {
        console.error('Video play failed:', e);
      }
    };
    play();
    
    return () => {
      v.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [src]);

  return (
    <div className="hero-fixed-bg">
      {/* Background media with ping-pong loop effect */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        src={src}
        onError={(e) => {
          console.error('Video error:', e);
          // Fallback to home.mp4 if external URL is missing
          if (src !== '/home.mp4') setSrc('/home.mp4');
        }}
        onLoadedData={() => {
          console.log('Video loaded successfully');
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
