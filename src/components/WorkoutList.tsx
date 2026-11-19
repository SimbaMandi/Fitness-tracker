import type { Workout } from "../types";

type WorkoutListProps = {
  workouts: Workout[];
};

export default function WorkoutList({ workouts }: WorkoutListProps) {
  if (workouts.length === 0) {
    return (
      <p className="py-6 text-center text-slate-500">
        No workouts match your search.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {workouts.map((w) => (
        <div
          key={w.id}
          className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h3 className="text-lg font-semibold text-slate-800">
              {w.type}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {w.date}
            </p>

            <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-600">
              <span>⏱️ {w.duration} minutes</span>
              <span>🔥 {w.calories} calories</span>
            </div>
          </div>

          <span
            className={`w-fit rounded-full px-4 py-2 text-sm font-semibold ${
              w.completed
                ? "bg-green-100 text-green-700"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            {w.completed ? "✓ Completed" : "○ Incomplete"}
          </span>
        </div>
      ))}
    </div>
  );
}