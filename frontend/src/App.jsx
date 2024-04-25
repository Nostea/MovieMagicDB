import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MovieDetailpage from "./pages/MovieDetailpage";
import AddMoviePage from "./pages/AddMoviePage";
import EditMoviePage from "./pages/EditMoviePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/add" element={<AddMoviePage />} />
          <Route path="/movies/edit" element={<EditMoviePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
