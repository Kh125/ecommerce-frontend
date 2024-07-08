import { createContext, useEffect, useState } from "react";
import { UserProfileToken } from "../models/User";

type UserContextType = {
  auth: UserProfileToken | null;
  setAuth: React.Dispatch<React.SetStateAction<UserProfileToken | null>>;
  logout: () => void;
};

type Props = { children: React.ReactNode };

const AuthContext = createContext<UserContextType>({} as UserContextType);

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<UserProfileToken | null>(() => {
    const authToken = localStorage.getItem("auth_token");
    return authToken ? JSON.parse(authToken) : null;
  });

  useEffect(() => {
    if (auth) {
      localStorage.setItem("auth_token", JSON.stringify(auth));
    } else {
      localStorage.removeItem("auth_token");
    }
  }, [auth]);

  const logout = () => {
    setAuth(null);
    // Clear the auth state from localStorage
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
