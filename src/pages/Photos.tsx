import Navbar from "../components/Navbar";
import { useState } from "react";
import { images } from "../data/images";
import CategoryFilter from "../components/CategoryFillter";
import ImageCard from "../components/ImageCard";

export default function Photos() {
  const [category, setCategory] = useState("all");

  const categories = [
    "all",
    "sci-fi",
    "fantasy",
    "cyberpunk",
    "pixel-art",
    "surreal",
    "vaporwave",
    "realistic",
    "minimal",
    "steampunk",
  ];

  const filtered =
    category === "all"
      ? images
      : images.filter((img) => img.category === category);

  return (
    <div className="min-h-screen bg-[#0b0b1a] text-white">
      <Navbar />

      <div className="p-6">
        <h1 className="text-3xl font-bold text-indigo-300 mb-4">
          All Photos Gallery
        </h1>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          selected={category}
          onSelect={setCategory}
        />

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {filtered.map((img) => (
            <ImageCard key={img.id} image={img} />
          ))}
        </div>
      </div>
    </div>
  );
}