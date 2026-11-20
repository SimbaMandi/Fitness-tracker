import WorkoutTypeFilter from "./WorkoutTypeFilter";
import CompletedToggle from "./CompletedToggle";
import type { Work_Types } from "../types";

type FilterBarProps = {
  selectedType: Work_Types | "All";
  onTypeChange: (type: Work_Types | "All") => void;
  showCompleted: boolean;
  showIncomplete: boolean;
  onShowCompletedChange: (checked: boolean) => void;
  onShowIncompleteChange: (checked: boolean) => void;
};

export default function FilterBar({
  selectedType,
  onTypeChange,
  showCompleted,
  showIncomplete,
  onShowCompletedChange,
  onShowIncompleteChange,
}: FilterBarProps) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
      <WorkoutTypeFilter
        selectedType={selectedType}
        onTypeChange={onTypeChange}
      />
      <CompletedToggle
        showCompleted={showCompleted}
        showIncomplete={showIncomplete}
        onShowCompletedChange={onShowCompletedChange}
        onShowIncompleteChange={onShowIncompleteChange}
      />
    </div>
  );
}