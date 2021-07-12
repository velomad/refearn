import {
  USER_PROFILE_LOAD,
  USER_PROFILE_FETCH,
  USER_PROFILE_ERROR,
  USER_EARNINGS_LOAD,
  USER_EARNINGS_FETCH,
  USER_EARNINGS_ERROR,
} from "../types";

const initialState = {
  userProfileIsLoading: false,
  profile: null,
  userProfileError: null,
  userEarningsIsLoading: false,
  userEarnings: {},
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
        userEarnings: payload,
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
