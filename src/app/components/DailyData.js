import { useState, useEffect, useRef } from "react";
import Checkbox from "./Checkbox";
import {
  faCarrot,
  faBook,
  faDumbbell,
  faGlassWater,
  faCameraRetro,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DailyData({ day, onTickedBoxesChange }) {
  const defaultDayData = {
    number: day.number,
    diet: "",
    workout: {
      first: "",
      second: "",
    },
    book: {
      title: "",
      pages: "",
    },
    rating: 0,
    checkboxes: {
      diet: false,
      water: false,
      workout: false,
      book: false,
      progressPhoto: false,
    },
  };

  const allIcons = [
    { id: "diet", icon: faCarrot },
    { id: "workout", icon: faDumbbell },
    { id: "book", icon: faBook },
    { id: "water", icon: faGlassWater },
    { id: "progressPhoto", icon: faCameraRetro },
  ];

  const [dayData, setDayData] = useState(defaultDayData);

  // after a new day has been selected
  useEffect(() => {
    const storedData = localStorage.getItem("challengeData");
    if (storedData) {
      let challengeData = JSON.parse(storedData);
      const newDayData = challengeData[day.number - 1];
      setDayData(newDayData);
    }
  }, [day]);

  // save dayData to localStorage
  useEffect(() => {
    if (dayData.number === 0) return;
    const timeoutId = setTimeout(() => {
      const storedData = localStorage.getItem("challengeData") || "[]";
      let challengeData = JSON.parse(storedData);

      challengeData[dayData.number - 1] = dayData;

      localStorage.setItem("challengeData", JSON.stringify(challengeData));
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [dayData]);

  // handling/counting checkbox ticks
  const handleCheckboxTick = (field, value) => {
    // if the last is checked or only one is unchecked
    setTimeout(() => {
      if (lastChecked(field, value, dayData.checkboxes)) {
        onTickedBoxesChange(dayData.number, true);
      }
      else if(firstUnchecked(value, dayData.checkboxes)){
        onTickedBoxesChange(dayData.number, false);
      }
    }, 200);

    setDayData((prev) => {
      const updatedData = {
        ...prev,
        checkboxes: {
          ...prev.checkboxes,
          [field]: value,
        },
      };
      return updatedData;
    });
  };

  // first checkbox is unchecked
  function firstUnchecked(value, checkboxes) {
    if (value) return false;
  
    return Object.entries(checkboxes).every(([, val]) => val === true);
  }

  // last checkbox is checked
  function lastChecked(field, value, checkboxes) {
    if (!value) return false;

    const updatedCheckboxes = { ...checkboxes, [field]: value };
    return Object.entries(updatedCheckboxes)
      .filter(([key]) => key !== field)
      .every(([, val]) => val === true);
  }

  return (
    <div id="daily-data">
      <div>
        <h1>Day {dayData.number}</h1>
        <div
          className="d-flex justify-content-center gap-2 flex-wrap py-2"
          style={{
            borderRadius: "var(--border-radius)",
          }}
        >
          {allIcons.map(({ id, icon }) => (
            <div
              key={`${id}-box`}
              className="text-center"
              style={{ fontSize: "1.5rem" }}
            >
              <FontAwesomeIcon icon={icon} />
              <Checkbox
                id={`${id}-check`}
                size="big"
                isChecked={dayData.checkboxes[id]}
                onCheckboxChanged={(checked) => handleCheckboxTick(id, checked)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="d-grid gap-4">
        <div className="w-100">
          <label htmlFor="diet-input" className="form-label">
            What did you eat during the day?
          </label>
          <textarea
            className="form-control form-control-sm"
            id="diet-input"
            rows="3"
            value={dayData.diet}
            onChange={(e) =>
              setDayData((prev) => ({ ...prev, diet: e.target.value }))
            }
          ></textarea>
        </div>
        <div className="w-100">
          <div>
            <label htmlFor="workout-outdoor-input" className="form-label">
              What did you do as your outdoor workout?
            </label>
            <textarea
              className="form-control form-control-sm"
              id="workout-outdoor-input"
              rows="3"
              value={dayData.workout.first}
              onChange={(e) =>
                setDayData((prev) => ({
                  ...prev,
                  workout: { ...prev.workout, first: e.target.value },
                }))
              }
            ></textarea>
          </div>
          <div className="mt-3">
            <label htmlFor="workout-indoor-input" className="form-label">
              What did you do as your indoor workout?
            </label>
            <textarea
              className="form-control form-control-sm"
              id="workout-indoor-input"
              rows="3"
              value={dayData.workout.second}
              onChange={(e) =>
                setDayData((prev) => ({
                  ...prev,
                  workout: { ...prev.workout, second: e.target.value },
                }))
              }
            ></textarea>
          </div>
        </div>
        <div className="w-100">
          <div>
            <label htmlFor="book-input" className="form-label">
              What book did you read today?
            </label>
            <input
              id="book-input"
              className="form-control form-control-sm"
              value={dayData.book.title}
              onChange={(e) =>
                setDayData((prev) => ({
                  ...prev,
                  book: { ...prev.book, title: e.target.value },
                }))
              }
            ></input>
          </div>
          <div className="d-flex align-items-center gap-2 mt-3">
            <label htmlFor="pages-input" className="form-label m-0">
              Pages:
            </label>
            <input
              id="pages-input"
              className="form-control form-control-sm"
              style={{ width: "5rem" }}
              value={dayData.book.pages}
              onChange={(e) =>
                setDayData((prev) => ({
                  ...prev,
                  book: { ...prev.book, pages: e.target.value },
                }))
              }
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
