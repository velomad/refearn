import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FONTS, COLORS, SIZES } from "../../../../constants";
import { FontAwesome5 } from "@expo/vector-icons";
import { connect } from "react-redux";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            ...FONTS.body2,
            color: COLORS.white,
            fontWeight: "600",
          }}
        >
          {props.userProfileData && props.userProfileData.result.name},
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.white,
            fontWeight: "600",
          }}
        >
          {props.userProfileData && props.userProfileData.result.level.name}
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => props.navigation.navigate("notification")}
      >
        <FontAwesome5 name="bell" size={SIZES.width / 20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = ({ user }) => ({
  userProfileData: user.profile,
});

export default connect(mapStateToProps)(Header);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingVertical: "4%",
  },
});
