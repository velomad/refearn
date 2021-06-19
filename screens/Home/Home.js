import React, { useLayoutEffect } from "react";
import {
  ImageBackground,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { FocusAwareStatusBar } from "../../components";
import { COLORS, FONTS, images, SIZES } from "../../constants";
import {
  c1,
  c2,
  c3,
  c4,
  c5,
  homeHeader,
  videoThumbnail,
} from "../../constants/images";
import { EarningsStats, TipsCard } from "./components";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

const Home = ({ navigation, topOffers }) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#444" />

      <View style={styles.statsContainer}>
        <LinearGradient
          colors={["#555", "#999"]}
          style={{ paddingVertical: SIZES.height / 20 }}
        >
          <EarningsStats />
        </LinearGradient>
      </View>

      <View
        style={{
          paddingVertical: SIZES.height / 40,
        }}
      >
        <TipsCard />
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

        <View style={{ marginTop: "-10%" }}>
          {/* <View style={styles.partnersContainer}>
            <Text
              style={{
                ...FONTS.body2,
                color: COLORS.gray,
                paddingHorizontal: "5%",
              }}
            >
              Our Partners
            </Text>

            <ScrollView
              horizontal={true}
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}
            >
              <View style={{ flexDirection: "row", marginVertical: "2%" }}>
                <Image
                  source={c1}
                  style={{
                    marginLeft: SIZES.width / 20,
                    width: SIZES.width / 3,
                    height: SIZES.height / 10,
                    marginRight: SIZES.width / 12,
                    borderRadius: 40,
                  }}
                  resizeMode="contain"
                />
                <Image
                  source={c2}
                  style={{
                    width: SIZES.width / 3,
                    height: SIZES.height / 10,
                    marginRight: SIZES.width / 12,
                    borderRadius: 40,
                  }}
                  resizeMode="contain"
                />
                <Image
                  source={c3}
                  style={{
                    width: SIZES.width / 3,
                    height: SIZES.height / 10,
                    marginRight: SIZES.width / 12,
                    borderRadius: 40,
                  }}
                  resizeMode="contain"
                />
                <Image
                  source={c4}
                  style={{
                    width: SIZES.width / 3,
                    height: SIZES.height / 10,
                    marginRight: SIZES.width / 12,
                    borderRadius: 40,
                  }}
                  resizeMode="contain"
                />
                <Image
                  source={c5}
                  style={{
                    width: SIZES.width / 3,
                    height: SIZES.height / 10,
                    marginRight: SIZES.width / 12,
                    borderRadius: 40,
                  }}
                  resizeMode="contain"
                />
              </View>
            </ScrollView>
          </View> */}
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = ({ uiState }) => ({
  topOffers: uiState.isTopOffers,
});

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: { paddingBottom: "10%" },
  secondaryContainer: {
    marginHorizontal: "5%",
  },
  guideContainer: {
    borderRadius: 10,
    backgroundColor: COLORS.primaryLight,
    padding: "5%",
    paddingBottom: "20%",
    marginVertical: "5%",
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
    paddingVertical: "5%",
  },
});
