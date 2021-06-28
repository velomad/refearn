import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Finance, Others } from "../screens";
import { COLORS } from "../constants";
const Tab = createMaterialTopTabNavigator();

const TopOffersTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: COLORS.primary,
        inactiveTintColor: COLORS.gray,
        labelStyle: {
          borderBottomColor: COLORS.primary,
        },
      }}
    >
      <Tab.Screen name="finance" component={Finance} />
      <Tab.Screen name="others" component={Others} />
    </Tab.Navigator>
  );
};

export default TopOffersTabs;
