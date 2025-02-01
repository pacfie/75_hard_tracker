"use client";

import { useState } from "react";
import DayBlock from "./DayBlock";
import * as DayUtil from "@/app/utils/DayUtil";

export default function CheckboxGrid({
  onDaySelect,
  challengeSize,
  tickedBoxes,
  startDate,
}) {
  const [selectedDayNumber, setSelectedDayNumber] = useState(null);

  function handleDaySelection(day) {
    setSelectedDayNumber(day);
    onDaySelect(day);
  }

  function getDayState(dayNumber) {
    return tickedBoxes && tickedBoxes.includes(dayNumber)
      ? "completed"
      : DayUtil.isBeforeToday(DayUtil.addDays(startDate, dayNumber))
      ? "failed"
      : "";
  }

  function isSelected(dayNumber) {
    return selectedDayNumber && selectedDayNumber === dayNumber
      ? "selected-day"
      : "";
  }

  return (
    <div id="day-list-grid">
      {[...Array(challengeSize).keys()].map((key, index) => (
        <DayBlock
          key={key}
          number={index + 1}
          onDayClick={handleDaySelection}
          classes={`${isSelected(index + 1)} ${getDayState(index + 1)}`}
          isOpen={DayUtil.isBeforeToday(DayUtil.addDays(startDate, index))}
        />
      ))}
    </div>
  );
}
