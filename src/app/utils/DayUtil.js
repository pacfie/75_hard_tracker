import DayClass from "./classes/DayClass";
import BookClass from "./classes/BookClass";
import WorkoutClass from "./classes/WorkoutClass";

let days = [];
const challengeSize = 75;

export const setupDays = () => {
  for(let i = 1; i < challengeSize + 1; i++){
    days.push(new DayClass(i, i, "csirkerizs", new WorkoutClass(`wo_${i}`, "kondi", "futás"),  new BookClass(`b_${i}`, "könyvcím", 10)));
  }
}

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