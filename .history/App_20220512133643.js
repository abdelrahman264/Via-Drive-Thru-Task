import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import Tabs from "./navigation/Tabs";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme);
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
