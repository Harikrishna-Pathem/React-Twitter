import Logo from "./components/Logo";
import Navitems from "./components/Navitems";
import "./App.css";
import RightSide from "./components/Rightside";
import PostList from "./components/PostList";
import LoginButtons from "./components/LoginButtons";
import CreateTweet from "./components/CreateTweet";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import ChatPage from "./components/ChatPage";
import Bookmark from "./components/Bookmark";


function App() {
  const [tab, setTab] = useState("home");

  return (
    <>
      <PostListProvider>
        <div className="navbaritems">
          <Logo></Logo>
          <LoginButtons></LoginButtons>
        </div>
        <div className="content">
          <div className="sidebar">
            <Navitems tab={tab} setTab={setTab}></Navitems>
          </div>
          <div className="sections">
            {(tab === "home" && <PostList></PostList>) }
            {(tab === "notification" && <Notifications></Notifications>)}
            {(tab === "tweet") && <CreateTweet></CreateTweet>}
            {(tab === "profile") && <Profile></Profile>}
            {(tab === "chat") && <ChatPage></ChatPage>}
            {(tab === "bookmark") && <Bookmark></Bookmark>}
          </div>
          <div className="rightside">
            <RightSide></RightSide>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
