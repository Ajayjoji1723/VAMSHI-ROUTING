import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
   
        <nav class="navbar navbar-expand-sm bg-light">

        
        <ul class="navbar-nav">
            <li class="nav-item">
            <Link class="nav-link"to="/home">Home</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/contact">Contact</Link>
            </li>
        </ul>

        </nav>
  )
}
