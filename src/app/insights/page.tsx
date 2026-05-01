export default function Insights() {
  // Your real data from Flo + Hevy
  const cycleData = {
    avgCycleLength: 26,
    avgPeriodLength: 5,
    currentCycleStart: "Apr 18, 2026",
    currentDay: 13,
  };

  const phaseInsights = [
    {
      phase: "Menstrual",
      days: "Day 1-5",
      emoji: "🔴",
      avgVolume: "Lower",
      hipThrustPR: 180,
      feeling: "Fatigue, Cramps",
      tip: "Light movement. Your data shows you still trained gym on period days — impressive! But consider reducing weight by 20%.",
    },
    {
      phase: "Follicular",
      days: "Day 6-13",
      emoji: "🌱",
      avgVolume: "Building",
      hipThrustPR: 270,
      feeling: "Energy rising",
      tip: "Progressive overload starts here. Your Hevy data shows volume increases significantly in this phase.",
    },
    {
      phase: "Ovulation",
      days: "Day 14-16",
      emoji: "⚡",
      avgVolume: "Peak",
      hipThrustPR: 360,
      feeling: "Peak strength",
      tip: "This is when you hit 360 lbs on hip thrusts. Schedule your PRs and heavy sessions here.",
    },
    {
      phase: "Luteal",
      days: "Day 17-26",
      emoji: "🌙",
      avgVolume: "Decreasing",
      hipThrustPR: 270,
      feeling: "Fatigue returning",
      tip: "Your Flo data shows fatigue 3-7 days before period. Reduce intensity in the last week of this phase.",
    },
  ];

  const recentWorkouts = [
    { date: "Apr 29", name: "GLÚTEO 🍑", duration: "83 min", cycleDay: 11, phase: "Follicular", topLift: "Hip Thrust 360 lbs" },
    { date: "Apr 27", name: "GLÚTEO 🍑", duration: "101 min", cycleDay: 9, phase: "Follicular", topLift: "Hip Thrust 360 lbs" },
    { date: "Apr 23", name: "GLÚTEO 🍑", duration: "104 min", cycleDay: 5, phase: "Menstrual", topLift: "Hip Thrust 90 lbs" },
  ];

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
            <a href="/" className="hover:text-gray-900">Dashboard</a>
            <a href="/log" className="hover:text-gray-900">Log</a>
            <a href="/insights" className="text-purple-600 font-medium">Insights</a>
            <a href="/ask" className="hover:text-gray-900">Ask AI</a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Your Insights 📊</h1>
          <p className="text-gray-500 mt-1">Based on your Flo cycle data + Hevy workout history</p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-purple-50 rounded-xl p-4">
            <p className="text-xs text-purple-500 mb-1">Avg Cycle</p>
            <p className="text-2xl font-bold text-purple-900">26 days</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-4">
            <p className="text-xs text-purple-500 mb-1">Peak Lift Phase</p>
            <p className="text-2xl font-bold text-purple-900">Ovulation</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-4">
            <p className="text-xs text-purple-500 mb-1">Hip Thrust PR</p>
            <p className="text-2xl font-bold text-purple-900">360 lbs</p>
          </div>
        </div>

        {/* Phase Performance */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Strength by Cycle Phase</h2>
          <div className="space-y-3">
            {phaseInsights.map((phase) => (
              <div key={phase.phase} className="border border-gray-100 rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{phase.emoji}</span>
                    <div>
                      <span className="font-semibold text-gray-900">{phase.phase}</span>
                      <span className="text-gray-400 text-sm ml-2">{phase.days}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">Hip Thrust: {phase.hipThrustPR} lbs</p>
                    <p className="text-xs text-gray-400">{phase.avgVolume} volume</p>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: `${(phase.hipThrustPR / 360) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500">{phase.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Workouts with Cycle Context */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Workouts + Cycle Context</h2>
          <div className="space-y-3">
            {recentWorkouts.map((w) => (
              <div key={w.date} className="border border-gray-100 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{w.name}</p>
                  <p className="text-sm text-gray-500">{w.date} · {w.duration} · {w.topLift}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                    Day {w.cycleDay} · {w.phase}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upload Section */}
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center">
          <p className="text-2xl mb-2">📂</p>
          <p className="font-medium text-gray-900">Import your data</p>
          <p className="text-sm text-gray-500 mt-1">Upload your Hevy CSV or Flo PDF to update insights</p>
          <button className="mt-4 bg-purple-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-700">
            Upload File
          </button>
        </div>
      </div>
    </main>
  );
}