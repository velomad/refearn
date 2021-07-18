import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Finance, Others, Educational } from "../screens";
import { COLORS, FONTS } from "../constants";
import { Text } from "react-native";
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
      <Tab.Screen
        name="Finance"
        options={{
          title: () => (
            <Text style={{ ...FONTS.body5, color: COLORS.white }}>Finance</Text>
          ),
        }}
        component={Finance}
      />
      <Tab.Screen
        name="Education"
        options={{
          title: () => (
            <Text style={{ ...FONTS.body5, color: COLORS.white }}>
              Education
            </Text>
          ),
        }}
        component={Educational}
      />
      <Tab.Screen
        name="others"
        options={{
          title: () => (
            <Text style={{ ...FONTS.body5, color: COLORS.white }}>Others</Text>
          ),
        }}
        component={Others}
      />
    </Tab.Navigator>
  );
};

export default TopOffersTabs;
