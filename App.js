import "react-native-gesture-handler";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import Font from "expo-font";
import AppNavigator from "./navigation/AppNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import authStorage from "./auth/storage";
import AuthContext from "./auth/context";
import Store from "./store";
import { Provider } from "react-redux";

const App = () => {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  const [fr, sfr] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  // const fetchFonts = () => {
  //   return Font.loadAsync({
  //     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  //   });
  // };

  if (!isReady)
    return (
      <>
        <AppLoading
          startAsync={restoreUser}
          onFinish={() => setIsReady(true)}
          onError={console.warn}
        />
      </>
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Provider store={Store}>
        <NavigationContainer>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </Provider>
    </AuthContext.Provider>
  );
};

export default () => {
  return <App />;
};
