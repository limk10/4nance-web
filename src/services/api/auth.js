import {
  businessKeyToken,
  investorKeyToken,
  setAuthLocalStorage,
} from "../../helpers/localStorage";
import axios from "../axiosInstance";

export const businessSignin = async (data) => {
  const { data: result } = await axios.post(`signin/business`, data);
  setAuthLocalStorage(businessKeyToken, result);
};

export const investorSignin = async (data) => {
  const { data: result } = await axios.post(`signin`, data);
  setAuthLocalStorage(investorKeyToken, result);
};

export const businessSignout = async () => {
  await axios.post(`signout`);
};

export const investorSignout = async () => {
  await axios.post(`signout`);
};

export const businessRegister = async (data) => {
  await axios.post(`signup`, data);
};

export const investorRegister = async (data) => {
  await axios.post(`signup`, data);
};

export const businessAccountConfirmation = async (data) => {
  await axios.patch(`signup/verify`, data);
};

export const investorAccountConfirmation = async (data) => {
  await axios.patch(`signup/verify`, data);
};
