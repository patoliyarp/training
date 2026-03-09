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
import ProfileLayout from "./components/ProfileLayout.jsx";
import { lazy, Suspense } from "react";
import ReposList from "./components/ReposList.jsx";
import { ErrorBoundary } from "react-error-boundary";
import SuspenseLoading from "./components/SuspenseLoading.jsx";
import UserProfilePage from "./components/UserProfilePage.jsx";
const Profile = lazy(() => import("./components/Profile.jsx"));
const Notfound = lazy(() => import("./components/Notfound.jsx"));

function App() {
  return (
    <>
      <Router>
        <UserContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/notfound" element={<Notfound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user-profile" element={<UserProfilePage />} />

            <Route path="repo" element={<ReposList />} />

            <Route
              path="profilelayout/:username"
              element={
                <ErrorBoundary fallback={<Notfound />}>
                  <ProfileLayout />
                </ErrorBoundary>
              }
            />
            {/* protected routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="user/:id" element={<User />} />
              <Route
                path="repo/:username"
                element={
                  <ErrorBoundary fallback={<Notfound />}>
                    <ReposList />
                  </ErrorBoundary>
                }
              />

              <Route
                path="/profile"
                element={
                  <Suspense fallback={<SuspenseLoading />}>
                    <Profile />
                  </Suspense>
                }
              />
            </Route>
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </UserContextProvider>
      </Router>
    </>
  );
}

export default App;
