import { useState } from "react";
import axios from "axios";
import useClickSound from "../hooks/useClickSound";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dialog, setDialog] = useState({ show: false, title: "", message: "" });
  const API = "http://localhost:5000/api";
  const playClick = useClickSound();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/auth/register`, { name, email, password });
      setDialog({
        show: true,
        title: "🌌 Welcome Aboard!",
        message: "Your star account has been created. 🚀 Redirecting you to login..."
      });
      setTimeout(() => {
        window.location.href = "/login";
      }, 2500);
    } catch (err) {
      setDialog({
        show: true,
        title: "🚫 Registration Error",
        message: "Failed to create your account. Please try again."
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      {dialog.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-gradient-to-br from-indigo-900 via-purple-800 to-black p-8 rounded-2xl shadow-2xl neon-card animate-fadeIn max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4 neon-title">{dialog.title}</h2>
            <p className="mb-4">{dialog.message}</p>
            <button
              onClick={() => {
                playClick();
                setDialog({ ...dialog, show: false });
              }}
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-xl shadow-lg transition transform hover:scale-105"
            >
              🌠 Okay
            </button>
          </div>
        </div>
      )}

      {/* Register Form */}
      <form
        onSubmit={handleRegister}
        className="bg-black bg-opacity-50 p-8 rounded-xl shadow-lg neon-card animate-fadeIn"
      >
        <h2 className="text-2xl font-bold mb-4">🪐 Register</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full mb-4 p-2 rounded text-black"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full mb-4 p-2 rounded text-black"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full mb-4 p-2 rounded text-black"
          required
        />
        <button
          type="submit"
          onClick={playClick}
          className="w-full bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-xl shadow-lg transition transform hover:scale-105"
        >
          🌠 Create Account
        </button>
      </form>
    </div>
  );
}
