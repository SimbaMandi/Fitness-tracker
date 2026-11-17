import type { Workout } from "../types";

export const initialWorkouts: Workout[] = [
  { id: 1, type: "Running", duration: 30, calories: 300, date: "2026-11-01", completed: true },
  { id: 2, type: "Cycling", duration: 45, calories: 400, date: "2026-11-02", completed: true },
  { id: 3, type: "Yoga", duration: 60, calories: 200, date: "2026-11-03", completed: false },   
];

