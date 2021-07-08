import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FONTS, COLORS, SIZES } from "../../../../constants";
import { FontAwesome5 } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            ...FONTS.body2,
            color: COLORS.white,
            fontWeight: "600",
          }}
        >
          Hii Sagar,
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.white,
            fontWeight: "600",
          }}
        >
          Level 0
        </Text>
      </View>
      <View>
        <FontAwesome5 name="bell" size={SIZES.width / 20} color="white" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingVertical: "8%",
  },
});
