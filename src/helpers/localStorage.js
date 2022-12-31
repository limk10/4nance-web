import { getPathname } from "./browser";

export const getLocalStorage = (key) => {
  if (typeof window !== "undefined") return localStorage.getItem(key);
  else return "";
};

export const addToLocalStorage = (key, value) => {
  if (typeof value !== typeof "") {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } else {
    localStorage.setItem(key, value);
  }
};

export const isAuthenticated = () => {
  const key = getKeyToken();
  return Boolean(getLocalStorage(key));
};

export const setAuthLocalStorage = async (key, auth) => {
  const { ...restAuth } = auth;
  addToLocalStorage(key, restAuth);
};

export const removeAuthLocalStorage = (key) => {
  localStorage.removeItem(key);
  location.reload();
};

export const removeLocalStorage = (key) => localStorage.removeItem(key);

export const getAdminKeyToken = () => {
  return `@token.admin:4ance-web`;
};

export const getBusinessKeyToken = () => {
  return `@token.business:4ance-web`;
};

export const getInvestorKeyToken = () => {
  return `@token.investor:4ance-web`;
};

export const getKeyToken = () => {
  if (getPathname().includes("admin")) return getAdminKeyToken();
  if (getPathname().includes("business")) return getBusinessKeyToken();
  else return getInvestorKeyToken();
};
