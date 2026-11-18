import { Work_Types } from "../types";
import type { WorkoutType } from "../types";

type WorkoutTypeFilterProps = {
  selectedType: WorkoutType | "All";
  onTypeChange: (type: WorkoutType | "All") => void;
};

export default function WorkoutTypeFilter({
  selectedType,
  onTypeChange,
}: WorkoutTypeFilterProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor="workout-type-filter"
        className="mb-2 block text-sm font-medium"
      >
        Workout type
      </label>
      <select
        id="workout-type-filter"
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value as WorkoutType | "All")}
        className="w-full rounded-lg border border-gray-300 bg-white p-3"
      >
        <option value="All">All types</option>
        {Work_Types.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
}