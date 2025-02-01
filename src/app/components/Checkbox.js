"use client";

export default function Checkbox({
  size = "small",
  onCheckboxChanged,
  classes = "",
  isChecked,
  id,
}) {
  return (
    <div className={`custom-checkbox ${classes}`}>
      <input
        type="checkbox"
        id={id}
        className={`form-check-input ${size}`}
        checked={isChecked}
        onChange={(e) => onCheckboxChanged(e.target.checked)}
      ></input>
    </div>
  );
}
