import customAxios from "../../utils/interceptor";
import { OFFERS_LOAD, OFFERS_FETCH, OFFERS_ERROR } from "../types";

export const getOffersData = () => async (dispatch) => {
  try {
    dispatch({ type: OFFERS_LOAD });

    const result = await customAxios.get(`/offer/alloffers`);
    dispatch({ type: OFFERS_FETCH, payload: result.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: OFFERS_ERROR });
  }
};
