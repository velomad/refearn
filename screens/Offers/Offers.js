import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { FocusAwareStatusBar } from "../../components";
import { Card } from "../../components";
const Offers = () => {
  return (
    <View>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollcontainer}
        >
          <View style={styles.cardContainer}>
            <Card backgroundColor={COLORS.secondaryLight}>
              <View>
                <Text style={styles.mkcenter}>ahahah</Text>
                <Text style={styles.mkcenter}>ahahah</Text>
              </View>
            </Card>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  scrollcontainer: {
    flex: 1,
    height: "100%",
  },
  cardContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: SIZES.width / 18,
    paddingHorizontal: SIZES.width / 7,
  },
  mkcenter: {
    textAlign: "center",
  },
});

export default Offers;
