import React from "react";
import { View, Text } from "react-native";
import { FocusAwareStatusBar } from "../../components";
import { COLORS } from "../../constants";

const Home = () => {
  return (
    <View>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />
      <Text>epic</Text>
    </View>
  );
};

export default Home;
