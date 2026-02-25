import { useState } from "react";
import { userContext } from "./useUserContext.js";

export default function UserContextProvider({ children }) {
  // const [userData, setUserdata] = useState([]);
  const [ResponseUser, setResponseUser] = useState([]);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchBanner, setSearchBanner] = useState(true);

  return (
    <userContext.Provider
      value={{
        ResponseUser,
        setResponseUser,
        error,
        setError,
        loading,
        setLoading,
        searchBanner,
        setSearchBanner,
      }}
    >
      {children}
    </userContext.Provider>
  );
}

// export function useUserContext() {
//   const context = useContext(userContext);
//   return context;
// }

// export { useUserContext };
