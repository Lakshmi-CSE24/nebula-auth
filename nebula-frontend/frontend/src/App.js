import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

export default function App() {
  // 🔊 Play sound on click
  useEffect(() => {
    const clickSound = new Audio(process.env.PUBLIC_URL + "/click1.mp3");
    const handleClick = () => {
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {}); // ignore autoplay issues
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <Router>
      {/* 🌌 Space-Themed Navbar */}
      <div className="fixed top-0 left-0 w-full flex justify-center gap-6 p-4 bg-black bg-opacity-40 backdrop-blur-lg z-50">
        <Link
          to="/register"
          className="nav-pill px-5 py-2 rounded-2xl text-white font-bold tracking-wide shadow-lg hover:scale-105 active:scale-95 transition" 
        >
          🚀 Register
        </Link>
        <Link
          to="/login"
          className="nav-pill px-5 py-2 rounded-2xl text-white font-bold tracking-wide shadow-lg hover:scale-105 active:scale-95 transition"
        >
          🌙 Login
        </Link>
        <Link
          to="/profile"
          className="nav-pill px-5 py-2 rounded-2xl text-white font-bold tracking-wide shadow-lg hover:scale-105 active:scale-95 transition"
        >
          👩‍🚀 Profile
        </Link>
      </div>

      {/* 🌌 Pages */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}
