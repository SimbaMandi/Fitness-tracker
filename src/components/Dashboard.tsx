import React from 'react';
import { useWorkouts } from '../hooks/useWorkouts';
import { calculateWorkoutStats } from '../utils/workoutStats';
import { StatsCard } from './StatsCard';
import { WorkoutList } from './WorkoutList';

export const Dashboard: React.FC = () => {
  const { workouts, loading, toggleWorkoutCompletion } = useWorkouts();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <p className="animate-pulse text-lg">Loading dashboard...</p>
      </div>
    );
  }

  const { totalCalories, totalMinutes, notCompleted } = calculateWorkoutStats(workouts);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 md:p-10">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Fitness Tracker Dashboard</h1>
          <p className="text-slate-400 mt-1">
            Track your logged workouts, calories burned, and training minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            title="Total Calories Burned"
            value={`${totalCalories} kcal`}
            accentColor="text-rose-400"
          />
          <StatsCard
            title="Total Minutes Trained"
            value={`${totalMinutes} mins`}
            accentColor="text-indigo-400"
          />
          <StatsCard
            title="Workouts Not Completed"
            value={notCompleted}
            accentColor="text-amber-400"
          />
        </div>

        <WorkoutList workouts={workouts} onToggle={toggleWorkoutCompletion} />
      </div>
    </div>
  );
};