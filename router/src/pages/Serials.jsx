import React from 'react'
import { Link } from 'react-router-dom'

const Serials = () => {
  return (
    <section>
    <h3> Serialy </h3>
    <ul>
        <li> <Link to="/"> Domov </Link> </li>
        <li> <Link to="/movies"> Filmy </Link> </li>
        <li> Serialy </li>
    </ul>


</section>
  )
}

export default Serials