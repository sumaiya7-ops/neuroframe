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
    <div className="min-h-screen bg-[#0b0b1a] text-white p-10">
      <h1 className="text-3xl mb-8 text-center">Pricing Plans</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl mb-2">{p.name}</h2>
            <h3 className="text-2xl text-indigo-400 mb-4">{p.price}</h3>

            <ul className="mb-4">
              {p.features.map((f, idx) => (
                <li key={idx}>• {f}</li>
              ))}
            </ul>

            <button className="w-full bg-indigo-600 p-2 rounded">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}