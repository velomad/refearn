import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { SIZES, COLORS, FONTS } from "../../../../constants";
import { Ionicons } from "@expo/vector-icons";
import { background } from "../../../../constants/images";
import { connect } from "react-redux";

const EarningsStats = (props) => {
  const unlocked =
    props.userProfileData &&
    props.userProfileData.result.level.name === "level 0"
      ? false
      : true;
  const referralUnlock =
    props.userProfileData && JSON.parse(props.userProfileData.result.isRefered);

  console.log(props.userProfileData);

  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircleContainer}>
            <View style={styles.innerCircle}>
              <View>
                <Text style={styles.valueText}>
                  &#8377;
                  {props.userProfileData &&
                    props.userProfileData.result.stats.totalEarnings}
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.nameText}>Total Earnings</Text>
        </View>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircleContainer}>
            <View style={styles.innerCircle}>
              <View>
                <Text style={styles.valueText}>
                  &#8377;
                  {props.userProfileData &&
                    props.userProfileData.result.stats.pending}
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.nameText}>Pending</Text>
        </View>

        <View style={styles.outerCircle}>
          <View
            style={
              !unlocked ? styles.lockedStatOuter : styles.innerCircleContainer
            }
          >
            {!unlocked && (
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
                color="white"
              />
            )}
            <View style={styles.innerCircleContainer}>
              <View
                style={
                  !unlocked ? styles.lockedInnerCircle : styles.innerCircle
                }
              >
                <View style={styles.lockedStat}>
                  <View>
                    <Text
                      style={
                        !unlocked ? styles.lockedvalueText : styles.valueText
                      }
                    >
                      &#8377;50
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.nameText}>Signup{"\n"}Bonus</Text>
          </View>
        </View>
        <View style={styles.outerCircle}>
          <View
            style={
              !referralUnlock
                ? styles.lockedStatOuter
                : styles.innerCircleContainer
            }
          >
            {!referralUnlock && (
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
                color="white"
              />
            )}
            <View style={styles.innerCircleContainer}>
              <View
                style={
                  !referralUnlock
                    ? styles.lockedInnerCircle
                    : styles.innerCircle
                }
              >
                <View style={styles.lockedStat}>
                  <View>
                    <Text
                      style={
                        !referralUnlock
                          ? styles.lockedvalueText
                          : styles.valueText
                      }
                    >
                      &#8377;25
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.nameText}>Referral{"\n"}Bonus</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = ({ user }) => ({
  userProfileData: user.profile,
});

export default connect(mapStateToProps)(EarningsStats);

const styles = StyleSheet.create({
  outerCircle: {
    width: SIZES.width * 0.2,
    // backgroundColor: COLORS.primary,
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 36,
  },
  innerCircle: {
    height: SIZES.width * 0.16,
    width: SIZES.width * 0.16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: COLORS.white,
  },
  lockedInnerCircle: {
    height: SIZES.width * 0.16,
    width: SIZES.width * 0.16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "rgba(255,255,255,0.1)",
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
    color: COLORS.white,
    justifyContent: "flex-end",
    minHeight: SIZES.height / 12,
    paddingVertical: SIZES.height / 60,
  },
  valueText: {
    ...FONTS.body4,
    color: COLORS.primary,
    fontWeight: "700",
  },
  lockedvalueText: {
    ...FONTS.body3,
    color: COLORS.white,
    fontWeight: "700",
  },
  lockedStat: {
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
