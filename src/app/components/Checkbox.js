"use client";

export default function Checkbox({ day, size = "small", needLabel = true, onDaySelected }) {

  function handleDayClick(e){
    e.preventDefault(); // preventing checkbox tick
    onDaySelected(day);
  }

  return (
    <div className="custom-checkbox" onClick={handleDayClick}>
      <input type="checkbox" className={`form-check-input ${size}`}></input>
      {needLabel && <label>Day {day}</label>}
    </div>
  );
}
