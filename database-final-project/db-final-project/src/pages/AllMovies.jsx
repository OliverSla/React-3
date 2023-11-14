import React from "react";
import { db } from "../firebase/config";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const AllMovies = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    db.collection("movies")
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setError("Žiadne filmy v DB");
        } else {
          let result = [];
          snapshot.docs.forEach((oneMovie) => {
            result.push({
              id: oneMovie.id,
              ...oneMovie.data(),
            });
            setData(result);
          });
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className="movies">
      {error && <p>Nastala chyba, {error}</p>}

      {data.map((oneMovie) => {
        return (
          <div key={oneMovie.id}>
            <h2>{oneMovie.title}</h2>
            <Link to={`/oneMovie/${oneMovie.id}`}>Zobraziť film</Link>
          </div>
        );
      })}
    </div>
  );
};

export default AllMovies;
