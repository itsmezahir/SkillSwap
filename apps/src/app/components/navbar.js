import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white w-full flex items-center justify-between px-8 py-5 border-b">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
      </div>

      <nav className="flex items-center gap-10 text-lg font-medium">
        <a href="/friends" className="text-gray-900 hover:text-green-600">
          Friends
        </a>
        <a href="/swap" className="text-gray-900 hover:text-green-600">
          Swap
        </a>

        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      </nav>
    </header>
  );
}
