import { useState } from "react";
import { images } from "../data/images";
import CategoryFilter from "../components/CategoryFillter";
import ImageCard from "./ImageCard";

export default function Gallery() {
  const [category, setCategory] = useState("all");

  const categories = [
    "all",
    "sci-fi",
    "fantasy",
    "cyberpunk",
  ];

  const filtered =
    category === "all"
      ? images
      : images.filter((img) => img.category === category);

  return (
    <section className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">
        Top Generations
      </h2>

      <CategoryFilter
        categories={categories}
        selected={category}
        onSelect={setCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map((img) => (
          <ImageCard key={img.id} image={img} />
        ))}
      </div>
    </section>
  );
}