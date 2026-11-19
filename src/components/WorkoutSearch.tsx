import { useState } from "react";
import type { Workout } from "../types";
import WorkoutList from "./WorkoutList";

type WorkoutSearchProps = {
  workouts: Workout[];
};

export default function WorkoutSearch({
  workouts,
}: WorkoutSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWorkouts = workouts.filter((workout) =>
    workout.type
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase())
  );

  return (
    <section>
      <div className="mb-4">
        <label
          htmlFor="workout-search"
          className="block text-sm font-medium mb-2"
        >
          Search workouts
        </label>

        <input
          id="workout-search"
          type="search"
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
          placeholder="Search by workout type..."
          className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <WorkoutList workouts={filteredWorkouts} />
    </section>
  );
}
