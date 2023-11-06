import React from 'react'
import { Link } from 'react-router-dom'

const Movies = () => {
  return (
    <section>
        <h3> Filmy </h3>
        <ul>
            <li> <Link to="/"> Domov </Link> </li>
            <li> Filmy </li>
            <li> <Link to="/serials"> Serialy </Link> </li>
        </ul>

    </section>
  )
}

export default Movies