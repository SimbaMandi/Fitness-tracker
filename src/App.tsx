
import { useState } from "react";
import WorkoutList from "./components/WorkoutList";
import WorkoutSearch from "./components/WorkoutSearch";
import { useWorkouts } from "./hooks/useWorkouts";
import CombineLoginpage from "./components/CombineLoginpage";



function App() {
  // Récupérer les entraînements
  const { workouts } = useWorkouts();

  // Mémoriser le texte saisi dans la recherche
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrer les entraînements selon le texte recherché
  const filteredWorkouts = workouts.filter((workout) =>
    workout.type
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase())
  );

  return (
    <div className="mx-auto max-w-md bg-slate-100 p-4">
      <h1 className="text-2xl font-bold mb-4">
        Fitness Tracker
      </h1>

      <WorkoutSearch
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <WorkoutList workouts={filteredWorkouts} />

      <div className="App">
      <CombineLoginpage />
    </div>
    </div>
  );
}
 

export default App;
