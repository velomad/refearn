import {
    OFFERS_LOAD,
    OFFERS_FETCH,
    OFFERS_ERROR,
} from "../types";

const initialState = {
    offersIsLoading: false,
    offersData: [],
    offerError: null,
};

const offers = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case OFFERS_LOAD:
            return {
                ...state,
                offersIsLoading: true,
            };
        case OFFERS_FETCH:
            return {
                ...state,
                offersIsLoading: false,
                offersData: payload,
            };
        case OFFERS_ERROR:
            return {
                ...state,
                offersIsLoading: false,
                offerError: "error occured",
            };
        default:
            return state;
    }
};

export default offers;
