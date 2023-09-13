import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import IntroPage from "./pages/Intro";
import ChatPage from "./pages/Chat";
import { directPage } from "./store/chats-slice";
import ExitPage from "./pages/Exit";

function App() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.chats.page);

  return (
    <div className="App">
      {page === "intro" && (
        <IntroPage onEnroll={() => dispatch(directPage("chats"))} />
      )}
      {page === "chats" && <ChatPage />}
      {page === "final" && <ExitPage />}
    </div>
  );
}

export default App;
