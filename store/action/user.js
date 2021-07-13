import customAxios from "../../utils/interceptor";
import {
  USER_PROFILE_ERROR,
  USER_PROFILE_LOAD,
  USER_PROFILE_FETCH,
  USER_EARNINGS_LOAD,
  USER_EARNINGS_FETCH,
  USER_EARNINGS_ERROR,
  USER_WITHDRAWAL_LOAD,
  USER_WITHDRAWAL_FETCH,
  USER_WITHDRAWAL_ERROR,
  IS_FETCHING,
  RESET_EARNINGS,
} from "../types";
import { setIsFetching } from "./ui";

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch({ type: USER_PROFILE_LOAD });

    const result = await customAxios.get(`/user/getProfile`);
    dispatch({ type: USER_PROFILE_FETCH, payload: result.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: USER_PROFILE_ERROR });
  }
};

export const getUserEarnings = (isRefetch, page) => async (dispatch) => {
  try {
    if (isRefetch) {
      setIsFetching(true);
      dispatch({ type: IS_FETCHING, payload: true });
    }
    dispatch({ type: USER_EARNINGS_LOAD });
    console.log("page===========>", page);
    const result = await customAxios.get(
      `/earning/user/earnings?page=${page}&limit=7`
    );
    dispatch({ type: USER_EARNINGS_FETCH, payload: result.data, isRefetch });
    if (isRefetch) setIsFetching(false);
    dispatch({ type: IS_FETCHING, payload: false });
  } catch (error) {
    console.log(error);
    if (isRefetch) setIsFetching(false);
    dispatch({ type: IS_FETCHING, payload: false });
    dispatch({ type: USER_EARNINGS_ERROR });
  }
};

export const getUserWithdrawals = (isRefetch, page) => async (dispatch) => {
  try {
    if (isRefetch) {
      setIsFetching(true);
      dispatch({ type: IS_FETCHING, payload: true });
    }
    dispatch({ type: USER_EARNINGS_LOAD });
    console.log("page===========>", page);
    const result = await customAxios.get(
      `/earning/user/earnings?page=${page}&limit=7`
    );
    dispatch({ type: USER_EARNINGS_FETCH, payload: result.data, isRefetch });
    if (isRefetch) setIsFetching(false);
    dispatch({ type: IS_FETCHING, payload: false });
  } catch (error) {
    console.log(error);
    if (isRefetch) setIsFetching(false);
    dispatch({ type: IS_FETCHING, payload: false });
    dispatch({ type: USER_EARNINGS_ERROR });
  }
};

export const resetEarnings = () => (dispatch) => {
  try {
    dispatch({ type: RESET_EARNINGS });
  } catch (error) {
    console.log(error);
  }
};
