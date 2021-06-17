import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import { FocusAwareStatusBar } from "../../components";
import { COLORS } from "../../constants";

const Home = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      borderColor: "orange",
    });
  }, [navigation]);

  return (
    <View>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />
      <Text></Text>
    </View>
  );
};

export default Home;
