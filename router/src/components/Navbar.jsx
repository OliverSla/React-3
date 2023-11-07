import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <NavLink to="/" className={ ({isActive}) => 
            isActive ? "active__link link" : "non__active__link" } > Domov </NavLink>
            <NavLink to="/movies" > Filmy </NavLink>
            <NavLink to="/serials" > Domov </NavLink>
        </ul>
    </nav>
  )
}

export default Navbar