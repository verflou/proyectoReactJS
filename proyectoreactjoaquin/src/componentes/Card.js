import React from 'react';
import './card.css';

function Card({ imagenSrc, nombre }) {
    return (
    <div className="carta">
        <h1>Mi Carta Especial</h1>
        <img className='imagenCarta1' src={imagenSrc} alt={`Imagen de la carta de ${nombre}`} />
        <p>Milanesas con papas friitas</p>
        <p></p>
        <p>Con cariño,</p>
        <p>{nombre}</p>
    </div>
);
}

export default Card;
