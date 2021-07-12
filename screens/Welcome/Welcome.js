import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { CustomButton, FocusAwareStatusBar } from "../../components";
import { onboarding1 } from "../../constants/images";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar translucent backgroundColor={"transparent"} />
      <View style={styles.secondaryContainer}>
        <View style={styles.heading}>
          <Text style={{ ...FONTS.body1, color: COLORS.white }}>CodeRef</Text>
          <Text
            style={{
              textAlign: "justify",
              ...FONTS.body4,
              paddingTop: 10,
              color: COLORS.primaryLight,
            }}
          >
            lorem ipsuem and othet stuff goes here this si understanding line
          </Text>
        </View>
        {/* <View style={styles.image}>
        <Image style={styles.logo} source={onboarding1} resizeMode="cover" />
      </View> */}
      </View>
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("signup");
          }}
        >
          <Text style={styles.text}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>|</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "10%",
    backgroundColor: COLORS.primaryDark,
  },
  secondaryContainer: {
    paddingHorizontal: SIZES.width / 40,
  },
  heading: { flex: 1 },
  logo: {
    borderRadius: SIZES.width + SIZES.height / 2,
    width: SIZES.width * 0.7,
    height: SIZES.width * 0.7,
  },
  image: { flex: 3, justifyContent: "flex-end" },
  bottomButtonContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "15%",
    height: "6%",
    bottom: "2%",
    left: "4%",
    right: "4%",
    borderRadius: 100,
    backgroundColor: COLORS.lightGray,
  },
  text: {
    ...FONTS.body4,
    color: COLORS.primaryDark,
    fontWeight: "700",
  },
});
