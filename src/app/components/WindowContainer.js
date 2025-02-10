import { useState, useEffect } from "react";
import Window from "./Window";

export default function WindowContainer({ setShowWindow, title, content, footer, onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  function closeWindow() {
    setIsClosing(true);
    setTimeout(() => {
      setShowWindow(false);
      setIsClosing(false);
      onClose && onClose();
    }, 400);
  }

  // ESC to close the window
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeWindow();
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
      className={`window-cntr ${isClosing ? "isClosing" : ""}`}
      onClick={closeWindow}
    >
      <div
        className="window-content position-relative px-4 col-md-10 col-lg-8 col-xl-8 col-xxl-6 mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <Window title={title} content={content} footer={footer} onClose={closeWindow} />
      </div>
    </div>
  );
}
