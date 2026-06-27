"use client";

import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="py-10 flex flex-col items-center border-b border-gray-200">

      <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-white mb-4">
        <Image
          src="/images/image.jpeg"
          alt="Ari Setiawan"
          fill
          className="object-cover"
        />
      </div>

      <h2 className="text-3xl font-bold text-gray-900">
        Ari Setiawan
      </h2>

      <p className="text-gray-600 mt-2">
        @ari.setiawan.696382
      </p>

      <p className="text-gray-700 mt-3">
        Anda berteman di Facebook
      </p>

      <p className="text-gray-700">
        Tinggal di Jakarta, Indonesia
      </p>

      <button
        className="
        mt-5
        bg-gray-200
        hover:bg-gray-300
        text-gray-800
        font-medium
        px-6
        py-2
        rounded-full
        transition
        "
      >
        Lihat Profil
      </button>

    </div>
  );
}