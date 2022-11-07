import axios from "../axiosInstance";

export const postPerson = async (data) => {
  const { data: result } = await axios.put(`/person/complete`, data);
  return result;
};

export const getPerson = async () => {
  const { data } = await axios.get(`/person`);
  return data;
};
