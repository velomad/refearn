import React from "react";
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

const MainLayout = ({ children, isTopOffers, setTopOffers }) => {
  const modelAnimatedValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
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

  const modalY = modelAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["100%", "30%"],
  });

  const offers = [
    {
      name: "Equitas Small Finance Bank",
      subname: "Refer and Earn",
      amount: "100",
      label: "Successful Selfe Savings Account Opened",
      sublabel: "Open Zero Balance Savings Account",
    },
    {
      name: "ICICI Finance Bank",
      subname: "Refer and Earn",
      amount: "4000",
      label: "Successful Selfe Savings Account Opened",
      sublabel: "Open Zero Balance Savings Account",
    },
    {
      name: "SBI Finance Bank",
      subname: "Refer and Earn",
      amount: "800",
      label: "Successful Selfe Savings Account Opened",
      sublabel: "Open Zero Balance Savings Account",
    },
  ];

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

      {isTopOffers && (
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
      )}

      <Animated.FlatList
        horizontal
        style={{
          position: "absolute",
          top: modalY,
          borderRadius: 20,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={offers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                marginLeft: index == 0 ? SIZES.width / 20 : SIZES.width / 20,
                marginRight: index == offers.length - 1 ? SIZES.width / 20 : 0,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={icici}
                  style={styles.offerImageStyle}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.offerImageContainer}>
                <Text
                  style={{
                    ...FONTS.body6,
                    fontWeight: "bold",
                    color: COLORS.primaryDark,
                  }}
                >
                  {item.name}
                </Text>
              </View>
              <Card
                contentContainerStyle={{
                  width: SIZES.width / 1.3,
                }}
                key={index}
              >
                <LinearGradient
                  colors={[COLORS.primaryLight, COLORS.white]}
                  style={{ borderRadius: 10 }}
                >
                  <View style={styles.offerContainer}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 10,
                      }}
                    >
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: COLORS.primary,
                          height: SIZES.width / 6,
                          width: SIZES.width / 6,
                          borderRadius: 60,
                        }}
                      >
                        <Text
                          style={{
                            ...FONTS.body2,
                            color: COLORS.white,
                          }}
                        >
                          {item.amount}
                        </Text>
                      </View>
                      <Text
                        style={{
                          ...FONTS.body6,
                          maxWidth: SIZES.width / 2,
                          textAlign: "center",
                          color: COLORS.primaryDark,
                        }}
                      >
                        {item.label}
                      </Text>
                    </View>
                    <Text
                      style={{
                        ...FONTS.body3,
                        color: COLORS.primaryDark,
                        textAlign: "center",
                        marginTop: 20,
                      }}
                    >
                      {item.sublabel}
                    </Text>
                  </View>
                </LinearGradient>
              </Card>
            </View>
          );
        }}
      />
    </View>
  );
};

const mapStateToProps = ({ uiState }) => ({
  isTopOffers: uiState.isTopOffers,
});

export default connect(mapStateToProps, { setTopOffers })(MainLayout);

const styles = StyleSheet.create({
  offerImageContainer: {
    top: "10%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  offerContainer: {
    marginTop: "15%",
    margin: "8%",
  },
  offerImageStyle: {
    width: SIZES.width / 4,
    height: SIZES.width / 4,
    borderRadius: 10,
  },
});
