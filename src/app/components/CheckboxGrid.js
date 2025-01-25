"use client";

import Checkbox from "./Checkbox";

export default function CheckboxGrid({ onDaySelect }) {
  let challengeSize = 75;

  return (
    <div id="checkbox-grid">
      {[...Array(challengeSize).keys()].map((key, index) => (
        <Checkbox key={key} day={index+1} onDaySelected={onDaySelect}></Checkbox>
      ))}
    </div>
  );
}
