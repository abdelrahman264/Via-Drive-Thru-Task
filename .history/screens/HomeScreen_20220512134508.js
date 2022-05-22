import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  colorScheme,
  SafeAreaView,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView>
      <StatusBar
        translucent={false}
        barStyle={colorScheme === "dark" ? "dark-content" : "light-content"}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default HomeScreen;
