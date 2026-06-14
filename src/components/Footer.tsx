export default function Footer() {
  return (
    <footer className="bg-[#f3e7e9] border-t border-[#7a2e3a]/10 mt-16">

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#7a2e3a]">
            NeuroFrame
          </h2>
          <p className="text-sm text-[#7a2e3a]/70 mt-2">
            AI-powered image generation platform built for creators,
            designers, and dreamers.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#7a2e3a] mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2 text-[#7a2e3a]/70">
            <li className="hover:text-[#4f46e5] transition">Home</li>
            <li className="hover:text-[#4f46e5] transition">All Photos</li>
            <li className="hover:text-[#4f46e5] transition">Pricing</li>
            <li className="hover:text-[#4f46e5] transition">Profile</li>
          </ul>
        </div>

        {/* Contact / CTA */}
        <div>
          <h3 className="text-lg font-semibold text-[#7a2e3a] mb-3">
            Stay Connected
          </h3>

          <p className="text-sm text-[#7a2e3a]/70 mb-4">
            Subscribe for updates and new AI features.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 rounded-l-lg border border-[#7a2e3a]/20 focus:outline-none"
            />

            <button className="px-4 py-2 bg-[#4f46e5] text-white rounded-r-lg hover:opacity-90 transition">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* bottom bar */}
      <div className="border-t border-[#7a2e3a]/10 py-4 text-center text-sm text-[#7a2e3a]/60">
        © {new Date().getFullYear()} NeuroFrame. All rights reserved.
      </div>

    </footer>
  );
}