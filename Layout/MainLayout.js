import React, { useState } from "react";
import {
  View,
  Animated,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { COLORS, SIZES, FONTS } from "../constants";
import { Card } from "../components";
import { setTopOffers } from "../store/action";
import * as Icon from "@expo/vector-icons";
import { icici } from "../constants/images";
import { LinearGradient } from "expo-linear-gradient";

const MainLayout = ({
  children,
  isTopOffers,
  setTopOffers,
  offersData,
  navigation,
}) => {
  const modelAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const [offersDataFiltered, setOffersData] = useState([]);

  React.useEffect(() => {
    let filteredData = offersData.filter((el, index) => {
      return el.isTop == "1";
    });

    setOffersData(filteredData);

    if (isTopOffers) {
      Animated.timing(modelAnimatedValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modelAnimatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }, [isTopOffers]);

  const handleOfferDetail = (data) => {
    navigation.navigate("offerdetails", { offerDetails: data });
  };

  const modalY = modelAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["100%", "30%"],
  });

  return (
    <View style={{ flex: 1 }}>
      {children}

      {isTopOffers && (
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
          opacity={modelAnimatedValue}
        />
      )}

      {/* {isTopOffers && (
        <TouchableOpacity
          onPress={() => setTopOffers(false)}
          style={{
            position: "absolute",
            top: "5%",
            right: "5%",
          }}
        >
          <Icon.Ionicons
            name="md-close-circle-sharp"
            size={SIZES.width / 8}
            color="white"
          />
        </TouchableOpacity>
      )} */}

      <Animated.FlatList
        horizontal
        style={{
          position: "absolute",
          top: modalY,
          borderRadius: 20,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={offersDataFiltered}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity activeOpacity={1} onPress={() => handleOfferDetail(item)}>
              <View
                style={{
                  borderRadius: 10,
                  backgroundColor: '#fff',
                  marginLeft: index == 0 ? SIZES.width / 20 : SIZES.width / 20,
                  marginRight:
                    index == offersDataFiltered.length - 1
                      ? SIZES.width / 20
                      : 0,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={{ uri: item.offerImageUrl }}
                    style={styles.offerImageStyle}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.offerImageContainer}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 5,
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: COLORS.lightGray,
                        height: SIZES.width / 5,
                        width: SIZES.width / 5,
                        borderRadius: 10,
                      }}
                    >
                      <Text
                        style={{
                          ...FONTS.body3,
                          color: COLORS.gray,
                          fontWeight: '700'
                        }}
                      >
                        &#x20b9; {item.userPayout}
                      </Text>
                    </View>
                  </View>
                </View>
                <Card
                  contentContainerStyle={{
                    width: SIZES.width / 1.3,
                  }}
                  key={index}
                >
                  <View
                    colors={[COLORS.primaryLight, COLORS.white]}
                    style={{ borderRadius: 10 }}
                  >
                    <View style={styles.offerContainer}>
                      <Text
                        style={{
                          ...FONTS.body5,
                          fontWeight: "bold",
                          textAlign: 'center',
                          color: COLORS.primaryDark,
                        }}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          ...FONTS.body6,
                          color: COLORS.primaryDark,
                          textAlign: "center",
                          marginTop: '3%',
                        }}
                      >
                        {item.payoutOnText}
                      </Text>
                      <Text
                        style={{
                          ...FONTS.body4,
                          color: COLORS.primaryDark,
                          textAlign: "center",
                          marginTop: 3,
                        }}
                      >
                        {item.taskTest}
                      </Text>
                    </View>
                  </View>
                </Card>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  offerImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  offerContainer: {
    marginTop: "6%",
    margin: "8%",
  },
  offerImageStyle: {
    width: SIZES.width / 4,
    height: SIZES.width / 4,
    borderRadius: 10,
  },
});

const mapStateToProps = ({ ui, offers }) => ({
  isTopOffers: ui.isTopOffers,
  offersData: offers.offersData,
});

export default connect(mapStateToProps, { setTopOffers })(MainLayout);
