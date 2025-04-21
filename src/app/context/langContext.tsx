"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import en from "../locales/en.json";
import ru from "../locales/ru.json";
import tm from "../locales/tm.json";

interface LanguageContextProps {
  lang: string;
  t: typeof en; // Используем тип перевода
  setLang: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState("en");

  const translations = lang === "ru" ? ru : lang === "tm" ? tm : en;

  return (
    <LanguageContext.Provider value={{ lang, t: translations, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};