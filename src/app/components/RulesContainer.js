import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Rules from "./Rules";
import { useState, useEffect } from "react";

export default function RulesContainer({ setShowRules }) {
  const [isClosing, setIsClosing] = useState(false);

  console.log("init");

  function closeRulesWindow() {
    setIsClosing(true);
    setTimeout(() => {
      setShowRules(false);
      setIsClosing(false);
    }, 400);
  }

  // ESC to close Rules
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeRulesWindow();
      }
    }
    // Add event listener
    document.addEventListener("keydown", handleKeyDown);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
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
  );
}
