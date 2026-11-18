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
        placeholder="Search by workout type..."
        className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}