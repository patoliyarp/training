import { ThemeContext } from "./ThemeContext.js";
import { useEffect, useReducer } from "react";

function ThemeContextProvider({ children }) {
  const loc = localStorage.getItem("theme");

  const initialState = {
    theme: loc || "dark",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ToggleTheme":
        return { ...state, theme: state.theme == "light" ? "dark" : "light" };
      default:
        return state;
    }
  };

  const [theme, dispatch] = useReducer(reducer, initialState);

  function ToggleTheme() {
    dispatch({ type: "ToggleTheme" });
  }

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme.theme === "dark") {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");

      root.classList.add("light");
    }
    localStorage.setItem("theme", theme.theme);
  }, [theme.theme]);

  return (
    <ThemeContext.Provider value={{ theme, dispatch, ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
