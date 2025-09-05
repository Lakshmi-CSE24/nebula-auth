import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center">
      {/* Logo */}
      <img
        src={process.env.PUBLIC_URL + "/logo1.jpeg"}
        alt="logo"
        className="w-32 mb-6 animate-pulse"
      />

      <h1 className="text-4xl font-bold mb-10">🌌 Welcome to Nebula App</h1>

      {/* Buttons */}
      <div className="flex gap-6">
        <Link
          to="/register"
          onClick={() => new Audio(process.env.PUBLIC_URL + "/click1.mp3").play()}
          className="neon-card px-6 py-3 rounded-2xl hover:bg-indigo-600"
        >
          🚀 Register
        </Link>

        <Link
          to="/login"
          onClick={() => new Audio(process.env.PUBLIC_URL + "/click1.mp3").play()}
          className="neon-card px-6 py-3 rounded-2xl hover:bg-indigo-600"
        >
          🔑 Login
        </Link>

        <Link
          to="/profile"
          onClick={() => new Audio(process.env.PUBLIC_URL + "/click1.mp3").play()}
          className="neon-card px-6 py-3 rounded-2xl hover:bg-indigo-600"
        >
          👤 Profile
        </Link>
      </div>

      {/* Background Music */}
      <audio autoPlay loop>
        <source src={process.env.PUBLIC_URL + "/sound1.mp3"} type="audio/mpeg" />
      </audio>
    </div>
  );
}
