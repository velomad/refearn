import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const Header = ({ title, navigation }) => {
  const userName = "Sagar";
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {title === undefined || title === "Home" ? `Hii, ${userName}` : title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: SIZES.height / 15,
    width: "100%",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    paddingHorizontal: "3%",
  },
  text: {
    ...FONTS.body3,
    color: COLORS.gray,
  },
});
