"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useChallenge } from "../utils/contexts/ChallengeContext";
import { useRules } from "../utils/contexts/RulesContext";
import useDarkMode from "../utils/hooks/useDarkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

export function Menu() {
  const [loadingStorageData, setLoadingStorageData] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const { setShowRules } = useRules();
  const { challengeSize, tickedBoxes, setTickedBoxes } = useChallenge();
  const { darkMode, toggleDarkMode } = useDarkMode();

  // set completed days
  useEffect(() => {
    setLoadingStorageData(true);
    const storedData = localStorage.getItem("challengeData");
    if (storedData) {
      const challengeData = JSON.parse(storedData);

      const completedDays = challengeData
        .filter((day) =>
          Object.values(day.checkboxes).every((value) => value === true)
        )
        .map((day) => day.number);

      setTickedBoxes(completedDays);
    }
    setLoadingStorageData(false);
  }, [setTickedBoxes]);

  return (
    <>
      <div id="menu">
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <div className="cntr-logo">
          <Link title="Home" href="/" onClick={() => setMenuOpen(false)}>
            <span>logo</span>
          </Link>
        </div>
        <div className="cntr-progress-bar">
          {loadingStorageData ? (
            <div className="loading-cntr">
            <span className="fst-italic">Loading progress bar...</span>
            <p className="loader m-0"></p>
            </div>
          ) : (
            <>
              <progress
                min={0}
                value={tickedBoxes.length}
                max={challengeSize}
              />
              <span className="progress-text">
                {Math.round((tickedBoxes.length / challengeSize) * 100)}%
                completed
              </span>
            </>
          )}
        </div>
        <nav className={`cntr-menu-items ${menuOpen ? "show" : "hide"}`}>
          <ul>
            <li>
              <Link
                title="Challenge"
                href="/challenge"
                onClick={() => setMenuOpen(false)}
              >
                <span>Challenge</span>
              </Link>
            </li>
            <li>
              <button
                title="Rules"
                onClick={() => {
                  setMenuOpen(false);
                  setShowRules(true);
                }}
              >
                <span>Rules</span>
              </button>
            </li>
            <li>
              <button
                title="Toggle dark mode"
                onClick={toggleDarkMode}
                className="toggle-dark-mode"
              >
                <span>
                  {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
