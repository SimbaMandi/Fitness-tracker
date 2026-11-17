import type { Workout } from "../types";

type WorkoutListProps = { workouts: Workout[] };

export default function WorkoutList({ workouts }: WorkoutListProps) {
  if (workouts.length === 0) {
    return <p className="text-slate-500">No workouts match.</p>;
  }

  return (
    <ul className="space-y-2">
      {workouts.map((w) => (
        <li
          key={w.id}
          className="flex items-center justify-between rounded-xl bg-white p-4 shadow"
        >
          <div>
            <p className="font-semibold">{w.type}</p>
            <p className="text-sm text-slate-500">
              {w.date} · {w.duration} min · {w.calories} cal
            </p>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              w.completed
                ? "bg-green-100 text-green-700"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            {w.completed ? "Completed" : "Incomplete"}
          </span>
        </li>
      ))}
    </ul>
  );
}