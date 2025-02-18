
"use client";

import useDarkMode from "../utils/hooks/useDarkMode";

export default function WholePage({ children }) {
  const { isLoading } = useDarkMode();

  if (isLoading) {
    return <></>;
  }

  return <>{children}</>;
}
