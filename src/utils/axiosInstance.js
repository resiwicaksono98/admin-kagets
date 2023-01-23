import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get('access-token')


const requestApi = axios.create({
  baseURL: `http://localhost:5000/api`,
  withCredentials: true,
})

export default requestApi
