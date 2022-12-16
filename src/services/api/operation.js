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
  return result;
};

export const getInvestorOperationById = async (id) => {
  const { data: result } = await axios.get(`/projects/investor/${id}`);
  return result;
};

export const getDocumentsInvestorOperation = async (id) => {
  const { data: result } = await axios.get(`/post/files/${id}`);
  return result;
};

export const getTextsInvestorOperation = async (id) => {
  const { data: result } = await axios.get(`/projects/posts/${id}`);
  return result;
};
