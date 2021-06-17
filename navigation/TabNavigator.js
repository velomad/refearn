import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Offers, Network, Account } from "../screens";
import { COLORS, SIZES } from "../constants";
import * as Icon from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const tabsData = (tintColor) => {
  return [
    {
      name: "home",
      component: Home,
      iconName: "home",
    },
    {
      name: "offers",
      component: Offers,
      iconName: "local-offer",
    },
    {
      name: "network",
      component: Network,
      iconName: "device-hub",
    },
    {
      name: "account",
      component: Account,
      iconName: "account-circle",
    },
  ];
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: COLORS.blue,
        style: {
          backgroundColor: COLORS.white,
          height: SIZES.height / 15,
        },
        labelStyle: { fontSize: SIZES.body4 },
      }}
    >
      {tabsData("red").map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon.MaterialIcons
                name={item.iconName}
                size={28}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;
