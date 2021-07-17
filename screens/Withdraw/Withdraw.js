import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, Keyboard } from "react-native";
import { connect } from "react-redux";
import {
  FocusAwareStatusBar,
  InputField,
  CustomButton,
} from "../../components";
import { COLORS, FONTS } from "../../constants";
import { getUserProfile } from "../../store/action";
import Modal from "react-native-modal";
import customAxios from "../../utils/interceptor";
import { party } from "../../constants/images";

const Withdraw = (props) => {
  const [inputValue, setInputValue] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    props.getUserProfile();
  }, []);

  const data = props.data.result;

  const handleWithdrawAmount = async () => {
    Keyboard.dismiss();
    const result = await customAxios.post("/payment/withdraw", inputValue);
    props.getUserProfile();
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />

      <Modal
        useNativeDriverForBackdrop={true}
        useNativeDriver={true}
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        hardwareAccelerated={true}
        isVisible={modalVisible}
      >
        <View
          style={{
            borderRadius: 20,
            backgroundColor: COLORS.white,
            height: "20%",
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Image source={party} />
            <Text style={{ ...FONTS.body5, color: COLORS.primaryDark }}>
              Amount of &#8377; {inputValue.amount} transfered to the bank
              account.
            </Text>
          </View>
        </View>
      </Modal>

      <CustomButton title="open modal" onPress={() => setModalVisible(true)} />

      <Text style={styles.baseFont}>Withdraw INR to your bank account</Text>

      <View style={{ paddingVertical: "5%" }}>
        <Text
          style={{
            ...FONTS.body3,
            color: COLORS.primaryDark,
            fontWeight: "700",
          }}
        >
          &#8377; {data.wallet.balance}
        </Text>
        <Text style={styles.baseFont}>Current Balance</Text>
      </View>

      <Text
        style={{ ...FONTS.body6, color: COLORS.gray, paddingVertical: "2%" }}
      >
        Money would be deposited on the following bank account
      </Text>

      <View style={{ paddingVertical: "5%" }}>
        <View style={styles.bankDetails}>
          <Text style={styles.baseFont}>ACCOUNT NUMBER</Text>
          <Text style={{ ...FONTS.body4, fontWeight: "bold" }}>
            {data.bankAccountDetails.accountNumber}
          </Text>
        </View>
        <View style={{ paddingVertical: "2%" }} />
        <View style={styles.bankDetails}>
          <Text style={styles.baseFont}>IFSC CODE</Text>
          <Text style={{ ...FONTS.body4, fontWeight: "bold" }}>
            {data.bankAccountDetails.ifscCode}
          </Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Text
          style={{
            ...FONTS.body6,
            textTransform: "uppercase",
            color: COLORS.gray,
            paddingBottom: "5%",
          }}
        >
          Enter the amount you wish to withdraw
        </Text>

        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: "5%",
          }}
        >
          <Text style={styles.withdrawPercent}>25%</Text>
          <Text style={styles.withdrawPercent}>50%</Text>
          <Text style={styles.withdrawPercent}>75%</Text>
          <Text style={styles.withdrawPercent}>100%</Text>
        </View> */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <InputField
            placeholder="Enter The Amount"
            name="amount"
            width={"50%"}
            height={20}
            backgroundColor={COLORS.lightGray}
            type="default"
            value={inputValue.amount}
            onChange={(e) => setInputValue({ [e.name]: e.text })}
          />

          <CustomButton
            onPress={handleWithdrawAmount}
            size="half"
            title="verify"
            color={COLORS.white}
            bold={true}
            background={COLORS.primary}
            rounded={10}
          />
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = ({ user }) => ({
  data: user.profile,
});

export default connect(mapStateToProps, { getUserProfile })(Withdraw);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
    backgroundColor: COLORS.white,
  },
  baseFont: {
    ...FONTS.body4,
    fontWeight: "600",
    color: COLORS.gray,
  },
  bankDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomContainer: {
    width: "100%",
    position: "absolute",
    bottom: "2%",
    left: "5%",
  },
  withdrawPercent: {
    ...FONTS.body6,
    color: COLORS.gray,
    backgroundColor: COLORS.lightGray,
    padding: "2%",
    paddingHorizontal: "8%",
    borderRadius: 10,
  },
});
