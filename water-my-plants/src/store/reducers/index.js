import {
  GET_USER_DATA_FAILURE,
  GET_USER_DATA_LOADING,
  GET_USER_DATA_SUCCESS,
} from "../actions";

const initialState = {
  data: [],
  error: "",
  isLoading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        error: "",
        data: action.payload,
        isLoading: false,
      };
    case GET_USER_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
