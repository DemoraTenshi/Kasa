import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import './Header.scss'
 
function Header() {
    return (

        <header className='header'>
            <img className='header__logo' src={logo} alt='Logo'/>
            <nav className='header__nav'>
                 <Link to="/" className='nav__link-home'>Accueil</Link>
                 <Link to="/about" className='nav__link-about'>A propos</Link>
            </nav>
        </header>
    )
}

export default Header