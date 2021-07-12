import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { FocusAwareStatusBar } from "../../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Clipboard from "expo-clipboard";
import { MainLayout } from "../../Layout";

const Network = () => {
  const onCopy = () => {
    Clipboard.setString("code");
    ToastAndroid.showWithGravityAndOffset(
      "text copied",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      0,
      SIZES.height / 4
    );
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <FocusAwareStatusBar
          barStyle="dark-content"
          backgroundColor={COLORS.white}
        />

        <View style={styles.referCode}>
          <Text style={{ ...FONTS.body4, color: COLORS.white }}>
            Referral Code
          </Text>

          <TouchableOpacity style={styles.uniqueCodeContainer} onPress={onCopy}>
            <MaterialCommunityIcons
              name="content-copy"
              size={SIZES.width / 25}
              color={COLORS.white}
            />
            <Text style={styles.uniqueCode}>562874</Text>
          </TouchableOpacity>
        </View>
      </View>
    </MainLayout>
  );
};

export default Network;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
  },
  referCode: {
    backgroundColor: COLORS.primaryDark,
    padding: "3%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  uniqueCode: {
    textAlign: "center",
    ...FONTS.body3,
    color: COLORS.white,
  },
  uniqueCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderStyle: "dashed",
    paddingHorizontal: "8%",
    borderColor: COLORS.white,
    justifyContent: "space-between",
    borderWidth: 2,
    padding: "2%",
    borderRadius: 5,
  },
});
