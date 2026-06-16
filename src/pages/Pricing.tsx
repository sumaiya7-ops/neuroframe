export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$5",
      features: ["100 images", "Basic quality"],
    },
    {
      name: "Pro",
      price: "$15",
      features: ["1000 images", "HD quality", "Fast generation"],
    },
    {
      name: "Ultra",
      price: "$30",
      features: ["Unlimited", "Ultra HD", "Priority support"],
    },
  ];

  return (
    <div className="min-h-screen bg-indigo-50 text-black p-10">

      {/* title */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Pricing Plans
      </h1>

      {/* cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {plans.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 border border-[#7a2e3a]/10 shadow-md hover:shadow-xl hover:-translate-y-1 transition"
          >

            {/* plan name */}
            <h2 className="text-xl font-bold text-black mb-2">
              {p.name}
            </h2>

            {/* price */}
            <h3 className="text-3xl font-bold text-red-500 mb-4">
              {p.price}
            </h3>

            {/* features */}
            <ul className="mb-6 space-y-2 text-black">
              {p.features.map((f, idx) => (
                <li key={idx}>• {f}</li>
              ))}
            </ul>

            {/* button */}
            <button className="w-full py-2 rounded-lg bg-[#4f46e5] text-white hover:opacity-90 transition">
              Buy Now
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}