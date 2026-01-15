"use client";
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export default function VideoPlayer({ url }: { url: string }) {
  if (!url) {
    return (
      <div className="aspect-video rounded-lg bg-white/10 flex items-center justify-center text-sm text-white/70">
        Media Placeholder
      </div>
    );
  }
  return (
    <div className="aspect-video">
      <ReactPlayer url={url} width="100%" height="100%" controls playing muted />
    </div>
  );
}
