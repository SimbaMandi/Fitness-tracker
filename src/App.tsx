import { useState } from "react";
import WorkoutList from "./components/WorkoutList";
import WorkoutSearch from "./components/WorkoutSearch";
import { useWorkouts } from "./hooks/useWorkouts";
import CombineLoginpage from "./components/CombineLoginpage";

function App() {
  const { workouts, loading } = useWorkouts();
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 const totalCalories = workouts
  .filter((workout) => workout.completed)
  .reduce((total, workout) => total + workout.calories, 0);

  const totalMinutes = workouts
    .filter((workout) => workout.completed)
    .reduce((total, workout) => total + workout.duration, 0);

  const notCompleted = workouts.filter(
    (workout) => !workout.completed
  ).length;

  const completed = workouts.filter(
    (workout) => workout.completed
  ).length;

  const progress =
    workouts.length > 0
      ? Math.round((completed / workouts.length) * 100)
      : 0;

  const filteredWorkouts = workouts.filter((workout) =>
    workout.type.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );
if (!isLoggedIn) {
  return (
    <CombineLoginpage
      onLoginSuccess={() => setIsLoggedIn(true)}
    />
  );
}

  if (loading) {
    return <p className="p-8 text-center">Loading workouts...</p>;
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-6xl">

        <header className="mb-10 border-b border-slate-200 pb-6">
          <h1 className="text-3xl font-bold text-slate-800">
            Welcome to Your Fitness Journey!
          </h1>
          <p className="mt-2 text-slate-500">
            Track your progress and stay active every day.
          </p>
        </header>
<div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-3">

  {/* Calories Card */}
  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
    <p className="text-sm font-medium text-slate-500">
      🔥 Calories Burned
    </p>
    <h2 className="mt-3 text-3xl font-bold text-slate-800">
      {totalCalories.toLocaleString()}
    </h2>
    <p className="mt-1 text-sm text-slate-400">
      kcal
    </p>
  </div>

  {/* Minutes Card */}
  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
    <p className="text-sm font-medium text-slate-500">
      ⏱️ Minutes Trained
    </p>
    <h2 className="mt-3 text-3xl font-bold text-slate-800">
      {totalMinutes.toLocaleString()}
    </h2>
    <p className="mt-1 text-sm text-slate-400">
      minutes
    </p>
  </div>

  {/* Incomplete Workouts Card */}
  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
    <p className="text-sm font-medium text-slate-500">
      📋 Incomplete Workouts
    </p>
    <h2 className="mt-3 text-3xl font-bold text-slate-800">
      {notCompleted}
    </h2>
    <p className="mt-1 text-sm text-slate-400">
      workouts remaining
    </p>
  </div>

</div>
         <section className="mb-8 rounded-xl bg-white p-6 shadow">
          <div className="mb-3 flex justify-between">
            <h2 className="font-semibold text-slate-800">
              Workout Progress
            </h2>
            <span className="font-bold text-blue-600">{progress}%</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-blue-600 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
                    <div className="mt-4 flex justify-between text-sm">
            <span className="font-medium text-green-600">
              ✓ {completed} Completed
            </span>
            <span className="font-medium text-amber-600">
              {notCompleted} Remaining
            </span>
          </div>

          <p className="mt-3 text-sm text-slate-500">
            {completed} completed out of {workouts.length} workouts
          </p>
        </section>

        <section className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-5 text-xl font-bold text-slate-800">
            Your Workouts
          </h2>

          <WorkoutSearch
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <WorkoutList workouts={filteredWorkouts} />
        </section>

      </div>
    </div>
  );
}

export default App; 