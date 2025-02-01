import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DailyTodo({ header, headerIcon, children }) {
  return (
    <section className="daily-todo">
      <div className="daily-todo-header">
        <label>{header}</label>
        <FontAwesomeIcon icon={headerIcon} />
      </div>
      <div
        className="d-flex align-items-center gap-5 p-4"
        style={{ backgroundColor: "var(--white)" }}
      >
        <div className="daily-todo-content">
          <div className="d-flex gap-5 justify-content-between align-items-center">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
