import axios from "axios";
import { SS_TOKEN } from "@/utils/constants";

const axiosInstance = () => {
  //getting token from local storage
  const token = localStorage.getItem(SS_TOKEN);

  //setting the enviroment
  let url = "http://localhost:4000";
  // if (process.env.NODE_ENV === "development") {
  //   url = "http://68.183.25.97";
  // } else if (process.env.NODE_ENV === "production") {
  // } else if (process.env.NODE_ENV === "test") {
  // }
  const enviroment = `${url}/api`;
  return axios.create({
    baseURL: enviroment,
    headers: {
      authorization: token ? `Bearer ${token}` : null,
    },
  });
};

export default axiosInstance;
