import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosResponse } from "axios";

export type ResponseType<T> = Promise<AxiosResponse<T>>;

const BASE_URL = "https://kitsu.io/api/edge/";

const Api = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    }
  });

  instance.interceptors.request.use(async function (config) {
    const token = await AsyncStorage.getItem("token");
    if (token) config.headers.Authorization = `Token ${token}`;
    return config;
  });

  instance.interceptors.response.use(
    (config) => config,
    (error) => {
      const message = error.response.data;
      console.log(message);
      return Promise.reject(error);
    }
  );

  return instance;
};

export default Api();
