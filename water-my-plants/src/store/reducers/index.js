import {
  GET_USER_DATA_FAILURE,
  GET_USER_DATA_LOADING,
  GET_USER_DATA_SUCCESS,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from "../actions";

const initialState = {
  data: [],
  error: "",
  isLoading: false,
  user_id: "",
  loggingIn: false,
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
    case USER_LOGIN_LOADING:
      return {
        ...state,
        loggingIn: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        user_id: action.payload.id,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        loginError: action.payload,
      };
    default:
      return state;
  }
};
