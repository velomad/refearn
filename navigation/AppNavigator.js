import React from "react";
import { View, Text } from "react-native";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens";
import { SIZES } from "../constants";
import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";
import { Header } from "./components";
import { OfferDetails } from "../screens";

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
    <NavigationContainer>
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
            title: "Offer Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
