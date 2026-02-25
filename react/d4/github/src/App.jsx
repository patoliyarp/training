import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import UserContextProvider from "./context/UserContext.jsx";
import { Footer } from "./components/Footer.jsx";
import { Notfound } from "./components/Notfound.jsx";
import { Profile } from "./components/Profile.jsx";
import { UserNotfound } from "./components/UserNotFound.jsx";
import { ProtectedRoute } from "./components/auth/ProtectedRoute.jsx";
import User from "./components/User.jsx";
function App() {
  return (
    <>
      <Router>
        <UserContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/notfound" element={<Notfound />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="user/:id" element={<User />} />
            {/* <Main /> */}
            {/* <Notfound /> */}
            {/* <Profile /> */}

            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </UserContextProvider>
      </Router>
    </>
  );
}

export default App;
