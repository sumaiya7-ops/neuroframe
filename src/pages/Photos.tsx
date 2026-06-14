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
    <div className="min-h-screen bg-[#cbe4fc] text-[#fc06d3]">
      
      <Navbar />

      <div className="p-6">

        {/* title */}
        <h1 className="text-3xl font-bold text-[#fb089e] mb-6">
          All Photos Gallery
        </h1>

        {/* category filter */}
        <CategoryFilter
          categories={categories}
          selected={category}
          onSelect={setCategory}
        />

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {filtered.map((img) => (
            <ImageCard key={img.id} image={img} />
          ))}
        </div>

      </div>
    </div>
  );
}