import DayClass from "./classes/DayClass";
import BookClass from "./classes/BookClass";
import WorkoutClass from "./classes/WorkoutClass";

let days = [
    new DayClass(1, 1, "csirkerizs", new WorkoutClass(1, "kondi", "futás"), true, new BookClass(1, "könyvcím", 10), true)
]

// lista
export const getAllDays = () => {
  return days;
};

export const getDay = (number) =>{
    return days.find(d => d.number == number);
}

// // hozzáadás
// export const addWorkout = (name) => {
//   const newWorkout = new WorkoutClass(workouts.length + 1, name);
//   workouts.push(newWorkout);
//   return newWorkout;
// };

// // törlés
// export const removeWorkout = (id) => {
//   workouts = workouts.filter(workout => workout.id !== id);
// };