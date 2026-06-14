import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center">
        
        <h2 className="text-2xl text-indigo-300">
          User Profile
        </h2>

        {user ? (
          <p className="mt-2 text-gray-300">
            Logged in as: {user.email}
          </p>
        ) : (
          <p className="mt-2 text-red-400">
            Not logged in
          </p>
        )}

      </div>
    </div>
  );
}