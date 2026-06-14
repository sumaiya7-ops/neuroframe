import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ImageCard({ image }: any) {
  const [liked, setLiked] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleView = () => {
    if (!user) {
      navigate("/signin");
      return;
    }

    alert("Image Details Opened");
  };

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:scale-105 transition duration-300">
      
      <img
        src={image.url}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-indigo-200">
          {image.title}
        </h3>

        <div className="flex justify-between mt-3 text-sm">
          <button onClick={() => setLiked(!liked)}>
            {liked ? "❤️" : "🤍"}
          </button>

          <a href={image.url} download className="text-indigo-300">
            ⬇ Download
          </a>

          <button onClick={handleView} className="text-green-400">
            👁 View
          </button>
        </div>
      </div>
    </div>
  );
}