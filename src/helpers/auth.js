import { useEffect, useState } from "react";
import {
  getKeyToken,
  getLocalStorage,
  removeAuthLocalStorage,
} from "./localStorage";

export default function useAuth() {
  const [user, setUser] = useState({});

  const getUser = () => {
    const key = getKeyToken();
    const localAuth = getLocalStorage(key);
    const auth = JSON.parse(localAuth);
    setUser(auth);

  };

  const logout = async () => {
    const key = getKeyToken();
    await removeAuthLocalStorage(key);
    location.reload();
  };

  useEffect(() => {
    getUser();
  }, []);

  return [user, logout];
}
