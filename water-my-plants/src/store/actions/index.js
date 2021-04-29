import axiosWithAuth from "../../utils/axiosWithAuth";

export const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
export const GET_USER_DATA_LOADING = "GET_USER_DATA_LOADING";
export const GET_USER_DATA_FAILURE = "GET_USER_DATA_FAILURE";
export const USER_LOGIN_LOADING = "USER_LOGIN_LOADING";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const getUserData = (id) => {
  return (dispatch) => {
    dispatch({ type: GET_USER_DATA_LOADING });
    axiosWithAuth()
      .get(`/api/plants/${id}`)
      .then((res) => {
        console.log(res);
        dispatch({ type: GET_USER_DATA_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_USER_DATA_FAILURE, payload: err.message });
      });
  };
};

export const userLogin = (user) => {
  return (dispatch) => {
    dispatch({ type: USER_LOGIN_LOADING });
    axiosWithAuth()
      .post("/api/users/login", user)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("UserId", res.data.user_id);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
        window.location.pathname = "/userpage";
      })
      .catch((err) => {
        console.log({ err });
        dispatch({ type: USER_LOGIN_FAILURE, payload: err });
      });
  };
};
