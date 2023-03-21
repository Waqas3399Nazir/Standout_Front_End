import axios from "axios";
import { SS_TOKEN } from "@/utils/constants";

const axiosInstance = () => {
  //getting token from local storage
  const token = localStorage.getItem(SS_TOKEN);

  //setting the enviroment
<<<<<<< HEAD
  let url = "http://localhost:4000";
  // if (process.env.NODE_ENV === "development") {
  //   url = "http://68.183.25.97";
  // } else if (process.env.NODE_ENV === "production") {
  // } else if (process.env.NODE_ENV === "test") {
  // }
=======
  let url = "http://68.183.25.97";
  if (process.env.NODE_ENV === "development") {
    url = `${process.env.TEST_API_URL}`;
  } else if (process.env.NODE_ENV === "production") {
  } else if (process.env.NODE_ENV === "test") {
  }
>>>>>>> 3e4e80049fd13229c39b8f53e4e09e59fb4b70b5
  const enviroment = `${url}/api`;
  return axios.create({
    baseURL: enviroment,
    headers: {
      authorization: token ? `Bearer ${token}` : null,
    },
  });
};

export default axiosInstance;
