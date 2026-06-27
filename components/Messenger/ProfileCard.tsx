"use client";

export default function ProfileCard() {
  return (

    <div className="py-10 flex flex-col items-center border-b border-gray-100">

      <div className="w-24 h-24 rounded-full bg-gray-300 mb-4" />

      <h2 className="text-3xl font-bold">
        Ari Setiawan
      </h2>

      <p className="text-gray-500 mt-2">
        @ari.setiawan.696382
      </p>

      <p className="text-gray-500 mt-2">
        Anda berteman di Facebook
      </p>

      <p className="text-gray-500">
        Tinggal di Jakarta, Indonesia
      </p>

      <button
        className="mt-5 bg-gray-100 px-6 py-2 rounded-full"
      >
        Lihat Profil
      </button>

    </div>

  );
}