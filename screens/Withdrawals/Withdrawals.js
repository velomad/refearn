import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { FocusAwareStatusBar } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants";
import { icici } from "../../constants/images";
import { AntDesign } from "@expo/vector-icons";

const Withdrawals = () => {
  const [isFetching, setIsFetching] = useState(false);

  const data = [
    {
      id: 10,
      userId: 30,
      amount: 250,

      createdAt: "2021-07-06T09:36:56.000Z",
      updatedAt: "2021-07-07T08:03:04.000Z",
    },
    {
      id: 3,
      userId: 30,
      amount: 250,

      createdAt: "2021-07-06T08:54:04.000Z",
      updatedAt: "2021-07-07T07:54:42.000Z",
    },
    {
      id: 5,
      userId: 30,
      amount: 250,

      createdAt: "2021-07-06T09:34:45.000Z",
      updatedAt: "2021-07-07T07:57:42.000Z",
    },
  ];

  const onRefresh = () => {
    setIsFetching(true);
  };

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />

      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        onRefresh={() => onRefresh()}
        refreshing={isFetching}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.cardContainer}>
              <View style={styles.dataRow}>
                <View>
                  <Text style={{ ...FONTS.body4, color: COLORS.primaryDark }}>
                    {new Date(item.createdAt).toDateString()}
                  </Text>
                </View>

                <View>
                  <Text
                    style={{
                      ...FONTS.body3,
                      color: COLORS.primaryDark,
                      fontWeight: "700",
                    }}
                  >
                    &#8360; {item.amount}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Withdrawals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: "10%",
    paddingHorizontal: "5%",
  },
  offerImageStyle: {
    height: SIZES.width / 6,
    width: SIZES.width / 6,
    borderRadius: 10,
  },
  dataRow: {
    flexDirection: "row",
    padding: "3%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardContainer: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: COLORS.lightGray,
  },
});
