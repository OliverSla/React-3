import { db } from "./firebase/config";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    db.collection("movies")
      .get()
      .then((snapshot) => {
        console.log(snapshot);
        if (snapshot.empty) {
          setError("Žiadne filmy");
        } else {
          let result = [];
          snapshot.docs.forEach((oneMovie) => {
            result.push({ id: oneMovie.id, ...oneMovie.data() });
          });
          console.log(result);
          setData(result);
        }
      })
      .catch((err) => {
        setError(err.massage);
      });
  }, []);


const deleteMovie = (id) => {
   db.collection("movies").doc(id).delete(); 
  const newData = data.filter((oneMovie) => oneMovie.id !== id)
  setData(newData)
}

  return (
    <div className="all_movies_wrapper">
      {error && <p>{error}</p>}
      {data.map((oneMovie, index) => {
        return (
          <div className="movie_wrapper" key={oneMovie.id}>
            <h6>{index + 1}. film v poradí</h6>
            <h5>{oneMovie.minage}+</h5>
            <h1>{oneMovie.title}</h1>
            <h3>{oneMovie.time} min.</h3>
            <button onClick={() => deleteMovie(oneMovie.id)}>Zmazať film</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
