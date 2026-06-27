"use client";

import { useEffect, useState } from "react";

type LetterProps = {
  onFinish: () => void;
};

const letterText = `Halo Sayang,

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
      index++;

      setDisplayText(letterText.slice(0, index));

      window.requestAnimationFrame(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      });

      if (index >= letterText.length) {
        clearInterval(interval);

        setTimeout(() => {
          setShowButton(true);
        }, 600);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [opened]);

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-b
      from-rose-100
      via-pink-50
      to-white
      px-6
      py-16
      flex
      justify-center
      "
    >
      <div
        className="
        w-full
        max-w-4xl
        "
      >
        {!opened ? (
          <div
            className="
            mx-auto
            max-w-lg
            rounded-[34px]
            bg-white
            shadow-2xl
            p-10
            text-center
            transition
            duration-500
            "
          >
            <div className="text-7xl mb-6">
              💌
            </div>

            <h1
              className="
              text-4xl
              font-bold
              text-pink-600
              mb-5
              "
            >
              Untuk Bila
            </h1>

            <p
              className="
              text-gray-600
              leading-8
              text-lg
              mb-10
              "
            >
              Ada sesuatu
              <br />
              yang ingin aku sampaikan.
            </p>

            <button
              onClick={() => setOpened(true)}
              className="
              px-10
              py-4
              rounded-full
              bg-pink-500
              hover:bg-pink-600
              text-white
              shadow-lg
              transition
              duration-300
              hover:scale-105
              "
            >
              Buka Surat ❤️
            </button>
          </div>
        ) : (
          <div
            className="
            bg-white
            rounded-[34px]
            shadow-2xl
            p-8
            md:p-12
            transition
            duration-500
            "
          >
            <h1
              className="
              text-4xl
              font-bold
              text-center
              text-pink-600
              mb-10
              "
            >
              Untuk Bila 🤍
            </h1>

            <div
              className="
              whitespace-pre-line
              text-gray-700
              text-lg
              md:text-xl
              leading-10
              tracking-wide
              min-h-[420px]
              "
            >
              {displayText}

              {!showButton && (
                <span className="animate-pulse">
                  |
                </span>
              )}
            </div>
            {showButton && (
              <div
                className="
                flex
                justify-center
                mt-14
                "
              >
                <button
                  onClick={onFinish}
                  className="
                  px-10
                  py-4
                  rounded-full
                  bg-pink-500
                  hover:bg-pink-600
                  text-white
                  font-medium
                  shadow-lg
                  transition
                  duration-300
                  hover:scale-105
                  active:scale-95
                  "
                >
                  Lanjut ❤️
                </button>
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
}