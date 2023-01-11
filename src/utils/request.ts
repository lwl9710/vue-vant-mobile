import axios from "axios";
import { NETWORK_TIMEOUT, BASE_URL } from "@/config/website";

const request = axios.create({
  timeout: NETWORK_TIMEOUT,
  baseURL: BASE_URL
});

export default request;
