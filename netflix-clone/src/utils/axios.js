import axios from "axios";

const API_KEY ="310faf921afca439bb86a470e1d86565"
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params:{
    api_key: API_KEY,
  },
});
export default axiosInstance;


