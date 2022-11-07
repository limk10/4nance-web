import axios from "../axiosInstance";

export const getCategories = async () => {
  const { data: result } = await axios.get(`/category`);
  return result;
};

export const getModalities = async () => {
  const { data: result } = await axios.get(`/modality`);
  return result;
};

export const postOperation = async (data) => {
  const { data: result } = await axios.post(`/projects`, data);
  return result;
};
