export default function Hero() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, #f3e7e9 0%, #ffffff 50%, #f3e7e9 100%)",
      }}
    >
      {/* soft overlay glow */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,#7a2e3a,transparent)]"></div>

      <div className="relative text-center max-w-3xl px-6">
        
        {/* headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#7a2e3a]">
          AI Image Generator
        </h1>

        {/* subtitle */}
        <p className="mt-4 text-[#7a2e3a]/70 text-lg">
          Create Sci-fi, Fantasy, Cyberpunk, Surreal & Pixel Art with AI
        </p>

        {/* buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          
          <button className="px-6 py-3 rounded-xl bg-[#4f46e5] text-white shadow-md hover:scale-105 transition">
            Generate Now
          </button>

          <button className="px-6 py-3 rounded-xl border border-[#7a2e3a] text-[#7a2e3a] hover:bg-[#7a2e3a] hover:text-white transition">
            View Pricing
          </button>

        </div>
      </div>
    </section>
  );
}