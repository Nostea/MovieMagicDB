import { useEffect, useState } from "react";
import { backendUrl } from "../api/api";
import { useParams } from "react-router-dom";
import FavoriteThis from "../components/FavoriteThis";
import NavbarBackArrow from "../components/NavbarBackArrow";

const MovieDetailpage = () => {
  const [movie, setMovie] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetch(`${backendUrl}/api/v1/movies/${movieId}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => {
        console.log(err);
      });
  }, []); // depenency array leer
  console.log(movie);
  /* 
  //! snippet für genre
  {movie.genre.map((genreItem, index) => (
              <span className="py-1 px-2 bg-mint-300" key={index}>
                {genreItem}
              </span>
            ))}
*/

  const addDefaultImg = (ev) => {
    ev.target.src = "/img/Placeholder_poster.jpg";
  };

  if (!movie) return <p className=" text-slate-50">Loading...</p>;
  else
    return (
      <>
        <div className="py-2 px-8 bg-deep-blue-1000">
          <NavbarBackArrow />
        </div>

        <section className=" bg-deep-blue-1000 text-slate-50 flex flex-row gap-8 py-8 px-8 h-screen">
          <div className="">
            {movie.poster ? (
              <img src={movie?.poster.replace("http://", "https://")} alt="movie cover" onError={addDefaultImg} className="rounded min-w-60" />
            ) : (
              <img src="/img/Placeholder_poster.jpg" alt="placeholder" className=" rounded-l" />
            )}
          </div>
          <div className="flex flex-col justify-start py-8">
            <div className="flex flex-row justify-between content-center">
              <h1 className=" text-3xl pb-4">{movie.title}</h1>
              <FavoriteThis movieId={movie._id} movieTitle={movie.title} />
            </div>

            <p className="pb-2 text-violet-300 font-light">
              {movie.director} / {movie.year} / {movie.rating} / {movie.runtime}min
            </p>
            <p className="pb-6 font-light">{movie.plot}</p>

            <div className="flex flex-row gap-4 opacity-60 font-light pb-4">
              {movie?.actors?.map((actorItem, index) => (
                <p key={index}>{actorItem}</p>
              ))}
            </div>

            <div className="flex flex-row gap-2 pb-8">
              {movie?.genres?.map((genreItem, index) => (
                <span className="py-1 px-2 border-mint-200 border-2 rounded-lg" key={index}>
                  {genreItem}
                </span>
              ))}
            </div>
            <div className="pb-8">
              <p>Metacritic:</p>
              <p className=" text-3xl font-semibold text-mint-300 py-4">80</p>
            </div>
          </div>
        </section>
      </>
    );
};

export default MovieDetailpage;
