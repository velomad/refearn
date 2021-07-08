import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Offers, Network, Account } from "../screens";
import { COLORS, SIZES } from "../constants";
import * as Icon from "@expo/vector-icons";
import { AddButton } from "./components";
import { setTopOffers } from "../store/action";
import TopOfferTabs from "./TopOfferTabs";
import { connect } from "react-redux";

const Tab = createBottomTabNavigator();

const Test = () => {
  return (
    <View>
      <Text>epic world</Text>
    </View>
  );
};

const TabNavigator = ({ setTopOffers, isTopOffers }) => {
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
            <Icon.AntDesign name="home" size={SIZES.width / 15} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="offers"
        component={TopOfferTabs}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon.MaterialIcons
              name="local-offer"
              size={SIZES.width / 15}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="btn"
        component={Test}
        options={{
          tabBarButton: (props) => (
            <AddButton
              {...props}
              isTopOffers={isTopOffers}
              onPress={() => setTopOffers(!isTopOffers)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="network"
        component={Network}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon.MaterialCommunityIcons
              name="transit-connection-variant"
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

const mapStateToProps = ({ uiState }) => ({
  isTopOffers: uiState.isTopOffers,
});

export default connect(mapStateToProps, { setTopOffers })(TabNavigator);
