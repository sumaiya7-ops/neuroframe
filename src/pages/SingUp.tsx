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
    <div className="h-screen flex items-center justify-center bg-[#0b0b1a] text-white">
      <form className="bg-gray-900 p-6 rounded-lg w-96">
        <h2 className="text-2xl mb-4">Sign Up</h2>

        <input
          placeholder="Email"
          className="w-full p-2 mb-3 text-black"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password (8+ chars)"
          className="w-full p-2 mb-3 text-black"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-pink-600 p-2 rounded"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}