"use client";

import { Plus, Camera, Image, Mic, Smile, ThumbsUp } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="border-t border-gray-200 bg-white px-3 py-2">

      <div className="flex items-center gap-3">

        <Plus size={22} className="text-[#0084FF]" />

        <Camera size={22} className="text-[#0084FF]" />

        <Image size={22} className="text-[#0084FF]" />

        <Mic size={22} className="text-[#0084FF]" />

        <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-gray-500 text-sm">
          Pesan...
        </div>

        <Smile size={22} className="text-[#0084FF]" />

        <ThumbsUp size={22} className="text-[#0084FF]" />

      </div>

    </div>
  );
}