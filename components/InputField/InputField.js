import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const InputField = ({
  fieldFocus,
  secure,
  value,
  name,
  placeholder,
  type,
  backgroundColor,
  onChange,
  height,
  width,
  isMargin,
}) => {
  const styles = StyleSheet.create({
    inputStyle: {
      width: !width ? SIZES.width / 1.1 : width,
      height: !height ? SIZES.height / 15 : SIZES.height / height,
      paddingHorizontal: 10,
      fontSize: SIZES.h4,
      color: COLORS.gray,
      backgroundColor: backgroundColor,
      borderColor: COLORS.lightGray,
      borderWidth: 1,
      marginBottom: isMargin && 20,
      borderRadius: SIZES.width / 40,
    },
  });

  return (
    <TextInput
      keyboardType={type}
      elevation={1}
      style={styles.inputStyle}
      placeholderTextColor="#666"
      autoFocus={fieldFocus}
      secureTextEntry={secure}
      defaultValue={value}
      placeholder={placeholder}
      onChangeText={(text) => onChange({ name, type, text })}
    />
  );
};

export default InputField;
