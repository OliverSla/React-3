import React from "react";
import allMovies from "../data/movieData";
import { Link } from "react-router-dom";

const Movies = () => {
  return (
    <div>
      {allMovies.map((oneMovie) => {
        return (
          <div key={oneMovie.id}>
            <h2>{oneMovie.title}</h2>
            <img src={oneMovie.image} alt="" />
            <h4 className="tags">{oneMovie.tags}</h4>
            <p className="description">{oneMovie.description}</p>
            <Link to={`/all-movies/${oneMovie.id}`}> Zobraziť viac </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
