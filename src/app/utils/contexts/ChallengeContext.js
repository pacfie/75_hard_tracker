"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ChallengeContext = createContext();

export function ChallengeProvider({ children }) {
  const [tickedBoxes, setTickedBoxes] = useState([]);
  const [startingDate, setStartingDate] = useState(new Date());
  const [challengeSize, setChallengeSize] = useState(75);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedSize = Number(localStorage.getItem("challengeSize"));
      const storedDate = localStorage.getItem("startingDate");

      if (storedSize) setChallengeSize(storedSize);
      if (storedDate) setStartingDate(new Date(storedDate));
    }
  }, []);

  return (
    <ChallengeContext.Provider
      value={{
        tickedBoxes,
        setTickedBoxes,
        startingDate,
        setStartingDate,
        challengeSize,
        setChallengeSize,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
}

export function useChallenge() {
  return useContext(ChallengeContext);
}
