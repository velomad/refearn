import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { FocusAwareStatusBar } from "../../components";
import { MainLayout } from "../../Layout";
import Tooltip from "react-native-walkthrough-tooltip";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

const Education = (props) => {
  const [offerID, setOfferID] = useState("");

  const [offersDataFiltered, setOffersData] = useState([]);

  useEffect(() => {
    let filteredData = props.offersData.filter((el, index) => {
      return el.offerType.type.toLocaleLowerCase() == "education";
    });
    setOffersData(filteredData);
  }, []);

  const handleOfferDetail = (data) => {
    props.navigation.navigate("offerdetails", { offerDetails: data });
  };

  const handleToolTip = (offerid) => {
    setOfferID(offerid);
  };

  const handleToolTipClose = () => {
    setOfferID("");
  };

  return (
    <MainLayout screen="education">
      <ScrollView
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
      >
        <FocusAwareStatusBar
          barStyle="dark-light"
          backgroundColor={COLORS.primaryDark}
        />
        <View style={styles.cardcontainer}>
          <View>
            {offersDataFiltered &&
              offersDataFiltered.map((el, index) => {
                return (
                  <View style={styles.maincard} key={index}>
                    <Image
                      style={styles.image}
                      source={{ uri: el.offerImageUrl }}
                      resizeMode="contain"
                    />
                    <View style={styles.infoIcon}>
                      <Tooltip
                        isVisible={offerID == el.id}
                        content={
                          <Text
                            style={{
                              ...FONTS.body5,
                              color: COLORS.primaryDark,
                            }}
                          >
                            {" "}
                            You will receive the payment in {
                              el.reportingDays
                            }{" "}
                            working days
                          </Text>
                        }
                        placement="bottom"
                        onClose={() => handleToolTipClose()}
                      >
                        <View>
                          <Ionicons
                            name="information-circle"
                            size={22}
                            color={COLORS.primary}
                          />
                        </View>
                      </Tooltip>
                    </View>
                    <TouchableOpacity
                      onPress={() => handleToolTip(el.id)}
                      style={styles.infoIcon}
                    >
                      <View>
                        <Ionicons
                          name="information-circle"
                          size={22}
                          color={COLORS.primary}
                        />
                      </View>
                    </TouchableOpacity>

                    <Text
                      style={{
                        ...FONTS.body3,
                        color: COLORS.primaryDark,
                        fontWeight: "700",
                        paddingTop: SIZES.height / 20,
                      }}
                    >
                      {el.name}
                    </Text>
                    <Text
                      style={{
                        ...FONTS.body4,
                        color: COLORS.primary,
                        fontWeight: "700",
                        marginTop: "1%",
                        textAlign: "center",
                        paddingHorizontal: SIZES.width / 12,
                      }}
                    >
                      {el.payoutOnText}{" "}
                      <Text
                        style={{
                          ...FONTS.body4,
                          color: COLORS.success,
                        }}
                      >
                        &#8377;{el.userPayout}{" "}
                      </Text>{" "}
                      {/* / {el.label} */}
                    </Text>
                    <Text
                      style={{
                        ...FONTS.body5,
                        color: COLORS.primaryDark,
                        fontWeight: "700",
                        marginTop: "5%",
                        textAlign: "center",
                        paddingHorizontal: SIZES.width / 12,
                      }}
                    >
                      {el.taskTest}
                    </Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => handleOfferDetail(el)}
                    >
                      <Text
                        style={{
                          color: COLORS.white,
                          fontWeight: "700",
                        }}
                      >
                        Earn &#8377;{el.userPayout}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
          </View>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingBottom: "10%",
  },
  cardcontainer: {
    flexDirection: "column",
  },
  maincard: {
    marginTop: SIZES.width / 7,
    alignItems: "center",
    backgroundColor: COLORS.lightGray,
    marginHorizontal: SIZES.width / 15,
    borderRadius: 7,
  },
  image: {
    width: SIZES.width / 5,
    height: SIZES.width / 5,
    borderRadius: 60,
    position: "absolute",
    top: -SIZES.height / 20,
  },
  button: {
    width: "80%",
    alignItems: "center",
    color: "#fff",
    backgroundColor: COLORS.primary,
    marginHorizontal: SIZES.width / 15,
    padding: 10,
    marginTop: "3%",
    marginBottom: "5%",
    borderRadius: 4,
  },
  infoIcon: {
    color: "#000",
    position: "absolute",
    right: SIZES.width / 40,
    top: SIZES.height / 110,
  },
});

const mapStateToProps = ({ offers }) => ({
  offersData: offers.offersData,
});

export default connect(mapStateToProps)(Education);
