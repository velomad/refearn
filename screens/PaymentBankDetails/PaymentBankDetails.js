import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "../../constants";
import {
  CustomButton,
  InputField,
  FocusAwareStatusBar,
  KeyboardAvoidingWrapper,
} from "../../components";
import { addUserPaymentDetails, getUserProfile } from "../../store/action";
import { connect } from "react-redux";

const PaymentBankDetails = (props) => {
  const [inputValue, setInputValue] = useState({});

  const handleChange = (e) => {
    const { name, text } = e;
    setInputValue((prev) => ({
      ...prev,
      [name]: text,
    }));
  };

  const operation = props.route.params.operation;

  console.log(props.route.params)

  const handleAddDetailsPress = async () => {
    await props.addUserPaymentDetails(inputValue, operation);
    props.navigation.goBack();
    props.getUserProfile();
  };

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />
      <View style={styles.formContainer}>
        <View>
          <InputField
            placeholder="Account Number"
            name="accountNumber"
            type="phone-pad"
            value={inputValue.accountNumber}
            onChange={handleChange}
            isMargin={true}
            backgroundColor={COLORS.lightGray}
          />
          <InputField
            placeholder="Re-Enter Account Number"
            name="reenteracctnum"
            type="phone-pad"
            secure={true}
            isMargin={true}
            onChange={handleChange}
            backgroundColor={COLORS.lightGray}
          />
          <InputField
            placeholder="IFSC"
            name="ifscCode"
            type="default"
            backgroundColor={COLORS.lightGray}
            value={inputValue.ifscCode}
            isMargin={true}
            onChange={handleChange}
          />
        </View>
        <View>
          <View style={styles.secondaryText}>
            <View>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.gray,
                  fontSize: SIZES.h5,
                  textAlign: "center",
                  paddingHorizontal: SIZES.width / 8,
                }}
              >
                This information will be securely saved as per the OneCode Terms
                of Services and Privacy Policy
              </Text>
            </View>
          </View>
          <View style={{ paddingTop: "5%", alignItems: "center" }}>
            <CustomButton
              height={11}
              title={operation === "patch" ? "update" : "save"}
              background={COLORS.primary}
              color={COLORS.white}
              rounded={5}
              onPress={handleAddDetailsPress}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default connect(null, { addUserPaymentDetails, getUserProfile })(
  PaymentBankDetails
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: "10%",
    paddingBottom: SIZES.width / 8,
  },
  formContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  secondaryText: {
    flexDirection: "row",
    paddingVertical: 5,
  },
});
