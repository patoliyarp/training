// import { useState } from 'react'
import { useThemeContext } from "./context/ThemeContext.ts";
import "./App.css";

function App() {
  const { theme, ToggleTheme } = useThemeContext();

  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <header className="p-4 shadow-md dark:shadow-none">
        <nav className="flex justify-between items-center max-w-4xl mx-auto">
          <h1 className="text-xl font-bold">Theme Toggle Demo</h1>
          {/* <ThemeToggleButton /> */}
        </nav>
      </header>
      <main className="p-4 max-w-4xl mx-auto">
        <button
          onClick={ToggleTheme}
          className=" dark:text-black text-white bg-slate-900 outline-none border-none dark:bg-slate-300 rounded-lg px-5 py-2 "
        >
          toggle{theme.theme === "light" ? "dark" : "light"}
        </button>
      </main>
    </div>
  );
}

export default App;
