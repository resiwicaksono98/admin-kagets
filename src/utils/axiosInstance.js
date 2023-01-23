/** @format */

import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("access-token");

const requestApi = axios.create({
   baseURL: `https://kagets-server.cyclic.app/api`,
   withCredentials: true,
});

export default requestApi;
