
import type { Stats, Workout } from "../types";

type WorkoutStatsProps = {
  workouts: Workout[];
};

export default function WorkoutStats({
  workouts,
}: WorkoutStatsProps) {

  const stats = workouts.reduce<Stats>(
    (accumulator, workout) => ({
      totalCalories:
        accumulator.totalCalories + workout.calories,

      totalMinutes:
        accumulator.totalMinutes + workout.duration,

      incompleteCount:
        accumulator.incompleteCount +
        (workout.completed ? 0 : 1),
    }),
    {
      totalCalories: 0,
      totalMinutes: 0,
      incompleteCount: 0,
    }
  );

  return (
    <section className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">

      <div className="rounded-lg bg-white p-4 shadow">
        <p className="text-sm text-slate-500">
          Total Calories
        </p>
        <p className="text-2xl font-bold text-blue-600">
          {stats.totalCalories}
        </p>
      </div>

      <div className="rounded-lg bg-white p-4 shadow">
        <p className="text-sm text-slate-500">
          Total Minutes
        </p>
        <p className="text-2xl font-bold text-green-600">
          {stats.totalMinutes}
        </p>
      </div>

      <div className="rounded-lg bg-white p-4 shadow">
        <p className="text-sm text-slate-500">
          Incomplete Workouts
        </p>
        <p className="text-2xl font-bold text-orange-600">
          {stats.incompleteCount}
        </p>
      </div>

    </section>
  );
}
