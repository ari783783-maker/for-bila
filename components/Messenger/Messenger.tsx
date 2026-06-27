"use client";

import { useEffect, useRef, useState } from "react";

import MessengerHeader from "./MessengerHeader";
import ProfileCard from "./ProfileCard";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

import { messages, Message } from "../../data/messages";

type MessengerProps = {
  onFinish: () => void;
};

const CHAT_DELAY = 1200;

export default function Messenger({ onFinish }: MessengerProps) {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [showContinue, setShowContinue] = useState(false);

  const currentIndex = useRef(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const timers = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    currentIndex.current = 0;
    setVisibleMessages([]);
    setShowContinue(false);
    timers.current = [];

    const showNextMessage = () => {
      const nextMessage = messages[currentIndex.current];

      if (!nextMessage) {
        setShowContinue(true);
        return;
      }

      setVisibleMessages((prev) => [...prev, nextMessage]);

      currentIndex.current++;

      const timer = setTimeout(showNextMessage, CHAT_DELAY);
      timers.current.push(timer);
    };

    const firstTimer = setTimeout(showNextMessage, 600);
    timers.current.push(firstTimer);

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [onFinish]);

  useEffect(() => {
    const container = chatContainerRef.current;
  
    if (!container) return;
  
    setTimeout(() => {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  }, [visibleMessages, showContinue]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-100 via-rose-50 to-sky-100 p-6">
      <div className="w-full max-w-md h-[92vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">

        <MessengerHeader />

        <ProfileCard />


        <div
  ref={chatContainerRef}
  className="flex-1 overflow-y-auto px-4 py-6">

          {visibleMessages.map((message) => (
            <div key={message.id}>

              {message.time && (
                <div className="text-center text-xs text-gray-500 my-6">
                  {message.time}
                </div>
              )}

              <MessageBubble
                sender={message.sender}
                text={message.text}
              />

            </div>
          ))}



{showContinue && (
  <div className="flex justify-center my-8">
    <button
      onClick={onFinish}
      className="w-14 h-14 rounded-full bg-pink-500 text-white text-3xl shadow-xl hover:scale-110 transition-all duration-300"
    >
      ↓
    </button>
  </div>
)}



        </div>

        <ChatInput />

      </div>
    </div>
  );
}