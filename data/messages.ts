export type Message = {
    id: number;
    sender: "ari" | "bila";
    text: string;
    time?: string;
  };
  
  export const messages: Message[] = [
    {
      id: 1,
      sender: "bila",
      text: "Halo ka? Boleh kenalan?",
      time: "30 DES PUKUL 05.47",
    },
    {
      id: 2,
      sender: "ari",
      text: "Iyaa",
    },
    {
      id: 3,
      sender: "bila",
      text: "Kerja atau kuliah ka\nkesibukannya buat sekarang?",
      time: "30 DES PUKUL 09.06",
    },
    {
      id: 4,
      sender: "ari",
      text: "Aku kerja.",
    },
  ];