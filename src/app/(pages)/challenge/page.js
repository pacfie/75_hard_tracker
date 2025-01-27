"use client";

import { useState } from "react";
import Banner from "@/app/components/Banner";
import CheckboxGrid from "@/app/components/CheckboxGrid";
import DailyData from "@/app/components/DailyData";
import * as DayUtil from "@/app/utils/DayUtil";
import DayPlaceholder from "@/app/components/DayPlaceholder";

export default function Challenge() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [tickedBoxes, setTickedBoxes] = useState([]);

  let challengeSize = 75;
  DayUtil.setupDays();

  function handleDaySelection(dayNumber) {
    const dayObj = DayUtil.getDay(dayNumber);
    setSelectedDay(dayObj);
    console.log(dayObj);
  }

  function DayPanel() {
    if (selectedDay) {
      return (
        <DailyData
          day={selectedDay}
          onButtonClick={(day) => handleCheckboxToggle(day)}
          isCompleted={tickedBoxes && tickedBoxes.includes(selectedDay.number)}
        />
      );
    }
    return <DayPlaceholder />;
  }

  function handleCheckboxToggle(day) {
    setTickedBoxes(
      (prev) =>
        prev.includes(day)
          ? prev.filter((d) => d !== day) // Uncheck if already ticked
          : [...prev, day] // Add to ticked list if not ticked
    );
  }

  return (
    <div className="col-xl-10 mx-auto">
      <Banner
        classes={"mb-3 mb-md-5"}
        challengeSize={challengeSize}
        tickedBoxes={tickedBoxes}
      />
      <div className="row flex-wrap" style={{ "--bs-gutter-y": "1.5rem" }}>
        <div className="col-12 col-lg-6">
          <CheckboxGrid
            onDaySelect={handleDaySelection}
            challengeSize={challengeSize}
            tickedBoxes={tickedBoxes}
          />
        </div>
        <div className="col-12 col-lg-6">
          <DayPanel />
        </div>
      </div>
    </div>
  );
}
