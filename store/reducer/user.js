import Earnings from "../../screens/Earnings/Earnings";
import {
  USER_PROFILE_LOAD,
  USER_PROFILE_FETCH,
  USER_PROFILE_ERROR,
  USER_EARNINGS_LOAD,
  USER_EARNINGS_FETCH,
  USER_EARNINGS_ERROR,
  RESET_EARNINGS,
} from "../types";

const initialState = {
  userProfileIsLoading: false,
  profile: null,
  userProfileError: null,
  userEarningsIsLoading: false,
  userEarnings: [],
  totalUserEarnings: null,
  userEarningsTotalPages: null,
  userEarningsError: null,
};

const user = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_PROFILE_LOAD:
      return {
        ...state,
        userProfileIsLoading: true,
      };
    case USER_PROFILE_FETCH:
      return {
        ...state,
        userProfileIsLoading: false,
        profile: payload,
      };
    case USER_PROFILE_ERROR:
      return {
        ...state,
        userProfileIsLoading: false,
        userProfileError: "error occured",
      };
    case USER_EARNINGS_LOAD:
      return {
        ...state,
        userEarningsIsLoading: true,
      };
    case USER_EARNINGS_FETCH:
      return {
        ...state,
        userEarningsIsLoading: false,
        userEarnings: [...state.userEarnings, ...payload.result.data],
        userEarningsTotalPages: payload.result.totalPages,
        totalUserEarnings: payload.result.total,
      };
    case RESET_EARNINGS:
      return {
        ...state,
        userEarnings: [],
      };
    case USER_EARNINGS_ERROR:
      return {
        ...state,
        userEarningsIsLoading: false,
        userEarningsError: "error occured",
      };
    default:
      return state;
  }
};

export default user;
