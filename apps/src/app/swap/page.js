"use client";

import { useState } from "react";
import Link from "next/link";

export default function SwapPage() {
  const [activeTab, setActiveTab] = useState("request");

  const browseDummy = [
    {
      id: 1,
      name: "Muh. Asif Awaludin",
      role: "Data Scientist",
      need: "Data Analyst",
      desc: "I am looking for someone who can teach me data analyst skills.",
    },
    {
      id: 2,
      name: "Zahir Fakhri",
      role: "UI/UX Designer",
      need: "Frontend Developer",
      desc: "Looking for a mentor who can help me improve React skills.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 relative">

      {/* ================= HEADER ================= */}
      <header className="w-full flex items-center justify-between px-8 py-5 border-b">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        <nav className="flex items-center gap-10 text-lg font-medium">
          <a href="/friends" className="hover:text-green-600">Friends</a>
          <a href="/swap" className="text-green-600 font-semibold">Swap</a>

          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        </nav>
      </header>

      {/* ================= SEARCH BAR ================= */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-[60%]">
          <div className="border border-green-400 rounded-full px-6 py-3 flex items-center">
            <span className="text-gray-400 mr-3">🔍</span>
            <input
              type="text"
              placeholder="What do you need?"
              className="w-full bg-transparent outline-none placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      {/* ================= TAB REQUEST / BROWSE ================= */}
      <div className="flex justify-center gap-20 mt-8 text-lg font-medium">
        <button
          onClick={() => setActiveTab("request")}
          className={`${
            activeTab === "request"
              ? "text-green-700 underline underline-offset-8"
              : "text-gray-700"
          }`}
        >
          Request List
        </button>

        <button
          onClick={() => setActiveTab("browse")}
          className={`${
            activeTab === "browse"
              ? "text-green-700 underline underline-offset-8"
              : "text-gray-700"
          }`}
        >
          Browse Skill
        </button>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="mt-10 px-10">

        {/* ===== Request List ===== */}
        {activeTab === "request" && (
          <div>
            <div className="flex items-center gap-5 mt-6 border-b pb-4">
              <div className="w-14 h-14 bg-green-700 rounded-full"></div>

              <div className="flex-grow">
                <p className="font-bold text-lg">Zahir Fakhri</p>
                <p className="text-gray-700 text-sm">
                  Specialization : Data analyst, Requested you up!{" "}
                  <a href="#" className="underline text-gray-600">
                    View Profile.
                  </a>
                </p>
              </div>

              <div className="text-red-500 text-2xl">🚫</div>
              <div className="text-green-600 text-2xl">✔️</div>
            </div>
          </div>
        )}

        {/* ===== Browse Skill ===== */}
        {activeTab === "browse" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">

            {browseDummy.map((item) => (
              <div
                key={item.id}
                className="border-2 border-green-600 rounded-3xl p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="w-full h-32 bg-gray-300 rounded-xl mb-4"></div>

                <p className="font-bold text-lg">{item.name}</p>
                <p className="text-gray-700 text-sm">{item.role}</p>

                <p className="text-gray-700 text-sm mt-1">
                  Skill need : <span className="font-semibold">{item.need}</span>
                </p>

                <p className="text-gray-700 text-sm mt-2">{item.desc}</p>

                <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-xl font-medium">
                  Add Request
                </button>
              </div>
            ))}

          </div>
        )}
      </div>

      {/* ===== PUBLISH YOURSELF BUTTON (FIXED BOTTOM RIGHT) ===== */}
      <button className="fixed bottom-6 right-6 bg-green-600 text-yellow-300 font-semibold px-6 py-3 rounded-xl shadow-lg text-lg hover:bg-green-700">
        Publish Yourself!
      </button>
    </div>
  );
}
