"use client";
import Link from "next/link";
import { useState } from "react";

export default function FriendsPage() {
  const [activeTab, setActiveTab] = useState("friends");
  const [selectedChat, setSelectedChat] = useState("Zahir Fakhri");

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ================= HEADER ================= */}
      <header className="w-full flex items-center justify-between px-8 py-5 border-b">

        {/* Logo kiri */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Menu kanan */}
        <nav className="flex items-center gap-10 text-lg font-medium">
          <a href="/friends" className="text-green-600 font-semibold">Friends</a>
          <a href="/swap" className="hover:text-green-600">Swap</a>

          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        </nav>
      </header>

      {/* ================= TAB BUTTONS ================= */}
      <div className="flex justify-center gap-10 mt-8 text-lg font-medium">
        <button
          onClick={() => setActiveTab("friends")}
          className={`px-6 py-2 rounded-full border ${
            activeTab === "friends"
              ? "bg-green-600 text-white border-green-600"
              : "border-green-600 text-green-600"
          }`}
        >
          Friends List
        </button>

        <button
          onClick={() => setActiveTab("messages")}
          className={`px-6 py-2 rounded-full border ${
            activeTab === "messages"
              ? "bg-green-600 text-white border-green-600"
              : "border-green-600 text-green-600"
          }`}
        >
          Messages
        </button>
      </div>

      {/* ================= FRIEND LIST ================= */}
      {activeTab === "friends" && (
        <div className="mt-10 w-full flex flex-col items-center">

          {/* Search Bar */}
          <div className="w-[60%]">
            <div className="border border-green-400 rounded-full px-6 py-3 flex items-center">
              <span className="text-gray-400 mr-3">🔍</span>
              <input
                type="text"
                placeholder="Find your friends"
                className="w-full bg-transparent outline-none placeholder-gray-400"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">

            {/* Card 1 */}
            <div className="w-[420px] border-2 border-green-600 rounded-2xl p-6 shadow-sm">
              <div className="w-full h-32 bg-gray-300 rounded-xl"></div>

              <p className="font-bold text-lg mt-4">Muh. Asif Awaludin</p>
              <p className="text-gray-700 text-sm">Data Scientist</p>
              <p className="text-gray-700 text-sm">Skill need : Data Analyst</p>
              <p className="text-gray-600 text-sm mt-1">
                I am looking for someone who can teach me data analyst skills.
              </p>

              <div className="flex items-center justify-between mt-4">
                <button className="px-8 py-2 bg-green-600 text-white rounded-full">
                  Chat
                </button>
                <button className="text-green-700 font-medium">
                  Match Details
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-[420px] border-2 border-green-600 rounded-2xl p-6 shadow-sm">
              <div className="w-full h-32 bg-gray-300 rounded-xl"></div>

              <p className="font-bold text-lg mt-4">Zahir Fakhri</p>
              <p className="text-gray-700 text-sm">UI/UX Design</p>
              <p className="text-gray-700 text-sm">Skill need : Data Analyst</p>
              <p className="text-gray-600 text-sm mt-1">
                I am looking for someone who can teach me data analyst skills.
              </p>

              <div className="flex items-center justify-between mt-4">
                <button className="px-8 py-2 bg-green-600 text-white rounded-full">
                  Chat
                </button>
                <button className="text-green-700 font-medium">
                  Match Details
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ================= MESSAGES PAGE ================= */}
      {activeTab === "messages" && (
        <div className="mt-10 px-10 grid grid-cols-[350px_1fr] gap-6">

          {/* LEFT SIDEBAR */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Messages</h2>

            {/* Search bar */}
            <div className="border rounded-full px-4 py-2 flex items-center mb-4">
              <span className="text-gray-400 mr-2">🔍</span>
              <input
                type="text"
                placeholder="Search Messages"
                className="w-full bg-transparent outline-none"
              />
            </div>

            {/* Chat List Item */}
            <div
              onClick={() => setSelectedChat("Zahir Fakhri")}
              className={`p-4 rounded-xl cursor-pointer ${
                selectedChat === "Zahir Fakhri"
                  ? "bg-green-100"
                  : "hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-bold">Zahir Fakhri</p>
                  <p className="text-gray-500 text-sm">UI/UX Designer</p>
                  <p className="text-gray-600 text-sm">You: Good Chris…</p>
                </div>
              </div>
            </div>

            <div
              onClick={() => setSelectedChat("Pratama Firmansyah")}
              className={`p-4 rounded-xl cursor-pointer mt-2 hover:bg-gray-100`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-bold">Pratama Firmansyah</p>
                  <p className="text-gray-500 text-sm">UI/UX Designer</p>
                  <p className="text-gray-600 text-sm">You: Your welcome</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL (Chat Preview Layout Only) */}
          <div className="border rounded-2xl p-6 min-h-[600px] bg-white">

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-bold text-lg">{selectedChat}</p>
                <p className="text-gray-600 text-sm">UI/UX Designer</p>
              </div>
            </div>

            {/* Chat area placeholder */}
            <div className="mt-4 bg-gray-100 rounded-xl p-4 text-gray-600">
              Chat messages will appear here...
            </div>

            {/* Input Bar */}
            <div className="mt-6">
              <input
                type="text"
                placeholder="What would you like to say?"
                className="w-full border rounded-full px-6 py-3 outline-none"
              />
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
