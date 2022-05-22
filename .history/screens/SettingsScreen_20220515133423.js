import React, { useState, useRef, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  RadioButton,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { FontAwesome } from "@expo/vector-icons";
import { LanguageConsumer, LanguageProvider } from "../LanguageContext";

const SettingsScreen = () => {
  const colorScheme = useColorScheme();
  const refRBSheet = useRef();

  const [checked, setChecked] = useState("");

  const handleLanguage = useCallback((e) => {
    setChecked(e);
    AsyncStorage.setItem("language", e);
  }, []);

  return (
    <LanguageProvider>
      <LanguageConsumer>
        {({ language, lang }) => (
          <SafeAreaView
            style={[
              styles.container,
              { backgroundColor: colorScheme === "dark" ? "#18191a" : "#fff" },
            ]}
          >
            <View style={styles.menuwrapper}>
              <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                <View style={styles.menuitem}>
                  <FontAwesome
                    name="language"
                    size={22}
                    color={colorScheme === "dark" ? "#fff" : "#000"}
                  />
                  <Text
                    style={[
                      styles.menuitemtext,
                      {
                        color: colorScheme === "dark" ? "#fff" : "#000",
                      },
                    ]}
                  >
                    Change Language
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000",
              }}
            >
              <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                customStyles={{
                  wrapper: {
                    ...StyleSheet.absoluteFillObject,
                    zIndex: 1000000,
                    backgroundColor: "rgba(0,0,0,0.70)",
                  },
                  draggableIcon: {
                    backgroundColor: "#A9A9A9",
                  },
                }}
              ></RBSheet>
            </View>
          </SafeAreaView>
        )}
      </LanguageConsumer>
    </LanguageProvider>
  );
};
export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  orderstitleicon: {
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 8,
    textAlign: "left",
  },
  orderstitleicon2: {
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 20,
    textAlign: "left",
  },
  applyPromoCode: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 32,
  },
  settings: {
    alignItems: "flex-end",
    padding: 20,
    right: 10,
    marginTop: 10,
  },
  settings2: {
    alignItems: "flex-end",
    padding: 20,
    right: -10,
    marginTop: 10,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  Title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  Caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuwrapper: {
    marginTop: 14,
  },
  menuitem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuitemtext: {
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 25,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
