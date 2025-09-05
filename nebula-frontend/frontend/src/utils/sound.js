// utils/sound.js
// Preload click sound from public folder
const clickSound = new Audio("/click1.mp3");

export const playClick = () => {
  try {
    clickSound.currentTime = 0; // reset so it plays every click
    clickSound.play();
  } catch (err) {
    console.log("Sound error:", err);
  }
};
