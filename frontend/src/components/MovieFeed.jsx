import { useEffect, useState } from "react";
import { backendUrl } from "../api/api";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieFeed = () => {
  const [movies, setMovies] = useState([]);
  const [cardLimit, setCardLimit] = useState(50);
  useEffect(() => {
    fetch(`${backendUrl}/api/v1/movies`)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Error while fetching", err));
  }, []);

  return (
    <>
      <div className=" py-4 px-8">
        <div className="flex flex-row justify-between content-center">
          <h1 className=" text-xl uppercase text-slate-50 pb-4 font-bold">Movie Selection</h1>

          <Link to="/movies/add">
            <button className=" bg-violet-300 rounded-lg p-2">Add Movie</button>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {movies.slice(0, cardLimit).map((movieItem) => (
            <MovieCard
              movie={movieItem}
              key={movieItem._id}
              title={movieItem.title}
              poster={movieItem.poster}
              year={movieItem.year}
              rated={movieItem.rated}
              runtime={movieItem.runtime}
              director={movieItem.director}
              metacriticRating={movieItem.metacritic}
            />
          ))}
        </div>
        <button onClick={() => setCardLimit(cardLimit + 50)}>See More</button>
      </div>
    </>
  );
};

export default MovieFeed;
