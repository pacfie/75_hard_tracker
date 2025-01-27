"use client";

import Checkbox from "./Checkbox";
import { useState } from "react";

export default function CheckboxGrid({
  onDaySelect,
  challengeSize = 75,
  tickedBoxes
}) {
  const [selectedDayNumber, setSelectedDayNumber] = useState(null);

  function handleDaySelection(day) {
    setSelectedDayNumber(day);
    onDaySelect(day);
  }

  return (
    <div id="checkbox-grid">
      {[...Array(challengeSize).keys()].map((key, index) => (
        <Checkbox
          key={key}
          dayNumber={index + 1}
          onDaySelected={handleDaySelection}
          isChecked={tickedBoxes.includes(key + 1)}
          classes={
            selectedDayNumber && selectedDayNumber === index + 1
              ? "selected-checkbox"
              : ""
          }
        ></Checkbox>
      ))}
    </div>
  );
}
