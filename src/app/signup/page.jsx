"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 text-white">
      <h1 className="text-2xl font-bold">Signup</h1>
      <label className="mt-2 " htmlFor="username">
        username
      </label>
      <input
        className="p-2 border border-gray-300 rounded mb-2 text-shadow-indigo-50"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Enter your username"
      />
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
        onClick={onSignup}
        className="bg-blue-500 text-white p-2 rounded mt-2.5 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:bg-blue-600 transition-colors duration-200"
      >
        SignUp
      </button>
      <Link href="/login">Already have an account? Log in</Link>
    </div>
  );
}
