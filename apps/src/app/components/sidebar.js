import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen border-r bg-white p-6 space-y-6">
      <nav className="space-y-4">
        <Link
          href="#"
          className="px-4 py-2 bg-green-600 text-white rounded-box text-sm flex items-center gap-3 font-medium"
        >
          <img src="/profile.png" lt="Verified" width={24} height={24}></img>{" "}
          Profile
        </Link>
        <Link
          href="#"
          className="px-4 py-2 text-gray-600 rounded-box text-sm flex items-center gap-3 font-medium"
        >
          <img src="/setting.png" lt="Verified" width={24} height={24}></img>{" "}
          Account Settings
        </Link>
        <Link
          href="#"
          className="px-4 py-2 text-gray-600 rounded-box text-sm flex items-center gap-3 font-medium"
        >
          <img src="/help.png" lt="Verified" width={24} height={24}></img> Help
        </Link>
      </nav>
    </div>
  );
}
