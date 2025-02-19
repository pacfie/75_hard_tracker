import { useState, useEffect } from "react";

const quotes = [
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "Act as if what you do makes a difference. It does.",
  "You are never too old to set another goal or to dream a new dream.",
  "Do what you can, with what you have, where you are.",
];

export default function QuoteCarousel() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setFade(true);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="quote-carousel">
      <blockquote className={`quote ${fade ? "fade-in" : "fade-out"} mx-auto my-0 position-relative`} style={{width: "fit-content", height: "4rem"}}>
        {quotes[index]}
      </blockquote>
    </div>
  );
}
