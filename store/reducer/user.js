import Earnings from "../../screens/Earnings/Earnings";
import {
  USER_PROFILE_LOAD,
  USER_PROFILE_FETCH,
  USER_PROFILE_ERROR,
  USER_EARNINGS_LOAD,
  USER_EARNINGS_FETCH,
  USER_EARNINGS_ERROR,
  RESET_EARNINGS,
  ADD_PAYMENT_DETAILS_LOAD,
  ADD_PAYMENT_DETAILS_FETCH,
  ADD_PAYMENT_DETAILS_ERROR,
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
  addPaymentDetailsIsLoading: false,
  addPaymentDetails: "",
  addPaymentDetailsError: null,
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
    case ADD_PAYMENT_DETAILS_LOAD:
      return {
        ...state,
        addPaymentDetailsIsLoading: true,
      };
    case ADD_PAYMENT_DETAILS_FETCH:
      return {
        ...state,
        addPaymentDetailsIsLoading: false,
        addPaymentDetails: payload,
      };
    case ADD_PAYMENT_DETAILS_ERROR:
      return {
        ...state,
        addPaymentDetailsIsLoading: false,
        addPaymentDetailsError: "error occured",
      };
    default:
      return state;
  }
};

export default user;
