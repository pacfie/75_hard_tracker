"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Banner from "@/app/components/Banner";
import CheckboxGrid from "@/app/components/CheckboxGrid";
import DailyData from "@/app/components/DailyData";
import * as DayUtil from "@/app/utils/DayUtil";
import DayPlaceholder from "@/app/components/DayPlaceholder";
import * as config from "@/app/utils/config";
import { useChallenge } from "@/app/utils/contexts/ChallengeContext";

export default function Challenge() {
  const challengeSize = config.challengeSize;
  const startDate = config.startDate;
  const [selectedDay, setSelectedDay] = useState(null);
  const { tickedBoxes, setTickedBoxes } = useChallenge([]);
  const [days, setDays] = useState(() => {
    if (typeof window === "undefined")
      return DayUtil.initializeDays(challengeSize);
    const storedData = localStorage.getItem("challengeData");
    if (storedData) {
      return JSON.parse(storedData);
    } else {
      let initialDays = DayUtil.initializeDays(challengeSize);
      localStorage.setItem("challengeData", JSON.stringify(initialDays));
      return initialDays;
    }
  });

  // set completed days
  useEffect(() => {
    const storedData = localStorage.getItem("challengeData");
    if (storedData) {
      const challengeData = JSON.parse(storedData);

      // Ellenőrizzük, mely napok összes checkboxa true
      const completedDays = challengeData
        .filter((day) =>
          Object.values(day.checkboxes).every((value) => value === true)
        )
        .map((day) => day.number); // Csak a nap számait tároljuk

      setTickedBoxes(completedDays);
    }
  }, [setTickedBoxes]);

  // day selection
  function handleDaySelection(dayNumber) {
    const dayObj = days.find((d) => d.number === dayNumber);
    setSelectedDay(dayObj);
  }

  // (un)complete the day
  const handleCheckboxToggle = useCallback((day, completed) => {
    setTickedBoxes((prev) =>
      completed ? [...prev, day] : prev.filter((d) => d !== day)
    );
  }, [setTickedBoxes]);


  function DayPanel() {
    if (selectedDay) {
      return (
        <DailyData
          day={selectedDay}
          onTickedBoxesChange={handleCheckboxToggle}
        />
      );
    }
    return <DayPlaceholder />;
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
