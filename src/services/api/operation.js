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

export const getEnabledOperation = async (data) => {
  const { data: result } = await axios.get(`/projects/enabled`, data);
  return result;
};

export const getAnalyzeOperation = async (data) => {
  const { data: result } = await axios.get(`/projects`, data);
  console.log("result", result);
  return result;
};

export const getInvestorOperation = async () => {
  const { data: result } = await axios.get(`/projects/investor`);
  console.log("result", result);
  return result;
};

export const getDocumentsInvestorOperation = async (data) => {
  const { data: result } = await axios.get(`/post/files`, data);
  console.log("result", result);
  return result;
};

export const getTextsInvestorOperation = async (data) => {
  const { data: result } = await axios.get(`/projects/posts`, data);
  console.log("result", result);
  return result;
};
