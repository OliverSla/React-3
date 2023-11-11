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

  return <div>
    {error && <p>{error}</p>}
    {
      data.map((oneMovie) => {
        return(
          <div key={oneMovie.id}>
            <h1>{oneMovie.title}</h1>
            <h3>{oneMovie.time} min.</h3>
            <h5>{oneMovie.minage}+</h5>
           </div>
        )
      })
    }
  </div>;
};

export default App;
