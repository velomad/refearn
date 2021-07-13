import React, { useEffect, useLayoutEffect } from "react";
import {
  ImageBackground,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { FocusAwareStatusBar, Card } from "../../components";
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
  test,
} from "../../constants/images";
import {
  EarningsStats,
  Testimonials,
  TipsCard,
  Header,
  Announcements,
} from "./components";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { MainLayout } from "../../Layout";
import { getUserProfile, getOffersData } from "../../store/action";

const Home = ({ navigation, getUserProfile, getOffersData }) => {
  useEffect(() => {
    getUserProfile();
    getOffersData();
  }, []);

  return (
    <MainLayout>
      <View style={styles.container} showsVerticalScrollIndicator={false}>
        <FocusAwareStatusBar
          barStyle="light-content"
          backgroundColor={COLORS.primaryDark}
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

        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            bottom: "5%",
            paddingTop: "10%",
            borderTopStartRadius: 30,
            borderTopEndRadius: 30,
          }}
        >
          <ScrollView
            fadingEdgeLength={20}
            showsVerticalScrollIndicator={false}
          >
            <View style={{}}>
              <Text
                style={{
                  paddingHorizontal: "5%",
                  paddingBottom: "5%",
                  ...FONTS.body3,
                  color: COLORS.gray,
                }}
              >
                Tips
              </Text>
              <TipsCard />
            </View>

            <View>
              <Text
                style={{ padding: "5%", ...FONTS.body3, color: COLORS.gray }}
              >
                Announcements
              </Text>
              <Announcements />
            </View>

            <View style={styles.secondaryContainer}>
              <View style={{ flex: 1, width: "100%" }}>
                <LinearGradient
                  style={{ borderRadius: 10 }}
                  colors={[COLORS.primaryLight, COLORS.white]}
                >
                  <Text
                    style={{
                      ...FONTS.body3,
                      padding: "5%",
                      color: COLORS.primaryDark,
                      fontWeight: "600",
                    }}
                  >
                    Up Your Level
                  </Text>

                  <View style={styles.levelsInfo}>
                    <View style={styles.circlesContainer}>
                      <View style={styles.levelRow}>
                        <ImageBackground
                          source={background}
                          style={styles.circle}
                          borderRadius={60}
                          resizeMode="cover"
                        >
                          <View>
                            <Text style={styles.circleText}>Level 1</Text>
                          </View>
                        </ImageBackground>

                        <View style={styles.levelText}>
                          <Text
                            style={{
                              ...FONTS.body5,
                              color: COLORS.primaryDark,
                              fontWeight: "700",
                            }}
                          >
                            Target : 500
                          </Text>
                          <Text
                            style={{
                              ...FONTS.body6,
                              color: COLORS.gray,
                              marginVertical: "5%",
                            }}
                          >
                            Complete the total earnings of amount &#8360; 500 to
                            unlock level 1
                          </Text>
                        </View>
                      </View>

                      <View style={styles.levelRow}>
                        <ImageBackground
                          source={background}
                          style={styles.circle}
                          borderRadius={60}
                          resizeMode="cover"
                        >
                          <View>
                            <Text style={styles.circleText}>Level 2</Text>
                          </View>
                        </ImageBackground>

                        <View style={styles.levelText}>
                          <Text
                            style={{
                              ...FONTS.body5,
                              color: COLORS.primaryDark,
                              fontWeight: "700",
                            }}
                          >
                            Target : 500
                          </Text>
                          <Text
                            style={{
                              ...FONTS.body6,
                              color: COLORS.gray,
                              marginVertical: "5%",
                            }}
                          >
                            Complete the total earnings of amount &#8360; 500 to
                            unlock level 1
                          </Text>
                        </View>
                      </View>

                      <View style={styles.levelRow}>
                        <ImageBackground
                          source={background}
                          style={styles.circle}
                          borderRadius={60}
                          resizeMode="cover"
                        >
                          <View>
                            <Text style={styles.circleText}>Level 3</Text>
                          </View>
                        </ImageBackground>

                        <View style={styles.levelText}>
                          <Text
                            style={{
                              ...FONTS.body5,
                              color: COLORS.primaryDark,
                              fontWeight: "700",
                            }}
                          >
                            Target : 500
                          </Text>
                          <Text
                            style={{
                              ...FONTS.body6,
                              color: COLORS.gray,
                              marginVertical: "5%",
                            }}
                          >
                            Complete the total earnings of amount &#8360; 500 to
                            unlock level 1
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.verticalLine}></View>
                  </View>
                </LinearGradient>
              </View>

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
      </View>
    </MainLayout>
  );
};

export default connect(null, { getUserProfile, getOffersData })(Home);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  secondaryContainer: {
    marginVertical: "5%",
    marginHorizontal: "5%",
  },
  homeHeaderImage: {
    width: "100%",
    paddingBottom: "15%",
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
    color: COLORS.primaryDark,
  },
  videoContainer: {
    width: "80%",
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
  levelsInfo: {
    marginTop: SIZES.height / 60,
    paddingVertical: "1%",
    width: "80%",
  },
  levelRow: {
    flexDirection: "row",
    marginBottom: SIZES.height / 15,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "10%",
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    height: SIZES.width / 5,
    width: SIZES.width / 5,
    borderRadius: 60,
    // backgroundColor: COLORS.primary,
    zIndex: 1,
  },
  verticalLine: {
    height: SIZES.height / 3,
    position: "absolute",
    width: "1%",
    backgroundColor: COLORS.primaryDark,
    marginHorizontal: SIZES.width / 6,
    marginTop: SIZES.height / 14,
  },
  circleText: {
    ...FONTS.body5,
    color: COLORS.white,
    fontWeight: "700",
  },
  levelText: {
    paddingLeft: "5%",
  },
});
