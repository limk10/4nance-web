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
  const tokenKey = getKeyToken();
  return Boolean(getLocalStorage(tokenKey));
};

export const setAuthLocalStorage = async (auth) => {
  const tokenKey = await getKeyToken();
  const { infProfile, ...restAuth } = auth;
  addToLocalStorage(tokenKey, restAuth);
};

export const removeAuthLocalStorage = () => {
  const key = getKeyToken();
  localStorage.removeItem(key);
  console.log("limpou cache");
  location.reload();
};

export const removeLocalStorage = (key) => localStorage.removeItem(key);

export const getKeyToken = () => {
  return `@token:4ance-web`;
};
