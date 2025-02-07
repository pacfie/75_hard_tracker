"use client";

import RulesContainer from "@/app/components/RulesContainer";
import { createContext, useState, useContext } from "react";

const RulesContext = createContext();

export function RulesProvider({ children }) {
  const [showRules, setShowRules] = useState(false);

  return (
    <RulesContext.Provider value={{ showRules, setShowRules }}>
      {children}
      {showRules && <RulesContainer setShowRules={setShowRules} />}
    </RulesContext.Provider>
  );
}

export function useRules() {
  return useContext(RulesContext);
}
