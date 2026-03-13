"use client";
import { useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { AuthContext } from "./AuthContext";

// export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const router = useRouter();
  useEffect(() => {
    const savedUser = Cookies.get("user_session");
    if (savedUser) setUser({ email: savedUser });
  }, []);

  const login = (email: string) => {
    Cookies.set("user_session", email, { expires: 1 });
    setUser({ email });
    router.push("/");
  };

  const logout = () => {
    Cookies.remove("user_session");
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("wrap auth provider to use its value");
  return context;
};

