"use client";

type LetterProps = {
  onFinish: () => void;
};

export default function Letter({
  onFinish,
}: LetterProps) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-6">

      <div className="max-w-2xl bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Untuk Bila 🤍
        </h1>

        <p className="leading-8 text-gray-700 whitespace-pre-line">
{`Halo Bila,

Terima kasih sudah hadir di hidupku.

Mungkin kita tidak selalu memiliki waktu yang panjang,
tetapi setiap momen bersamamu selalu berarti.

Semoga apa pun yang sedang kamu jalani,
kamu selalu diberi kebahagiaan, kesehatan,
dan semua mimpi yang kamu inginkan bisa tercapai.

Terima kasih sudah menjadi seseorang yang membuat
hari-hariku terasa lebih berwarna.

- Ari`}
        </p>

      </div>

      <button
        onClick={onFinish}
        className="mt-10 px-8 py-3 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
      >
        Lanjut 🤍
      </button>

    </div>
  );
}