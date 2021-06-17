import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Offers, Network, Account } from "../screens";
import { COLORS, SIZES } from "../constants";
import * as Icon from "@expo/vector-icons";
import { AddButton } from "./components";

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: COLORS.primary,
        style: {
          // position: "absolute",
          // bottom: SIZES.width / 40,
          // left: SIZES.width / 40,
          // right: SIZES.width / 40,
          elevation: 0,
          borderColor: "#fff",
          borderTopColor: "#fff",
          backgroundColor: COLORS.white,
          height: SIZES.height / 15,
        },
        labelStyle: { fontSize: SIZES.body4 },
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          // tabBarBadge: "1",
          tabBarIcon: ({ color }) => (
            <Icon.Octicons name="home" size={SIZES.width / 15} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="offers"
        component={Offers}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon.MaterialIcons
              name="list"
              size={SIZES.width / 15}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="post"
        component={Home}
        options={{
          tabBarButton: (props) => <AddButton {...props} />,
        }}
      />
      <Tab.Screen
        name="network"
        component={Network}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon.MaterialIcons
              name="collections"
              size={SIZES.width / 15}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="account"
        component={Account}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon.MaterialIcons
              name="account-circle"
              size={SIZES.width / 15}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
