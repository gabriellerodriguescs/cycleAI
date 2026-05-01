import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌙</span>
            <span className="font-bold text-gray-900 text-lg">CycleAI</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/" className="text-purple-600 font-medium">Dashboard</Link>
            <Link href="/log" className="hover:text-gray-900">Log</Link>
            <Link href="/insights" className="hover:text-gray-900">Insights</Link>
            <Link href="/ask" className="hover:text-gray-900">Ask AI</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Good morning, Gabrielle 👋</h1>
          <p className="text-gray-500 mt-1">Day 14 of your cycle · Ovulation phase</p>
        </div>

        {/* Phase Card */}
        <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">⚡</span>
            <div>
              <h2 className="font-semibold text-purple-900">Ovulation Phase</h2>
              <p className="text-sm text-purple-600">Peak energy & strength</p>
            </div>
          </div>
          <p className="text-sm text-purple-800">
            You're at your peak! Estrogen and testosterone are high — perfect for intense workouts and high-performance tasks.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500 mb-1">Cycle Day</p>
            <p className="text-2xl font-bold text-gray-900">14</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500 mb-1">Next Period</p>
            <p className="text-2xl font-bold text-gray-900">14d</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500 mb-1">Energy Level</p>
            <p className="text-2xl font-bold text-gray-900">High</p>
          </div>
        </div>

        {/* Recommendations */}
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">🏋️ Training</p>
            <p className="text-sm text-gray-700">High intensity is ideal today. Try HIIT, heavy lifting, or a long run. Your body can handle more.</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">🥗 Nutrition</p>
            <p className="text-sm text-gray-700">Focus on protein and antioxidants. Add leafy greens, eggs, and berries to support hormone balance.</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">😴 Recovery</p>
            <p className="text-sm text-gray-700">Sleep may be lighter this week. Aim for 7-8 hours and consider magnesium before bed.</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">🧠 Focus</p>
            <p className="text-sm text-gray-700">Cognitive performance is at its peak. Schedule important meetings and creative work today.</p>
          </div>
        </div>
      </div>
    </main>
  );
}