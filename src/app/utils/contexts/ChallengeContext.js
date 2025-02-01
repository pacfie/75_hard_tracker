"use client";

import { createContext, useContext, useState } from "react";

const ChallengeContext = createContext();

export function ChallengeProvider({ children }) {
  const [tickedBoxes, setTickedBoxes] = useState([]);

  return (
    <ChallengeContext.Provider value={{ tickedBoxes, setTickedBoxes }}>
      {children}
    </ChallengeContext.Provider>
  );
}

export function useChallenge() {
  return useContext(ChallengeContext);
}