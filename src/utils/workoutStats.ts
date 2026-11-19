import type { Workout, WorkoutStats } from '../types';

export const calculateWorkoutStats = (workouts: Workout[]): WorkoutStats => {
  const totalCalories = workouts.reduce((sum, w) => sum + w.calories, 0);
  const totalMinutes = workouts.reduce((sum, w) => sum + w.duration, 0);
  const notCompleted = workouts.filter((w) => !w.completed).length;

  return {
    totalCalories,
    totalMinutes,
    notCompleted,
  };
};