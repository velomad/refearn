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

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="tabs"
          component={TabNavigator}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),

            headerTitleStyle: {
              fontSize: SIZES.h2,
              alignSelf: "center",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
