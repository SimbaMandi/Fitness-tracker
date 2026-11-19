
import { useState } from "react";
import type { FormEvent } from "react";
import { Work_Types } from "../types";
import type { NewWorkout, WorkoutType } from "../types";

type WorkoutFormProps = {
  onAddWorkout: (workout: NewWorkout) => void;
};

export default function WorkoutForm({
  onAddWorkout,
}: WorkoutFormProps) {
  const [type, setType] = useState<WorkoutType | "">("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const durationValue = Number(duration);
    const caloriesValue = Number(calories);

    if (
      !type ||
      !Number.isFinite(durationValue) ||
      durationValue <= 0 ||
      !Number.isFinite(caloriesValue) ||
      caloriesValue < 0
    ) {
      return;
    }

    onAddWorkout({
      type,
      duration: durationValue,
      calories: caloriesValue,
      completed: true,
    });

    setType("");
    setDuration("");
    setCalories("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 rounded-lg bg-white p-4 shadow"
    >
      <h2 className="mb-4 text-lg font-bold">
        Add New Workout
      </h2>

      <div className="mb-3">
        <label
          htmlFor="workout-type"
          className="mb-1 block text-sm font-medium"
        >
          Workout Type
        </label>

        <select
          id="workout-type"
          value={type}
          onChange={(event) =>
            setType(event.target.value as WorkoutType | "")
          }
          required
          className="w-full rounded-lg border border-gray-300 p-2"
        >
          <option value="" disabled>
            Select workout type
          </option>

          {Work_Types.map((workoutType) => (
            <option key={workoutType} value={workoutType}>
              {workoutType}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label
          htmlFor="workout-duration"
          className="mb-1 block text-sm font-medium"
        >
          Duration (minutes)
        </label>

        <input
          id="workout-duration"
          type="number"
          min="1"
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
          required
          placeholder="e.g. 30"
          className="w-full rounded-lg border border-gray-300 p-2"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="workout-calories"
          className="mb-1 block text-sm font-medium"
        >
          Calories burned
        </label>

        <input
          id="workout-calories"
          type="number"
          min="0"
          value={calories}
          onChange={(event) => setCalories(event.target.value)}
          required
          placeholder="e.g. 300"
          className="w-full rounded-lg border border-gray-300 p-2"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 p-3 font-medium text-white hover:bg-blue-700"
      >
        Add Workout
      </button>
    </form>
  );
}
