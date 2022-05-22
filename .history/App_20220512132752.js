import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useColorScheme } from "react-native";

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text>useColorScheme(): {colorScheme}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
