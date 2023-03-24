import axios from "axios";
import { SS_TOKEN } from "@/utils/constants";

const axiosInstance = () => {
  const token = localStorage.getItem(SS_TOKEN);
  const enviroment = "http://localhost:4000/api";
  return axios.create({
    baseURL: enviroment,
    headers: {
      authorization: token ? `Bearer ${token}` : null,
    },
  });
};

export default axiosInstance;
