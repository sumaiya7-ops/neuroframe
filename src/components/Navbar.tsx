import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#0b0b1a] text-white border-b border-indigo-900">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-indigo-300">
        NeuroFrame
      </div>

      {/* Menu */}
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/photos">All Photos</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/profile">Profile</Link>
      </div>

      {/* Auth */}
      <div className="flex items-center gap-3">
        {user ? (
          <>
            <span className="text-indigo-300 text-sm">
              {user.email}
            </span>

            <button
              onClick={logout}
              className="px-3 py-1 border border-red-500 text-red-300 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/signin"
              className="px-3 py-1 border border-indigo-400 rounded"
            >
              Sign In
            </Link>

            <Link
              to="/signup"
              className="px-3 py-1 bg-indigo-600 rounded"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}