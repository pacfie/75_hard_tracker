import DailyTodo from "./DailyTodo";

export default function DailyData({ day }) {
  return (
    <div id="daily-data">
      <DailyTodo header={"Diet"} headerIcon={["fas", "carrot"]}>
        <h2>hello</h2>
      </DailyTodo>
      <DailyTodo header={"Workouts"} headerIcon={["fas", "dumbbell"]}>
        <h2>hello</h2>
      </DailyTodo>
      <DailyTodo header={"Water intake"} headerIcon={["fas", "glass-water"]}>
        <h2>hello</h2>
      </DailyTodo>
      <DailyTodo header={"Reading"} headerIcon={["fas", "book"]}>
        <h2>hello</h2>
      </DailyTodo>
      <DailyTodo header={"Progress photo"} headerIcon={["fas", "camera-retro"]}>
        <h2>hello</h2>
      </DailyTodo>
      <div className="complete-btn-cntr text-center py-4">
        <button type="button">{`Completed day ${day}`}</button>
      </div>
    </div>
  );
}
