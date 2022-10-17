import { setAuthLocalStorage } from "../../helpers/localStorage";
import axios from "../axiosInstance";

export const signin = async (data) => {
  const { data: result } = await axios.post(`signin`, data);
  setAuthLocalStorage(result);
};

export const signout = async () => {
  await axios.post(`signout`);
};

export const register = async (data) => {
  await axios.post(`signup`, data);
};

export const accountConfirmation = async (data) => {
  await axios.patch(`signup/verify`, data);
};
