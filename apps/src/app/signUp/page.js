"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = async () => {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/auth/signUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Something went wrong.");
        setLoading(false);
        return;
      }

      setMessage("Account created successfully!");
      setLoading(false);
    } catch (err) {
      setMessage("Error connecting to server.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative">

      {/* ===== LOGO POJOK KIRI ===== */}
      <div className="absolute top-6 left-6 z-20">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
      </div>

      {/* ===== BG ===== */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-white"></div>
        <div className="h-1/2 bg-green-600"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row min-h-screen">

        {/* LEFT */}
        <div className="flex flex-col justify-center px-10 md:px-20 flex-1 space-y-6 mt-20 md:mt-0">
          <h1 className="text-4xl font-extrabold text-black">
            Sign up to SkillSwap
          </h1>
          <h2 className="text-xl text-black font-bold">
            Learn. Share. Grow.
          </h2>
          <h2 className="text-white text-lg font-bold leading-relaxed max-w-lg">
            Start your journey of learning and sharing today.
          </h2>
        </div>

        {/* RIGHT (CARD) */}
        <div className="flex justify-center items-center flex-1 p-6 mt-10 md:mt-0">
          <div className="bg-white shadow-xl p-10 rounded-3xl w-full max-w-md border border-gray-200">

            <h2 className="text-2xl font-bold text-black text-center">Sign up</h2>

            <p className="text-center text-sm text-gray-600 mt-1">
              Already have an account?{" "}
              <Link href="/signIn" className="text-green-600 font-medium hover:underline">
                Sign in
              </Link>
            </p>

            {/* SOCIAL */}
            <div className="space-y-4 mt-6">
              <button className="w-full border border-gray-400 rounded-full py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                <img src="/facebook.png" className="h-5" />
                <span>Sign up with Facebook</span>
              </button>

              <button className="w-full border border-gray-400 rounded-full py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                <img src="/google.png" className="h-5" />
                <span>Sign up with Google</span>
              </button>
            </div>

            {/* DIVIDER */}
            <div className="flex items-center gap-4 my-6">
              <span className="h-px bg-gray-300 flex-grow"></span>
              <span className="text-gray-500 text-sm font-medium">OR</span>
              <span className="h-px bg-gray-300 flex-grow"></span>
            </div>

            {/* FORM */}
            <div className="space-y-5">

              {/* First + Last */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First name</label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    type="text"
                    className="w-full mt-1 px-4 py-2 border border-gray-400 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last name</label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    type="text"
                    className="w-full mt-1 px-4 py-2 border border-gray-400 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none"
                    placeholder="Last name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Email address</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full mt-1 px-4 py-2 border border-gray-400 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>

                <div className="relative">
                  <input
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    className="w-full mt-1 px-4 py-2 border border-gray-400 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none"
                    placeholder="Enter your password"
                  />

                  <span
                    className="absolute right-4 top-3 cursor-pointer text-gray-500 text-sm"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </span>
                </div>
              </div>

              {/* BUTTON */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-green-600 text-white py-3 rounded-full font-semibold text-lg hover:bg-green-700 transition disabled:bg-green-400"
              >
                {loading ? "Loading..." : "Sign up"}
              </button>

              {/* Message */}
              {message && (
                <p className="text-center text-sm mt-2 text-black font-medium">
                  {message}
                </p>
              )}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
