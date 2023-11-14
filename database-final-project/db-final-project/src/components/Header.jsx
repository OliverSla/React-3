import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
  return (
    <header>
    <div className='logo_wrapper'> <Link to="/" className='logo'>Filmy.sk</Link></div>
        <nav>
            <NavLink to="/">Úvod</NavLink>
            <NavLink to="/allMovies">Filmy</NavLink>
        </nav>
    </header>
  )
}

export default Header