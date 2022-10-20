import axios from "../axiosInstance";

export const getStateList = async () => {
  const { data } = await axios.get(`/states`, data);
  return data;
};

export const getCityList = async (id) => {
  const { data } = await axios.get(`/cities/${id}`);
  return data;
};
