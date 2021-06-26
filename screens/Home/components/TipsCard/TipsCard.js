import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { Card } from "../../../../components";
import { COLORS, FONTS, SIZES } from "../../../../constants";

const TipsCard = () => {
  const dummyData = [
    "this is dymmy data for slider one and this is just a tip text example",
    "this is dymmy data for slider one and this is just a tip text example",
    "this is dymmy data for slider one and this is just a tip text example",
    "this is dymmy data for slider one and this is just a tip text example",
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
                marginLeft: index == 0 ? SIZES.width / 20 : SIZES.width / 20,
                marginRight:
                  index == dummyData.length - 1 ? SIZES.width / 20 : 0,
              }}
            >
              <Card
                paddingNumber={40}
                contentContainerStyle={{
                  width: SIZES.width / 1.3,
                }}
                key={index}
                backgroundColor={COLORS.primary}
                rounded={10}
              >
                <View>
                  <Text style={{ ...FONTS.body4, color: COLORS.white }}>
                    this is the random data lets see thill where it goes.
                  </Text>
                </View>
              </Card>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TipsCard;
