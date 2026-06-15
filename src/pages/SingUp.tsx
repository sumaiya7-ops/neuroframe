import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    navigate("/signin");
  };

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://i.postimg.cc/9QY0xVc8/images-Copy.jpg')",
      }}
    >
      {/* কোনো আবছা (Blur) বা কালো লেয়ার রাখা হয়নি যাতে ব্যাকগ্রাউন্ড স্পষ্ট থাকে */}

      <form
        onSubmit={handleSubmit}
        className="relative bg-white p-8 rounded-2xl shadow-2xl border border-[#7a2e3a]/10 w-96"
      >
        {/* title */}
        <h2 className="text-3xl font-bold text-center text-[#120a0b] mb-6">
          Create Account
        </h2>

        {/* email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg border border-[#7a2e3a]/20 focus:outline-none focus:border-[#4f46e5] bg-white text-black"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* password */}
        <input
          type="password"
          placeholder="Password (8+ chars)"
          className="w-full p-3 mb-4 rounded-lg border border-[#7a2e3a]/20 focus:outline-none focus:border-[#4f46e5] bg-white text-black"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-[#4f46e5] text-white font-medium hover:opacity-90 transition shadow-md"
        >
          Sign Up
        </button>

        {/* footer */}
        <p className="text-center text-sm text-[#0e0d0d] mt-4">
          Join AI Image Generation Platform
        </p>

      </form>
    </div>
  );
}
