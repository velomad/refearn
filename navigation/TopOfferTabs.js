import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Finance, Others, Educational } from "../screens";
import { COLORS } from "../constants";
const Tab = createMaterialTopTabNavigator();

const TopOffersTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: COLORS.white,
        inactiveTintColor: COLORS.white,
        style: { backgroundColor: COLORS.primaryDark },
        labelStyle: {},
        indicatorStyle: {
          backgroundColor: COLORS.white,
          opacity: 1,
          height: 2,
          margin: 5,
          borderRadius: 50,
        },
      }}
    >
      <Tab.Screen name="finance" component={Finance} />
      <Tab.Screen name="education" component={Educational} />
      <Tab.Screen name="others" component={Others} />
    </Tab.Navigator>
  );
};

export default TopOffersTabs;
