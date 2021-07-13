import { TOP_OFFERS_VISIBLE, IS_EARNING_FETCHING } from "../types";

export const setTopOffers = (value) => async (dispatch) => {
  dispatch({ type: TOP_OFFERS_VISIBLE, payload: value });
};

export const setIsFetching = (value) => async (dispatch) => {
  dispatch({ type: IS_EARNING_FETCHING, payload: value });
};
