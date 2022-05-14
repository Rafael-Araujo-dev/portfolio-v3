import type { NextPage } from "next";

import { createContext, useContext, useState } from "react";

const LanguageContext = createContext<any>(undefined);

interface Properties {
  children: React.ReactNode;
}

export const LanguageProvider: NextPage<Properties> = ({ children }) => {
  const [language, setLanguage] = useState("PT");

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguageState() {
  return useContext(LanguageContext);
}
