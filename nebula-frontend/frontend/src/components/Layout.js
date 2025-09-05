import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      {/* App Logo */}
      <img
        src="/logo1.jpeg"
        alt="Nebula Logo"
        className="w-24 h-24 mb-4 rounded-full shadow-lg"
      />

      {/* Simple nav (optional) */}
      <div className="flex gap-4 mb-6">
        <Link className="underline" to="/register">Register</Link>
        <Link className="underline" to="/login">Login</Link>
        <Link className="underline" to="/profile">Profile</Link>
      </div>

      {/* Page content */}
      <Outlet />
    </div>
  );
}
