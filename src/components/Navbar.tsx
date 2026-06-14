import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#f3e7e9] border-b border-[#7a2e3a]/10 shadow-sm">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-[#7a2e3a]">
        NeuroFrame
      </div>

      {/* Menu */}
      <div className="flex gap-6 text-[#7a2e3a] font-medium">
        <Link className="hover:text-[#4f46e5] transition" to="/">
          Home
        </Link>

        <Link className="hover:text-[#4f46e5] transition" to="/photos">
          All Photos
        </Link>

        <Link className="hover:text-[#4f46e5] transition" to="/pricing">
          Pricing
        </Link>

        <Link className="hover:text-[#4f46e5] transition" to="/profile">
          Profile
        </Link>
      </div>

      {/* Auth */}
      <div className="flex items-center gap-3">
        {user ? (
          <>
            <span className="text-sm text-[#7a2e3a]">
              {user.email}
            </span>

            <button
              onClick={logout}
              className="px-3 py-1 rounded-md border border-[#7a2e3a] text-[#7a2e3a] hover:bg-[#7a2e3a] hover:text-white transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/signin"
              className="px-3 py-1 rounded-md border border-[#4f46e5] text-[#4f46e5] hover:bg-[#4f46e5] hover:text-white transition"
            >
              Sign In
            </Link>

            <Link
              to="/signup"
              className="px-3 py-1 rounded-md bg-[#4f46e5] text-white hover:opacity-90 transition"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}