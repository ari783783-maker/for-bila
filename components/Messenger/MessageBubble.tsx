"use client";

type Props = {
    sender: string;
    text: string;
};

export default function MessageBubble({
  sender,
  text,
}: Props) {

  const isMine = sender === "ari";

  return (

    <div
      className={`flex mb-3 ${
        isMine ? "justify-end" : "justify-start"
      }`}
    >

      <div
        className={`max-w-[72%] px-4 py-3 rounded-3xl whitespace-pre-line text-[16px]
        ${
          isMine
            ? "bg-[#0084FF] text-white rounded-br-md"
            : "bg-[#E4E6EB] text-black rounded-bl-md"
        }`}
      >

        {text}

      </div>

    </div>

  );

}