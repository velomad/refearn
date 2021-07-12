import React from "react";
import {
  SIGNIN_FETCH,
  SIGNIN_LOAD,
  SIGNIN_ERROR,
  SIGNOUT,
  SIGNOUT_ERROR,
  AUTH_CHECK,
} from "../types";
import Axios from "axios";

// import AsyncStorage from '@react-native-async-storage/async-storage';
import toastMessage from "../../utils/toastMessage";

export const signIn = (data) => async (dispatch) => {
  dispatch({ type: SIGNIN_LOAD });
  try {
    const result = await Axios.post(
      "https://www.questkart.com/25offers/api/v1/auth/login",
      data
    );

    dispatch({ type: SIGNIN_FETCH, payload: result.data.token });
  } catch (error) {
    dispatch({ type: SIGNIN_ERROR, payload: error.response.data.error });
    toastMessage(error.response.data.error.message);
  }
};

export const signOut = () => async (dispatch) => {
  console.log("logging out");
  try {
    const value = await AsyncStorage.removeItem("@accessToken");
    if (value === null) {
      dispatch({ type: SIGNOUT, payload: null, authState: false });
    }
  } catch (error) {
    dispatch({ type: SIGNOUT_ERROR, payload: error });
  }
};
