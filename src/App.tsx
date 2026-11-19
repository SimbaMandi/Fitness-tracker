import { useState } from "react";
import WorkoutList from "./components/WorkoutList";
import WorkoutSearch from "./components/WorkoutSearch";
import { useWorkouts } from "./hooks/useWorkouts";
import CombineLoginpage from "./components/CombineLoginpage";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Récupérer les entraînements
  const { workouts } = useWorkouts();

  // Mémoriser le texte saisi dans la recherche
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrer les entraînements selon le texte recherché
  const filteredWorkouts = workouts.filter((workout) =>
    workout.type.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  // 2. Afficher uniquement la page de connexion si l'utilisateur n'est pas connecté
  if (!isLoggedIn) {
    return <CombineLoginpage onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  // 3. Afficher le tableau de bord une fois connecté
  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4">
      <div className="mx-auto max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Fitness Tracker</h1>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="text-sm text-slate-600 hover:text-slate-900 underline"
          >
            Déconnexion
          </button>
        </div>

        <WorkoutSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <WorkoutList workouts={filteredWorkouts} />
      </div>
    </div>
  );
}

export default App;
