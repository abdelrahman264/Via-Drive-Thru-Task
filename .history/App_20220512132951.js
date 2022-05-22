import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme);
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>theme</Text>
      </TouchableOpacity>
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
