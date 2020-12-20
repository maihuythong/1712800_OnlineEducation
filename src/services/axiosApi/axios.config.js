import { AxiosInstance } from ".";
import store from "../../redux/store";
import AsyncStorage from "../../utils/storage/asyncStorage";
import { UNAUTHORIZED } from "../../constants";
import { SIGNOUT } from "../user/constants";

/**
 * Config axios instance interceptors for request/response
 * ref: https://medium.com/datadriveninvestor/axios-instance-interceptors-682868f0de2d
 */
const requestInterceptor = AxiosInstance.interceptors.request.use(
  async (config) => {
    const request = config;
    // console.log(request);
    try {
      const token = await AsyncStorage.getAccessToken();
      request.headers["Content-Type"] = "application/json";
      request.headers.Authorization = `Bearer ${token}`;
    } catch (e) {
    } finally {
      return request;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

const responseInterceptor = AxiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error?.response?.status === UNAUTHORIZED) {
      store.dispatch({ type: SIGNOUT });
    }
    return Promise.reject(error);
  }
);

export { requestInterceptor, responseInterceptor };
