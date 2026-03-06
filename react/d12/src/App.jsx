import Todo_list from "./components/Todo_List.jsx";
import { ErrorBoundary } from "react-error-boundary";
import Notfound from "./components/NotFound.jsx";
function App() {
  return (
    <>
      <ErrorBoundary fallback={<Notfound />}>
        <Todo_list />
      </ErrorBoundary>
    </>
  );
}

export default App;
