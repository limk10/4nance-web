export const getLocalStorage = (key) => localStorage.getItem(key);

export const addToLocalStorage = (key, value) => {
  if (typeof value !== typeof "") {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } else {
    localStorage.setItem(key, value);
  }
};

export const isAuthenticated = () =>
  Boolean(getLocalStorage(import.meta.env.VITE_REACT_APP_USER));

export const setAuthLocalStorage = ({ token, user }) => {
  if (token && user) {
    addToLocalStorage(import.meta.env.VITE_REACT_APP_AUTH, token);
    addToLocalStorage(
      import.meta.env.VITE_REACT_APP_USER,
      JSON.stringify(user)
    );
  }
};

export const removeLocalStorage = (key) => localStorage.removeItem(key);

export const clearStorage = () => {
  removeLocalStorage(import.meta.env.VITE_REACT_APP_AUTH);
  removeLocalStorage(import.meta.env.VITE_REACT_APP_USER);
};
