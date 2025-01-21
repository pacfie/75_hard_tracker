export default function Checkbox({ day, size = "small", needLabel = true }) {
  return (
    <div className="custom-checkbox">
      <input type="checkbox" className={`form-check-input ${size}`}></input>
      {needLabel && <label>Day {day}</label>}
    </div>
  );
}
