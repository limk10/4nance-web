import { getPathname } from "./browser";

export const adminKeyToken = `@token.admin:4ance-web`
export const businessKeyToken = `@token.business:4ance-web`
export const investorKeyToken = `@token.investor:4ance-web`

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

export const isAuthenticated = async () => {
  const key = await getKeyToken();
  return localStorage.getItem(key);
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

export const getKeyToken = async () => {
  const pathname = await getPathname()
  if (!pathname) return
  if (pathname.includes("admin")) return adminKeyToken;
  if (pathname.includes("business")) return businessKeyToken;
  else return investorKeyToken;
};
