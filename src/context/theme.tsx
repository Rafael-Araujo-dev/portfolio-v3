import type { NextPage } from "next";

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext<any>(undefined);

interface Properties {
  children: React.ReactNode;
}

export const ThemeProvider: NextPage<Properties> = ({ children }) => {
  const [theme, setTheme] = useState("Light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useThemeState() {
  return useContext(ThemeContext);
}
