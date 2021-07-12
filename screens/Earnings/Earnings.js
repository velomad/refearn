import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { FocusAwareStatusBar } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants";
import { icici } from "../../constants/images";
import { AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";
import { getUserEarnings } from "../../store/action";

const Earnings = (props) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    props.getUserEarnings();
  }, []);

  const data =
    props.earnings && props.earnings.result.data.length > 0
      ? props.earnings.result.data
      : [];

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
        keyExtractor={(item) => JSON.stringify(item.id)}
        onRefresh={() => onRefresh()}
        refreshing={isFetching}
        renderItem={({ item, index }) => {
          return (
            <View
              style={[
                styles.cardContainer,
                item.status === "pending"
                  ? { backgroundColor: COLORS.lightGray }
                  : item.status === "paid"
                  ? { backgroundColor: "#EEFFF3" }
                  : { backgroundColor: "#FFEEEE" },
              ]}
            >
              <View style={styles.dataRow}>
                <View>
                  <Image
                    source={icici}
                    resizeMode="cover"
                    style={styles.offerImageStyle}
                  />
                </View>

                <View>
                  <Text style={{ ...FONTS.body4, color: COLORS.primaryDark }}>
                    {item.offerName}
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
              <View style={styles.dataRow}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <AntDesign
                    name="exclamationcircleo"
                    size={SIZES.width / 20}
                    color={
                      item.status === "pending"
                        ? COLORS.primaryDark
                        : item.status === "paid"
                        ? COLORS.success
                        : COLORS.danger
                    }
                  />
                  <Text
                    style={[
                      { ...FONTS.body5, fontWeight: "600", marginLeft: "10%" },
                      item.status === "pending"
                        ? { color: COLORS.primaryDark }
                        : item.status === "paid"
                        ? { color: COLORS.success }
                        : { color: COLORS.danger },
                    ]}
                  >
                    {item.status}
                  </Text>
                </View>
                <View>
                  <Text>{new Date(item.createdAt).toDateString()}</Text>
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
  earnings: user.userEarnings,
});

export default connect(mapStateToProps, { getUserEarnings })(Earnings);

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
  cardContainer: { marginTop: 20, borderRadius: 10 },
});
