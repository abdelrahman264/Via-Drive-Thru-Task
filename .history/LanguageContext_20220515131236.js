import React, { createContext, useEffect, useState } from "react";
import { AsyncStorage } from "react-native";

const LanguageContext = createContext({});

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("");
  let lang = {
    header: "News Feed",
    fr_header: "Fil d'actualité",
  };
  useEffect(() => {
    AsyncStorage.getItem("language").then((result) => {
      if (result) {
        setLanguage(result);
      } else {
        setLanguage("english");
      }
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
