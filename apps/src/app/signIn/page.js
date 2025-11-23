"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  const router = useRouter();

  const handleSignIn = async () => {
    setErrorMsg("");

    try {
      const res = await fetch("http://localhost:5000/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.message || "Sign in failed.");
        return;
      }

      console.log("SIGN IN SUCCESS:", data);

      router.push("/swap");
    } catch (err) {
      setErrorMsg("Server error, coba lagi.");
    }
  };

  return (
    <div className="min-h-screen relative">

      {/* LOGO */}
      <div className="absolute top-6 left-6 z-20">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
      </div>

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-white"></div>
        <div className="h-1/2 bg-green-600"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col md:flex-row min-h-screen">

        {/* LEFT */}
        <div className="flex flex-col justify-center px-10 md:px-20 flex-1 space-y-6 mt-20 md:mt-0">
          <h1 className="text-4xl font-extrabold text-black">
            Sign in to SkillSwap
          </h1>

          <h2 className="text-xl text-black font-bold">
            Learn. Share. Grow.
          </h2>

          <h2 className="text-white text-lg font-bold max-w-lg">
            Welcome back! Continue your learning journey and reconnect with people
            who share your passion for growth and collaboration.
          </h2>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center items-center flex-1 p-6 mt-10 md:mt-0">
          <div className="bg-white shadow-xl p-10 rounded-3xl w-full max-w-md border border-gray-200">

            <h2 className="text-2xl font-bold text-black text-center">Sign in</h2>
            <p className="text-center text-sm text-gray-600 mt-1">
              Don’t have an account?{" "}
              <a href="/signUp" className="text-green-600 font-medium hover:underline">
                Sign up
              </a>
            </p>

            <div className="flex items-center gap-4 my-6">
              <span className="h-px bg-gray-300 flex-grow"></span>
              <span className="text-gray-500 text-sm font-medium">OR</span>
              <span className="h-px bg-gray-300 flex-grow"></span>
            </div>

            <div className="space-y-5">

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border-1 border-gray-400 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none placeholder-gray-300"
                  placeholder="Enter your email"
                />
              </div>

              {/* FACEBOOK */}
              <button className="w-full border border-gray-400 rounded-full py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                <img src="/facebook.png" className="h-5" />
                <span>Sign in with Facebook</span>
              </button>

              {/* GOOGLE */}
              <button className="w-full border border-gray-400 rounded-full py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                <img src="/google.png" className="h-5" />
                <span>Sign in with Google</span>
              </button>

              {/* PASSWORD */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mt-1 px-4 py-2 border-1 border-gray-400 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none placeholder-gray-300"
                    placeholder="Enter your password"
                  />

                  <span
                    className="absolute right-4 top-3 cursor-pointer text-gray-500 text-sm"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </span>
                </div>

                <div className="text-right mt-2">
                  <a href="#" className="text-sm text-gray-700 hover:underline">
                    Forgot your password?
                  </a>
                </div>
              </div>

              {/* ERROR */}
              {errorMsg && (
                <p className="text-red-600 text-sm text-center">{errorMsg}</p>
              )}

              {/* BUTTON */}
              <button
                onClick={handleSignIn}
                className="w-full bg-green-600 text-white py-3 rounded-full font-semibold text-lg hover:bg-green-700 transition"
              >
                Sign in
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
