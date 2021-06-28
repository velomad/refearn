import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../constants";
import { pi } from "../../../../constants/images";
import * as Icon from "@expo/vector-icons";

const Testimonials = () => {
  return (
    <View>
      <View>
        <Text
          style={{
            ...FONTS.body5,
            marginBottom: "5%",
            marginLeft: "-6%",
            color: COLORS.gray,
            backgroundColor: COLORS.primary,
            flex: 1,
            padding: "2%",
            color: COLORS.white,
            borderBottomRightRadius: 30,
            width: SIZES.width / 2,
            textAlign: "center",
            letterSpacing: 3,
            fontWeight: "bold",
          }}
        >
          TESTIMONIALS
        </Text>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View>
              <Image
                source={pi}
                style={styles.imageCircle}
                resizeMode="cover"
              />
            </View>
            <View style={styles.nameBar}>
              <Text
                style={{
                  ...FONTS.body4,
                  fontWeight: "700",
                  color: COLORS.gray,
                }}
              >
                Ben Awad
              </Text>
            </View>
          </View>
          <View style={styles.cardBar}>
            <Text
              style={{
                ...FONTS.body5,
                fontStyle: "italic",
                color: COLORS.gray,
              }}
            >
              “The Landscaping Professionals were quick, courteous and very
              helpful. They helped me restore my lawn and gardens completely
              after putting in my deck. I was worried it wouldn’t be done in
              time for my garden party, but they finished the job with time to
              spare!”
            </Text>

            <View style={{ marginTop: "5%", flexDirection: "row" }}>
              <Icon.Ionicons name="star" size={SIZES.width / 25} color="gold" />
              <Icon.Ionicons name="star" size={SIZES.width / 25} color="gold" />
              <Icon.Ionicons name="star" size={SIZES.width / 25} color="gold" />
              <Icon.Ionicons name="star" size={SIZES.width / 25} color="gold" />
              <Icon.FontAwesome
                name="star-half-o"
                size={SIZES.width / 24}
                color="gold"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Testimonials;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: "5%",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  imageCircle: {
    height: SIZES.width / 5,
    width: SIZES.width / 5,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.width,
    zIndex: 1,
    right: "-20%",
  },
  nameBar: {
    height: SIZES.height / 15,
    width: SIZES.width / 2,
    left: "-20%",
    borderRadius: 10,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  cardBar: {
    width: "100%",
    paddingTop: "15%",
    paddingHorizontal: "5%",
    paddingBottom: "5%",
    borderRadius: 10,
    bottom: SIZES.width / 10,
    backgroundColor: COLORS.lightGray,
  },
});