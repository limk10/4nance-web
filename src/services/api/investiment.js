import axios from "../axiosInstance";

export const postInvestiment = async (data) => {
  const { data: result } = await axios.post(`/investment`, data);
  return result;
};
