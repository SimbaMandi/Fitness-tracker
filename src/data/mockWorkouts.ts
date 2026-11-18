import type { Workout } from '../types';

export const mockWorkouts: Workout[] = [
  {
    id: '1', // <-- string with quotes
    type: 'Running',
    duration: 30,
    calories: 320,
    date: '2026-11-10',
    completed: true,
  },
  {
    id: '2', // <-- string with quotes
    type: 'Strength',
    duration: 45,
    calories: 400,
    date: '2026-11-12',
    completed: true,
  },
  {
    id: '3',
    type: 'Cycling',
    duration: 40,
    calories: 350,
    date: '2026-11-14',
    completed: false,
  },
  {
    id: '4',
    type: 'Yoga',
    duration: 60,
    calories: 180,
    date: '2026-11-15',
    completed: true,
  },
  {
    id: '5',
    type: 'Swimming',
    duration: 35,
    calories: 310,
    date: '2026-11-17',
    completed: false,
  },
];