"use client";

import { useEffect, useState } from "react";

type LoadingScreenProps = {
  onFinish: () => void;
};

export default function LoadingScreen({
  onFinish,
}: LoadingScreenProps) {

  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {

    const t1 = setTimeout(() => {
      setShowTitle(true);
    }, 200);

    const t2 = setTimeout(() => {
      setShowSubtitle(true);
    }, 700);

    const t3 = setTimeout(() => {
      setShowButton(true);
    }, 1200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };

  }, []);

  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-white to-blue-100 px-6">

      <h1
        className={`
          text-6xl
          md:text-7xl
          font-extrabold
          text-pink-500
          drop-shadow-lg
          transition-all
          duration-700
          ${
            showTitle
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }
        `}
      >
        For Bila 🤍
      </h1>

      <p
        className={`
          mt-6
          text-center
          text-gray-500
          text-lg
          leading-8
          transition-all
          duration-700
          ${
            showSubtitle
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }
        `}
      >
        Aku punya sesuatu
        <br />
        untuk kamu.
      </p>

      <button
        onClick={onFinish}
        className={`
          mt-14
          px-10
          py-4
          rounded-full
          bg-pink-500
          hover:bg-pink-600
          text-white
          font-medium
          shadow-2xl
          transition-all
          duration-700
          hover:scale-105
          ${
            showButton
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 pointer-events-none"
          }
        `}
      >
        Coba klik deh

        <span className="ml-2 inline-block animate-heartbeat">
          🤍
        </span>

      </button>

    </div>

  );

}