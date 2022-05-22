import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import StarRating from "./materials/StarRating";
import * as Localization from "expo-localization";
import Swiper from "react-native-swiper";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Bullets } from "react-native-easy-content-loader";
import { useQuery } from "react-query";
import { LanguageConsumer, LanguageProvider } from "../LanguageContext";
import { useFocusEffect } from "@react-navigation/core";

const HomeScreen = ({ navigation }) => {
  const {
    isLoading: isLoadingKitchens,
    isSuccess: isSuccessKitchens,
    data: dataKitchens,
    refetch: refetchKitchens,
  } = useQuery(
    "getofferedkitchens",
    () => {
      return axios
        .post(
          "https://elbeity-yowkal.com/getofferedkitchens",
          "getofferedkitchens",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((result) => {
          return result.data;
        });
    },
    {
      staleTime: Infinity,
    }
  );

  const {
    isLoading: isLoadingOrders,
    isSuccess: isSuccessOrders,
    data: dataOrders,
    refetch: refetchOrders,
  } = useQuery(
    "getpastorders",
    () => {
      return axios
        .post("https://elbeity-yowkal.com/getpastorders", "getpastorders", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((result) => {
          return result.data;
        });
    },
    {
      staleTime: Infinity,
    }
  );
  const { isLoading, isSuccess, data, refetch } = useQuery("profile", () => {
    return axios
      .post("https://elbeity-yowkal.com/getuser", "profile", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        return result.data;
      });
  });

  const [isScreenFocused, setIsScreenFocused] = useState(false);
  useFocusEffect(() => {
    setIsScreenFocused(true); // when i focus the screen
    return () => setIsScreenFocused(false); // when i quit the screen
  });

  useEffect(() => {
    if (isScreenFocused) {
      refetch();
      refetchKitchens();
      refetchOrders();
    }
  }, [isScreenFocused, refetch]);

  return (
    <>
      <LanguageProvider>
        <LanguageConsumer>
          {({ language }) => (
            <SafeAreaView
              style={{
                flex: 1,
                backgroundColor: "#fff",
                direction: language === "english" ? "ltr" : "rtl",
              }}
            >
              <StatusBar
                backgroundColor="#fff"
                barStyle="dark-content"
                hidden={false}
                translucent={false}
              />
              <View style={{ padding: 20 }}>
                <View>
                  {language === "english" ? (
                    <Text style={styles.header}>Good Morning</Text>
                  ) : (
                    <Text style={styles.header}>مرحباً</Text>
                  )}
                  {isLoading && <Bullets active listSize={1} />}
                  {isSuccess && (
                    <Text style={styles.subHeader}>{data?.user.name}</Text>
                  )}
                </View>
              </View>

              <ScrollView style={styles.scrollView}>
                <Swiper height={200} activeDotColor="#018601">
                  <View style={styles.slide}>
                    <Image
                      source={require("../assets/ha.png")}
                      resizeMode="cover"
                      style={styles.sliderImage}
                    />
                  </View>
                  <View style={styles.slide}>
                    <Image
                      source={require("../assets/hah.png")}
                      resizeMode="cover"
                      style={styles.sliderImage}
                    />
                  </View>
                  <View style={styles.slide}>
                    <Image
                      source={require("../assets/haha.png")}
                      resizeMode="cover"
                      style={styles.sliderImage}
                    />
                  </View>
                </Swiper>

                <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                  {language === "english" ? (
                    <Text style={styles.titleNav}>Kitchens</Text>
                  ) : (
                    <Text style={styles.titleNav}>المطابخ</Text>
                  )}
                </View>

                <ScrollView horizontal style={styles.horizontalView}>
                  {isSuccessKitchens &&
                    dataKitchens?.kitchens?.data?.length !== 0 &&
                    dataKitchens?.kitchens?.data.map((kitchen, index) => {
                      return (
                        <View key={index}>
                          {kitchen.offers.length !== 0 && (
                            <TouchableOpacity
                              onPress={() =>
                                navigation.navigate("KitchenProfile", {
                                  kitchenid: kitchen.id,
                                  kitchenimage: kitchen.profileimage,
                                  kitchenname: kitchen.name,
                                  kitchenlocation: kitchen.location,
                                  tokenid: kitchen.tokenid,
                                })
                              }
                              activeOpacity={1}
                              style={styles.cardInfo}
                            >
                              <View style={{ flexDirection: "row" }}>
                                <Image
                                  source={
                                    kitchen.profileimage
                                      ? {
                                          uri: `https://elbeity-yowkal.com${kitchen.profileimage}`,
                                        }
                                      : require("../assets/03-FINAL-PNG.png")
                                  }
                                  style={{
                                    borderRadius: 20,
                                    width: 50,
                                    height: 50,
                                    marginBottom: 10,
                                  }}
                                />
                                <Text style={styles.cardTitle}>
                                  {kitchen.name}
                                </Text>
                                <View
                                  style={{
                                    alignItems: "flex-end",
                                    alignSelf: "center",
                                    flex: 1,
                                  }}
                                >
                                  <StarRating
                                    ratings={kitchen.rating}
                                    reviews={99}
                                  />
                                </View>
                              </View>
                              <View>
                                {kitchen?.offers?.map((offer) => {
                                  return (
                                    <View
                                      style={{
                                        flexDirection: "row",
                                        borderWidth: 1,
                                        padding: 10,
                                        backgroundColor: "#4caf501a",
                                        borderColor: "#4caf501a",
                                        borderRadius: 10,
                                        marginBottom: 10,
                                      }}
                                    >
                                      <MaterialIcons
                                        name="local-offer"
                                        size={18}
                                        color="#018601"
                                      />
                                      <Text
                                        style={{
                                          fontSize: 14,
                                          paddingLeft: 5,
                                          fontWeight: "bold",
                                        }}
                                      >
                                        {offer.description}
                                      </Text>
                                      <Text
                                        style={{
                                          flex: 1,
                                          fontSize: 14,
                                          fontWeight: "bold",
                                          paddingRight: 5,
                                          paddingLeft: 15,
                                          textAlign: "right",
                                        }}
                                      >
                                        {offer.value} %
                                      </Text>
                                    </View>
                                  );
                                })}
                              </View>
                            </TouchableOpacity>
                          )}
                        </View>
                      );
                    })}
                </ScrollView>
                {isSuccessKitchens &&
                  dataKitchens?.kitchens?.data?.length === 0 && (
                    <View style={{ paddingBottom: 40 }}>
                      <Image
                        source={require("../assets/pastorders.png")}
                        style={{
                          width: 200,
                          height: 200,
                          alignSelf: "center",
                        }}
                      />
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          color: "#018601",
                          textAlign: "center",
                        }}
                      >
                        There is No Offered Kitchens Yet
                      </Text>
                    </View>
                  )}
                <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                  {language === "english" ? (
                    <Text style={styles.titleNav}>Past Orders</Text>
                  ) : (
                    <Text style={styles.titleNav}>الطلبات السابقة</Text>
                  )}
                </View>

                <ScrollView horizontal style={styles.orderHorizontal}>
                  {isSuccessOrders &&
                    dataOrders?.orders?.data?.length !== 0 &&
                    dataOrders?.orders?.data.map((order, index) => {
                      return (
                        <View
                          key={index}
                          style={{
                            backgroundColor: "#f6f6f6",
                            padding: 10,
                            borderRadius: 15,
                          }}
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                            }}
                          >
                            <Image
                              source={
                                order.profileimage
                                  ? {
                                      uri: `https://elbeity-yowkal.com${order.profileimage}`,
                                    }
                                  : require("../assets/03-FINAL-PNG.png")
                              }
                              style={{
                                borderRadius: 20,
                                width: 50,
                                height: 50,
                                marginBottom: 10,
                              }}
                            />
                            <Text
                              style={{
                                padding: 10,
                                fontWeight: "bold",
                                fontSize: 18,
                              }}
                            >
                              {order.name}
                            </Text>
                            <Text
                              style={{
                                padding: 10,
                                fontWeight: "bold",
                                fontSize: 18,
                                color: "#018601",
                              }}
                            >
                              EGP {order.totalprice}
                            </Text>
                          </View>
                          <View style={{ flexDirection: "row", padding: 10 }}>
                            <Ionicons
                              name="arrow-undo"
                              style={styles.orderAgain}
                              size={25}
                              color="#018601"
                            />
                            <Text
                              style={{
                                top: 20,
                                padding: 5,
                                fontSize: 16,
                                fontWeight: "bold",
                              }}
                            >
                              Re-Order
                            </Text>
                          </View>
                        </View>
                      );
                    })}
                </ScrollView>
                {isSuccessOrders && dataOrders?.orders?.data?.length === 0 && (
                  <View style={{ paddingBottom: 40 }}>
                    <Image
                      source={require("../assets/pastorders.png")}
                      style={{
                        width: 200,
                        height: 200,
                        alignSelf: "center",
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#018601",
                        textAlign: "center",
                      }}
                    >
                      There is No Past Orders Yet
                    </Text>
                  </View>
                )}
              </ScrollView>
            </SafeAreaView>
          )}
        </LanguageConsumer>
      </LanguageProvider>
    </>
  );
};
const styles = StyleSheet.create({
  buttonView: {
    paddingBottom: 40,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "#dd2f6e",
  },
  cardTitle: {
    flex: 1,
    padding: 20,
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
  cardInfo: {
    flex: 2,
    // width: "120%",
    padding: 20,
    borderColor: "#f6f6f6",
    borderRadius: 15,
    elevation: 5,
    marginBottom: 10,
    borderWidth: 1,
    backgroundColor: "#f6f6f6",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    borderColor: "#A9A9A9",
    borderBottomColor: "transparent",
    marginBottom: 10,
    borderRadius: 15,
  },
  sliderImage: {
    height: 190,
    width: 350,
    alignSelf: "center",
    borderRadius: 15,
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  orderHorizontal: {
    padding: 10,
  },
  orderAgain: {
    paddingRight: 10,
    paddingTop: 20,
  },
  ordersSection: {
    width: 300,
    flex: 1,
    position: "relative",
    borderRadius: 15,
    borderWidth: 10,
    borderColor: "#f6f6f6",
    backgroundColor: "#f6f6f6",
    padding: 10,
  },
  sliderImageCaption: {
    color: "white",
    marginTop: "32%",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  foodNav: {
    alignSelf: "flex-end",
    top: "1%",
    right: "2%",
    fontWeight: "bold",
    color: "#018601",
  },
  titleNav: {
    alignSelf: "flex-start",
    top: "50%",
    left: "2%",
    fontWeight: "bold",
    fontSize: 18,
    color: "#000",
  },
  view: {
    flexDirection: "row",
    paddingRight: 10,
  },
  card: {
    backgroundColor: "#f6f6f6",
    borderRadius: 15,
    flex: 1,
    padding: 20,
    marginBottom: 10,
  },
  header: {
    alignSelf: "flex-start",
    fontSize: 22,
    marginTop: "2%",
    color: "#018601",
  },
  subHeader: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: "2%",
    color: "#A9A9A9",
  },
  scrollView: {
    marginHorizontal: 10,
    height: "75%",
  },
  horizontalView: {
    padding: 10,
  },
  name: {
    top: -20,
  },
  description: {
    width: 150,
    top: -15,
    color: "#A9A9A9",
  },
  price: {
    width: 150,
    top: -5,
  },
});
export default HomeScreen;
