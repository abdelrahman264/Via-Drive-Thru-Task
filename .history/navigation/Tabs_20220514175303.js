import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const colorScheme = useColorScheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "relative",
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: colorScheme === "dark" ? "#000" : "#fff",
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome
                name="home"
                size={25}
                color={colorScheme === "dark" ? "#fff" : "#000"}
                style={{ opacity: focused ? 1 : 0.5 }}
              />
              <Text
                style={{
                  color: colorScheme === "dark" ? "#fff" : "#000",
                  opacity: focused ? 1 : 0.5,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="settings"
                size={25}
                color={colorScheme === "dark" ? "#fff" : "#000"}
                style={{ opacity: focused ? 1 : 0.5 }}
              />
              <Text
                style={{
                  color: colorScheme === "dark" ? "#fff" : "#000",
                  opacity: focused ? 1 : 0.5,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default Tabs;
