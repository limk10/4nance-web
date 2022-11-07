import axios from "../axiosInstance";

export const postEmployee = async (data) => {
  const { data: result } = await axios.post(`/company`, data);
  return result;
};

export const getEmplpoyee = async () => {
  const { data: result } = await axios.get(`/companies`);
  return result;
};
