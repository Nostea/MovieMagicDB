import express from "express";
import morgan from "morgan";
import cors from "cors";

import { MoviesDAO } from "./db-access/moviesDAO.js";
import { FavoritesDAO } from "./db-access/favoritesDAO.js";
import { ObjectId } from "mongodb";

const app = express();
app.use(express.static("data/images")); // für bilder anzeigen

app.use(morgan("dev"));
app.use(cors());
app.use(express.json()); // body parser

// app.get("/", (req, res) => res.json({ hello: "world" }));   //el trash

app.get("/api/v1/movies", (req, res) => {
  MoviesDAO.findAll()
    .then((movies) => res.json(movies))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not find all movies" });
    });
});

app.get("/api/v1/movies/:movieId", (req, res) => {
  const movieId = req.params.movieId;

  MoviesDAO.findById(movieId)
    .then(
      (foundMovie) => res.json(foundMovie ? { ...foundMovie } : {}) // { result: foundRecipe } | { error, message }
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not find movie " + movieId });
    });
});

app.post("/api/v1/movies", (req, res) => {
  const newMovie = req.body;
  /*  Ist dasselbe wie new Movie

  const newMovieAlternative = {
    title: req.body.title,
    runtime: req.body.runtime
  }    
  */
  MoviesDAO.createOne(newMovie)
    .then((addedMovie) => res.json(addedMovie || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not add new movie" });
    });
});

app.get("/api/v1/favorites", (req, res) => {
  FavoritesDAO.findAll()
    .then((favorites) => res.json(favorites))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not find favorites" });
    });
});

// add bewertung to rezept
app.post("/api/v1/favorites", (req, res) => {
  const newFavoriteData = {
    movieId: ObjectId.createFromHexString(req.body.movieId), // "663d000149af23e0230aaf39"
    title: req.body.title,
  };
  FavoritesDAO.createOne(newFavoriteData)
    .then((addedFavorite) => res.json(addedFavorite || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not add new favorite" });
    });
});

app.delete("/api/v1/favorites/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  FavoritesDAO.deleteOneByMovieId(movieId)
    .then((deletedFavorite) => res.json(deletedFavorite || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not remove favorite" });
    });
});

const PORT = 3006;
app.listen(PORT, () => console.log("Server listening at port", PORT));
