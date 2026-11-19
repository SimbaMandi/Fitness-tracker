export interface Workout {
  id: number;
  type: string;
  duration: number;
  calories: number;
  date: string;
  completed: boolean;
}

export interface WorkoutStats {
  totalCalories: number;
  totalMinutes: number;
  notCompleted: number;
}