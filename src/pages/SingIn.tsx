import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    login(email);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3e7e9]">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md border border-[#7a2e3a]/10 w-96"
      >

        {/* title */}
        <h2 className="text-3xl font-bold text-center text-[#7a2e3a] mb-6">
          Welcome Back
        </h2>

        {/* email */}
        <input
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg border border-[#7a2e3a]/20 focus:outline-none focus:border-[#4f46e5]"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* password */}
        <input
          type="password"
          placeholder="Password (8+ chars)"
          className="w-full p-3 mb-4 rounded-lg border border-[#7a2e3a]/20 focus:outline-none focus:border-[#4f46e5]"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-[#4f46e5] text-white font-medium hover:opacity-90 transition"
        >
          Sign In
        </button>

        {/* footer text */}
        <p className="text-center text-sm text-[#7a2e3a]/60 mt-4">
          Secure AI Image Platform
        </p>

      </form>
    </div>
  );
}