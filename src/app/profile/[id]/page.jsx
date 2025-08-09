export default function UserProfile({ params }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-2xl font-bold">User Profile</h1>
      <p className="mt-4">
        User ID:{" "}
        <span className="bg-orange-500 p-2 text-black rounded-lg font-bold">
          {params.id}
        </span>{" "}
      </p>
    </div>
  );
}
