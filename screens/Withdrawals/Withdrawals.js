import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { FocusAwareStatusBar } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants";
import { icici } from "../../constants/images";
import { AntDesign } from "@expo/vector-icons";
import { getUserWithdrawals } from "../../store/action";
import { connect } from "react-redux";

const Withdrawals = (props) => {
  useEffect(() => {
    props.getUserWithdrawals();
  }, []);

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />

      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={props.withdrawals}
        keyExtractor={(item) => JSON.stringify(item.id)}
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

const mapStateToProps = ({ user }) => ({
  withdrawals: user.userWithdrawals,
});

export default connect(mapStateToProps, { getUserWithdrawals })(Withdrawals);

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
