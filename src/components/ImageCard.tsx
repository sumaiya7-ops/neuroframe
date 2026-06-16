import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ImageCard({ image }: any) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLike = () => {
    if (liked) {
      setLikeCount(0);
    } else {
      setLikeCount(1);
    }

    setLiked(!liked);
  };

  const handleView = () => {
    if (!user) {
      navigate("/signin");
      return;
    }

    alert("Image Details Opened");
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#7a2e3a]/10 hover:shadow-xl transition duration-300 hover:-translate-y-1">
      
      {/* Image */}
      <img
        src={image.url}
        alt={image.title}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-4">
        
        {/* Title */}
        <h3 className="font-bold text-[#f00ca0] text-lg">
          {image.title}
        </h3>

        {/* Category */}
        <p className="text-sm text-[#3009bd] mt-1">
          {image.category}
        </p>

        {/* Actions */}
        <div className="flex justify-between items-center mt-4 text-sm">

          {/* Like */}
          <button
            onClick={handleLike}
            className="flex items-center gap-1"
          >
            <span className="text-xl">
              {liked ? "❤️" : "🤍"}
            </span>

            <span className="font-medium text-[#f00ca0]">
              {likeCount}
            </span>
          </button>

          {/* Download */}
          <a
            href={image.url}
            download
            className="text-[#d40606] font-medium hover:underline"
          >
            ⬇ Download
          </a>

          {/* View */}
          <button
            onClick={handleView}
            className="px-3 py-1 rounded-md bg-[#f70e31] text-white hover:bg-[#4f46e5] transition"
          >
            👁 View
          </button>

        </div>
      </div>
    </div>
  );
}