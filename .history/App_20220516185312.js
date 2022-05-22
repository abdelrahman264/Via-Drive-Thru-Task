import { useState } from "react";
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
import Article from "./screens/Article";
import * as Linking from "expo-linking";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

const prefix = Linking.createURL("/apple");
const linking = {
  prefixes: [prefix],
};

export default function App() {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme);
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Article"
            component={Article}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
