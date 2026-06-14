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
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#7a2e3a]/10 hover:shadow-xl transition duration-300 hover:-translate-y-1">
      
      {/* image */}
      <img
        src={image.url}
        className="h-48 w-full object-cover"
      />

      {/* content */}
      <div className="p-4">

        <h3 className="font-bold text-[#7a2e3a] text-lg">
          {image.title}
        </h3>

        <p className="text-sm text-[#7a2e3a]/60">
          {image.category}
        </p>

        {/* actions */}
        <div className="flex justify-between items-center mt-4 text-sm">

          {/* like */}
          <button
            onClick={() => setLiked(!liked)}
            className="text-xl"
          >
            {liked ? "❤️" : "🤍"}
          </button>

          {/* download */}
          <a
            href={image.url}
            download
            className="text-[#4f46e5] font-medium hover:underline"
          >
            ⬇ Download
          </a>

          {/* view */}
          <button
            onClick={handleView}
            className="px-3 py-1 rounded-md bg-[#7a2e3a] text-white hover:bg-[#4f46e5] transition"
          >
            👁 View
          </button>

        </div>
      </div>
    </div>
  );
}