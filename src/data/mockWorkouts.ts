import type { Workout } from '../types';

export const mockWorkouts: Workout[] = [
  { id: 1, type: "Running", duration: 30, calories: 300, date: "2026-11-01", completed: true },
  { id: 2, type: "Cycling", duration: 45, calories: 400, date: "2026-11-02", completed: true },
  { id: 3, type: "Yoga", duration: 60, calories: 0, date: "2026-11-03", completed: false },   
  { id: 4, type: "Swimming", duration: 30, calories: 250, date: "2026-11-04", completed: true },
  { id: 5, type: "Weightlifting", duration: 45, calories: 0, date: "2026-11-05", completed: false },
  { id: 6, type: "Pilates", duration: 60, calories: 300, date: "2026-11-06", completed: true },
  { id: 7, type: "Hiking", duration: 90, calories: 600, date: "2026-11-07", completed: true },
  { id: 8, type: "Rowing", duration: 30, calories: 0, date: "2026-11-08", completed: false },
  { id: 9, type: "Boxing", duration: 45, calories: 400, date: "2026-11-09", completed: true },
  { id: 10, type: "Dancing", duration: 60, calories: 0, date: "2026-11-10", completed: false },
  { id: 11, type: "CrossFit", duration: 30, calories: 300, date: "2026-11-11", completed: true },
  { id: 12, type: "Martial Arts", duration: 45, calories: 400, date: "2026-11-12", completed: true },
  { id: 13, type: "Stretching", duration: 60, calories: 0, date: "2026-11-13", completed: false },
  { id: 14, type: "Jump Rope", duration: 30, calories: 0, date: "2026-11-14", completed: true },
  { id: 15, type: "Tai Chi", duration: 45, calories: 0, date: "2026-11-15", completed: false },  
];