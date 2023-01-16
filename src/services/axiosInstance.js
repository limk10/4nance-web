import axios from "axios";
import _ from "lodash";
import {
  getLocalStorage,
  getKeyToken,
  removeAuthLocalStorage,
  addToLocalStorage,
} from "../helpers/localStorage";

const baseURL = "https://fournance.onrender.com/web/v1/";
// const baseURL = "http://localhost:3333/web/v1/";

const api = axios.create({
  baseURL,
  responseType: "json",
  headers: {
    Accept: "application/json",
    ContentType: "text/plain",
  },
});

const refreshToken = async (config) => {
  await api
    .post("auth/v1/refresh")
    .then(async ({ data, status }) => {
      if (status === 200) {
        const key = await getKeyToken();
        addToLocalStorage(key, data.token);

        config.headers.Authorization = `Bearer ${data.token}`;
      }
    })
    .catch((err) => {
      console.log("err", err);
    });
};

api.interceptors.request.use(async (config) => {
  const configuration = config;

  const key = await getKeyToken();
  const authStorage = await getLocalStorage(key);

  if (authStorage) {
    const { token } = JSON.parse(authStorage);

    if (token) {
      _.set(configuration, ["headers", "Authorization"], `Bearer ${token}`);
    }
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("error", error);
    const { response, config } = error;
    const originalRequest = config;

    // if (
    //   (response.status === 401 && (originalRequest.url.includes("signin")) ||
    //   originalRequest.url.includes("signup"))
    // ) {
    //   return Promise.reject(error);
    // }

    if (
      response.status === 401 &&
      originalRequest.url.includes("authenticate/refresh")
    ) {
      removeAuthLocalStorage();
    }

    if (response.status === 401 && !originalRequest?.retry) {
      originalRequest.retry = true;
      await refreshToken(config);
      return api(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default api;
