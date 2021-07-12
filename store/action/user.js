import customAxios from "../../utils/interceptor";
import {
  USER_PROFILE_ERROR,
  USER_PROFILE_LOAD,
  USER_PROFILE_FETCH,
  USER_EARNINGS_LOAD,
  USER_EARNINGS_FETCH,
  USER_EARNINGS_ERROR,
} from "../types";

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

export const getUserEarnings = () => async (dispatch) => {
  try {
    dispatch({ type: USER_EARNINGS_LOAD });

    const result = await customAxios.get(`/earning/user/earnings`);
    dispatch({ type: USER_EARNINGS_FETCH, payload: result.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: USER_EARNINGS_ERROR });
  }
};
