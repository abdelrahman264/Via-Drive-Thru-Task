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

const HomeScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={false}
        barStyle={colorScheme === "dark" ? "dark-content" : "light-content"}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
export default HomeScreen;
