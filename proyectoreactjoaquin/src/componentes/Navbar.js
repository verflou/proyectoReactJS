import React from 'react';
import './card.css';

function Navbar(props) {
    const logo = "https://cdn-icons-png.flaticon.com/128/1182/1182139.png";
    return (
        <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt='' />
                </div>
                <ul className="nav-list">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
    );
}

export default Navbar;


