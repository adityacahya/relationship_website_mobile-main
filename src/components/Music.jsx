import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft } from "./icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import config from "./config";

const imageFiles = import.meta.glob("../assets/music/*.png");

function Music() {
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);
  const containerRef = useRef(null);

  // 🔊 audio refs (1 audio per song)
  const audioRefs = useRef({});
  const [audioUnlocked, setAudioUnlocked] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = await Promise.all(
        config.musicGallery.map(async (song, index) => {
          const imagePath = `../assets/music/${index + 1}.png`;
          if (imageFiles[imagePath]) {
            const imageModule = await imageFiles[imagePath]();
            return {
              id: index,
              albumCover: imageModule.default,
              title: song.title,
              artist: song.artist,
              left: song.left,
              top: song.top,
              audio: song.audio,
            };
          }
          return null;
        })
      );

      setSongs(loadedImages.filter(Boolean));
    };

    loadImages();
  }, []);

  // 🔊 play / unlock audio
const playSong = (song) => {
  if (!audioRefs.current[song.id]) {
    const audio = new Audio(song.audio);
    audio.volume = 0.8; // WAJIB 0–1
    audioRefs.current[song.id] = audio;
  }

  audioRefs.current[song.id].play().catch(() => {});
  setAudioUnlocked(true); // 🔓 unlock autoplay
};

// ⏸️ pause audio
const pauseSong = (song) => {
  audioRefs.current[song.id]?.pause();
};

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl font-bold -mb-4 mt-4 text-white text-center">
          {config.musicTitle}
        </h1>

        <div
          ref={containerRef}
          className="relative w-full h-[40rem] rounded-lg overflow-hidden mt-8 mb-12"
        >
          {songs.map((song) => (
            <motion.div
  key={song.id}
  className="absolute"
  style={{ left: song.left, top: song.top }}
  drag
  dragConstraints={containerRef}

  onClick={() => playSong(song)}                     // 🔑 WAJIB (unlock)
  onMouseEnter={() => audioUnlocked && playSong(song)}
  onMouseLeave={() => pauseSong(song)}
>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 flex items-center gap-4 w-56 h-[4rem] cursor-pointer hover:bg-white/20 transition">
                <div className="w-12 h-12">
                  <img
                    src={song.albumCover}
                    alt="Album cover"
                    className="w-full h-full rounded-md object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-white font-medium text-sm truncate">
                    {song.title}
                  </h2>
                  <p className="text-white/70 text-xs truncate">
                    {song.artist}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center w-full mb-4">
          <button
            className="px-4 py-2 flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white text-sm rounded-lg"
            onClick={() => navigate(config.recapRedirectPath)}
          >
            <ArrowLeft /> {config.previousPageText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Music;
