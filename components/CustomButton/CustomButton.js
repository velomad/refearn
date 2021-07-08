import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { FONTS, SIZES } from "../../constants/theme";

const CustomButton = ({
  title,
  background,
  color,
  rounded,
  size,
  bold,
  elevation,
  onPress,
  height,
}) => {
  const calculatedSize = size === "half" ? 2.5 : 1.1;

  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={{
          width: SIZES.width / calculatedSize,
          backgroundColor: background,
          paddingVertical: SIZES.height / 60,
          borderRadius: rounded,
          elevation,
        }}
      >
        <Text
          style={{
            ...FONTS.body4,
            color: color,
            textAlign: "center",
            fontWeight: bold ? "700" : "600",
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
