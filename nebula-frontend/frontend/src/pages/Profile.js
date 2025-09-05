import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  // ✅ play click sound
  const playClick = () => {
    const audio = new Audio("/click1.mp3");
    audio.play();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("🚫 Please log in again");
      return;
    }

    axios
      .get("https://nebula-auth-api.onrender.com/api/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch(() =>
        setError("🚫 Could not fetch your star data. Please log in again.")
      );
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg.jpeg')", // ✅ cosmic bg
      }}
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-2xl shadow-xl text-white w-full max-w-md text-center">
        {error ? (
          <div>
            <p className="text-red-400">{error}</p>
            <button
              onClick={() => {
                playClick(); // 🔊 click sound
                window.location.href = "/login";
              }}
              className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition"
            >
              🚀 Okay
            </button>
          </div>
        ) : user ? (
          <div>
            <h2 className="text-2xl font-bold mb-4 neon-title">🌌 Welcome, {user.name}!</h2>
            <p className="text-lg">✨ Name: {user.name}</p>
            <p className="mt-2 text-gray-300">📧 Email: {user.email}</p>
          </div>
        ) : (
          <p className="text-gray-300">Loading your galaxy...</p>
        )}
      </div>
    </div>
  );
}
