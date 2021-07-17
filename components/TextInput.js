import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../constants";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={COLORS.primary}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={COLORS.primary}
        style={{ width: "100%" }}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: "3%",
    marginVertical: "3%",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
