import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

function App() {
  return (
    <>
      <div className="app-container">
        <Sidebar></Sidebar>
        <div className="content">
          <Header></Header>
          <CreatePost></CreatePost>
          <PostList></PostList>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
