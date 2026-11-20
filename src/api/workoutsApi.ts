import type { Workout } from '../types';
import { mockWorkouts } from '../data/mockWorkouts';

export const getWorkouts = (): Promise<Workout[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...mockWorkouts]);
    }, 300);
  });
};