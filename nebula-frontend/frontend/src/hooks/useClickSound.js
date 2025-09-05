import { useCallback } from "react";

export default function useClickSound() {
  const playClick = useCallback(() => {
    const audio = new Audio("/click1.mp3"); // from public folder
    audio.volume = 0.5;
    audio.play();
  }, []);

  return playClick;
}
