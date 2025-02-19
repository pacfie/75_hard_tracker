"use client";

import { useState, useEffect } from "react";
import DayBlock from "./DayBlock";
import * as DayUtil from "@/app/utils/DayUtil";
import { useChallenge } from "@/app/utils/contexts/ChallengeContext";

export default function CheckboxGrid({
  onDaySelect
}) {
  const [selectedDayNumber, setSelectedDayNumber] = useState(null);
  const [dayStates, setDayStates] = useState([]);
  const { startingDate, challengeSize, tickedBoxes} = useChallenge();

  useEffect(() => {
    setDayStates(
      [...Array(challengeSize).keys()].map((_, index) => {
        const dayNumber = index + 1;
        if (tickedBoxes.includes(dayNumber)) return "completed";
        return DayUtil.isBeforeToday(DayUtil.addDays(startingDate, dayNumber))
          ? "failed"
          : "";
      })
    );
  }, [startingDate, challengeSize, tickedBoxes]);

  function handleDaySelection(day) {
    setSelectedDayNumber(day);
    onDaySelect(day);
  }
  
  function isSelected(dayNumber) {
    return selectedDayNumber && selectedDayNumber === dayNumber
      ? "selected-day"
      : "";
  }


  function isToday(dayNumber) {
    return DayUtil.isToday(DayUtil.addDays(startingDate, dayNumber))
      ? "today"
      : "";
  }


  return (
    <div id="day-list-grid">
      {[...Array(challengeSize).keys()].map((key, index) => (
        <DayBlock
          key={key}
          number={index + 1}
          onDayClick={handleDaySelection}
          classes={`${isSelected(index + 1)} ${dayStates[index] || ""} ${isToday(index + 1)}`}
          completed={dayStates[index] == "completed"}
          isOpen={DayUtil.isBeforeToday(DayUtil.addDays(startingDate, index))}
        />
      ))}
    </div>
  );
}
