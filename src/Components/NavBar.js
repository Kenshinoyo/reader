import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (

        <nav id="nav-bar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                
                <li>
                    <Link to="/reader">File Uploader</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;