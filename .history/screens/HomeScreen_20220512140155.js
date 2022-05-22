import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  SafeAreaView,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const HomeScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View flexDirection="row">
        <Entypo
          style={styles.headericon}
          name="newsletter"
          size={25}
          color="#000"
        />
        <Text style={styles.headerText}>News Feed</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              onRefresh(), refetch();
            }}
          />
        }
      >
        <View>
          <TouchableOpacity activeOpacity={1} style={{ padding: 20 }}>
            <View style={styles.cardInfo}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
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
                <Text style={styles.cardTitle}>kitchen.name</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sliderContainer: {
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 15,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderBottomColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  sliderImage: {
    height: 200,
    width: 350,
    alignSelf: "center",
    // borderWidth: 1,
    borderRadius: 15,
  },
  scrollView: {
    width: "90%",
    alignSelf: "center",
    marginHorizontal: 10,
    height: "75%",
  },
  cardInfo: {
    flex: 2,
    width: "100%",
    padding: 20,
    borderColor: "#ccc",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 5,
    marginBottom: 10,
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  cardTitle: {
    flex: 1,
    alignSelf: "center",
    paddingLeft: 10,
    fontWeight: "bold",
  },
  headericon: {
    fontWeight: "bold",
    paddingTop: 25,
    left: 30,
  },
  headerText: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 25,
    textAlign: "center",
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
    marginBottom: 5,
  },
});
export default HomeScreen;