"use client";

import { useState } from "react";

import LoadingScreen from "../components/LoadingScreen";
import Messenger from "../components/Messenger/Messenger";
import Gallery from "../components/Gallery";
import Letter from "../components/Letter";
import Ending from "../components/Ending";
import MusicPlayer from "../components/MusicPlayer";
import Intro from "../components/intro";

export default function Home() {

  const [page, setPage] = useState<
  "loading" | "intro" | "messenger" | "gallery" | "letter" | "ending"
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

              setPage("intro");

            }, 700);

          }}
        />

      )}

{page === "intro" && (
  <Intro
    onFinish={() => setPage("messenger")}
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