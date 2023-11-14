import React from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { useState, useEffect } from "react";

const OneMovie = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const { movieID } = useParams();

  useEffect(() => {
    db.collection("movies")
      .doc(movieID)
      .get()
      .then((myDoc) => {
        if (myDoc.exists) {
          setData(myDoc.data());
        } else {
          setError("Nenašiel sa film");
        }
      })
      .catch((err) => {
        setError("Nastala chyba: " + err.message);
      });
  }, []);

  return (
    <div className="oneMovie_wrapper">
      {error && <p>{error}</p>}
      <div className="oneMovie">
        <h1>{data.title}</h1>
        <p>{data.text}</p>
        <h4>Minimálny vek: {data.minage}</h4>
        <h5>Čas: {data.time}</h5>
      </div>
    </div>
  );
};

export default OneMovie;
