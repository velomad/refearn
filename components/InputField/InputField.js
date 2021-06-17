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
  onChange,
}) => {
  return (
    <TextInput
      keyboardType={type}
      elevation={2}
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

const styles = StyleSheet.create({
  inputStyle: {
    width: SIZES.width / 1.1,
    height: SIZES.height / 15,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: SIZES.h4,
    color: COLORS.gray,
    backgroundColor: "#fff",
    borderRadius: SIZES.width / 40,
  },
});
