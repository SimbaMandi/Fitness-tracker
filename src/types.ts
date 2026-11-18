export interface Workout {
  id: string
  type: 'Running' | 'Cycling' | 'Yoga' | 'Strength' | 'Swimming'
  duration: number // minutes
  calories: number // calories burned
  date: string
  completed: boolean
}

export interface WorkoutStats {
  totalCalories: number
  totalMinutes: number
  notCompleted: number
}  