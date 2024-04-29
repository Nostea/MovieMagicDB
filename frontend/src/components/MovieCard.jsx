import { Link } from "react-router-dom";

const MovieCard = ({ movie, poster, title, id, year, rated, runtime, director, metacriticRating, genre }) => {
  const addDefaultImg = (ev) => {
    ev.target.src = "/img/Placeholder_poster.jpg";
  };
  return (
    <article className="flex flex-col bg-white rounded-md shadow-md bg-violet-800 bg-opacity-30 text-slate-50 overflow-hidden">
      {poster ? (
        <img src={poster?.replace("http://", "https://")} alt="movie cover" onError={addDefaultImg} className=" w-full" />
      ) : (
        <img src="/img/Placeholder_poster.jpg" alt="placeholder" />
      )}
      <div className="px-6 py-4">
        <h3 className=" text-2xl font-extrabold pb-4">{title}</h3>
        <p className=" text-violet-300 opacity-80 pb-4">
          {director} / {year} / {rated} / {runtime}min
        </p>
        <p className=" text-violet-200">Metacritic: {metacriticRating}</p>
        <div className=" hover:text-violet-400 text-mint-400">
          <Link to={`/movies/${movie._id}`}>More Details</Link>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
