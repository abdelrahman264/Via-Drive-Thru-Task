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
});
