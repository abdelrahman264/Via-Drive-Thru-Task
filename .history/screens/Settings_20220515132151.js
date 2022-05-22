import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableRipple,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

const Settings = () => {
  const refRBSheet = useRef();

  const [checked, setChecked] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menuwrapper}>
        <TouchableRipple onPress={() => refRBSheet.current.open()}>
          <View style={styles.menuitem}>
            <FontAwesome name="language" size={22} color="#018601" />
            <Text style={styles.menuitemtext}>Change Language</Text>
          </View>
        </TouchableRipple>
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
        >
          <View>
            {language === "english" ? (
              <Text
                style={{
                  padding: 10,
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Change Language
              </Text>
            ) : (
              <Text
                style={{
                  padding: 10,
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                تغيير اللغة
              </Text>
            )}
            <View
              style={{
                flexDirection: language === "english" ? "row" : "row-reverse",
                alignSelf: "center",
                width: "90%",
                backgroundColor: checked === "english" ? "#008601" : "#f8f8f8",
                borderRadius: 15,
                padding: 10,
                margin: 10,
              }}
            >
              <View style={{ alignSelf: "center" }}>
                {language === "english" ? (
                  <Text
                    style={{
                      fontSize: 18,
                      color: checked === "english" ? "#fff" : "#000",
                    }}
                  >
                    English
                  </Text>
                ) : (
                  <Text
                    style={{
                      fontSize: 18,
                      color: checked === "english" ? "#fff" : "#000",
                    }}
                  >
                    الانجليزية
                  </Text>
                )}
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems:
                    language === "english" ? "flex-end" : "flex-start",
                }}
              >
                <RadioButton
                  color="#fff"
                  value="english"
                  status={checked === "english" ? "checked" : "unchecked"}
                  onPress={() => {
                    handleLanguage("english");
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: language === "english" ? "row" : "row-reverse",
                alignSelf: "center",
                width: "90%",
                backgroundColor: checked === "arabic" ? "#008601" : "#f8f8f8",
                borderRadius: 15,
                padding: 10,
              }}
            >
              <View style={{ alignSelf: "center" }}>
                {language === "english" ? (
                  <Text
                    style={{
                      fontSize: 18,
                      color: checked === "arabic" ? "#fff" : "#000",
                    }}
                  >
                    Arabic
                  </Text>
                ) : (
                  <Text
                    style={{
                      fontSize: 18,
                      color: checked === "arabic" ? "#fff" : "#000",
                    }}
                  >
                    العربية
                  </Text>
                )}
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems:
                    language === "english" ? "flex-end" : "flex-start",
                }}
              >
                <RadioButton
                  color="#fff"
                  value="arabic"
                  status={checked === "arabic" ? "checked" : "unchecked"}
                  onPress={() => {
                    handleLanguage("arabic");
                  }}
                />
              </View>
            </View>
          </View>
        </RBSheet>
      </View>
    </SafeAreaView>
  );
};
export default Settings;
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
    color: "#777777",
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
