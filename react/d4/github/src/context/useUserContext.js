import { createContext, useContext } from "react";

export const userContext = createContext();

export function useUserContext() {
  const context = useContext(userContext);
  return context;
}
