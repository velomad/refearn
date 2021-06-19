import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const Header = ({ title, navigation }) => {
  const userName = "User";
  const isHome = title === undefined || title === "Home";

  const styles = StyleSheet.create({
    container: {
      height: SIZES.height / 15,
      width: "100%",
      justifyContent: "center",
      backgroundColor: isHome ? "#555" : COLORS.white,
      paddingHorizontal: "3%",
    },
    text: {
      ...FONTS.body3,
      color: isHome ? COLORS.white : COLORS.gray,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{isHome ? `Hii, ${userName}` : title}</Text>
    </View>
  );
};

export default Header;
