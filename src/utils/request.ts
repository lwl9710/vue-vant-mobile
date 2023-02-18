import axios from "axios";
import { showLoadingToast, closeToast } from "vant";
import { NETWORK_TIMEOUT, BASE_URL } from "@/config/website";

const request = axios.create({
  timeout: NETWORK_TIMEOUT,
  baseURL: BASE_URL
});

request.interceptors.request.use((config) => {
  const meta =  config.meta || {};
  if(meta.isLoading) {
    showLoadingToast({
      mask: true,
      duration: 0,
      forbidClick: true,
      message: "加载中...",
      loadingType: "spinner"
    });
  }
  return config;
}, error => {
  closeToast(true);
  return Promise.reject(error);
});

request.interceptors.response.use((response) => {
  const meta =  Object.assign({
    isBody: true,
    isLoading: false
  }, response.config.meta);
  if(meta.isLoading) {
    closeToast(true);
  }
  if(meta.isBody) {
    return response.data;
  } else {
    return response;
  }
},error => {
  closeToast(true);
  return Promise.reject(error);
});

export default request;
