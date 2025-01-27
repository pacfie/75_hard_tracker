"use client";

import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import Rules from "../(pages)/rules/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export function Menu({ content }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  function closeRulesWindow() {
    setIsClosing(true);
    setTimeout(() => {
      setShowRules(false);
      setIsClosing(false);
    }, 400);
  }

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
  }, [showRules]); // Re-run effect only when `showRules` changes

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
          <progress min={0} value={40} max={100} />
          <span className="progress-text">40% completed</span>
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
            className="rules-content position-relative col-md-10 col-lg-8 col-xl-8 col-xxl-6 mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Rules />
            <button type="button" title="Close" onClick={closeRulesWindow}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}
      <div className="py-3 py-md-5 px-3">{content}</div>
    </>
  );
}
