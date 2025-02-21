import React from 'react'

// Importing 'Link' from 'react-router' to enable client-side navigation
import { Link } from 'react-router'

// Navbar Component: A simple navigation bar with links to different pages
const Navbar = () => {
    return (
        <nav>
            // Link component replaces traditional anchor(a) tags for seamless navigation 
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}

export default Navbar