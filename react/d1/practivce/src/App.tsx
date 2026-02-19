// import { ProfileCard } from "./component/Profile_card.jsx";
import { ProfileCard } from "./component/Profile_card.js";
function App() {
  return (
    <>
      <ProfileCard
        avatar={"https://picsum.photos/300"}
        role={"Designer"}
        name={"John wick"}
      />
    </>
  );
}

export default App;
