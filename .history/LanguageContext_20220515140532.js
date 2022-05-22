import React, { createContext, useEffect, useState } from "react";
import { AsyncStorage } from "react-native";
import * as Localization from "expo-localization";

const LanguageContext = createContext({});

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("");
  let lang = {
    home_header: "News Feed",
    fr_home_header: "Fil d'actualité",
    settings_header: "Settings",
    fr_settings_header: "Réglages",
    changeLang: "Change Language",
    fr_changeLang: "Changer de langue",
    search: "Search for Articles",
    fr_search: "Rechercher des articles",
    english: "English",
    fr_english: "Anglaise",
    tab_one: "News",
    fr_tab_one: "Nouvelles",
    tab_two: "Settings",
    fr_tab_two: "Réglages",
  };
  useEffect(() => {
    if (Localization.locale.substring(0, 2) === "fr") {
      setLanguage("french");
    } else {
      AsyncStorage.getItem("language").then((result) => {
        setLanguage(result);
      });
    }
  });

  return (
    <LanguageContext.Provider
      value={{
        language,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
const LanguageConsumer = LanguageContext.Consumer;

export { LanguageProvider, LanguageConsumer, LanguageContext };
