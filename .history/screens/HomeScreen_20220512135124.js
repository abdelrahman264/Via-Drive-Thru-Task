import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  useColorScheme,
  SafeAreaView,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={false}
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <View style={styles.cardInfo}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Image
            source={require("../assets/icon.png")}
            style={{
              borderRadius: 20,
              width: 60,
              height: 60,
              marginBottom: 10,
              paddingLeft: 20,
            }}
          />
          <Text style={styles.cardTitle}>kitchen.name</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  cardInfo: {
    flex: 1,
    width: "100%",
    padding: 20,
    borderColor: "#ccc",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 5,
    marginBottom: 10,
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  cardTitle: {
    flex: 1,
    alignSelf: "center",
    paddingLeft: 10,
    fontWeight: "bold",
  },
});
export default HomeScreen;
