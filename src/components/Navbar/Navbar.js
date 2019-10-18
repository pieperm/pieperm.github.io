import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.scss';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link className="navbar-icon nav-link" to="/">MP</Link>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/posts">Posts</Link>
            </div>
            <div className="nav-right">
                <a target="_blank" rel="noopener noreferrer" className="nav-link" href="https://github.com/pieperm">GitHub</a>
            </div>
        </nav>
    );
}

export default Navbar