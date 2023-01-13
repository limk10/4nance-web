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

export const getBusinessEnabledOperation = async (data) => {
  const { data: result } = await axios.get(`/projects/enabled/business`, data);
  return result;
};

export const getBusinessAnalyzeOperation = async (data) => {
  const { data: result } = await axios.get(`/projects/business`, data);
  console.log("result", result);
  return result;
};

export const getInvestorEnabledOperation = async () => {
  const { data: result } = await axios.get(`projects/enabled/investor`);
  return result;
};

export const getInvestorEnabledOperationById = async (id) => {
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
