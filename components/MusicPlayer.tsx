"use client";

import { useEffect, useRef } from "react";

type MusicPlayerProps = {
  play: boolean;
};

export default function MusicPlayer({ play }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current || !play) return;

    const audio = audioRef.current;

    // Mulai dari bagian reff (sementara 53 detik)
    audio.currentTime = 53;

    audio.volume = 0;

    audio.play().catch(() => {});

    // Fade in volume
    const fade = setInterval(() => {
      if (audio.volume < 0.9) {
        audio.volume += 0.05;
      } else {
        clearInterval(fade);
      }
    }, 200);

    return () => clearInterval(fade);
  }, [play]);

  return (
    <audio
      ref={audioRef}
      src="/music/song.mp3"
      preload="auto"
    />
  );
}