import { initialWorkouts } from "./data/workouts";
import WorkoutList from "./components/workoutlist";

function App() {
  return (
    <div className="mx-auto max-w-md bg-slate-100 p-4">
      <WorkoutList workouts={initialWorkouts} />
    </div>
  );
}
export default App;