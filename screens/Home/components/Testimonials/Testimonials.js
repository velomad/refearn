import React, { useEffect, useState } from "react";
import { View, Animated, FlatList, Text, Image } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../constants";
import { pi } from "../../../../constants/images";
import customAxios from "../../../../utils/interceptor";
import { FontAwesome } from "@expo/vector-icons";

const Testimonials = () => {
  const announcements = [
    {
      id: 1,
      text: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      image: pi,
      name: "kalesh",
    },
    {
      id: 2,
      text: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      image: pi,
      name: "balesh",
    },
  ];

  const newSeasonScrollX = React.useRef(new Animated.Value(0)).current;

  const dotPosition = Animated.divide(newSeasonScrollX, SIZES.width);

  return (
    <View>
      <Animated.FlatList
        horizontal
        pagingEnabled
        snapToAlignment="center"
        scrollEventThrottle={15}
        snapToInterval={SIZES.width}
        showsHorizontalScrollIndicator={false}
        data={announcements}
        keyExtractor={(item) => JSON.stringify(item.id)}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: newSeasonScrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: SIZES.width,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: SIZES.width * 0.9,
                  padding: "5%",
                  backgroundColor: COLORS.lightGray,
                  borderRadius: 20,
                }}
              >
                <FontAwesome
                  name="quote-left"
                  size={SIZES.width / 20}
                  color={COLORS.primaryDark}
                />
                <Text
                  style={{
                    ...FONTS.body5,
                    paddingVertical: "2%",
                    lineHeight: 22,
                    color: COLORS.gray,
                  }}
                >
                  {item.text}
                </Text>

                <View style={{ flexDirection: "row", alignItems: "center", marginVertical:"5%" }}>
                  <View style={{ paddingRight: "5%" }}>
                    <Image
                      source={item.image}
                      style={{
                        height: SIZES.width / 6,
                        width: SIZES.width / 6,
                        borderRadius: 50,
                      }}
                      resizeMode="cover"
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        ...FONTS.body4,
                        fontWeight: "700",
                        color: COLORS.primaryDark,
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                </View>
              </View>

              {/* render dots */}
            </View>
          );
        }}
      />

      <View
        style={{
          marginTop: "5%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {announcements.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [6, 20, 6],
            extrapolate: "clamp",
          });

          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.primaryDark, COLORS.primaryDark, COLORS.primaryDark],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={{
                borderRadius: 20,
                marginHorizontal: 3,
                height: 6,
                width: dotWidth,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Testimonials;
