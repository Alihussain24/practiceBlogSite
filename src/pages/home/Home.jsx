import "./home.css";
import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/SideBar";
import Posts from "../../components/posts/Posts";
const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
};
export default Home;
