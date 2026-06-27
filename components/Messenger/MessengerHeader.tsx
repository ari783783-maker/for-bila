"use client";

import { ArrowLeft, Phone, Video, Info } from "lucide-react";

export default function MessengerHeader() {
  return (
    <div className="sticky top-0 bg-white border-b border-gray-200 z-50">

      <div className="flex items-center justify-between px-4 py-3">

        <div className="flex items-center gap-3">

          <ArrowLeft size={24} />

          <div>

            <h1 className="text-black font-bold text-[17px]">
              Ari Setiawan
            </h1>

            <p className="text-sm text-gray-700">
              Aktif 6 jam yang lalu
            </p>

          </div>

        </div>

        <div className="flex gap-4 text-[#0084FF]">

          <Phone size={22} />

          <Video size={22} />

          <Info size={22} />

        </div>

      </div>

    </div>
  );
}