"use client";

import { useState, useEffect, useCallback } from "react";
import Banner from "@/app/components/Banner";
import CheckboxGrid from "@/app/components/CheckboxGrid";
import DailyData from "@/app/components/DailyData";
import * as DayUtil from "@/app/utils/DayUtil";
import DayPlaceholder from "@/app/components/DayPlaceholder";
import * as config from "@/app/utils/config";
import { useChallenge } from "@/app/utils/contexts/ChallengeContext";

export default function Challenge() {
  const challengeSize = config.challengeSize;
  const startDate = new Date("2025.01.13.");
  const [selectedDay, setSelectedDay] = useState(null);
  const { tickedBoxes, setTickedBoxes } = useChallenge([]);
  const [days, setDays] = useState(() => {
    if (typeof window === "undefined") return DayUtil.initializeDays(challengeSize);
    const storedData = localStorage.getItem("challengeData");
    return storedData
      ? JSON.parse(storedData)
      : DayUtil.initializeDays(challengeSize);
  });

  // useEffect(() => {
  //   localStorage.setItem("challengeData", JSON.stringify(days));
  // }, [days]);

  function handleDaySelection(dayNumber) {
    const dayObj = days.find((d) => d.number === dayNumber);
    setSelectedDay(dayObj);
  }

  const handleSave = useCallback((updatedDay) => {
    setDays((prevDays) =>
      prevDays.map((d) => (d.number === updatedDay.number ? updatedDay : d))
    ); // this triggers a re-render but only days are updated, selectedDay is still the same, therefore dispalying the original value
    //setSelectedDay(updatedDay); // need this to update selectedDay and re-render with the correct values
  }, []);


  function DayPanel() {
    if (selectedDay) {
      return (
        <DailyData
          day={selectedDay}
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
    <div className="col-xxl-9 mx-auto">
      <Banner
        classes={"mb-3 mb-md-5"}
        challengeSize={challengeSize}
        tickedBoxes={tickedBoxes}
        d={startDate}
      />
      <div className="row flex-wrap" style={{ "--bs-gutter-y": "1.5rem" }}>
        <div
          className="col-12 col-lg-5 col-xxl-4"
          style={{
            containerName: "day-list-grid-container",
            containerType: "inline-size",
          }}
        >
          <CheckboxGrid
            onDaySelect={handleDaySelection}
            challengeSize={challengeSize}
            tickedBoxes={tickedBoxes}
            startDate={startDate}
          />
        </div>
        <div
          className="col-12 col-lg-7 col-xxl-8"
          style={{
            containerName: "daily-data-container",
            containerType: "inline-size",
          }}
        >
          <DayPanel />
        </div>
      </div>
    </div>
  );
}
