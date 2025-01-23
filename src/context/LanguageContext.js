"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      fetch("https://ipinfo.io/json?token=c387dc7b3fce4d")
        .then((response) => response.json())
        .then((data) => {
          const country = data.country;

          let defaultLanguage = "en";
          if (country === "CN") {
            defaultLanguage = "zh";
          } else if (country === "RU") {
            defaultLanguage = "ru";
          }

          setLanguage(defaultLanguage);
          localStorage.setItem("language", defaultLanguage);
        })
        .catch(() => {
          setLanguage("ru");
          localStorage.setItem("language", "ru");
        });
    }
  }, []);

  const toggleLanguage = () => {
    const availableLanguages = ["ru", "en", "zh"];
    const currentIndex = availableLanguages.indexOf(language);
    const nextIndex = (currentIndex + 1) % availableLanguages.length;
    const newLanguage = availableLanguages[nextIndex];

    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  if (language === null) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
