import DailyTodo from "./DailyTodo";
import { faCarrot, faBook, faDumbbell, faGlassWater, faCameraRetro } from "@fortawesome/free-solid-svg-icons";

export default function DailyData({ day, onButtonClick, isCompleted = false }) {
  return (
    <div id="daily-data">
      <DailyTodo header={"Diet"} headerIcon={faCarrot}>
        <div>
          <label htmlFor="diet-input" className="form-label">
            What did you eat during the day?
          </label>
          <textarea className="form-control form-control-sm" id="diet-input" rows="3"></textarea>
        </div>
      </DailyTodo>
      <DailyTodo header={"Workouts"} headerIcon={faDumbbell}>
        <div>
          <label htmlFor="workout-outdoor-input" className="form-label">
            What did you do as your outdoor workout?
          </label>
          <textarea
            className="form-control form-control-sm"
            id="workout-outdoor-input"
            rows="3"
          ></textarea>
        </div>
        <div className="mt-3">
          <label htmlFor="workout-indoor-input" className="form-label">
            What did you do as your indoor workout?
          </label>
          <textarea
            className="form-control form-control-sm"
            id="workout-indoor-input"
            rows="3"
          ></textarea>
        </div>
      </DailyTodo>
      <DailyTodo header={"Water intake"} headerIcon={faGlassWater}>
        <div>
          <label htmlFor="water-input" className="form-label m-0">
            Did you drink enough water today?
          </label>
        </div>
      </DailyTodo>
      <DailyTodo header={"Reading"} headerIcon={faBook}>
        <div>
          <label htmlFor="book-input" className="form-label">
            What book did you read today?
          </label>
          <input id="book-input" className="form-control form-control-sm"></input>
        </div>
        <div className="d-flex align-items-center gap-2 mt-3">
          <label htmlFor="pages-input" className="form-label m-0">
            Pages:
          </label>
          <input id="pages-input" className="form-control form-control-sm" style={{width: "5rem"}}></input>
        </div>
      </DailyTodo>
      <DailyTodo header={"Progress photo"} headerIcon={faCameraRetro}>
        <div>
          <label htmlFor="progress-photo-input" className="form-label m-0">
            Did you take a progress photo?
          </label>
        </div>
      </DailyTodo>
      <div className="complete-btn-cntr text-center py-4" style={{backgroundColor: "var(--white)"}}>
        <button type="button" onClick={() => onButtonClick(day.number)}>{isCompleted ? `Uncomplete day ${day.number}` : `Complete day ${day.number}`}</button>
      </div>
    </div>
  );
}
