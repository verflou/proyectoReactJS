import React from 'react';
import './card.css';

function Card(props) {
  const { imgUrl, titulo, descripcion, icons } = props;

  return (
    <div className='menu-container'>
      <div className='image-container'>
        <img src={imgUrl} alt='' />
      </div>
      <div className='card-content'>
        <div className='card-title'>
          <h3>{titulo}</h3>
        </div>
        <div className='card-descripcion'>
          <p>{descripcion}</p>
        </div>
      </div>
      <h4 className='title-ingredientes'>Ingredientes</h4>
      <div className='card-icons'>
        <div className='card-icon'>
          {icons.map((iconUrl, index) => (
            <img src={iconUrl} alt={`Icon ${index + 1}`} key={index} />
          ))}
        </div>             
      </div>
    </div>
  );
}

export default Card;
