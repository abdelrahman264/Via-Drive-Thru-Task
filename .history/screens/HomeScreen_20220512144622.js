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
  useColorScheme,
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
  const colorScheme = useColorScheme();
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

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "#000" : "#fff" },
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
        {isSuccess &&
          data?.pages?.map((group, i) => {
            return (
              <View
                style={{
                  backgroundColor: colorScheme === "dark" ? "#322d31" : "#fff",
                }}
              >
                {group?.data?.articles?.map((article) => (
                  <View>
                    <TouchableOpacity activeOpacity={1} style={{ padding: 20 }}>
                      <View
                        style={[
                          styles.cardInfo,
                          {
                            backgroundColor:
                              colorScheme === "dark" ? "#59515e" : "#fff",
                          },
                        ]}
                      >
                        <Text style={styles.cardTitle}>{article.title}</Text>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Image
                            source={
                              article.urlToImage
                                ? {
                                    uri: article.urlToImage,
                                  }
                                : require("../assets/icon.png")
                            }
                            style={{
                              borderRadius: 15,
                              width: 100,
                              height: 100,
                              marginBottom: 10,
                              paddingLeft: 20,
                            }}
                          />
                          <Text style={styles.carddescription}>
                            {article.description}
                          </Text>
                        </View>

                        <View style={styles.cardauthor}>
                          <Text>Author: </Text>
                          <Text style={{ color: "#A9A9A9" }}>
                            {article.author}
                          </Text>
                        </View>
                        <View style={styles.cardsource}>
                          <Text>Source: </Text>
                          <Text style={{ color: "#A9A9A9" }}>
                            {article.source.name}
                          </Text>
                        </View>
                        <View style={styles.cardpublish}>
                          <Text>Published At: </Text>
                          <Text style={{ color: "#A9A9A9" }}>
                            {article.publishedAt}
                          </Text>
                        </View>
                        <TouchableOpacity style={styles.readmore}>
                          <Text>Read More</Text>
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: "10%",
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
  },
  cardTitle: {
    flex: 1,
    textAlign: "center",
    alignSelf: "center",
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  carddescription: {
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
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 25,
    textAlign: "center",
  },
  cardauthor: {
    flexDirection: "row",
    display: "flex",
    paddingTop: 20,
  },
  cardsource: {
    flexDirection: "row",
    display: "flex",
    paddingTop: 20,
  },
  cardpublish: {
    flexDirection: "row",
    display: "flex",
    paddingTop: 20,
  },
  readmore: {
    justifyContent: "flex-end",
    flexDirection: "row",
    display: "flex",
    paddingTop: 20,
  },
});
export default HomeScreen;
