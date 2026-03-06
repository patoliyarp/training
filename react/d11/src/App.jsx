import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { UserProfile } from "./component/UserProfile.jsx";
import Header from "./component/Header.jsx";
import { Main } from "./component/Main.jsx";
import Profile from "./component/Profile.jsx";
import Notfound from "./component/NotFound.jsx";
function App() {
  // const [count, setCount] = useState(0)
  // const count = useSelector((state) => state.counter.value);
  // const user = useSelector((state) => state.user.user);
  // const dispatch = useDispatch();

  // const [userId, setUserId] = useState(0);
  // function handleChange(e) {
  //   setUserId(e.target.value);
  //   // dispatch(fetchUserById(userId));
  // }
  // useEffect(() => {
  //   async function fetch() {
  //     await dispatch(fetchUserById(useId));
  //   }
  //   fetch();
  //   console.log("user :>> ", user);
  // }, [dispatch, user, userId]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/notfound" element={<Notfound />} />
        </Routes>
      </Router>
      {/* <input type="number" id="userid" value={userId} onChange={handleChange} /> */}
      {/* <button onClick={() => dispatch(increment())}>count is {count}</button> */}
      {/* <UserProfile /> */}
    </>
  );
}

export default App;
