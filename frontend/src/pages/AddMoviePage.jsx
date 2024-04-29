import { useState } from "react";
import { backendUrl } from "../api/api";
import NavbarBackArrow from "../components/NavbarBackArrow";

const AddMoviePage = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDuration, setMovieDuration] = useState();
  const [posterItem, setPosterItem] = useState("");
  const [yearItem, setYearItem] = useState();
  const [ratedItem, setRatedItem] = useState("");
  const [directorItem, setDirectorItem] = useState("");
  const [metacriticItem, setMetacriticItem] = useState();
  const [plotItem, setPlotItem] = useState("");
  const [genreItem, setGenreItem] = useState([]);

  const checkBoxSetter = (param) => {
    //console.log(param.target.checked, param.target.value);
    console.log(genreItem);
    if (param.target.checked === true) {
      setGenreItem([param.target.value, ...genreItem]);
    } else {
      setGenreItem(genreItem.filter((filteredItem) => filteredItem !== param.target.value));
    }
    console.log(genreItem);
  };

  const addMovie = (e) => {
    e.preventDefault();
    console.log(movieTitle);

    const movieRequestBody = {
      title: movieTitle,
      runtime: movieDuration,
      year: yearItem,
      director: directorItem,
      rated: ratedItem,
      genres: genreItem,
      metacritic: metacriticItem,
      poster: posterItem,
      plot: plotItem,
    };

    console.log(movieRequestBody);

    fetch(`${backendUrl}/api/v1/movies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movieRequestBody),
    });

    setMovieTitle("");
    setMovieDuration("");
    setYearItem(0);
    setDirectorItem("");
    setRatedItem("");
    setGenreItem([]);
    document.getElementById("drama").checked = false;
    document.getElementById("action").checked = false;
    setMetacriticItem(0);
    setPosterItem("");
    setPlotItem("");
  };

  return (
    <div className=" bg-deep-blue-1000 text-slate-50 h-screen py-4 px-10">
      <NavbarBackArrow />
      <h1 className=" text-5xl text-mint-400 uppercase font-black pb-4 pt-8">Add Movie</h1>
      <p className=" font-light pb-6"> Fill in information</p>
      <form className="flex flex-col gap-4 w-72">
        <input
          type="text"
          name="movieTitle"
          id="movieTitle"
          placeholder="Movie title"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          className="px-4 py-1 bg-slate-600 border-b-2 border-mint-400"
          required
        />
        <input
          type="number"
          name="movieDuration"
          id="movieDuration"
          placeholder="Movie duration"
          value={movieDuration}
          onChange={(e) => setMovieDuration(e.target.value)}
          className="px-4 py-1 bg-slate-600 border-b-2 border-mint-400"
          required
        />
        <input
          type="text"
          name="poster"
          id="poster"
          placeholder="poster imdb URL"
          value={posterItem}
          onChange={(e) => setPosterItem(e.target.value)}
          className="px-4 py-1 bg-slate-600 border-b-2 border-mint-400"
          required
        />
        <input
          type="text"
          name="director"
          id="director"
          placeholder="director"
          value={directorItem}
          onChange={(e) => setDirectorItem(e.target.value)}
          className="px-4 py-1 bg-slate-600 border-b-2 border-mint-400"
          required
        />
        <input
          type="number"
          name="year"
          id="year"
          placeholder="year"
          value={yearItem}
          onChange={(e) => setYearItem(e.target.value)}
          className="px-4 py-1 bg-slate-600 border-b-2 border-mint-400"
          required
        />
        <input
          type="text"
          name="rated"
          id="rated"
          placeholder="Age rating"
          value={ratedItem}
          onChange={(e) => setRatedItem(e.target.value)}
          className="px-4 py-1 bg-slate-600 border-b-2 border-mint-400"
          required
        />
        <div>
          <p className=" text-3xl text-slate-50">Select Genre</p>
          <input type="checkbox" id="drama" name="drama" value="Drama" onChange={(e) => checkBoxSetter(e)} />
          <label for="drama">Drama</label>
          <input type="checkbox" id="action" name="action" value="Action" onChange={(e) => checkBoxSetter(e)} />
          <label for="action">Action</label>
        </div>

        <input
          type="number"
          name="metacritic"
          id="metacritic"
          placeholder="metacritic score"
          value={metacriticItem}
          onChange={(e) => setMetacriticItem(e.target.value)}
          className="px-4 py-1 bg-slate-600 border-b-2 border-mint-400"
          required
        />

        <textarea
          placeholder="Teaser Summary of plot"
          value={plotItem}
          onChange={(e) => setPlotItem(e.target.value)}
          className="px-4 py-1 bg-slate-600 border-b-2 border-mint-400"
        ></textarea>
        <button
          onClick={addMovie}
          type="button"
          className=" transition border-2 border-mint-400 hover:bg-mint-600 hover:border-mint-600 px-4 py-2 w-28 rounded-lg"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddMoviePage;
