import React, { useState, useCallback, useEffect } from "react";
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
import { Entypo } from "@expo/vector-icons";
import { useInfiniteQuery } from "react-query";
import axios from "axios";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const fetchNews = async () => {
  return await axios.get(
    `https://newsapi.org/v2/everything?q=tesla&from=2022-04-12&sortBy=publishedAt&apiKey=e0256a36f3774f78b6ea4aabd698348b`
  );
};

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const { isLoading, isError, error, data, isSuccess, refetch } =
    useInfiniteQuery(
      ["fetchNews"],
      fetchNews,
      {
        getNextPageParam: (lastPage, pages) => {
          if (pages.length) {
            return pages.length + 1;
          } else {
            return undefined;
          }
        },
      },
      {
        staleTime: Infinity,
      }
    );

  useEffect(() => {
    alert(JSON.stringify(data));
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
        {/* {isSuccess &&
                data?.pages?.map((group, i) => {
                  return (
                    <View>
                      {group?.data?.kitchens?.data?.map((kitchen) => (
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
        ))}
                    </View>
                  );
                })} */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardInfo: {
    flex: 2,
    width: "100%",
    padding: 20,
    borderColor: "#ccc",
    borderRadius: 15,
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
});
export default HomeScreen;
