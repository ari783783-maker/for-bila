"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type GalleryProps = {
  onFinish: () => void;
};

const photos = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/5.jpeg",
  "/images/6.jpeg",
  "/images/7.jpeg",
  "/images/8.jpeg",
  "/images/9.jpeg",
  "/images/10.jpeg",
  "/images/11.jpeg",
  "/images/12.jpeg",
  "/images/13.jpeg",
  "/images/14.jpeg",
  "/images/15.jpeg",
];

export default function Gallery({
  onFinish,
}: GalleryProps) {

  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {

    if (currentPhoto >= photos.length - 1) return;

    const timer = setTimeout(() => {

      setCurrentPhoto((prev) => prev + 1);

    }, 2200);

    return () => clearTimeout(timer);

  }, [currentPhoto]);

  return (

    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col justify-center items-center px-6">

      <h1 className="text-5xl font-bold text-pink-600 drop-shadow-lg mb-10">

        Cerita Kita 🤍

      </h1>

      <div className="relative w-[340px] h-[430px] rounded-[32px] overflow-hidden shadow-2xl border-[8px] border-white">

        <Image
          src={photos[currentPhoto]}
          alt="Gallery"
          fill
          className="object-cover transition-all duration-700"
        />

      </div>

      {currentPhoto === photos.length - 1 && (

        <button

          onClick={onFinish}

          className="mt-12
          bg-pink-500
          hover:bg-pink-600
          text-white
          font-semibold
          px-10
          py-4
          rounded-full
          shadow-xl
          transition-all
          duration-300
          hover:scale-105"

        >

          Buka Surat 💌

        </button>

      )}

    </div>

  );

}