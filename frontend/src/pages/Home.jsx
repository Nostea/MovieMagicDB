import { Link } from "react-router-dom";
import AddMoviePage from "./AddMoviePage";
import MovieFeed from "../components/MovieFeed";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className=" bg-deep-blue-1000">
      <Navbar />
      <MovieFeed />
      <Link to="/movies/add">
        <button className=" bg-slate-300 p-2">Add Movie</button>
      </Link>
    </div>
  );
};

export default Home;
