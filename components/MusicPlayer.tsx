"use client";

import { useEffect, useRef, useState } from "react";

type MusicPlayerProps = {
  play: boolean;
};

export default function MusicPlayer({
  play,
}: MusicPlayerProps) {

  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);

  // autoplay ketika play berubah menjadi true
  useEffect(() => {

    if (!play) return;

    if (!audioRef.current) return;

    const audio = audioRef.current;

    audio.volume = 0;

    audio.play().then(() => {

      setPlaying(true);

      let volume = 0;

      const fade = setInterval(() => {

        volume += 0.05;

        if (volume >= 1) {

          volume = 1;

          clearInterval(fade);

        }

        audio.volume = volume;

      }, 120);

    }).catch(console.error);

  }, [play]);

  const toggleMusic = () => {

    if (!audioRef.current) return;

    if (playing) {

      audioRef.current.pause();

      setPlaying(false);

    } else {

      audioRef.current.play();

      setPlaying(true);

    }

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

        className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-2
        bg-white/90
        backdrop-blur-md
        px-4
        py-3
        rounded-full
        shadow-xl
        hover:scale-105
        transition-all
        duration-300
        "

      >

        <span className="text-xl">

          {playing ? "⏸" : "🎵"}

        </span>

        <span className="text-sm font-medium text-gray-700">

          {playing
            ? "Music On"
            : "Music Off"}

        </span>

      </button>

    </>

  );

}