import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Share,
  TouchableOpacity,
} from "react-native";
import { FocusAwareStatusBar } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import * as Sharing from "expo-sharing";
import { connect } from "react-redux";

const Offerdetails = ({ route, navigation, userProfileData }) => {

  const [singleOfferData, setSingleOfferDetails] = useState([]);
  const [singleOfferBenefits, setSingleOfferBenefits] = useState([]);
  const [singleOfferInfos, setSingleOfferInfos] = useState([]);
  const [singleOfferSteps, setSingleOfferSteps] = useState([]);

  useEffect(() => {
    const { offerDetails } = route.params;
    setSingleOfferDetails(offerDetails);
    setSingleOfferBenefits(offerDetails.benefits);
    setSingleOfferInfos(offerDetails.infos);
    setSingleOfferSteps(offerDetails.steps);
  }, []);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: singleOfferData.offerUrl + '?code=' + userProfileData.result.uniqueCode,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: singleOfferData.offerImageUrl }}
            />
            <Text
              style={{
                fontSize: SIZES.body3,
                fontWeight: "700",
                color: COLORS.blueLight,
                textAlign: "center",
                paddingTop: SIZES.width / 25,
              }}
            >
              {singleOfferData.name}
            </Text>
            <Text
              style={{
                fontSize: SIZES.body4,
                fontWeight: "600",
                color: COLORS.primaryDark,
                textAlign: "center",
                paddingTop: SIZES.width / 75,
                paddingHorizontal: SIZES.width / 10,
              }}
            >
              {singleOfferData.payoutOnText}
            </Text>
            <Text
              style={{
                fontSize: SIZES.body4,
                fontWeight: "600",
                color: COLORS.primaryDark,
                textAlign: "center",
                paddingHorizontal: SIZES.width / 20,
                paddingVertical: SIZES.width / 70,
              }}
            >
              {singleOfferData.taskTest}
            </Text>
            <TouchableOpacity style={styles.button} onPress={onShare}>
              <Text
                style={{
                  color: COLORS.primaryDark,
                  fontWeight: "700",
                }}
              >
                Share Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.pointsCollection}>
          <View style={styles.rulesContainer}>
            <Text
              style={{
                fontSize: SIZES.body3,
                color: COLORS.primaryDark,
                fontWeight: "700",
                paddingVertical: SIZES.width / 100,
                paddingHorizontal: SIZES.width / 60,
              }}
            >
              Offer Benefits
            </Text>
            {
              singleOfferBenefits.map((el, index) => {
                return (
                  <View style={styles.subPoints} key={index}>
                    <View>
                      <Text
                        style={{
                          textAlign: "left",
                          marginHorizontal: SIZES.width / 15,
                          fontSize: SIZES.body4,
                          fontWeight: "700",
                          color: COLORS.primaryDark,
                        }}
                      >
                        {index + 1 + ". "}
                        <Text
                          style={{
                            textAlign: "left",
                            marginHorizontal: SIZES.width / 15,
                            fontSize: SIZES.body4,
                            color: COLORS.gray,
                          }}
                        >
                          {el.benefit}
                        </Text>
                      </Text>
                    </View>
                  </View>
                )
              })
            }
          </View>
        </View>

        <View style={styles.pointsCollection}>
          <View style={styles.rulesContainer}>
            <Text
              style={{
                fontSize: SIZES.body3,
                color: COLORS.primaryDark,
                fontWeight: "700",
                paddingVertical: SIZES.width / 150,
                paddingHorizontal: SIZES.width / 60,
              }}
            >
              Offer Information
            </Text>
            {
              singleOfferInfos.map((el, index) => {
                return (
                  <View style={styles.subPoints} key={index}>
                    <View>
                      <Text
                        style={{
                          textAlign: "left",
                          marginHorizontal: SIZES.width / 15,
                          fontSize: SIZES.body4,
                          fontWeight: "700",
                          color: COLORS.primaryDark,
                        }}
                      >
                        {index + 1 + ". "}
                        <Text
                          style={{
                            textAlign: "left",
                            marginHorizontal: SIZES.width / 15,
                            fontSize: SIZES.body4,
                            color: COLORS.gray,
                          }}
                        >
                          {el.info}
                        </Text>
                      </Text>
                    </View>
                  </View>
                )
              })
            }
          </View>
        </View>

        <View style={styles.pointsCollection}>
          <View style={styles.rulesContainer}>
            <Text
              style={{
                fontSize: SIZES.body3,
                color: COLORS.primaryDark,
                fontWeight: "700",
                paddingVertical: SIZES.width / 150,
                paddingHorizontal: SIZES.width / 60,
              }}
            >
              Offer Steps
            </Text>
            {
              singleOfferSteps.map((el, index) => {
                return (
                  <View style={styles.subPoints} key={index}>
                    <View>
                      <Text
                        style={{
                          textAlign: "left",
                          marginHorizontal: SIZES.width / 15,
                          fontSize: SIZES.body4,
                          fontWeight: "700",
                          color: COLORS.primaryDark,
                        }}
                      >
                        {index + 1 + ". "}
                        <Text
                          style={{
                            textAlign: "left",
                            marginHorizontal: SIZES.width / 15,
                            fontSize: SIZES.body4,
                            color: COLORS.gray,
                          }}
                        >
                          {el.step}
                        </Text>
                      </Text>
                    </View>
                  </View>
                )
              })
            }
          </View>
        </View>

        <View style={styles.parentContainer}>
          <View style={styles.rulesContainer}>
            <Text
              style={{
                fontSize: SIZES.body3,
                color: COLORS.primaryDark,
                fontWeight: "700",
                paddingVertical: SIZES.width / 40,
                paddingHorizontal: SIZES.width / 60,
              }}
            >
              Rules To Be Followed
            </Text>
            <View style={styles.subPoints}>
              <View>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body4,
                    fontWeight: "700",
                    color: COLORS.primaryDark,
                  }}
                >
                  Your Profit
                </Text>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body5,
                  }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </Text>
              </View>
            </View>
            <View style={styles.subPoints}>
              <View>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body4,
                    fontWeight: "700",
                    color: COLORS.primaryDark,
                  }}
                >
                  Your Profit
                </Text>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body5,
                  }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </Text>
              </View>
            </View>
            <View style={styles.subPoints}>
              <View>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body4,
                    fontWeight: "700",
                    color: COLORS.primaryDark,
                  }}
                >
                  Your Profit
                </Text>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body5,
                  }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.rulesContainer}>
            <Text
              style={{
                fontSize: SIZES.body3,
                color: COLORS.primaryDark,
                fontWeight: "700",
                paddingVertical: SIZES.width / 40,
                paddingHorizontal: SIZES.width / 60,
              }}
            >
              Terms And Condition
            </Text>
            <View style={styles.subPoints}>
              <View>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body4,
                    fontWeight: "700",
                    color: COLORS.primaryDark,
                  }}
                >
                  Your Profit
                </Text>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body5,
                  }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </Text>
              </View>
            </View>
            <View style={styles.subPoints}>
              <View>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body4,
                    fontWeight: "700",
                    color: COLORS.primaryDark,
                  }}
                >
                  Your Profit
                </Text>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body5,
                  }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </Text>
              </View>
            </View>
            <View style={styles.subPoints}>
              <View>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body4,
                    fontWeight: "700",
                    color: COLORS.primaryDark,
                  }}
                >
                  Your Profit
                </Text>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body5,
                  }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f8fbf8",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  imageContainer: {
    alignItems: "center",
    paddingVertical: SIZES.width / 20,
    backgroundColor: COLORS.lightGray,
  },
  spcfContainer: {
    backgroundColor: COLORS.lightGray,
    marginHorizontal: SIZES.width / 15,
    borderRadius: 7,
  },
  specPoints: {
    paddingHorizontal: SIZES.width / 15,
    flexDirection: "column",
    paddingVertical: SIZES.width / 85,
    backgroundColor: COLORS.primaryLight,
    marginHorizontal: SIZES.width / 25,
    borderRadius: 4,
    marginBottom: SIZES.width / 55,
  },
  pointText: {
    color: COLORS.blueDark,
  },
  pointsCollection: {
    flexDirection: "column",
    paddingTop: SIZES.width / 10,
  },
  subPoints: {
    flexDirection: "column",
    marginVertical: SIZES.width / 65,
    backgroundColor: COLORS.lightGray,
    marginHorizontal: SIZES.width / 20,
    borderRadius: 7,
    paddingVertical: SIZES.width / 45,
  },
  rulesContainer: {
    flexDirection: "column",
    paddingVertical: SIZES.width / 20,
    marginHorizontal: SIZES.width / 25,
    borderRadius: 4,
  },
  rulesPoints: {
    flexDirection: "column",
    marginVertical: SIZES.width / 65,
    marginHorizontal: SIZES.width / 35,
    borderRadius: 7,
    paddingVertical: SIZES.width / 45,
  },
  parentContainer: {
    marginVertical: SIZES.width / 10,
  },
  button: {
    width: "40%",
    alignItems: "center",
    color: "#fff",
    backgroundColor: COLORS.primaryLight,
    marginHorizontal: SIZES.width / 15,
    padding: 10,
    marginTop: "5%",
    borderRadius: 4,
  },
});

const mapStateToProps = ({ user }) => ({
  userProfileData: user.profile,
});

export default connect(mapStateToProps)(Offerdetails);