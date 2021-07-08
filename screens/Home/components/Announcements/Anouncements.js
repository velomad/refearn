import React from "react";
import { View, Animated, FlatList, Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../constants";

const Anouncements = () => {
  const dummyDaya = [
    {
      id: 1,
      announcement:
        "this is sample announcement text lets see how this looks on Card. whether the text goes out or not",
    },
    {
      id: 2,
      announcement:
        "this is sample announcement text lets see how this looks on Card. whether the text goes out or not",
    },
    {
      id: 3,
      announcement:
        "this is sample announcement text lets see how this looks on Card. whether the text goes out or not",
    },
    {
      id: 4,
      announcement:
        "this is sample announcement text lets see how this looks on Card. whether the text goes out or not",
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
        data={dummyDaya}
        keyExtractor={(item) => item.id}
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
                  backgroundColor: "#FFF9F1",
                  borderRadius: 20,
                }}
              >
                <Text style={{ ...FONTS.body4, color: "#FA8A05" }}>
                  {item.announcement}
                </Text>
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
        {dummyDaya.map((item, index) => {
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
            outputRange: ["#FA8A05", "#FA8A05", "#FA8A05"],
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

export default Anouncements;
