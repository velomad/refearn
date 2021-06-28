import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { Card } from "../../../../components";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "../../../../constants";

const TipsCard = () => {
  const dummyData = [
    {
      icon: Entypo,
      iconName: "lock",
      tipText:
        "SignUp Bonus can be achieved when you earn your first payout!!!",
      backgroundColor: COLORS.primaryLight,
      iconBackground: COLORS.primary,
      textColor: COLORS.primary,
    },
    {
      icon: FontAwesome,
      iconName: "unlock",
      tipText: "Unlock all your levels and get the unlock bonus of ₹ 500",
      backgroundColor: COLORS.greenLight,
      iconBackground: COLORS.success,
      textColor: COLORS.success,
    },
  ];

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dummyData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                flex: 1,
                marginLeft: index == 0 ? SIZES.width / 20 : SIZES.width / 20,
                marginRight:
                  index == dummyData.length - 1 ? SIZES.width / 20 : 0,
              }}
            >
              <View
                style={{
                  padding: 8,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: SIZES.width / 1.3,
                  backgroundColor: item.backgroundColor,
                  borderRadius: 20,
                }}
              >
                <View
                  style={{
                    padding: "5%",
                    marginRight: SIZES.width / 20,
                    backgroundColor: item.iconBackground,
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                >
                  <item.icon
                    name={item.iconName}
                    size={SIZES.width / 10}
                    color="white"
                  />
                </View>
                <Text
                  style={{
                    flexShrink: 1,
                    ...FONTS.body5,
                    color: item.textColor,
                    textAlign: "left",
                  }}
                >
                  {item.tipText}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TipsCard;
