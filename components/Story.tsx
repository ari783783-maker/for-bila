"use client";

import { useEffect, useState } from "react";

type StoryProps = {
  onFinish: () => void;
};

const scenes = [
  "Dan waktu terus berjalan...",

  "Berawal dari\nsebuah pesan sederhana.",

  "Lalu berubah menjadi\nobrolan setiap hari.",

  "Tanpa terasa...\n\naku mulai\nmenunggu kabarmu.",

  "Setiap hari...\n\nselalu ada\ncerita baru\nbersamamu.",

  "Sampai akhirnya...\n\naku sadar.",

  "Bukan lagi\ntentang chat.\n\nBukan lagi\ntentang waktu.",

  "Tapi...\n\ntentang seseorang\nyang perlahan\n\nmenjadi alasan\naku tersenyum.\n\n🤍",

  "Dan...\n\ncerita kita\n\nmasih terus\nberlanjut.\n\n🤍",
];

export default function Story({ onFinish }: StoryProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (index >= scenes.length) {
      onFinish();
      return;
    }

    const fadeOut = setTimeout(() => {
      setVisible(false);
    }, 3300);

    const next = setTimeout(() => {
      setIndex((prev) => prev + 1);
      setVisible(true);
    }, 4200);

    return () => {
      clearTimeout(fadeOut);
      clearTimeout(next);
    };
  }, [index, onFinish]);

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-b
      from-rose-50
      via-pink-100
      to-rose-50
      flex
      items-center
      justify-center
      px-8
      overflow-hidden
      "
    >
      <div
        className={`
          whitespace-pre-line
          text-center
          text-pink-600
          font-semibold
          text-3xl
          md:text-5xl
          leading-relaxed
          transition-all
          duration-1000
          ease-in-out

          ${
            index === scenes.length - 1
              ? "text-pink-600 text-5xl md:text-6xl"
              : "text-pink-600 text-3xl md:text-5xl"
          }
          ${
            visible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95 blur-sm"
          }
        `}
      >
        {scenes[index]}
      </div>
    </div>
  );
}