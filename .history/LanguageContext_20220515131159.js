import React, { createContext, useEffect, useState } from "react";
import { AsyncStorage } from "react-native";

const LanguageContext = createContext({});

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("");
  let lang = {
    header: "News Feed",
    fr_header: "Fil d'actualité",
  };
  console.log(AsyncStorage.getItem("language"));
  useEffect(() => {
    AsyncStorage.getItem("language").then((result) => {
      setLanguage(result);
    });
  });

  return (
    <LanguageContext.Provider
      value={{
        language,
        lang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
const LanguageConsumer = LanguageContext.Consumer;

export { LanguageProvider, LanguageConsumer, LanguageContext };
