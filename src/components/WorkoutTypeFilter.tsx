type WorkoutType =
  | "Cardio"
  | "Strength"
  | "Flexibility"
  | "Balance"
  | "High Intensity";

const workoutTypes: WorkoutType[] = [
  "Cardio",
  "Strength",
  "Flexibility",
  "Balance",
  "High Intensity",
];

type WorkoutTypeFilterProps = {
  selectedType: WorkoutType | "All";
  onTypeChange: (type: WorkoutType | "All") => void;
};

export default function WorkoutTypeFilter({
  selectedType,
  onTypeChange,
}: WorkoutTypeFilterProps) {
  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor="workout-type-filter"
        className="whitespace-nowrap text-sm font-medium"
      >
        Workout type
      </label>
      <select
        id="workout-type-filter"
        value={selectedType}
        onChange={(e) =>
          onTypeChange(e.target.value as WorkoutType | "All")
        }
        className="w-48 rounded-lg border border-gray-300 bg-white p-2"
      >
        <option value="All">Select workout</option>
        {workoutTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}