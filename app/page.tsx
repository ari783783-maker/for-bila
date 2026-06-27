"use client";

import { useState } from "react";

import LoadingScreen from "../components/LoadingScreen";
import Messenger from "../components/Messenger/Messenger";
import Gallery from "../components/Gallery";
import Letter from "../components/Letter";
import Ending from "../components/Ending";
import MusicPlayer from "../components/MusicPlayer";

export default function Home() {

  const [page, setPage] = useState<
    "loading" | "messenger" | "gallery" | "letter" | "ending"
  >("loading");

  const [playMusic, setPlayMusic] = useState(false);

  return (
    <>

      <MusicPlayer play={playMusic} />

      {page === "loading" && (

        <LoadingScreen
          onFinish={() => {

            setPlayMusic(true);

            setTimeout(() => {

              setPage("messenger");

            }, 700);

          }}
        />

      )}

      {page === "messenger" && (
        <Messenger
          onFinish={() => setPage("gallery")}
        />
      )}

      {page === "gallery" && (
        <Gallery
          onFinish={() => setPage("letter")}
        />
      )}

      {page === "letter" && (
        <Letter
        onFinish={() => setPage("ending")}
      />
      )}

      {page === "ending" && (
        <Ending />
      )}

    </>
  );
}