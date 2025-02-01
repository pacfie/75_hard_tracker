import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DayBlock({
  number,
  onDayClick,
  classes = "",
  isOpen = true,
}) {
  return (
    <button
      type="button"
      title={`Day ${number}`}
      className={`day-block ${classes} ${isOpen ? "open" : ""}`}
      onClick={() => onDayClick(number)}
      disabled={!isOpen}
    >
      <span>{number}</span>
      {!isOpen && (
        <div className="mx-auto" style={{ fontSize: "0.8rem" }}>
          <FontAwesomeIcon icon={faLock} />
        </div>
      )}
    </button>
  );
}
