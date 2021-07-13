import React, { useState } from "react";
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

const Offers = ({ navigation }) => {
  const [offerDetails, setOfferDetails] = useState([
    {
      name: "Equis Small Finance Bank",
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
      amount: "80000",
      label: "Successful Selfe Savings Account Opened",
      sublabel: "Open Zero Balance Savings Account",
    },
  ]);

  const handleOfferDetail = () => {
    navigation.navigate("offerdetails");
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />
      <View style={styles.cardcontainer}>
        <View>
          {offerDetails &&
            offerDetails.map((el, index) => {
              return (
                <View style={styles.maincard} key={index}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/banners/icici.jpg")}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      ...FONTS.body3,
                      color: COLORS.blueDark,
                      fontWeight: "700",
                    }}
                  >
                    {el.name}
                  </Text>
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.blueLight,
                      fontWeight: "700",
                      marginTop: "1%",
                      textAlign: "center",
                      paddingHorizontal: SIZES.width / 12,
                    }}
                  >
                    {el.subname}{" "}
                    <Text
                      style={{
                        color: COLORS.greenLight,
                      }}
                    >
                      &#8377;{el.amount}{" "}
                    </Text>{" "}
                    / {el.label}
                  </Text>
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.blueLight,
                      fontWeight: "700",
                      marginTop: "1%",
                      textAlign: "center",
                      paddingHorizontal: SIZES.width / 12,
                    }}
                  >
                    {el.sublabel}
                  </Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleOfferDetail()}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "700",
                      }}
                    >
                      Earn &#8377;{el.amount}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
        </View>
      </View>
    </ScrollView>
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
  maincard: {},
  image: {
    width: SIZES.width / 4,
    height: SIZES.width / 4,
    borderRadius: 60,
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
});

export default Offers;
