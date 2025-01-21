import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Checkbox from "./Checkbox";

export default function DailyTodo({ header, headerIcon, children }) {
  return (
    <section className="daily-todo">
      <div className="daily-todo-header">
        <FontAwesomeIcon icon={headerIcon} />
        <label>{header}</label>
      </div>
      <div className="d-flex align-items-center gap-3 px-3 py-2">
        <div className="daily-todo-content">{children}</div>
        <div className="daily-todo-checkbox ms-auto">
          <Checkbox day={0} size="big" needLabel={false} />
        </div>
      </div>
    </section>
  );
}
