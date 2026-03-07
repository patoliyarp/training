import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header.jsx";
import { Main } from "./component/Main.jsx";
import Profile from "./component/Profile.jsx";
import Notfound from "./component/NotFound.jsx";
import Tanstack from "./component/Tanstack.jsx";
function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/notfound" element={<Notfound />} />
          <Route path="tanstack" element={<Tanstack />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
