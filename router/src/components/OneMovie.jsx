import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import allMovies from "../data/movieData";

const OneMovie = () => {
  console.log(useParams());

  const { movieID } = useParams();

  const oneSpecificMovie = allMovies.find((oneMovie) => {
    return oneMovie.id === parseInt(movieID)
  })

  const {id, title, age, tags, description, image} = oneSpecificMovie 

  return <div key={id}>

  <h1> {title} </h1>
  <img src={image} alt="" />
  <h5>{tags}</h5>
  <h6>{age}</h6>
  <p>{description}</p>


  </div>;
};

export default OneMovie;
