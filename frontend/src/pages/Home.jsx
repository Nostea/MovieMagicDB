import { Link } from "react-router-dom";
import AddMoviePage from "./AddMoviePage";
import MovieFeed from "../components/MovieFeed";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className=" bg-deep-blue-1000">
      <Navbar />
      <MovieFeed />
    </div>
  );
};

export default Home;
