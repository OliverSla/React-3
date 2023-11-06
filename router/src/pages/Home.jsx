import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return <section>
          <h3> Domov </h3>
    <ul>
        <li>Domov</li>
        <li> <Link to="/movies">Filmy</Link> </li>
        <li> <Link to="/serials">Seriály</Link> </li>
    </ul>
  </section>
};

export default Home;
