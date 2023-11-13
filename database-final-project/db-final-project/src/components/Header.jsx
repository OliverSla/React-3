import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
  return (
    <header>
        <nav>
            <NavLink to="/">Úvod</NavLink>
            <NavLink to="/allMovies">Filmy</NavLink>
        </nav>
    </header>
  )
}

export default Header