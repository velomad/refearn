import React from "react";
import { View, Text } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS, FONTS, SIZES } from "../constants";
import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";
import { Header } from "./components";
import {
  OfferDetails,
  PaymentBankDetails,
  Earnings,
  Withdrawals,
  Withdraw,
  OfferForm,
  Notification,
  YoutubePlayer
} from "../screens";

const Stack = createStackNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
  switch (routeName) {
    case "home":
      return "Home";
    case "offers":
      return "Offers";
    case "network":
      return "Network";
    case "account":
      return "Account";
  }
}

const isHeader = (route) => {
  getHeaderTitle(route) === "Home" || getHeaderTitle(route) === undefined
    ? false
    : true;
};

const AppNavigator = ({ borderColor }) => {
  console.log(borderColor);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={TabNavigator}
        options={({ route }) => ({
          headerStatusBarHeight: 0,
          headerShown:
            getHeaderTitle(route) === "Home" ||
            getHeaderTitle(route) === undefined
              ? false
              : true,
          header: ({ navigation }) => (
            <Header title={getHeaderTitle(route)} navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="offerdetails"
        component={OfferDetails}
        options={{
          headerTitle: () => (
            <Text style={{ ...FONTS.body3, color: COLORS.gray }}>
              Offer Details
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="bankpaymentdetails"
        component={PaymentBankDetails}
        options={{
          headerTitle: () => (
            <Text style={{ ...FONTS.body3, color: COLORS.gray }}>
              Enter Bank Details
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="earnings"
        component={Earnings}
        options={{
          headerTitle: () => (
            <Text style={{ ...FONTS.body3, color: COLORS.gray }}>Earnings</Text>
          ),
        }}
      />
      <Stack.Screen
        name="withdrawals"
        component={Withdrawals}
        options={{
          headerTitle: () => (
            <Text style={{ ...FONTS.body3, color: COLORS.gray }}>
              Withdrawals
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="withdraw"
        component={Withdraw}
        options={{
          headerTitle: () => (
            <Text style={{ ...FONTS.body3, color: COLORS.gray }}>
              INR withdrawal
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="offerform"
        component={OfferForm}
        options={{
          headerTitle: () => (
            <Text style={{ ...FONTS.body3, color: COLORS.gray }}>
              Offer Form
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="notification"
        component={Notification}
        options={{
          headerTitle: () => (
            <Text style={{ ...FONTS.body3, color: COLORS.gray }}>
              Notifications
            </Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
