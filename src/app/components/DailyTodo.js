import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons"; // Example icon

export default function DailyTodo({ header, headerIcon, children }) {
  return (
    <section className="daily-todo">
      <div className="daily-todo-header">
        <label>{header}</label>
        <FontAwesomeIcon icon={headerIcon} />
      </div>
      <div className="d-flex align-items-center gap-5 p-4" style={{backgroundColor: "var(--white)"}}>
        <div className="daily-todo-content">{children}</div>
        {/* <div className="daily-todo-checkbox ms-auto">
          <Checkbox day={0} size="big" needLabel={false} />
        </div> */}
      </div>
    </section>
  );
}
