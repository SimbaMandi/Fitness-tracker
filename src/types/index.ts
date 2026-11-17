export const Work_Types = [
  "Running",
  "Cycling",
  "Yoga",
  "Strength",
  "Swimming",
] as const;

export type WorkoutType = (typeof Work_Types)[number];

export interface Workout {
  id: number;
  type: WorkoutType;
  duration: number; 
  calories: number;
  date: string; 
  completed: boolean;
}

export interface User {
  email: string;
  password: string;
}

export type CompletionFilter = "all" | "completed" | "incomplete";

export type NewWorkout = Omit<Workout, "id" | "date">;

export interface Stats {
  totalCalories: number;
  totalMinutes: number;
  incompleteCount: number;
}