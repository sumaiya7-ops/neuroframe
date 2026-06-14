export default function Hero() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative text-center max-w-3xl px-6">
        <h1 className="text-5xl font-bold text-indigo-300">
          AI Image Generator
        </h1>

        <p className="mt-4 text-gray-200">
          Sci-fi, fantasy, cyberpunk, surreal, pixel art & more
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <button className="px-6 py-3 bg-indigo-600 rounded-lg">
            Generate Now
          </button>

          <button className="px-6 py-3 border border-pink-500 text-pink-300 rounded-lg">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
}