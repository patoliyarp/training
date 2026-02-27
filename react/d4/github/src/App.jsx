import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import UserContextProvider from "./context/UserContext.jsx";
import { Footer } from "./components/Footer.jsx";
import { UserNotfound } from "./components/UserNotFound.jsx";
import { ProtectedRoute } from "./components/auth/ProtectedRoute.jsx";
import User from "./components/User.jsx";
import { Login } from "./components/auth/Login.jsx";
import Loading from "./components/Loading.jsx";
// import { Profile } from "./components/Profile.jsx";
// import { AccessDenied } from "./components/AccessDenied.jsx";
// import { Notfound } from "./components/Notfound.jsx";

import { lazy, Suspense } from "react";

const Profile = lazy(() => import("./components/Profile.jsx"));
const AccessDenied = lazy(() => import("./components/AccessDenied.jsx"));
const Notfound = lazy(() => import("./components/Notfound.jsx"));

function App() {
  return (
    <>
      <Router>
        <UserContextProvider>
          <Header />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/notfound" element={<Notfound />} />
              <Route path="/login" element={<Login />} />
              <Route path="/noaccess" element={<AccessDenied />} />
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
          </Suspense>
          <Footer />
        </UserContextProvider>
      </Router>
    </>
  );
}

export default App;
