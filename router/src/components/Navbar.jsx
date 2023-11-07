import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <Link to="/" > Domov </Link>
            <Link to="/movies" > Filmy </Link>
            <Link to="/serials" > Domov </Link>
        </ul>
    </nav>
  )
}

export default Navbar