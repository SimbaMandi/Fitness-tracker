import { useMemo, useState } from "react";
import type { Workout, Work_Types } from "../types";

export function useWorkoutFilters(workouts: Workout[]) {
  const [selectedType, setSelectedType] = useState<Work_Types | "All">("All");
  const [showCompleted, setShowCompleted] = useState(true);
  const [showIncomplete, setShowIncomplete] = useState(true);

  const visibleWorkouts = useMemo(
    () =>
      workouts.filter((w) => {
        const matchesType = selectedType === "All" || w.type === selectedType;
        const matchesStatus =
          (w.completed && showCompleted) || (!w.completed && showIncomplete);
        return matchesType && matchesStatus;
      }),
    [workouts, selectedType, showCompleted, showIncomplete]
  );

  return {
    selectedType,
    setSelectedType,
    showCompleted,
    setShowCompleted,
    showIncomplete,
    setShowIncomplete,
    visibleWorkouts,
  };
}