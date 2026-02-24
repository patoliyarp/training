import { createContext, useContext, useState } from "react";

const userContext = createContext();

export default function UserContextProvider({ children }) {
  // const [userData, setUserdata] = useState([]);
  const [ResponseUser, setResponseUser] = useState([]);

  const [error, setError] = useState(false);

  return (
    <userContext.Provider
      value={{ ResponseUser, setResponseUser, error, setError }}
    >
      {children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(userContext);
  return context;
}

// export { useUserContext };
