import WorkoutList from "./components/WorkoutList";
import FilterBar from "./components/FilterBar";
import { useWorkouts } from "./hooks/useWorkouts";
import { useWorkoutFilters } from "./hooks/useWorkoutFilters";

function App() {
  const { workouts } = useWorkouts();
  const filters = useWorkoutFilters(workouts);

  return (
    <div className="mx-auto max-w-2xl bg-slate-100 p-4">
      <h1 className="mb-4 text-2xl font-bold">Fitness Tracker</h1>
      <FilterBar
        selectedType={filters.selectedType}
        onTypeChange={filters.setSelectedType}
        showCompleted={filters.showCompleted}
        showIncomplete={filters.showIncomplete}
        onShowCompletedChange={filters.setShowCompleted}
        onShowIncompleteChange={filters.setShowIncomplete}
      />
      <WorkoutList workouts={filters.visibleWorkouts} />
    </div>
  );
}

export default App;