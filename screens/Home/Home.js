import React, { useLayoutEffect } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FocusAwareStatusBar } from "../../components";
import { COLORS, FONTS, images, SIZES } from "../../constants";
import { homeHeader, videoThumbnail } from "../../constants/images";
import { EarningsStats } from "./components";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />

      <View style={styles.statsContainer}>
        <LinearGradient
          colors={["#555", "#999"]}
          style={{ paddingVertical: SIZES.height / 20 }}
        >
          <EarningsStats />
        </LinearGradient>
      </View>

      <View style={styles.secondaryContainer}>
        <View>
          <View style={styles.guideContainer}>
            <Text style={styles.guideText}>Watch : Beginners Guide to Go</Text>
            <Text style={styles.guideContent}>
              Learn about the EarnRef features and how to start earning online.
            </Text>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              top: -SIZES.height / 12,
            }}
          >
            <View style={styles.videoContainer}>
              <ImageBackground
                style={styles.videoThumbnail}
                source={videoThumbnail}
                imageStyle={{ borderRadius: 20 }}
                resizeMode="cover"
              >
                <View style={styles.darkenVideobg}>
                  <View style={styles.playIcon}>
                    <Ionicons
                      name="play-circle-outline"
                      size={SIZES.width / 10}
                      color={COLORS.white}
                    />
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
        </View>

        <View style={styles.partnersContainer}>
          <Text style={{ ...FONTS.body2, color: COLORS.gray }}>
            Our Partners
          </Text>

          <ScrollView horizontal={true}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>test</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { paddingBottom: "10%" },
  secondaryContainer: {},
  statsContainer: {
    marginVertical: "10%",
  },
  guideContainer: {
    marginHorizontal: "5%",
    borderRadius: 10,
    backgroundColor: COLORS.primaryLight,
    padding: "5%",
    paddingBottom: "25%",
  },
  guideText: {
    ...FONTS.body3,
    color: COLORS.primary,
    fontWeight: "bold",
  },
  guideContent: {
    ...FONTS.body6,
    marginTop: "2%",
    color: COLORS.gray,
  },
  videoContainer: {
    width: "80%",
    height: SIZES.height / 6,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
  },
  videoThumbnail: {
    height: SIZES.height / 6,
    borderRadius: 20,
    width: "100%",
  },
  darkenVideobg: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  playIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  partnersContainer: {
    backgroundColor: COLORS.lightGray,
    padding: "5%",
  },
});
