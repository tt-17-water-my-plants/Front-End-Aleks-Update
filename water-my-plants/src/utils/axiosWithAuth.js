import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: `https://water-my-plants-tt17-chris.herokuapp.com`,
  });
};

export default axiosWithAuth;
