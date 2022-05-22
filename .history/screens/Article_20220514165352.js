import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const Article = ({ navigation, route }) => {
  const colorScheme = useColorScheme();
  const { image } = route.params;
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "#18191a" : "#fff" },
      ]}
    >
      <View style={styles.header} flexDirection="row">
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
          <Entypo
            style={styles.headericon}
            name="chevron-left"
            size={25}
            color={colorScheme === "dark" ? "#fff" : "#000"}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.headerText,
            { color: colorScheme === "dark" ? "#fff" : "#000" },
          ]}
        >
          News Feed
        </Text>
      </View>
      <Image
        source={
          image
            ? {
                uri: image,
              }
            : require("../assets/icon.png")
        }
        style={{
          borderRadius: 15,
          width: 120,
          height: 120,
          marginBottom: 10,
          paddingLeft: 20,
        }}
      />
    </SafeAreaView>
  );
};
export default Article;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: "10%",
  },
  headerText: {
    flex: 1,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 25,
    textAlign: "center",
  },
  headericon: {
    fontWeight: "bold",
    paddingTop: 25,
    left: 30,
  },
});
