import { useEffect, useState } from "react";
import {
  getKeyToken,
  getLocalStorage,
  removeAuthLocalStorage,
} from "./localStorage";

export default function useAuth() {
  const [user, setUser] = useState({});

  const getUser = async () => {
    const key = await getKeyToken();
    const localAuth = getLocalStorage(key);
    if (localAuth === 'undefined') return logout()
    const auth = JSON.parse(localAuth);
    setUser(auth);

  };

  const logout = async () => {
    const key = await getKeyToken();
    await removeAuthLocalStorage(key);
    location.reload();
  };

  useEffect(() => {
    getUser();
  }, []);

  return [user, logout];
}
