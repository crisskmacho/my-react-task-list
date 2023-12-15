import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export const NavBar = () => {
  return (
    <nav className='prueba'>
        <ul className='list'>
            <li className='custom-link'><Link to='/'>Home</Link></li>
            <li className='custom-link'><Link to='/tareas'>Tareas</Link></li>
            <li className='custom-link'><Link to='/sobre-nosotros'>Sobre Nosotros</Link></li>
        </ul>
    </nav>
  )
}
