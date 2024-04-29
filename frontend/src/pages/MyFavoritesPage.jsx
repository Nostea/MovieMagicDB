import { useEffect, useState } from "react";
import { backendUrl } from "../api/api";
import MovieCard from "../components/MovieCard";
import NavbarBackArrow from "../components/NavbarBackArrow";

const MyFavoritesPage = () => {
  const [movieFavorites, setMovieFavorites] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/api/v1/favorites`)
      .then((res) => res.json())
      .then((data) => {
        setMovieFavorites(data);
      })
      .catch((err) => console.error("Error while fetching", err));
  }, []);

  /*
  useEffect(() => {
    const emptyArray = [];
    movieFavorites.forEach((item) => {
      fetch(`${backendUrl}/api/v1/movies/${item.movieId}`)
        .then((res) => res.json())
        .then((data) => fetchMovieDetails(data._id));
      // ! an dieser Stelle
    });
  }, [movieFavorites]);
*/
  const fetchMovieDetails = (movieID) => {
    fetch(`${backendUrl}/api/v1/movies/${movieID.movieId}`);
  };

  return (
    <section className=" bg-deep-blue-1000 text-slate-50 flex flex-col gap-8 py-8 px-8 h-screen">
      <NavbarBackArrow />
      <h1>My Favorites</h1>
      <div className="grid grid-cols-2 gap-4">
        {movies.map((favoriteItem) => (
          <MovieCard
            movie={favoriteItem}
            key={favoriteItem._id}
            title={favoriteItem.title}
            poster={favoriteItem.poster}
            year={favoriteItem.year}
            rated={favoriteItem.rated}
            runtime={favoriteItem.runtime}
            director={favoriteItem.director}
            metacriticRating={favoriteItem.metacritic}
          />
        ))}
      </div>
    </section>
  );
};

export default MyFavoritesPage;
