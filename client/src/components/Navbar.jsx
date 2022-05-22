import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div id="navbar">
        <div id="logo">
            Buildspace
        </div>
        <div id="nav-links">
            <a>Projects</a>
            <a>Community</a>
            <a>Work</a>
        </div>
        <Link id="nav-btn" to="/login">
            Get Started
        </Link>
    </div>
  )
}

export default Navbar