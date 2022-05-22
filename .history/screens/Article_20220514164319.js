import React from "react";
import { Image } from "react-native";

const Article = () => {
  return (
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
  );
};
export default Article;
