import { useState } from "react";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const [isLogin, setIsLogin] = useState(true);
  if (isLogin) {
    return children;
  }
  return <Navigate to="/" />;
  //   return isLogin ? children : <Navigate to="/" />;
}
