type WorkoutSearchProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
};

export default function WorkoutSearch({
  searchTerm,
  onSearchChange,
}: WorkoutSearchProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor="workout-search"
        className="block text-sm font-medium mb-2"
      >
        Search workouts
      </label>

      <input
        id="workout-search"
        type="search"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-white p-3 text-slate-700 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}