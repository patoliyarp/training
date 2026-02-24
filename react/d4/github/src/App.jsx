import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import UserContextProvider from "./context/UserContext.jsx";
import { Footer } from "./components/Footer.jsx";
import { Notfound } from "./components/Notfound.jsx";
function App() {
  return (
    <>
      <UserContextProvider>
        <Header />
        {/* <Main /> */}
        <Notfound />
        <Footer />
      </UserContextProvider>
    </>
  );
}

export default App;
