import { useToast as useChakraToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  getKeyToken,
  getLocalStorage,
  removeAuthLocalStorage,
} from "./localStorage";

export default function useAuth() {
  const [user, setUser] = useState({});

  const getUser = () => {
    const tokenKey = getKeyToken();
    const localAuth = getLocalStorage(tokenKey);

    const auth = JSON.parse(localAuth);
    setUser(auth);
  };

  const logout = () => {
    const tokenKey = getKeyToken();
    removeAuthLocalStorage(tokenKey);
    location.reload();
  };

  useEffect(() => {
    getUser();
  }, []);

  return [user, logout];
}
