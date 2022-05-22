import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AllKitchens from "../screens/AllKitchens";
import UserOrders from "../screens/UserOrders";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "relative",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: "#008601",
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
                color="#fff"
                style={{ opacity: focused ? 1 : 0.5 }}
              />
              <Text
                style={{
                  color: "#fff",
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
        name="All Kitchens"
        component={AllKitchens}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="food-fork-drink"
                size={25}
                color="#fff"
                style={{ opacity: focused ? 1 : 0.5 }}
              />
              <Text
                style={{
                  color: "#fff",
                  opacity: focused ? 1 : 0.5,
                }}
              >
                All Kitchens
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="UserOrders"
        component={UserOrders}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <FontAwesome
                name="percent"
                size={25}
                color="#fff"
                style={{ opacity: focused ? 1 : 0.5 }}
              /> */}
              <Ionicons
                name="md-fast-food-outline"
                size={25}
                color="#fff"
                style={{ opacity: focused ? 1 : 0.5 }}
              />
              <Text
                style={{
                  color: "#fff",
                  opacity: focused ? 1 : 0.5,
                }}
              >
                Orders
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
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
                name="user"
                size={24}
                color="#fff"
                style={{ opacity: focused ? 1 : 0.5 }}
              />
              <Text
                style={{
                  color: "#fff",
                  opacity: focused ? 1 : 0.5,
                }}
              >
                Profile
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
