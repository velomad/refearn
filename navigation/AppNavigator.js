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
import { OfferDetails } from '../screens';

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
            header: ({ navigation }) => (
              <Header title={getHeaderTitle(route)} navigation={navigation} />
            ),
          })}
        />
        <Stack.Screen
          name="offerdetails"
          component={OfferDetails}
          options={({ route }) => ({
            headerStatusBarHeight: 0,
            header: ({ navigation }) => (
              <Header title='Offer Details' navigation={navigation} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
