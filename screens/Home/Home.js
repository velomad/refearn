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
  background,
  c4,
  c5,
  homeHeader,
  videoThumbnail,
} from "../../constants/images";
import { EarningsStats, Testimonials, TipsCard, Header } from "./components";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { MainLayout } from "../../Layout";

const Home = ({ navigation, topOffers }) => {
  return (
    <MainLayout>
      <View style={styles.container} showsVerticalScrollIndicator={false}>
        <FocusAwareStatusBar
          barStyle="light-content"
          backgroundColor={COLORS.primary}
        />
        <ImageBackground
          source={background}
          style={styles.homeHeaderImage}
          resizeMode="cover"
        >
          <View style={styles.statsContainer}>
            <Header />
            <EarningsStats />
          </View>
        </ImageBackground>
        <ScrollView
          showsVerticalScrollIndicator={false}
          fadingEdgeLength={30}
          endFillColor={COLORS.success}
          contentContainerStyle={{
            borderTopLeftRadius: 20,
            borderRadius: 100,
          }}
        >
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
                <Text style={styles.guideText}>
                  Watch : Beginners Guide to Go
                </Text>
                <Text style={styles.guideContent}>
                  Learn about the EarnRef features and how to start earning
                  online.
                </Text>
              </View>

              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  top: -SIZES.height / 15,
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

            <View>
              <Testimonials />
            </View>
          </View>
        </ScrollView>
      </View>
    </MainLayout>
  );
};

const mapStateToProps = ({ uiState }) => ({
  topOffers: uiState.isTopOffers,
});

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: { flex: 1 },
  secondaryContainer: {
    marginHorizontal: "5%",
  },
  statsContainer: {},
  homeHeaderImage: {
    width: "100%",
    paddingBottom: "8%",
  },
  guideContainer: {
    borderRadius: 10,
    backgroundColor: COLORS.lightGray,
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
