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
    </View>
  );
};

const styles = StyleSheet.create({});

export default Offers;
