import { createContext, useState } from "react";
import { UserProfileToken } from "../models/User";

type UserContextType = {
  auth: UserProfileToken | null;
  setAuth: React.Dispatch<React.SetStateAction<UserProfileToken | null>>;
};

type Props = { children: React.ReactNode };

const AuthContext = createContext<UserContextType>({} as UserContextType);

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<UserProfileToken | null>(null);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
