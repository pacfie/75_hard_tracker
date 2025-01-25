"use client";

import Link from "next/link";
import { useState } from "react";

export function Menu({ content }) {
  const [menuOpen, setMenuOpen] = useState(false);
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
              <Link
                title="Rules"
                href="/rules"
                onClick={() => setMenuOpen(false)}
              >
                <span>Rules</span>
              </Link>
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
      <div className="py-3 py-md-5 px-3">
        {content}
        </div>
    </>
  );
}
