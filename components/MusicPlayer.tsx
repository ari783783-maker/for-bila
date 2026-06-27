"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      try {
        await audioRef.current.play();
      } catch (err) {
        console.error(err);
      }
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/the-overtunes.mp3"
        loop
      />

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-pink-500 text-white shadow-xl hover:scale-110 transition-all"
      >
        {playing ? "❚❚" : "♫"}
      </button>
    </>
  );
}