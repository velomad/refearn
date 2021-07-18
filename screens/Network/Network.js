import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  RefreshControl,
  FlatList
} from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { FocusAwareStatusBar } from "../../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Clipboard from "expo-clipboard";
import { connect } from "react-redux";
import toastMessage from "../../utils/toastMessage";
import Axios from "axios";
import customAxios from "../../utils/interceptor";

const Item = ({ itemdata }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: SIZES.width / 30,
      marginHorizontal: SIZES.width / 25,
    }}
  >
    <View
      style={{
        flexDirection: "column",
        minWidth: SIZES.width / 5
      }}
    >
      <Text
        style={{
          color: COLORS.gray,
          fontSize: SIZES.body5,
          fontWeight: "700",
        }}
      >
        {itemdata.user.name}
      </Text>

      <Text
        style={{
          color: COLORS.gray,
          fontSize: SIZES.body5,
          fontWeight: "600",
        }}
      >
        Level {itemdata.user.levelId}
      </Text>
    </View>
    <View style={{ minWidth: SIZES.width / 20 }}>
      <Text
        style={{
          color: COLORS.gray,
          fontSize: SIZES.body5,
          fontWeight: "700",
          textAlign: 'right'
        }}
      >
        &#8377;{itemdata.user.stats.totalEarnings}
      </Text>
    </View>
    <View style={{ minWidth: SIZES.width / 20 }}>
      <Text
        style={{
          color: COLORS.success,
          fontSize: SIZES.body5,
          fontWeight: "700",
        }}
      >
        &#8377;{itemdata.user.stats.totalEarnings / 100 * 10}
      </Text>
    </View>
  </View>
);

const Network = (props) => {
  const [networkDetails, setNetWorkDetails] = useState([]);
  const [networkLength, setNetWorkNetworkLength] = useState([]);
  const [friendEarningTotal, setFriendEarningTotal] = useState([]);
  const [yourEarningTotal, setYourEarningTotal] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    fetchUserNetWork();
  }, [props.userProfileData.result.uniqueCode]);

  const onRefresh = () => {
    setIsFetching(true);
    fetchUserNetWork();
    setIsFetching(false);
  };

  const fetchUserNetWork = async () => {
    try {
      const result = await customAxios.get(`/user/network/${props.userProfileData.result.uniqueCode}`);
      setNetWorkDetails(result.data.result);
      setNetWorkNetworkLength(result.data.result.length);
      let friendEarningtotal = 0;
      let yourEarningtotal = 0;
      result.data.result.map((el, index) => {
        friendEarningtotal += Number(el.user.stats.totalEarnings);
        yourEarningtotal += Number(el.user.stats.totalEarnings / 100 * 10);
      });
      setFriendEarningTotal(friendEarningtotal);
      setYourEarningTotal(yourEarningtotal);
    } catch (error) {
      console.log(error);
      toastMessage(error.response.data.error.message);
    }
  };

  const renderItem = (itemdata) => (
    <Item itemdata={itemdata.item} />
  );

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
    <View
      style={styles.container}
    >
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />
      <View>
        <View style={styles.cardContainer}>
          <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'column' }}>
            <View>
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: "700",
                }}
              >
                Referral Code
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: SIZES.body5,
                  color: COLORS.white,
                  fontWeight: "600",
                  width: SIZES.width / 3,
                  marginVertical: SIZES.width / 140,
                }}
              >
                Share this refer code with your friends
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.uniqueCodeContainer}
              onPress={onCopy}
            >
              <MaterialCommunityIcons
                name="content-copy"
                size={SIZES.width / 25}
                color={COLORS.white}
              />
              <Text style={styles.uniqueCode}>{props.userProfileData.result.uniqueCode}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            paddingTop: SIZES.width / 10,
            marginHorizontal: SIZES.width / 25,
            paddingBottom: SIZES.width / 80,
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              color: COLORS.gray,
            }}
          >
            Your Network
          </Text>
          <Text
            style={{
              fontWeight: "600",
              color: COLORS.gray,
              fontSize: SIZES.body5,
            }}
          >
            Earn 10% of friends earnings
          </Text>
        </View>
        <View style={styles.tableContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              backgroundColor: COLORS.primaryDark,
              paddingVertical: SIZES.width / 30,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.body5,
                fontWeight: "700",
              }}
            >
              Your Friend
            </Text>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.body5,
                fontWeight: "700",
              }}
            >
              Friend's Earnings
            </Text>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.body5,
                fontWeight: "700",
              }}
            >
              Your Earnings
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: SIZES.width / 30,
              paddingHorizontal: SIZES.width / 25,
              backgroundColor: COLORS.primaryLight,
            }}
          >
            <Text
              style={{
                color: COLORS.gray,
                fontSize: SIZES.body5,
                fontWeight: "700",
              }}
            >
              {networkLength} in your network
            </Text>
            <Text
              style={{
                color: COLORS.greenLight,
                fontSize: SIZES.body5,
                fontWeight: "700",
                minWidth: SIZES.width / 6.5
              }}
            >
              &#8377;{friendEarningTotal}
            </Text>
            <Text
              style={{
                color: COLORS.black,
                fontSize: SIZES.body5,
                fontWeight: "700",
                minWidth: SIZES.width / 20
              }}
            >
              &#8377;{yourEarningTotal}
            </Text>
          </View>
          <SafeAreaView>
            <FlatList
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: SIZES.width / 1.4
              }}
              data={networkDetails}
              renderItem={item => renderItem(item)}
              keyExtractor={item => item.id.toString()}
              refreshControl={
                <RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
              }
            />
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingBottom: "10%",
    marginHorizontal: SIZES.width / 40,
  },
  cardContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.primaryDark,
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: SIZES.width / 40,
    marginVertical: SIZES.width / 20,
    paddingVertical: SIZES.width / 20,
    paddingHorizontal: SIZES.width / 30,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#cccccc",
  },
  button: {
    width: "80%",
    alignItems: "center",
    color: "#fff",
    backgroundColor: COLORS.indigoDark,
    marginHorizontal: SIZES.width / 15,
    padding: 10,
    marginTop: "3%",
    marginBottom: "5%",
    borderRadius: 4,
  },
  tableContainer: {
    backgroundColor: "#fff",
    borderRadius: 5,
    marginHorizontal: SIZES.width / 40,
    marginVertical: SIZES.width / 50,
    borderWidth: 1,
    borderColor: "#DCDCDC",
  },
  uniqueCode: {
    textAlign: "center",
    ...FONTS.body4,
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

const mapStateToProps = ({ user }) => ({
  userProfileData: user.profile,
});

export default connect(mapStateToProps)(Network);
