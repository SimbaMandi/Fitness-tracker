
import { useState, useEffect } from "react";
import type { NewWorkout, Workout } from "../types";
import { getWorkouts } from "../api/workoutsApi";

export function useWorkouts() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getWorkouts()
      .then((data: Workout[]) => {
        setWorkouts(data);
      })
      .catch((error: unknown) => {
        console.error("Failed to load workouts:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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

  const toggleWorkoutCompletion = (id: number) => {
    setWorkouts((prev) =>
      prev.map((workout) =>
        workout.id === id
          ? { ...workout, completed: !workout.completed }
          : workout
      )
    );
  };

  return {
    workouts,
    loading,
    addWorkout,
    toggleWorkoutCompletion,
  };
}
