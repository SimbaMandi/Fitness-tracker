import { useWorkouts } from "./hooks/useWorkouts";
import WorkoutSearch from "./components/WorkoutSearch";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutStats from "./components/WorkoutStats";

function App() {
  const { workouts, addWorkout } = useWorkouts();

  return (
    <main className="mx-auto max-w-md bg-slate-100 p-4">
      <h1 className="text-2xl font-bold mb-4">
        Fitness Tracker
      </h1>

      <WorkoutStats workouts={workouts} />

      <WorkoutForm onAddWorkout={addWorkout} />

      <WorkoutSearch workouts={workouts} />
    </main>
  );
}

export default App;