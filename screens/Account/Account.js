import React, {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  RefreshControl,
} from "react-native";
import { FocusAwareStatusBar, CustomButton } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Clipboard from "expo-clipboard";
import { MaterialIcons } from "@expo/vector-icons";
import useAuth from "../../auth/useAuth";
import { Feather } from "@expo/vector-icons";
import { connect } from "react-redux";
import { getUserProfile } from "../../store/action";

const Account = (props) => {
  const [isFetching, setIsFetching] = useState(false);

  const auth = useAuth();

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

  const handleLogout = () => {
    auth.logOut();
  };

  const onRefresh = () => {
    setIsFetching(true);
    props.getUserProfile();
    setIsFetching(false);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
      }
    >
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />
      <View>
        <View style={styles.accountInfo}>
          <View>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.primaryDark,
                fontWeight: "700",
              }}
            >
              Hello,{" "}
              {props.userProfileData && props.userProfileData.result.name}
            </Text>
            <Text style={{ ...FONTS.body4, color: COLORS.primaryDark }}>
              {props.userProfileData && props.userProfileData.result.level.name}
            </Text>
          </View>

          <View>
            <Text style={{ ...FONTS.body4, color: COLORS.gray }}>
              Referral Code
            </Text>

            <TouchableOpacity
              style={styles.uniqueCodeContainer}
              onPress={onCopy}
            >
              <MaterialCommunityIcons
                name="content-copy"
                size={SIZES.width / 25}
                color="black"
              />
              <Text style={styles.uniqueCode}>
                {props.userProfileData &&
                  props.userProfileData.result.uniqueCode}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          marginTop: "10%",
          paddingVertical: "10%",
          backgroundColor: COLORS.primaryDark,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            ...FONTS.body3,
            textAlign: "center",
            color: COLORS.primaryLight,
          }}
        >
          Wallet Balance : &#8377;{" "}
          {props.userProfileData && props.userProfileData.result.wallet.balance}
        </Text>

        {props.userProfileData &&
        props.userProfileData.result.wallet.balance > 0 ? (
          <View style={{ paddingTop: "10%", alignItems: "center" }}>
            <CustomButton
              onPress={() =>
                props.navigation.navigate("withdraw", {
                  data: props.userProfileData,
                })
              }
              size="half"
              title="Withdraw"
              color={COLORS.primaryDark}
              bold={true}
              background={COLORS.white}
              rounded={10}
            />
          </View>
        ) : null}
      </View>

      {props.userProfileData &&
      props.userProfileData.result.bankAccountDetails !== null ? (
        <View
          style={{
            padding: "5%",
            marginTop: "10%",
            borderRadius: 10,
            backgroundColor: COLORS.primaryLight,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("bankpaymentdetails", {
                operation: "patch",
              })
            }
            style={{
              position: "absolute",
              paddingHorizontal: "2%",
              paddingVertical: "5%",
              right: 0,
            }}
          >
            <Feather
              name="edit"
              size={SIZES.width / 15}
              color={COLORS.primaryDark}
            />
          </TouchableOpacity>

          <View>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.primaryDark,
                fontWeight: "700",
              }}
            >
              Account Number
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.primary,
                fontWeight: "700",
              }}
            >
              {props.userProfileData &&
                props.userProfileData.result.bankAccountDetails.accountNumber}
            </Text>
          </View>
          <View style={{ paddingTop: "10%" }}>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.primaryDark,
                fontWeight: "700",
              }}
            >
              IFSC Code
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.primary,
                fontWeight: "700",
              }}
            >
              {props.userProfileData.result.bankAccountDetails.ifscCode}
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.paymentDetailContainer}>
          <Text style={{ ...FONTS.body2, textAlign: "center" }}>
            Add Payment Details
          </Text>
          <Text
            style={{ ...FONTS.body4, textAlign: "center", marginTop: "2%" }}
          >
            Please Complete Your Payment Information
          </Text>

          <View style={{ alignItems: "center", paddingTop: "5%" }}>
            <CustomButton
              title="Add Now"
              background={COLORS.primary}
              color={COLORS.primaryLight}
              rounded={10}
              onPress={() =>
                props.navigation.navigate("bankpaymentdetails", {
                  oprtation: "post",
                })
              }
            />
          </View>
        </View>
      )}
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => props.navigation.navigate("earnings")}
        >
          <MaterialIcons name="attach-money" size={24} color="black" />
          <Text style={styles.optionText}>My Earnings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => props.navigation.navigate("withdrawals")}
        >
          <MaterialIcons name="payment" size={24} color="black" />
          <Text style={styles.optionText}>Withdrawals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleLogout}>
          <MaterialIcons name="logout" size={24} color="black" />
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
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

const mapStateToProps = ({ user }) => ({
  userProfileData: user.profile,
});

export default connect(mapStateToProps, { getUserProfile })(Account);

const styles = StyleSheet.create({
  container: {
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
    borderRadius: 10,
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
