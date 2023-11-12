import { db } from "./firebase/config";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
   const unsubscribe = db.collection("movies").onSnapshot((snapshot) => {
        if (snapshot.empty) {
          setError("Žiadne filmy");
          setData([])
        } else {
          let result = [];
          snapshot.docs.forEach((oneMovie) => {
            result.push({ id: oneMovie.id, ...oneMovie.data() });
          });
          console.log(result);
          setData(result);
          setError(false)
        }
      }, (err) => {
        setError(err.message)
      })

      return () => {unsubscribe()}

  }, []);

  const deleteMovie = (id) => {
    db.collection("movies").doc(id).delete();
  };

  return (
    <div className="all_movies_wrapper">
      {error && <p className="error">{error}</p>}
      {data.map((oneMovie, index) => {
        return (
          <div className="movie_wrapper" key={oneMovie.id}>
            <h6>{index + 1}. film v poradí</h6>
            <h5>{oneMovie.minage}+</h5>
            <h1>{oneMovie.title}</h1>
            <h3>{oneMovie.time} min.</h3>
            <button onClick={() => deleteMovie(oneMovie.id)}>
              Zmazať film
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
