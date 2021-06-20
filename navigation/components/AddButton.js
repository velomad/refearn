import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  PixelRatio,
} from "react-native";
import * as Icon from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import { setTopOffers } from "../../store/action";
import * as Haptics from "expo-haptics";

const AddButton = ({ onPress, isTopOffers }) => {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onPress();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button]}
      onPress={handlePress}
      underlayColor="7F58FF"
    >
      {isTopOffers ? (
        <Icon.Feather name="arrow-down" size={SIZES.width / 15} color="white" />
      ) : (
        <Icon.Feather name="arrow-up" size={SIZES.width / 15} color="white" />
      )}
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {},
  button: {
    backgroundColor: COLORS.primary,
    height: SIZES.width / 7,
    alignItems: "center",
    justifyContent: "center",
    width: SIZES.width / 7,
    borderRadius: 50,
    elevation: 10,
    top: SIZES.height > 700 ? -32 : -25,
  },
});
