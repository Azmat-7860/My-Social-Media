import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Sidebar } from "../Components/SideBar";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { CreatePost } from "../Components/CreatePost";
import { PostList } from "../Components/PostList";
import { useState } from "react";
import { PostListProvider } from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  let [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="d-flex appContainer">
        <Sidebar setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
        <div className="MainContainer">
          <Header />
          <div className="mx-5 my-4 heroContainer">
            <Outlet />
            {/* {selectedTab === "Home" ? <PostList /> : <CreatePost />} */}
          </div>

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
