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
      <View>
        <Text style={{ color: "#fff" }}>Saloom</Text>
      </View>
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
