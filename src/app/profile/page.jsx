"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import React from "react";
export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = React.useState("nothing");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout Successful!");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    setData(res.data.data._id);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 text-white">
      <h1 className="text-2xl font-bold">Profile</h1>
      <hr />
      <h2>
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`profile/${data}`}>{data}</Link>
        )}
      </h2>
      <p className="mt-4">This is your profile page.</p>
      <hr />
      <button
        onClick={logout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Logout
      </button>
      <button
        onClick={getUserDetails}
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Get User Details
      </button>
      <p className="mt-2">
        You can view and edit your profile information here.
      </p>
      <p className="mt-2">More features coming soon!</p>
    </div>
  );
}
