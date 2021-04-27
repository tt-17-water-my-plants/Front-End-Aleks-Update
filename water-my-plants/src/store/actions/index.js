import axiosWithAuth from "../../utils/axiosWithAuth";

export const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
export const GET_USER_DATA_LOADING = "GET_USER_DATA_LOADING";
export const GET_USER_DATA_FAILURE = "GET_USER_DATA_FAILURE";

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
