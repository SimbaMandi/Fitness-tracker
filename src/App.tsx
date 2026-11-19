import { useState } from "react";
import WorkoutList from "./components/WorkoutList";
import WorkoutTypeFilter from "./components/WorkoutTypeFilter";
import CompletedToggle from "./components/CompletedToggle";
import { useWorkouts } from "./hooks/useWorkouts";
import type { WorkoutType } from "./types";

function App() {
  const { workouts } = useWorkouts();

  const [selectedType, setSelectedType] = useState<WorkoutType | "All">("All");
  const [showCompleted, setShowCompleted] = useState(true);
  const [showIncomplete, setShowIncomplete] = useState(true);

  const visible = workouts.filter((w) => {
    const matchesType = selectedType === "All" || w.type === selectedType;
    const matchesStatus =
      (w.completed && showCompleted) || (!w.completed && showIncomplete);
    return matchesType && matchesStatus;
  });

  return (
    <div className="mx-auto max-w-2xl bg-slate-100 p-4">
      <h1 className="mb-4 text-2xl font-bold">Fitness Tracker</h1>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <WorkoutTypeFilter
          selectedType={selectedType}
          onTypeChange={setSelectedType}
        />
        <CompletedToggle
          showCompleted={showCompleted}
          showIncomplete={showIncomplete}
          onShowCompletedChange={setShowCompleted}
          onShowIncompleteChange={setShowIncomplete}
        />
      </div>

      <WorkoutList workouts={visible} />
    </div>
  );
}

export default App;