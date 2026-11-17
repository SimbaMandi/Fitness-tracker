import { useState } from "react";
import { initialWorkouts } from "../data/workouts";
import type { Workout } from "../types";

export function useWorkouts() {
  const [workouts] = useState<Workout[]>(initialWorkouts);

  return { workouts };
}