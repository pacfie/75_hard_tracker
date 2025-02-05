"use client";

import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import Rules from "../(pages)/rules/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useChallenge } from "../utils/contexts/ChallengeContext";

export function Menu({ challengeSize }) {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { tickedBoxes, setTickedBoxes } = useChallenge([]);

  function closeRulesWindow() {
    setIsClosing(true);
    setTimeout(() => {
      setShowRules(false);
      setIsClosing(false);
    }, 400);
  }

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

  // ESC to close Rules
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape" && showRules) {
        closeRulesWindow();
      }
    }
    // Add event listener
    document.addEventListener("keydown", handleKeyDown);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showRules]);

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
                  setIsClosing(false);
                }}
              >
                <span>Rules</span>
              </button>
            </li>
            <li>
              <Link
                title="Statistics"
                href="/statistics"
                onClick={() => setMenuOpen(false)}
              >
                <span>Statistics</span>
              </Link>
            </li>
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
      {/* Conditionally render the Rules window */}
      {showRules && (
        <div
          className={`rules-window ${isClosing ? "isClosing" : ""}`}
          onClick={closeRulesWindow}
        >
          <div
            className="rules-content position-relative px-4 col-md-10 col-lg-8 col-xl-8 col-xxl-6 mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Rules />
            <button type="button" title="Close" onClick={closeRulesWindow}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
