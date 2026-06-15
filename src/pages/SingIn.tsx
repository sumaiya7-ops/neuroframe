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
    <div 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://i.postimg.cc/43s2pv35/download-(2).jpg')",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="relative z-10  backdrop-blur-md p-8 rounded-2xl shadow-xl border border-[#7a2e3a]/10 w-96"
      >
        {/* title */}
        <h2 className="text-3xl font-bold text-center text-[#0f0e0e] mb-6">
          Welcome Back
        </h2>

        {/* email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg border border-[#ead3d7] focus:outline-none focus:border-[#4f46e5] bg-white text-black"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* password */}
        <input
          type="password"
          placeholder="Password (8+ chars)"
          className="w-full p-3 mb-4 rounded-lg border border-[#f5e5e7] focus:outline-none focus:border-[#4f46e5] bg-white text-black"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-[#4f46e5] text-white font-medium hover:opacity-90 transition shadow-md"
        >
          Sign In
        </button>

        {/* footer text */}
        <p className="text-center text-sm text-white mt-4 font-medium">
          Secure AI Image Platform
        </p>

      </form>
    </div>
  );
}
