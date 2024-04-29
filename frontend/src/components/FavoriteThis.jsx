import { useEffect } from "react";
import { backendUrl } from "../api/api";
import HeartIcon from "./HeartIcon";

const FavoriteThis = ({ movieId, movieTitle }) => {
  const addToFavorites = () => {
    const favoriteRequestBody = {
      movieId: movieId,
      title: movieTitle,
    };

    fetch(`${backendUrl}/api/v1/favorites`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(favoriteRequestBody),
    });
  };

  return (
    <div className=" fill-mint-300 antialiased" onClick={addToFavorites}>
      <HeartIcon />
    </div>
  );
};

export default FavoriteThis;
