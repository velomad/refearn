import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SIZES } from "../../constants";

const Card = ({
  elevation,
  rounded,
  backgroundColor,
  children,
  contentContainerStyle,
}) => {
  const styles = StyleSheet.create({
    container: {
      ...contentContainerStyle,
      padding: SIZES.width / 50,
      backgroundColor: backgroundColor,
      elevation,
      borderRadius: rounded,
    },
  });

  return <View style={styles.container}>{children}</View>;
};

export default Card;
