import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Finance, Others } from "../screens";
const Tab = createMaterialTopTabNavigator();

const TopOffersTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="finance" component={Finance} />
      <Tab.Screen name="others" component={Others} />
    </Tab.Navigator>
  );
};

export default TopOffersTabs;
