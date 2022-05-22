import React from "react";
import { Image, SafeAreaView, StyleSheet, useColorScheme } from "react-native";

const Article = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "#18191a" : "#fff" },
      ]}
    >
      <View style={styles.header} flexDirection="row">
        <Entypo
          style={styles.headericon}
          name="newsletter"
          size={25}
          color={colorScheme === "dark" ? "#fff" : "#000"}
        />
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
        source={require("../assets/icon.png")}
        style={{
          borderRadius: 15,
          width: 100,
          height: 100,
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
});
