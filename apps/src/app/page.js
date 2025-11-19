export default function HomePage() {
  // Dummy data dulu (nanti bisa diganti ambil dari NestJS)
  const users = [
    { id: 1, name: "Alicia", specialization: "UI Designer", description: "Fokus pada UX dan Figma." },
    { id: 2, name: "Rafi", specialization: "Frontend Dev", description: "React dan Tailwind expert." },
    { id: 3, name: "Dina", specialization: "Backend Dev", description: "NestJS dan Prisma dev." },
    { id: 4, name: "Iqbal", specialization: "Data Analyst", description: "Python dan PowerBI." },
    { id: 5, name: "Salsa", specialization: "Fullstack", description: "Next + Nest integration." },
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-gray-200 px-8 py-3 shadow">
        <div className="w-12 h-6 border border-black"></div>
        <div className="flex gap-8">
          <a href="#" className="font-medium hover:text-pink-500">Friends</a>
          <a href="#" className="font-medium hover:text-pink-500">Swap</a>
          <a href="#" className="font-medium hover:text-pink-500">Home</a>
        </div>
        <div className="w-10 h-10 bg-pink-300 rounded-full"></div>
      </nav>

      {/* Search bar */}
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-2/4 h-10 px-5 bg-gray-200 rounded-full outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10">
        {users.map((user) => (
          <div key={user.id} className="bg-gray-200 p-4 rounded-lg flex items-start gap-3 shadow hover:bg-gray-300 transition-all">
            <div className="w-12 h-12 bg-pink-300 rounded-full flex-shrink-0"></div>
            <div>
              <p className="font-semibold text-gray-900">{user.name}</p>
              <p className="text-sm text-gray-700">{user.specialization}</p>
              <p className="text-sm text-gray-600 mt-1">{user.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
