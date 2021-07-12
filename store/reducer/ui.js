import { TOP_OFFERS_VISIBLE } from "../types";

const initialState = {
  isTopOffers: false,
  test: "this is test data",
};

const ui = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOP_OFFERS_VISIBLE:
      return {
        ...state,
        isTopOffers: payload,
      };
    default:
      return state;
  }
};

export default ui;
