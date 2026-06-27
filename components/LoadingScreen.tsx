"use client";

type LoadingScreenProps = {
  onFinish: () => void;
};

export default function LoadingScreen({
  onFinish,
}: LoadingScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-white to-blue-100">

      <h1 className="text-7xl font-extrabold text-pink-500 drop-shadow-lg">
        For Bila 🤍
      </h1>

      <p className="text-gray-400">
      A little website made just for you.
      </p>

      <button
        onClick={onFinish}
        className="mt-12 border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
      >
        Coba klik deh 🤍
      </button>

    </div>
  );
}