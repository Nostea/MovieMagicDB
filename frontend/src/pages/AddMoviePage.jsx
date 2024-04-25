import { useState } from "react";
import { backendUrl } from "../api/api";

const AddMoviePage = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDuration, setMovieDuration] = useState();
  const [posterItem, setPosterItem] = useState("");
  const [yearItem, setYearItem] = useState();
  const [ratedItem, setRatedItem] = useState("");
  const [directorItem, setDirectorItem] = useState("");
  const [metacriticItem, setMetacriticItem] = useState();

  const addMovie = (e) => {
    e.preventDefault();

    const newMovieItem = {
      title: movieTitle,
      duration: movieDuration,
      poster: posterItem,
      year: yearItem,
      rated: ratedItem,
      director: directorItem,
      metacritic: metacriticItem,
    };
    set;

    fetch(`${backendUrl}/api/v1/movies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, duration, poster, year, rated, director, metacritic }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className=" bg-deep-blue-1000 text-slate-50">
      <h1>Add Movie page</h1>
      <p>hier formular für add page</p>
      <form>
        <input type="text" name="movieTitle" id="movieTitle" placeholder="Movie title" value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} />
        <input
          type="number"
          name="movieDuration"
          id="movieDuration"
          placeholder="Movie duration"
          value={movieDuration}
          onChange={(e) => setMovieDuration(e.target.value)}
        />
        <input type="text" name="poster" id="poster" placeholder="poster imdb URL" value={posterItem} onChange={(e) => setPosterItem(e.target.value)} />
        <input type="number" name="year" id="year" placeholder="year" value={yearItem} onChange={(e) => setYearItem(e.target.value)} />
        <input type="text" name="rated" id="rated" placeholder="Age rating" value={ratedItem} onChange={(e) => setRatedItem(e.target.value)} />
      </form>
    </div>
  );
};

export default AddMoviePage;
