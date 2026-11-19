import React from 'react';
import type { Workout } from '../types';

interface WorkoutListProps {
  workouts: Workout[];
  onToggle: (id: string) => void;
}

export const WorkoutList: React.FC<WorkoutListProps> = ({ workouts, onToggle }) => (
  <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-md">
    <div className="px-6 py-4 border-b border-slate-700 flex justify-between items-center">
      <h2 className="text-lg font-semibold text-white">Logged Workouts</h2>
      <span className="text-xs bg-slate-700 text-slate-300 px-2.5 py-1 rounded-full">
        {workouts.length} Total
      </span>
    </div>
    <div className="divide-y divide-slate-700">
      {workouts.map((workout) => (
        <div
          key={workout.id}
          className="px-6 py-4 flex items-center justify-between hover:bg-slate-700/40 transition-colors"
        >
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              checked={workout.completed}
              onChange={() => onToggle(String(workout.id))}
              className="w-5 h-5 accent-indigo-500 rounded cursor-pointer"
            />
            <div>
              <p
                className={`font-medium ${
                  workout.completed ? 'line-through text-slate-400' : 'text-white'
                }`}
              >
                {workout.type}
              </p>
              <span className="text-xs text-slate-400">{workout.date}</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-right">
            <div>
              <p className="text-sm font-semibold text-white">{workout.calories} kcal</p>
              <p className="text-xs text-slate-400">{workout.duration} mins</p>
            </div>
            <span
              className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                workout.completed
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
              }`}
            >
              {workout.completed ? 'Completed' : 'Pending'}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);