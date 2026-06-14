import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3e7e9] text-[#7a2e3a]">

      <div className="bg-white rounded-2xl shadow-md border border-[#7a2e3a]/10 p-8 text-center w-96 hover:shadow-xl transition">

        {/* title */}
        <h2 className="text-3xl font-bold mb-4 text-[#7a2e3a]">
          User Profile
        </h2>

        {/* user info */}
        {user ? (
          <div className="space-y-3">

            <p className="text-[#7a2e3a]/70">
              Logged in as:
            </p>

            <p className="text-lg font-semibold text-[#4f46e5]">
              {user.email}
            </p>

            <div className="mt-4 text-sm text-green-600">
              ● Active Account
            </div>

          </div>
        ) : (
          <div className="text-red-400 font-medium">
            Not logged in
          </div>
        )}

      </div>
    </div>
  );
}