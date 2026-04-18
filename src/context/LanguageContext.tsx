import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "ru" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "kyshik-language";

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "en" ? "en" : "ru";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "ru" ? "en" : "ru"));
  };

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
};
