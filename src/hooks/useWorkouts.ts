import { useState, useEffect } from 'react';
import type { Workout } from '../types';
import { getWorkouts } from '../api/workoutsApi';

export const useWorkouts = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getWorkouts().then((data: Workout[]) => {
      setWorkouts(data);
      setLoading(false);
    });
  }, []);

  const toggleWorkoutCompletion = (id: string) => {
    setWorkouts((prev) =>
      prev.map((w) => (w.id === id ? { ...w, completed: !w.completed } : w))
    );
  };

  return { workouts, loading, toggleWorkoutCompletion };
};
