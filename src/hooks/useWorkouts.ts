
import { useState } from "react";
import { initialWorkouts } from "../data/workouts";
import type { NewWorkout, Workout } from "../types";

export function useWorkouts() {
  const [workouts, setWorkouts] = useState<Workout[]>(initialWorkouts);

  const addWorkout = (newWorkout: NewWorkout) => {
    setWorkouts((currentWorkouts) => {
      const nextId =
        currentWorkouts.reduce(
          (maxId, workout) => Math.max(maxId, workout.id),
          0
        ) + 1;

      const workoutToAdd: Workout = {
        ...newWorkout,
        id: nextId,
        date: new Date().toISOString().slice(0, 10),
      };

      return [...currentWorkouts, workoutToAdd];
    });
  };

  return { workouts, addWorkout };
}
