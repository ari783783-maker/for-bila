"use client";

import { useEffect, useState } from "react";

export default function Ending() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-b
      from-white
      via-pink-50
      to-rose-100
      flex
      items-center
      justify-center
      px-6
      py-16
      "
    >
      <div
        className={`
          w-full
          max-w-2xl
          bg-white
          rounded-[36px]
          shadow-2xl
          px-10
          py-14
          text-center
          transition-all
          duration-1000
          ${
            showContent
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }
        `}
      >
        <div className="text-5xl animate-pulse mb-8">
          🤍
        </div>

        <h1
          className="
          text-4xl
          md:text-5xl
          font-bold
          text-pink-600
          leading-tight
          "
        >
          Terima kasih,
          <br />
          Sayang.
        </h1>

        <div
          className="
          mt-12
          text-gray-600
          text-xl
          md:text-2xl
          leading-loose
          "
        >
          <p>Karena sudah hadir.</p>

          <p className="mt-5">
            Karena sudah bertahan.
          </p>

          <p className="mt-5">
            Karena sudah menjadi
            <br />
            bagian dari cerita ini.
          </p>
        </div>

        <div className="text-4xl mt-12 mb-8 animate-pulse">
          🤍
        </div>

        <p
          className="
          text-gray-400
          text-lg
          italic
          "
        >
          — Ari
        </p>
      </div>
    </div>
  );
}