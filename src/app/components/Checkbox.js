"use client";

export default function Checkbox({
  dayNumber,
  size = "small",
  needLabel = true,
  onDaySelected,
  classes,
  isChecked
}) {
  function handleDayClick(e) {
    e.preventDefault(); // preventing checkbox tick
    onDaySelected(dayNumber);
  }

  return (
    <div className={`custom-checkbox ${classes}`} onClick={handleDayClick}>
      <input
        type="checkbox"
        className={`form-check-input ${size}`}
        checked={isChecked}
        onChange={() => handleDayClick}
      ></input>
      {needLabel && <label>Day {dayNumber}</label>}
    </div>
  );
}
