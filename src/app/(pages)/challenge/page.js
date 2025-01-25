"use client";

import { useState } from "react";
import Banner from "@/app/components/Banner";
import CheckboxGrid from "@/app/components/CheckboxGrid";
import DailyData from "@/app/components/DailyData";
import * as DayUtil from "@/app/utils/DayUtil";

export default function Challenge() {
  const [selectedDay, setSelectedDay] = useState(null);

  function handleDaySelection(dayNumber) {
    const dayObj = DayUtil.getDay(dayNumber);
    setSelectedDay(dayObj);
    console.log(dayObj);
  }

  return (
    <div className="col-lg-10 mx-auto">
      <Banner classes={"mb-3 mb-md-5"} />
      <div className="row flex-wrap" style={{"--bs-gutter-y": "1.5rem"}}>
        {/* style={{ gridTemplateColumns: "repeat(auto-fit, minmax(25rem, 1fr))" }} */}
        <div className="col-12 col-lg-6">
          <CheckboxGrid onDaySelect={handleDaySelection} />
        </div>
        <div className="col-12 col-lg-6">
          {selectedDay && <DailyData day={selectedDay} />}
        </div>
      </div>
    </div>
  );
}
