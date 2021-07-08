import React from "react";
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

const PaymentBankDetails = ({ navigation }) => {
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
            name="accountnumber"
            type="phone-pad"
          />
          <InputField
            placeholder="Re-Enter Account Number"
            name="reenteracctnum"
            type="phone-pad"
            secure={true}
          />
          <InputField placeholder="IFSC" name="ifsc" type="default" />
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
              title="Save"
              background={COLORS.primary}
              color={COLORS.white}
              rounded={5}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PaymentBankDetails;

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
