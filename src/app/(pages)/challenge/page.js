"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Banner from "@/app/components/Banner";
import CheckboxGrid from "@/app/components/CheckboxGrid";
import DailyData from "@/app/components/DailyData";
import * as DayUtil from "@/app/utils/DayUtil";
import DayPlaceholder from "@/app/components/DayPlaceholder";
import { useChallenge } from "@/app/utils/contexts/ChallengeContext";
import WindowContainer from "@/app/components/WindowContainer";

export default function Challenge() {
  const [selectedDay, setSelectedDay] = useState(null);
  const {
    startingDate,
    setStartingDate,
    challengeSize,
    setChallengeSize,
    setTickedBoxes,
  } = useChallenge();
  const [days, setDays] = useState([]);
  const [newChallenge, setNewChallenge] = useState(false);
  const [newChallengeForm, setNewChallengeForm] = useState(false);
  const challengeSizeRef = useRef();
  const startingDateRef = useRef();
  const [validationErrors, setValidationErrors] = useState({});

  // (re-)initialize days
  useEffect(() => {
    const initializeDays = () => {
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
    };

    const initialDays = initializeDays();
    setDays(initialDays);
  }, [challengeSize, startingDate]);

  // set completed days
  useEffect(() => {
    const storedData = localStorage.getItem("challengeData");
    if (storedData) {
      const challengeData = JSON.parse(storedData);
      console.log(challengeData);
      const completedDays = challengeData
        .filter((day) =>
          Object.values(day.checkboxes).every((value) => value === true)
        )
        .map((day) => day.number);

      setTickedBoxes(completedDays);
    }
  }, [setTickedBoxes]);

  // day selection
  function handleDaySelection(dayNumber) {
    const dayObj = days.find((d) => d.number === dayNumber);
    setSelectedDay(dayObj);
  }

  // (un)complete the day
  const handleCheckboxToggle = useCallback(
    (day, completed) => {
      setTickedBoxes((prev) =>
        completed ? [...prev, day] : prev.filter((d) => d !== day)
      );
    },
    [setTickedBoxes]
  );

  // starting a new challenge
  const startNewChallenge = (e) => {
    // prevent submit to reload page
    e.preventDefault();

    // check for errors
    const newErrors = validation(
      challengeSizeRef.current.value,
      startingDateRef.current.value
    );
    setValidationErrors(newErrors);
    if (!(newErrors.size || newErrors.date)) {
      // remove current challenge data
      localStorage.setItem("challengeData", []);

      // set new challenge size
      localStorage.setItem(
        "challengeSize",
        Number(challengeSizeRef.current.value)
      );
      setChallengeSize(Number(challengeSizeRef.current.value));

      // set new starting date
      localStorage.setItem(
        "startingDate",
        new Date(startingDateRef.current.value)
      );
      setStartingDate(new Date(startingDateRef.current.value));

      // set tickedBoxes and selectedDay
      setTickedBoxes([]);
      setSelectedDay(null);

      // close window
      setNewChallengeForm(false);
    }
  };

  // validation for size and date
  function validation(size, date) {
    const errors = {};
    if (size < 10 || size > 75) {
      errors.size = "Challenge size must be between 10 and 75.";
    }

    if (date === "") {
      errors.date = "Starting date is required.";
    } else if (size) {
      const earliest = DayUtil.addDays(new Date(), -size);
      if (new Date(date) < earliest) {
        errors.date =
          "Please choose a date that suggests that you haven't finished the challenge yet.";
      } else if (new Date(date) > new Date()) {
        errors.date = "Future dates are not allowed. Now or never!";
      }
    }
    return errors;
  }

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
      <Banner classes={"mb-3 mb-md-5"} />
      <div className="row flex-wrap mb-5" style={{ "--bs-gutter-y": "1.5rem" }}>
        <div className="col-12 col-lg-5 col-xxl-4">
          <CheckboxGrid onDaySelect={handleDaySelection} />
        </div>
        <div className="col-12 col-lg-7 col-xxl-8">
          <DayPanel />
        </div>
      </div>

      <button
        type="button"
        className="ellipse-btn inverted-btn new-challenge-btn"
        onClick={() => setNewChallenge(true)}
      >
        New challenge
      </button>

      {newChallenge && (
        <WindowContainer
          title={"Starting fresh"}
          content={
            <p>
              Are you sure you want to start a new challenge? All of your
              progress will be lost. Do you wish to proceed?
            </p>
          }
          footer={
            <>
              <button
                type="button"
                className="ellipse-btn full-btn"
                onClick={() => {
                  setNewChallenge(false);
                  setNewChallengeForm(true);
                }}
              >
                Yes, start fresh
              </button>
              <button
                type="button"
                className="ellipse-btn inverted-btn"
                onClick={() => {
                  setNewChallenge(false);
                }}
              >
                No, keep my progress
              </button>
            </>
          }
          setShowWindow={setNewChallenge}
        />
      )}
      {newChallengeForm && (
        <WindowContainer
          title={"Start new challenge"}
          content={
            <form id="new-challenge-form" onSubmit={startNewChallenge}>
              <div
                className="d-grid gap-5 mb-3 text-center"
              >
                <div>
                  <label className="form-label" htmlFor="challenge-size">
                    Challenge length
                  </label>
                  <input
                    ref={challengeSizeRef}
                    type="number"
                    name="challenge-size"
                    min="10"
                    max="75"
                    defaultValue={75}
                    className="form-control form-control-sm"
                  ></input>
                  <p className="info-text">* must be between 10 and 75 days</p>
                </div>
                <div>
                  <label className="form-label" htmlFor="starting-date">
                    Starting date
                  </label>
                  <input
                    ref={startingDateRef}
                    type="date"
                    name="starting-date"
                    className="form-control form-control-sm"
                  ></input>
                  {validationErrors.size && (
                    <span className="validation-msg">
                      {validationErrors.size}
                    </span>
                  )}
                  {validationErrors.date && (
                    <span className="validation-msg">
                      {validationErrors.date}
                    </span>
                  )}
                </div>
              </div>
            </form>
          }
          footer={
            <button
              type="submit"
              form="new-challenge-form"
              className="ellipse-btn full-btn mx-auto"
            >
              {`Let's go`}
            </button>
          }
          setShowWindow={setNewChallengeForm}
          onClose={() => setValidationErrors({})}
        />
      )}
    </div>
  );
}
