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
import { connect } from "react-redux";

const AddButton = ({ onPress, setTopOffers }) => {
  const buttonSize = new Animated.Value(1);

  const handlePress = () => {
    setTopOffers(true);
    console.log(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 0.7,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(buttonSize, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
    onPress();
  };

  const sizeStyle = {
    transform: [{ scale: buttonSize }],
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, sizeStyle]}
      onPress={handlePress}
      underlayColor="7F58FF"
    >
      <Icon.MaterialIcons name="add" size={28} color="white" />
    </TouchableOpacity>
  );
};

export default connect(null, { setTopOffers })(AddButton);

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
