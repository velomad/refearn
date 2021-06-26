import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { SIZES, COLORS, FONTS } from "../../../../constants";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { background } from "../../../../constants/images";

const EarningsStats = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.homeHeaderImage}
        resizeMode="cover"
      >
        <View style={styles.dataContainer}>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircleContainer}>
              <LinearGradient
                // colors={["#30B601", "#97DE00"]}
                // colors={["#555", "#999"]}
                colors={["#3a81f4", "#3a81f4"]}
                style={styles.innerCircle}
              >
                <View>
                  <Text style={styles.valueText}>&#8377;0</Text>
                </View>
              </LinearGradient>
            </View>
            <Text style={styles.nameText}>Paid</Text>
          </View>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircleContainer}>
              <LinearGradient
                // colors={["#1E9AFE", "#5FCFE8"]}
                // colors={["#555", "#999"]}
                colors={["#3a81f4", "#3a81f4"]}
                style={styles.innerCircle}
              >
                <View>
                  <Text style={styles.valueText}>&#8377;0</Text>
                </View>
              </LinearGradient>
            </View>
            <Text style={styles.nameText}>Pending</Text>
          </View>
          {/* <View style={styles.outerCircle}>
            <View style={styles.innerCircleContainer}>
              <LinearGradient
                // Button Linear Gradient
                // colors={["#2E09C2", "#6D49FF"]}
                colors={["#555", "#999"]}
                style={styles.innerCircle}
              >
                <View>
                  <Text style={styles.valueText}>205</Text>
                </View>
              </LinearGradient>
            </View>
            <Text style={styles.nameText}>Signup{"\n"}Bonus</Text>
          </View> */}
          <View style={styles.outerCircle}>
            <View style={styles.lockedStatOuter}>
              <Ionicons
                style={{
                  position: "absolute",
                  zIndex: 100,
                  top: "40%",
                  right: "50%",
                  transform: [{ translateX: SIZES.width / 30 }],
                }}
                name="md-lock-closed"
                size={SIZES.width / 15}
                color="black"
              />
              <View style={styles.innerCircleContainer}>
                <LinearGradient
                  //   colors={["#EC9919", "#FED534"]}
                  colors={["#555", "#999"]}
                  style={styles.innerCircle}
                >
                  <View style={styles.lockedStat}>
                    <View>
                      <Text style={styles.valueText}>&#8377;50</Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
              <Text style={styles.nameText}>Signup{"\n"}Bonus</Text>
            </View>
          </View>
          <View style={styles.outerCircle}>
            <View style={styles.lockedStatOuter}>
              <Ionicons
                style={{
                  position: "absolute",
                  zIndex: 100,
                  top: "40%",
                  right: "50%",
                  transform: [{ translateX: SIZES.width / 30 }],
                }}
                name="md-lock-closed"
                size={SIZES.width / 15}
                color="black"
              />
              <View style={styles.innerCircleContainer}>
                <LinearGradient
                  //   colors={["#EC9919", "#FED534"]}
                  colors={["#555", "#999"]}
                  style={styles.innerCircle}
                >
                  <View style={styles.lockedStat}>
                    <View>
                      <Text style={styles.valueText}>&#8377;25</Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
              <Text style={styles.nameText}>Referral{"\n"}Bonus</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default EarningsStats;

const styles = StyleSheet.create({
  homeHeaderImage: {
    width: "100%",
    paddingVertical: SIZES.height / 15,
  },
  outerCircle: {
    width: SIZES.width * 0.2,
    backgroundColor: COLORS.lightGray,
    borderRadius: 36,
  },
  innerCircle: {
    height: SIZES.width * 0.16,
    width: SIZES.width * 0.16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  innerCircleContainer: {
    paddingVertical: SIZES.height / 150,
    justifyContent: "center",
    alignItems: "center",
  },
  dataContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  nameText: {
    textAlign: "center",
    ...FONTS.body6,
    fontWeight: "700",
    color: COLORS.black,
    justifyContent: "flex-end",
    minHeight: SIZES.height / 12,
    paddingVertical: SIZES.height / 60,
  },
  valueText: {
    ...FONTS.body3,
    color: COLORS.white,
  },
  lockedStat: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: SIZES.width * 0.16,
    width: SIZES.width * 0.16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 36,
  },
  lockedStatOuter: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 36,
  },
});
