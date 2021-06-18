import { TOP_OFFERS_VISIBLE } from "../types";

export const setTopOffers = (value) => async (dispatch) => {
  dispatch({ type: TOP_OFFERS_VISIBLE, payload: value });
};
