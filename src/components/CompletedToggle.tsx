type CompletedToggleProps = {
  showCompleted: boolean;
  showIncomplete: boolean;
  onShowCompletedChange: (checked: boolean) => void;
  onShowIncompleteChange: (checked: boolean) => void;
};

export default function CompletedToggle({
  showCompleted,
  showIncomplete,
  onShowCompletedChange,
  onShowIncompleteChange,
}: CompletedToggleProps) {
  return (
    <div className="flex items-center gap-6">
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={(e) => onShowCompletedChange(e.target.checked)}
        />
        Completed
      </label>
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={showIncomplete}
          onChange={(e) => onShowIncompleteChange(e.target.checked)}
        />
        Incomplete
      </label>
    </div>
  );
}