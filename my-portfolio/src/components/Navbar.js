// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/" className="logo">MyPortfolio</Link>
            </div>
            <div className="nav-right">
                <Link to="/projects">Projects</Link>
                <Link to="/blog">Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;
