"use client";

import { useEffect } from "react";

type IntroProps = {
  onFinish: () => void;
};

export default function Intro({ onFinish }: IntroProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2800);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-pink-100
      via-rose-50
      to-white
      px-6
      "
    >
      <div className="text-center animate-fadeIn">

        <p
          className="
          text-5xl
          md:text-6xl
          font-bold
          text-pink-600
          leading-tight
          "
        >
          Semua
          <br />
          Berawal
          <br />
          Dari Sini.
        </p>

        <div className="mt-8 text-4xl">
          🤍
        </div>

      </div>
    </div>
  );
}