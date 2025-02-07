"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useChallenge } from "../utils/contexts/ChallengeContext";
import { useRules } from "../utils/contexts/RulesContext";

export function Menu({ challengeSize }) {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const { setShowRules } = useRules();
  const { tickedBoxes, setTickedBoxes } = useChallenge([]);

  // set completed days
  useEffect(() => {
    setLoading(true);
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
    setLoading(false);
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
        <div className="ctnr-logo">
          <Link title="Home" href="/" onClick={() => setMenuOpen(false)}>
            <span>logo</span>
          </Link>
        </div>
        <div className="ctnr-progress-bar">
          {loading ? (
            <div className="loading-ctnr">
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
        <nav className={`ctnr-menu-items ${menuOpen ? "show" : "hide"}`}>
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
            {/* <li>
              <Link
                title="Statistics"
                href="/statistics"
                onClick={() => setMenuOpen(false)}
              >
                <span>Statistics</span>
              </Link>
            </li> */}
            <li className="inline-profile">
              <Link
                title="Profile"
                href="/profile"
                onClick={() => setMenuOpen(false)}
              >
                <div className="ctnr-profile inline">
                  <div className="profile"></div>
                  <span>Profile</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="ctnr-profile">
          <div className="profile"></div>
        </div>
      </div>
    </>
  );
}
