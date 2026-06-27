"use client";

import { useEffect, useState } from "react";

type LetterProps = {
  onFinish: () => void;
};

const fullText = `Halo Bila,

Mungkin website ini sederhana.

Mungkin juga tidak sempurna.

Tapi aku membuat semuanya sedikit demi sedikit,
karena aku ingin memberikan sesuatu
yang spesial untuk kamu.

Terima kasih sudah hadir
dan menjadi bagian dari hari-hariku.

Semoga apa pun yang sedang kamu jalani,
selalu diberikan kemudahan,
kesehatan,
dan kebahagiaan.

Tetap jadi Bila
yang selalu ceria ya. 🤍

Dan semoga...

aku masih diberi kesempatan
untuk membuat lebih banyak
kenangan bersama kamu.

Dengan tulus,

Ari 🤍`;

export default function Letter({ onFinish }: LetterProps) {
  const [opened, setOpened] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (!opened) return;

    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => setShowButton(true), 600);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [opened]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 flex items-center justify-center px-6 py-10">
      {!opened ? (
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 text-center">
          <div className="text-7xl mb-5">💌</div>

          <h1 className="text-4xl font-bold text-pink-600 mb-4">
            Untuk Bila
          </h1>

          <p className="text-gray-600 leading-8 mb-8">
            Ada sesuatu yang ingin aku sampaikan...
          </p>

          <button
            onClick={() => setOpened(true)}
            className="bg-pink-500 hover:bg-pink-600 transition-all text-white px-8 py-4 rounded-full shadow-xl hover:scale-105"
          >
            Buka Surat ❤️
          </button>
        </div>
      ) : (
        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-10">
          <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
            Untuk Bila 🤍
          </h1>

          <div className="min-h-[420px] whitespace-pre-line leading-9 text-gray-700 text-lg">
            {displayText}
            <span className="animate-pulse">|</span>
          </div>

          {showButton && (
            <div className="flex justify-center mt-10">
              <button
                onClick={onFinish}
                className="bg-pink-500 hover:bg-pink-600 transition-all text-white px-10 py-4 rounded-full shadow-xl hover:scale-105"
              >
                Lanjut ❤️
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
