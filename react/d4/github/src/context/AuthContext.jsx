import { useState } from "react";
import { AuthContext } from "./AuthContext.js";

export default function AuthContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
