"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login Successful!", response.data);
      toast.success("Login Success!");
      router.push("/profile");
    } catch (error) {
      console.log("Login Failed! ", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 text-white">
      <h1 className="text-2xl font-bold">{loading ? "Processing" : "Login"}</h1>

      <label className="mt-2 " htmlFor="email">
        email
      </label>
      <input
        className="p-2 border border-gray-300 rounded mb-2 text-shadow-indigo-50"
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Enter your email"
      />
      <label className="mt-2 " htmlFor="password">
        password
      </label>
      <input
        className="p-2 border border-gray-300 rounded mb-2 text-shadow-indigo-50"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Enter your password"
      />

      <button
        onClick={onLogin}
        className="bg-blue-500 text-white p-2 rounded mt-2.5 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:bg-blue-600 transition-colors duration-200"
      >
        {buttonDisabled ? "No Login" : "Login"}
      </button>
      <Link href="/signup">Don't have an account? Sign up</Link>
    </div>
  );
}
