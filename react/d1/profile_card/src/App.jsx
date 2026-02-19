import { ProfileCard } from "./component/Profile_card";
function App() {

  return (
    <>
      <h1 className="text-2xl text-red-500"></h1>
      <ProfileCard
        avatar={"https://picsum.photos/300"}
        role={"Designer"}
        name={"John wick"}
      />
    </>
  );
}

export default App;
