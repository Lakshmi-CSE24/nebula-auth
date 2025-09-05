import { useEffect } from "react";

export default function MusicPlayer() {
  useEffect(() => {
    const audio = new Audio("/sound1.mp3"); // must be in public/
    audio.loop = true;
    audio.volume = 0.3;

    // try autoplay
    audio.play().catch(() => {
      // if blocked, start after first user click
      const startOnFirstClick = () => {
        audio.play().catch(() => {});
        window.removeEventListener("click", startOnFirstClick);
      };
      window.addEventListener("click", startOnFirstClick);
    });

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  return null;
}
