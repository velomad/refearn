import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "../../utils/interceptor";
import toastMessage from "../../utils/toastMessage";
import { COLORS, FONTS, SIZES } from "../../constants";
import {
  CustomButton,
  InputField,
  FocusAwareStatusBar,
  KeyboardAvoidingWrapper,
} from "../../components";

const Signup = ({ navigation }) => {
  const [inputValue, setInputValue] = useState({});

  const handleChange = (e) => {
    const { name, type, text } = e;
    setInputValue((prev) => ({
      ...prev,
      [name]: text,
    }));
  };

  const handleSignup = async () => {
    try {
      const result = await axios.post(`/auth/register`, inputValue);
      if (result) navigation.navigate("login");
    } catch (error) {
      console.log(error);
      toastMessage(error.response.data.error.message);
    }
  };

  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        <FocusAwareStatusBar
          barStyle="dark-content"
          backgroundColor={COLORS.lightGray}
        />
        <View style={styles.formContainer}>
          <InputField
            placeholder="name"
            name="name"
            type="default"
            value={inputValue.name}
            onChange={handleChange}
          />
          <InputField
            placeholder="Email"
            name="email"
            type="email-address"
            value={inputValue.email}
            onChange={handleChange}
          />
          <InputField
            placeholder="Mobile Number"
            name="phoneNumber"
            type="phone-pad"
            value={inputValue.phoneNumber}
            onChange={handleChange}
          />
          <View style={{ paddingTop: "5%" }}>
            <CustomButton
              title="Submit"
              background={COLORS.primary}
              color={COLORS.white}
              rounded={5}
              onPress={handleSignup}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: "15%",
  },
  backButton: {
    backgroundColor: COLORS.primaryLight,
    height: SIZES.width / 8,
    width: SIZES.width / 4.5,
    alignItems: "center",
    justifyContent: "center",
    borderTopEndRadius: 10,
    borderBottomRightRadius: 10,
  },
  introText: {
    marginVertical: SIZES.height / 40,
    marginHorizontal: SIZES.width / 40,
  },
  formContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: SIZES.height / 20,
  },
  secondaryText: {
    flexDirection: "row",
    paddingVertical: 5,
  },
});
