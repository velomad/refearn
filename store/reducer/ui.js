import { TOP_OFFERS_VISIBLE, IS_FETCHING } from "../types";

const initialState = {
  isTopOffers: false,
  isFetching: false,
};

const ui = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOP_OFFERS_VISIBLE:
      return {
        ...state,
        isTopOffers: payload,
      };
    case IS_FETCHING:
      return {
        ...state,
        isFetching: payload,
      };
    default:
      return state;
  }
};

export default ui;
