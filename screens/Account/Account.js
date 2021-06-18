import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
} from "react-native";
import { FocusAwareStatusBar, CustomButton } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Clipboard from "expo-clipboard";
import { MaterialIcons } from "@expo/vector-icons";

const Account = () => {
  const onCopy = () => {
    Clipboard.setString("code");
    ToastAndroid.showWithGravityAndOffset(
      "text copied",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      0,
      SIZES.height / 4
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />
      <View style={styles.accountInfo}>
        <View>
          <Text style={{ ...FONTS.body3, color: COLORS.primary }}>
            Hello, Sagar
          </Text>
        </View>

        <View>
          <Text style={{ ...FONTS.body4, color: COLORS.gray }}>
            Your Unique Code
          </Text>

          <TouchableOpacity style={styles.uniqueCodeContainer} onPress={onCopy}>
            <MaterialCommunityIcons
              name="content-copy"
              size={SIZES.width / 25}
              color="black"
            />
            <Text style={styles.uniqueCode}>SA5485F</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.paymentDetailContainer}>
        <Text style={{ ...FONTS.body2, textAlign: "center" }}>
          Add Payment Details
        </Text>
        <Text style={{ ...FONTS.body4, textAlign: "center", marginTop: "2%" }}>
          Please Complete Your Payment Information
        </Text>

        <View style={{ alignItems: "center", paddingTop: "10%" }}>
          <CustomButton
            title="Add Now"
            background={COLORS.primary}
            color={COLORS.primaryLight}
            rounded={10}
            // onPress={}
          />
        </View>
      </View>

      <View style={styles.optionsContainer}>
        <View style={styles.option}>
          <MaterialIcons name="attach-money" size={24} color="black" />
          <Text style={styles.optionText}>My Earnings</Text>
        </View>
        <View style={styles.option}>
          <MaterialIcons name="payment" size={24} color="black" />
          <Text style={styles.optionText}>Payment Details</Text>
        </View>
        <View style={styles.option}>
          <MaterialIcons name="logout" size={24} color="black" />
          <Text style={styles.optionText}>Logout</Text>
        </View>
      </View>

      <View
        style={{
          marginVertical: "10%",
          padding: "5%",
          borderRadius: 10,
          backgroundColor: COLORS.primaryLight,
        }}
      >
        <Text style={{ ...FONTS.body2, color: COLORS.gray }}>Contact Us</Text>
        <Text style={{ ...FONTS.body4, color: COLORS.gray, marginTop: "5%" }}>
          support@xyz.com
        </Text>
      </View>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "3%",
  },
  accountInfo: {
    borderRadius: 10,
    padding: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    backgroundColor: COLORS.primaryLight,
  },
  uniqueCode: {
    textAlign: "center",
    ...FONTS.body3,
    borderColor: COLORS.primary,
  },
  uniqueCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderStyle: "dashed",
    borderColor: COLORS.gray,
    justifyContent: "space-around",
    borderWidth: 2,
    padding: "1%",
    borderRadius: 5,
    marginTop: "15%",
  },
  paymentDetailContainer: {
    padding: "3%",
    backgroundColor: COLORS.lightGray,
    marginTop: "10%",
  },
  optionsContainer: {
    marginTop: "10%",
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
  },
  option: {
    paddingVertical: "5%",
    flexDirection: "row",
    paddingHorizontal: "10%",
  },
  optionText: {
    ...FONTS.body4,
    paddingLeft: "5%",
    color: COLORS.gray,
  },
});
