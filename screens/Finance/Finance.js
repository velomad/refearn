import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { FocusAwareStatusBar } from "../../components";
import { MainLayout } from "../../Layout";
import Tooltip from "react-native-walkthrough-tooltip";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

const Finance = (props) => {
  const [offerID, setOfferID] = useState("");
  const [offersDataFiltered, setOffersData] = useState([]);

  useEffect(() => {
    let filteredData = props.offersData.filter((el, index) => {
      return el.offerType.type.toLocaleLowerCase() == "finance";
    });
    setOffersData(filteredData);
  }, []);

  const handleOfferDetail = (data) => {
    props.navigation.navigate("offerdetails", {
      offerDetails: data,
      shareOffer: false,
    });
  };

  const handleToolTip = (offerid) => {
    setOfferID(offerid);
  };

  const handleToolTipClose = () => {
    setOfferID("");
  };

  return (
    <MainLayout screen="finance" navigation={props.navigation}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
      >
        <FocusAwareStatusBar
          barStyle="dark-light"
          backgroundColor={COLORS.primaryDark}
        />
        <View style={{ padding: "5%" }}>
          {offersDataFiltered.map((el, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                elevation: 1,
                borderColor: COLORS.primaryDark,
                borderRadius: 60,
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <Image
                style={styles.image}
                source={{ uri: el.offerImageUrl }}
                resizeMode="contain"
              />
              <View style={{ flexDirection: "column" }}>
                <Text style={{ ...FONTS.body5, fontWeight: "700" }}>
                  {el.name}
                </Text>
                <Text style={{ ...FONTS.body6 }}>{el.payoutOnText}</Text>
              </View>
              <View>
                <Feather name="arrow-right-circle" size={30} color="black" />
              </View>
            </View>
          ))}
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
  // cardcontainer: {
  //   flexDirection: "column",
  // },
  // maincard: {
  //   marginTop: SIZES.width / 7,
  //   alignItems: "center",
  //   backgroundColor: COLORS.primaryLight,
  //   marginHorizontal: SIZES.width / 15,
  //   borderRadius: 7,
  // },
  image: {
    width: SIZES.width / 4.5,
    height: SIZES.width / 4.5,
    borderRadius: 60,
  },
  // button: {
  //   width: "80%",
  //   alignItems: "center",
  //   color: "#fff",
  //   backgroundColor: COLORS.primary,
  //   marginHorizontal: SIZES.width / 15,
  //   padding: 10,
  //   marginTop: "3%",
  //   marginBottom: "5%",
  //   borderRadius: 4,
  // },
  // infoIcon: {
  //   color: "#000",
  //   position: "absolute",
  //   right: SIZES.width / 40,
  //   top: SIZES.height / 110,
  // },
});

const mapStateToProps = ({ offers }) => ({
  offersData: offers.offersData,
});

export default connect(mapStateToProps)(Finance);
