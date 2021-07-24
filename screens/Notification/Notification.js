import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { FocusAwareStatusBar } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants";
import customAxios from "../../utils/interceptor";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getNotifications();
  }, []);

  const getNotifications = async () => {
    try {
      const result = await customAxios.get("/notification/allNotifications");
      setNotifications(result.data.notifications);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />

      <FlatList
        data={notifications}
        keyExtractor={(item, index) => JSON.stringify(item.id)}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                flex: 1,

                marginTop: index == 0 ? SIZES.width / 20 : SIZES.width / 20,
                marginBottom:
                  index == notifications.length - 1 ? SIZES.width / 20 : 0,
              }}
            >
              <View
                style={{ backgroundColor: COLORS.primaryLight, padding: "5%" }}
              >
                <Text style={{ ...FONTS.body5, color: COLORS.primaryDark }}>
                  {item.message}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Notification;
