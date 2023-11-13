import { db } from "./firebase/config";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const [title, setTitle] = useState("");
  const [minage, setMinage] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const unsubscribe = db.collection("movies").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("Žiadne filmy");
          setData([]);
        } else {
          let result = [];
          snapshot.docs.forEach((oneMovie) => {
            result.push({ id: oneMovie.id, ...oneMovie.data() });
          });
          setData(result);
          setError(false);
        }
      },
      (err) => {
        setError(err.message);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const deleteMovie = (id) => {
    db.collection("movies").doc(id).delete();
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (title.length > 0 && minage && time) {
        const newMovie = {
          title: title,
          minage: minage,
          time: time,
        };

        await db.collection("movies").add(newMovie);
      } else {
        alert("Pole nesmie byť prázdne");
      }
    } catch(err){
      setError("Film nebol pridaný" + err.message)
    }

    setTitle("");
    setMinage("");
    setTime("");
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const minageHandler = (e) => {
    setMinage(e.target.value);
  };

  const timeHandler = (e) => {
    setTime(e.target.value);
  };

  return (
    <div className="all_movies_wrapper">
      {error && <p className="error">{error}</p>}
      <div className="inputMovie">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="title"
            onChange={titleHandler}
            value={title}
          />
          <input
            type="number"
            placeholder="minage"
            min="0"
            onChange={minageHandler}
            value={minage}
          />
          <input
            type="number"
            placeholder="time"
            min="0"
            onChange={timeHandler}
            value={time}
          />
          <input type="submit" value="Pridať film" />
        </form>
      </div>

      <div className="movies_wrapper">
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
    </div>
  );
};

export default App;
