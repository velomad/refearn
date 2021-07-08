import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { FocusAwareStatusBar } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

export default function Offerdetails() {
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../../assets/banners/icici.jpg")}
            />
            <Text
              style={{
                fontSize: SIZES.body3,
                fontWeight: "700",
                color: COLORS.blueLight,
                textAlign: "center",
                paddingTop: SIZES.width / 25,
              }}
            >
              Equitas Finance Savings Bank
            </Text>
            <Text
              style={{
                fontSize: SIZES.body5,
                fontWeight: "600",
                color: COLORS.primaryDark,
                textAlign: "center",
                paddingTop: SIZES.width / 75,
                paddingHorizontal: SIZES.width / 10,
              }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text
                style={{
                  color: COLORS.primaryDark,
                  fontWeight: "700",
                }}
              >
                Share Now
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: SIZES.body4,
              fontWeight: "600",
              color: COLORS.primaryDark,
              textAlign: "center",
              paddingHorizontal: SIZES.width / 20,
              paddingVertical: SIZES.width / 20,
            }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy
          </Text>
          <View style={styles.spcfContainer}>
            <Text
              style={{
                fontSize: SIZES.body3,
                color: COLORS.primaryDark,
                fontWeight: "700",
                paddingVertical: SIZES.width / 40,
                paddingHorizontal: SIZES.width / 30,
              }}
            >
              Specification
            </Text>
            <View style={styles.specPoints}>
              <Text style={styles.pointText}>
                {" "}
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: SIZES.body2,
                    color: COLORS.primaryLight,
                  }}
                >
                  &#xbb;{" "}
                </Text>
                70% Good Savings
              </Text>
            </View>
            <View style={styles.specPoints}>
              <Text style={styles.pointText}>
                {" "}
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: SIZES.body2,
                    color: COLORS.primaryLight,
                  }}
                >
                  &#xbb;{" "}
                </Text>
                70% Good Savings
              </Text>
            </View>
            <View style={styles.specPoints}>
              <Text style={styles.pointText}>
                {" "}
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: SIZES.body2,
                    color: COLORS.primaryLight,
                  }}
                >
                  &#xbb;{" "}
                </Text>
                70% Good Savings
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.pointsCollection}>
          <View style={styles.subPoints}>
            <Text
              style={{
                textAlign: "left",
                marginHorizontal: SIZES.width / 15,
                fontSize: SIZES.body3,
              }}
            >
              &#x2622;
            </Text>
            <View>
              <Text
                style={{
                  textAlign: "left",
                  marginHorizontal: SIZES.width / 15,
                  fontSize: SIZES.body4,
                  fontWeight: "700",
                  color: COLORS.primaryDark,
                }}
              >
                Your Profit
              </Text>
              <Text
                style={{
                  textAlign: "left",
                  marginHorizontal: SIZES.width / 15,
                  fontSize: SIZES.body5,
                }}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </Text>
            </View>
          </View>
          <View style={styles.subPoints}>
            <Text
              style={{
                textAlign: "left",
                marginHorizontal: SIZES.width / 15,
                fontSize: SIZES.body3,
              }}
            >
              &#x2622;
            </Text>
            <View>
              <Text
                style={{
                  textAlign: "left",
                  marginHorizontal: SIZES.width / 15,
                  fontSize: SIZES.body4,
                  fontWeight: "700",
                  color: COLORS.primaryDark,
                }}
              >
                Your Profit
              </Text>
              <Text
                style={{
                  textAlign: "left",
                  marginHorizontal: SIZES.width / 15,
                  fontSize: SIZES.body5,
                }}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </Text>
            </View>
          </View>
          <View style={styles.subPoints}>
            <Text
              style={{
                textAlign: "left",
                marginHorizontal: SIZES.width / 15,
                fontSize: SIZES.body3,
              }}
            >
              &#x2622;
            </Text>
            <View>
              <Text
                style={{
                  textAlign: "left",
                  marginHorizontal: SIZES.width / 15,
                  fontSize: SIZES.body4,
                  fontWeight: "700",
                  color: COLORS.primaryDark,
                }}
              >
                Your Profit
              </Text>
              <Text
                style={{
                  textAlign: "left",
                  marginHorizontal: SIZES.width / 15,
                  fontSize: SIZES.body5,
                }}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.parentContainer}>
          <View style={styles.rulesContainer}>
            <Text
              style={{
                fontSize: SIZES.body3,
                color: COLORS.primaryDark,
                fontWeight: "700",
                paddingVertical: SIZES.width / 40,
                paddingHorizontal: SIZES.width / 60,
              }}
            >
              Rules To Be Followed
            </Text>
            <View style={styles.subPoints}>
              <View>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body4,
                    fontWeight: "700",
                    color: COLORS.primaryDark,
                  }}
                >
                  Your Profit
                </Text>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body5,
                  }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </Text>
              </View>
            </View>
            <View style={styles.subPoints}>
              <View>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body4,
                    fontWeight: "700",
                    color: COLORS.primaryDark,
                  }}
                >
                  Your Profit
                </Text>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body5,
                  }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </Text>
              </View>
            </View>
            <View style={styles.subPoints}>
              <View>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body4,
                    fontWeight: "700",
                    color: COLORS.primaryDark,
                  }}
                >
                  Your Profit
                </Text>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body5,
                  }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.rulesContainer}>
            <Text
              style={{
                fontSize: SIZES.body3,
                color: COLORS.primaryDark,
                fontWeight: "700",
                paddingVertical: SIZES.width / 40,
                paddingHorizontal: SIZES.width / 60,
              }}
            >
              Terms And Condition
            </Text>
            <View style={styles.subPoints}>
              <View>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body4,
                    fontWeight: "700",
                    color: COLORS.primaryDark,
                  }}
                >
                  Your Profit
                </Text>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body5,
                  }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </Text>
              </View>
            </View>
            <View style={styles.subPoints}>
              <View>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body4,
                    fontWeight: "700",
                    color: COLORS.primaryDark,
                  }}
                >
                  Your Profit
                </Text>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body5,
                  }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </Text>
              </View>
            </View>
            <View style={styles.subPoints}>
              <View>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body4,
                    fontWeight: "700",
                    color: COLORS.primaryDark,
                  }}
                >
                  Your Profit
                </Text>
                <Text
                  style={{
                    textAlign: "left",
                    marginHorizontal: SIZES.width / 15,
                    fontSize: SIZES.body5,
                  }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f8fbf8",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  imageContainer: {
    alignItems: "center",
    paddingVertical: SIZES.width / 20,
    backgroundColor: COLORS.lightGray,
  },
  spcfContainer: {
    backgroundColor: COLORS.lightGray,
    marginHorizontal: SIZES.width / 15,
    borderRadius: 7,
  },
  specPoints: {
    paddingHorizontal: SIZES.width / 15,
    flexDirection: "column",
    paddingVertical: SIZES.width / 85,
    backgroundColor: COLORS.primaryLight,
    marginHorizontal: SIZES.width / 25,
    borderRadius: 4,
    marginBottom: SIZES.width / 55,
  },
  pointText: {
    color: COLORS.blueDark,
  },
  pointsCollection: {
    flexDirection: "column",
    paddingTop: SIZES.width / 10,
  },
  subPoints: {
    flexDirection: "column",
    marginVertical: SIZES.width / 65,
    backgroundColor: COLORS.lightGray,
    marginHorizontal: SIZES.width / 20,
    borderRadius: 7,
    paddingVertical: SIZES.width / 45,
  },
  rulesContainer: {
    flexDirection: "column",
    paddingVertical: SIZES.width / 20,
    marginHorizontal: SIZES.width / 25,
    borderRadius: 4,
  },
  rulesPoints: {
    flexDirection: "column",
    marginVertical: SIZES.width / 65,
    marginHorizontal: SIZES.width / 35,
    borderRadius: 7,
    paddingVertical: SIZES.width / 45,
  },
  parentContainer: {
    marginVertical: SIZES.width / 10,
  },
  button: {
    width: "40%",
    alignItems: "center",
    color: "#fff",
    backgroundColor: COLORS.primaryLight,
    marginHorizontal: SIZES.width / 15,
    padding: 10,
    marginTop: "5%",
    borderRadius: 4,
  },
});
