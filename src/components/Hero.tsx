export default function Hero() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://i.postimg.cc/8z9P55Pj/597adbbcf6eefa93317dc2c5d47d85a5-Copy.webp')",
      }}
    >
      {/* ইমেজের ওপর টেক্সট যেন পরিষ্কার দেখা যায় তাই একটি হালকা ডার্ক/সফট ওভারলে */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* soft overlay glow */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,#7a2e3a,transparent)]"></div>

      <div className="relative text-center max-w-3xl px-6 z-10">
        
        {/* headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#130507] drop-shadow-md">
          AI Image Generator
        </h1>

        {/* subtitle */}
        <p className="mt-4 text-white text-lg font-medium drop-shadow-sm">
          Create Sci-fi, Fantasy, Cyberpunk, Surreal & Pixel Art with AI
        </p>

        {/* buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          
          <button className="px-6 py-3 rounded-xl bg-[#4f46e5] text-white shadow-md hover:scale-105 transition">
            Generate Now
          </button>

          <button className="px-6 py-3 rounded-xl border border-[#7a2e3a] text-black bg-white hover:bg-pink-300 hover:text-black transition">
            View Pricing
          </button>

        </div>
      </div>
    </section>
  );
}
