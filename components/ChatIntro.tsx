"use client";

type Props = {
    onNext: () => void;
};

export default function ChatIntro({ onNext }: Props) {

    return (

        <div className="h-screen flex flex-col justify-center items-center">

            <h2 className="text-4xl mb-8">

                Semua ini berawal dari sini...

            </h2>

            <button

                onClick={onNext}

                className="border px-8 py-3 rounded-full"

            >

                Lanjut →

            </button>

        </div>

    );

}