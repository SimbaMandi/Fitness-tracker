import { Work_Types } from "../types";

type WorkoutTypeFilterProps = {
  selectedType: Work_Types | "All";
  onTypeChange: (type: Work_Types | "All") => void;
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
        onChange={(e) => onTypeChange(e.target.value as Work_Types | "All")}
        className="w-48 rounded-lg border border-gray-300 bg-white p-2"
      >
        <option value="All">Select workout</option>
        {Work_Types.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
}